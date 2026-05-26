import React from 'react';
import { useApp } from '../AppContext';
import { TabType } from '../types';

export const BottomNavBar: React.FC = () => {
  const { activeTab, setActiveTab } = useApp();

    const navItems: { id: TabType; label: string; icon: string }[] = [
        { id: 'dashboard', label: 'Vortex Hub', icon: '🪐' },
            { id: 'invest', label: 'Overclock', icon: '⚡' },
                { id: 'referral', label: 'Network', icon: '👥' },
                    { id: 'wallet', label: 'Bridge', icon: '💎' }
                      ];

                        return (
                            <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-t border-white/10 px-4 py-2 flex justify-around items-center pb-safe">
                                  {navItems.map((item) => {
                                          const isActive = activeTab === item.id;
                                                  return (
                                                            <button
                                                                        key={item.id}
                                                                                    onClick={() => setActiveTab(item.id)}
                                                                                                className="flex flex-col items-center justify-center py-1 flex-1 relative transition-all duration-200"
                                                                                                          >
                                                                                                                      {/* إضاءة خلفية نيون ناعمة خلف الأيقونة النشطة */}
                                                                                                                                  {isActive && (
                                                                                                                                                <span className="absolute -top-2 w-8 h-1 bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-fade-in" />
                                                                                                                                                            )}
                                                                                                                                                                        <span className={`text-lg mb-0.5 transition-transform duration-200 ${isActive ? 'scale-125 filter drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' : 'opacity-60'}`}>
                                                                                                                                                                                      {item.icon}
                                                                                                                                                                                                  </span>
                                                                                                                                                                                                              <span className={`text-[10px] font-medium tracking-wide transition-colors ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                                                                                                                                                                                                                            {item.label}
                                                                                                                                                                                                                                        </span>
                                                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                })}
                                                                                                                                                                                                                                                                    </nav>
                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                      };
                                                                                                                                                                                                                                                                      