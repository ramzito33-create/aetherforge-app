import os
import asyncio
import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart
from aiogram.types import WebAppInfo, InlineKeyboardMarkup, InlineKeyboardButton

# إعدادات التسجيل والمراقبة للبوت
logging.basicConfig(level=logging.INFO)

# ⚠️ ضع توكن البوت الخاص بك هنا أو اتركه ليقرأ من بيئة العمل السحابية
BOT_TOKEN = os.getenv("BOT_TOKEN", "YOUR_BOT_TOKEN_HERE")

# هنا نضع رابط الـ Web App الخاص بك بعد رفعه (مثلاً على Vercel) لفتحه مباشرة داخل تلقرام
WEB_APP_URL = os.getenv("WEB_APP_URL", "https://your-vercel-web-app-link.vercel.app")

bot = Bot(token=BOT_TOKEN)
dp = Dispatcher()

@dp.message(CommandStart())
async def cmd_start(message: types.Message):
    """
        مستقبل أمر /start الفاخر ترحيباً بالمستخدم مع زر فتح تطبيق الـ Web App الزجاجي
            """
                user_name = message.from_user.first_name
                    
                        # تصميم رسالة ترحيبية مستقبلية تناسب ثيم الـ AetherForge
                            welcome_text = (
                                    f"🪐 *مرحباً بك يا {user_name} في AetherForge Node*\n\n"
                                            "⚡ نظام التعدين الكمي والاستثمار الذكي الأول على شبكة TON.\n"
                                                    "قم بفتح التطبيق المصغر الآن لبدء توليد الـ AETH واستخدام عجلة الحظ!"
                                                        )
                                                            
                                                                # إنشاء الزر السحري لفتح الـ Telegram Mini App مباشرة داخل الشات
                                                                    keyboard = InlineKeyboardMarkup(
                                                                            inline_keyboard=[
                                                                                        [
                                                                                                        InlineKeyboardButton(
                                                                                                                            text="🚀 Launch AetherForge APP",
                                                                                                                                                web_app=WebAppInfo(url=WEB_APP_URL)
                                                                                                                                                                )
                                                                                                                                                                            ],
                                                                                                                                                                                        [
                                                                                                                                                                                                        InlineKeyboardButton(text="👥 Network Clusters", callback_data="view_ref"),
                                                                                                                                                                                                                        InlineKeyboardButton(text="💎 TON Bridge", callback_data="view_bridge")
                                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                                            ]
                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                        # إرسال الرسالة بالصيغة الفاخرة (Markdown)
                                                                                                                                                                                                                                                            await message.answer_photo(
                                                                                                                                                                                                                                                                    photo="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600", # خلفية تكنولوجية مؤقتة
                                                                                                                                                                                                                                                                            caption=welcome_text,
                                                                                                                                                                                                                                                                                    parse_mode="Markdown",
                                                                                                                                                                                                                                                                                            reply_markup=keyboard
                                                                                                                                                                                                                                                                                                )

                                                                                                                                                                                                                                                                                                @dp.callback_query()
                                                                                                                                                                                                                                                                                                async def handle_callbacks(callback: types.CallbackQuery):
                                                                                                                                                                                                                                                                                                    """الرد السريع على أزرار التحكم الجانبية"""
                                                                                                                                                                                                                                                                                                        if callback.data == "view_ref":
                                                                                                                                                                                                                                                                                                                await callback.answer("🔗 قم بدعوة أصدقائك من داخل التطبيق المصغر لزيادة سرعة التعدين 10%!", show_alert=True)
                                                                                                                                                                                                                                                                                                                    elif callback.data == "view_bridge":
                                                                                                                                                                                                                                                                                                                            await callback.answer("💎 جسر المحاكاة التبادلي (TON Bridge) متاح بالكامل داخل واجهة التطبيق حالياً.", show_alert=True)

                                                                                                                                                                                                                                                                                                                            async def main():
                                                                                                                                                                                                                                                                                                                                print("⚡ AetherForge Core Engine Online (aiogram v3)...")
                                                                                                                                                                                                                                                                                                                                    await dp.start_polling(bot)

                                                                                                                                                                                                                                                                                                                                    if __name__ == "__main__":
                                                                                                                                                                                                                                                                                                                                        try:
                                                                                                                                                                                                                                                                                                                                                asyncio.run(main())
                                                                                                                                                                                                                                                                                                                                                    except (KeyboardInterrupt, SystemExit):
                                                                                                                                                                                                                                                                                                                                                            logging.info("Bot stopped!")
                                                                                                                                                                                                                                                                                                                                                            