import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from database import get_or_create_user, update_user_balance, log_transaction, users_col, transactions_col

app = FastAPI(title="AetherForge Core API")

# تفعيل الـ CORS لتسمح لواجهة الـ UI بالاتصال بالسيرفر دون قيود متصفح
app.add_middleware(
    CORSMiddleware,
        allow_origins=["*"],  # في الإنتاج الفعلي يمكنك وضع رابط الـ Vercel الخاص بك هنا لزيادة الأمان
            allow_credentials=True,
                allow_methods=["*"],
                    allow_headers=["*"],
                    )

                    # نماذج البيانات المستقبلة (Pydantic Models)
                    class UserInitRequest(BaseModel):
                        telegram_id: int
                            username: str = None
                                first_name: str

                                class UpdateBalanceRequest(BaseModel):
                                    telegram_id: int
                                        amount: float

                                        @app.get("/")
                                        async def root():
                                            return {"status": "online", "engine": "AetherForge Premium Server"}

                                            @app.post("/api/user/init")
                                            async def init_user(data: UserInitRequest):
                                                """
                                                    نقطة اتصال لتهيئة بيانات المستخدم فور فتحه للتطبيق المصغر
                                                        """
                                                            try:
                                                                    user = await get_or_create_user(
                                                                                telegram_id=data.telegram_id,
                                                                                            username=data.username,
                                                                                                        first_name=data.first_name
                                                                                                                )
                                                                                                                        # تحويل كود الـ ObjectId الخاص بـ MongoDB إلى نص ليقبل الإرسال بـ JSON
                                                                                                                                user["_id"] = str(user["_id"])
                                                                                                                                        return user
                                                                                                                                            except Exception as e:
                                                                                                                                                    raise HTTPException(status_code=500, detail=str(e))

                                                                                                                                                    @app.post("/api/user/spin")
                                                                                                                                                    async def process_spin(data: UpdateBalanceRequest):
                                                                                                                                                        """
                                                                                                                                                            معالجة عملية عجلة الحظ وإضافة الجائزة مباشرة للـ Database الحقيقية
                                                                                                                                                                """
                                                                                                                                                                    try:
                                                                                                                                                                            await update_user_balance(data.telegram_id, data.amount)
                                                                                                                                                                                    tx = await log_transaction(
                                                                                                                                                                                                telegram_id=data.telegram_id,
                                                                                                                                                                                                            tx_type="Vortex Spin",
                                                                                                                                                                                                                        amount=data.amount,
                                                                                                                                                                                                                                    currency="AETH"
                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                    return {"success": True, "new_bonus": data.amount}
                                                                                                                                                                                                                                                        except Exception as e:
                                                                                                                                                                                                                                                                raise HTTPException(status_code=500, detail=str(e))

                                                                                                                                                                                                                                                                @app.get("/api/user/transactions/{telegram_id}")
                                                                                                                                                                                                                                                                async def get_tx_history(telegram_id: int):
                                                                                                                                                                                                                                                                    """
                                                                                                                                                                                                                                                                        جلب سجل الحركات المالية الحقيقي للمستخدم لعرضه في شاشة الـ Wallet
                                                                                                                                                                                                                                                                            """
                                                                                                                                                                                                                                                                                try:
                                                                                                                                                                                                                                                                                        cursor = transactions_col.find({"telegram_id": telegram_id}).sort("timestamp", -1).limit(20)
                                                                                                                                                                                                                                                                                                txs = await cursor.to_list(length=20)
                                                                                                                                                                                                                                                                                                        for tx in txs:
                                                                                                                                                                                                                                                                                                                    tx["_id"] = str(tx["_id"])
                                                                                                                                                                                                                                                                                                                            return txs
                                                                                                                                                                                                                                                                                                                                except Exception as e:
                                                                                                                                                                                                                                                                                                                                        raise HTTPException(status_code=500, detail=str(e))
                                                                                                                                                                                                                                                                                                                                        