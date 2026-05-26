import React from 'react';
import { AppProvider, useApp } from './AppContext';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { DashboardTab } from './tabs/DashboardTab';
import { InvestTab } from './tabs/InvestTab';
import { ReferralTab } from './tabs/ReferralTab';
import { WalletTab } from './tabs/WalletTab';

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-x-hidden selection:bg-cyan-500/30">
              {/* شبكة خلفية مستقبلية وخلفية نيون متوهجة ثلاثية الأبعاد متحركة */}
                    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
                                    <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/10 blur-[130px]" />
                                            <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-cyan-600/5 blur-[100px]" />
                                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                                                          </div>

                                                                {/* الهيكل التنظيمي للتطبيق */}
                                                                      <Header />
                                                                            
                                                                                  <main className="flex-1 overflow-y-auto px-4 pt-4 z-10 max-w-md mx-auto w-full">
                                                                                          {activeTab === 'dashboard' && <DashboardTab />}
                                                                                                  {activeTab === 'invest' && <InvestTab />}
                                                                                                          {activeTab === 'referral' && <ReferralTab />}
                                                                                                                  {activeTab === 'wallet' && <WalletTab />}
                                                                                                                        </main>

                                                                                                                              <BottomNavBar />
                                                                                                                                  </div>
                                                                                                                                    );
                                                                                                                                    };

                                                                                                                                    export default function App() {
                                                                                                                                      return (
                                                                                                                                          <AppProvider>
                                                                                                                                                <AppContent />
                                                                                                                                                    </AppProvider>
                                                                                                                                                      );
                                                                                                                                                      }
                                                                                                                                                      