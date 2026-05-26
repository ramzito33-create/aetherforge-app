import React from 'react';
import { useApp } from '../AppContext';

export const Header: React.FC = () => {
  const { user } = useApp();

    return (
        <header className="backdrop-blur-md bg-black/20 border-b border-white/10 px-5 py-4 flex justify-between items-center sticky top-0 z-50">
              <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-white/20 animate-pulse">
                                {user.avatar}
                                        </div>
                                                <div>
                                                          <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold block">FORGER PROFILE</span>
                                                                    <span className="text-xs font-extrabold text-white tracking-wide bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                                                                {user.rank}
                                                                                          </span>
                                                                                                  </div>
                                                                                                        </div>
                                                                                                              
                                                                                                                    <div className="text-right">
                                                                                                                            <span className="text-[9px] text-slate-500 block font-medium">SYSTEM METRIC</span>
                                                                                                                                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                                                                                                                              ● ONLINE v1.2.0
                                                                                                                                                      </span>
                                                                                                                                                            </div>
                                                                                                                                                                </header>
                                                                                                                                                                  );
                                                                                                                                                                  };
                                                                                                                                                                  