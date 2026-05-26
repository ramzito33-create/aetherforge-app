import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
    variant?: 'blue' | 'purple' | 'cyan' | 'danger';
      fullWidth?: boolean;
      }

      export const GlowButton: React.FC<GlowButtonProps> = ({ 
        children, 
          variant = 'blue', 
            fullWidth = false, 
              className = '', 
                ...props 
                }) => {
                  const variants = {
                      blue: 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] border-blue-400/30',
                          purple: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border-purple-400/30',
                              cyan: 'bg-cyan-600 hover:bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(6,182,212,0.4)] border-cyan-400/30',
                                  danger: 'bg-red-950/40 hover:bg-red-900/50 text-red-400 border-red-500/30'
                                    };

                                      return (
                                          <button 
                                                className={`
                                                        px-4 
                                                                py-3 
                                                                        rounded-xl 
                                                                                border 
                                                                                        font-medium 
                                                                                                transition-all 
                                                                                                        duration-200 
                                                                                                                active:scale-95 
                                                                                                                        disabled:opacity-40 
                                                                                                                                disabled:pointer-events-none
                                                                                                                                        flex 
                                                                                                                                                items-center 
                                                                                                                                                        justify-center 
                                                                                                                                                                gap-2
                                                                                                                                                                        ${variants[variant]} 
                                                                                                                                                                                ${fullWidth ? 'w-full' : ''} 
                                                                                                                                                                                        ${className}
                                                                                                                                                                                              `}
                                                                                                                                                                                                    {...props}
                                                                                                                                                                                                        >
                                                                                                                                                                                                              {children}
                                                                                                                                                                                                                  </button>
                                                                                                                                                                                                                    );
                                                                                                                                                                                                                    };
                                                                                                                                                                                                                    