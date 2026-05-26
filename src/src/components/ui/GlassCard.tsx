import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
    className?: string;
      glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
      }

      export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', glowColor = 'none' }) => {
        const glowStyles = {
            blue: 'shadow-[0_0_30px_rgba(59,130,246,0.15)] border-blue-500/20',
                purple: 'shadow-[0_0_30px_rgba(168,85,247,0.15)] border-purple-500/20',
                    cyan: 'shadow-[0_0_30px_rgba(6,182,212,0.15)] border-cyan-500/20',
                        none: 'border-white/10 shadow-black/40'
                          };

                            return (
                                <div className={`
                                      backdrop-blur-xl 
                                            bg-gradient-to-br from-white/10 to-white/5 
                                                  border 
                                                        rounded-2xl 
                                                              p-5 
                                                                    shadow-2xl 
                                                                          transition-all 
                                                                                duration-300 
                                                                                      ${glowStyles[glowColor]} 
                                                                                            ${className}
                                                                                                `}>
                                                                                                      {children}
                                                                                                          </div>
                                                                                                            );
                                                                                                            };
                                                                                                            