/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
            ],
              theme: {
                  extend: {
                        animation: {
                                'spin-slow': 'spin 12s linear infinite',
                                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                                              },
                                                    fontFamily: {
                                                            sans: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
                                                                  },
                                                                      },
                                                                        },
                                                                          plugins: [],
                                                                          }
                                                                           */