import React from 'react';

interface StatCardProps {
  label: string;
    value: string | number;
      icon: string;
        subText?: string;
          color?: 'blue' | 'purple' | 'cyan';
          }

          export const StatCard: React.FC<StatCardProps> = ({ label, value, icon, subText, color = 'blue' }) => {
            const iconColors = {
                blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
                    purple: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
                        cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                          };

                            return (
                                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-lg">
                                      <div className="flex flex-col">
                                              <span className="text-xs text-slate-400 font-medium mb-1">{label}</span>
                                                      <span className="text-xl font-bold text-white tracking-wide">{value}</span>
                                                              {subText && <span className="text-[10px] text-slate-500 mt-1">{subText}</span>}
                                                                    </div>
                                                                          <div className={`w-10 h-10 rounded-lg border flex items-center justify-center font-bold text-lg ${iconColors[color]}`}>
                                                                                  {icon}
                                                                                        </div>
                                                                                            </div>
                                                                                              );
                                                                                              };
                                                                                              