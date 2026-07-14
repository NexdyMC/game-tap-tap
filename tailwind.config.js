tailwind.config = {
    theme: {
        extend: {
            colors: {
                'gradient-red': 'radial-gradient(circle at 30% 30%, #ff4d4d, #c0392b)'
            },
            animation: {
                'tap-pulse': 'tapPulse 0.3s ease-out',
                'score-up': 'scoreUp 0.2s ease-out',
            },
            keyframes: {
                tapPulse: {
                    '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0px rgba(59, 130, 246, 0.7)' },
                    '50%': { transform: 'scale(1.05)', boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)' },
                    '100%': { transform: 'scale(1)', boxShadow: '0 0 0 0px rgba(59, 130, 246, 0)' },
                },
                scoreUp: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)', color: '#22c55e' },
                    '100%': { transform: 'scale(1)', color: 'inherit' },
                }
            },
            boxShadow: {
                '3d-blue': '0 6px 0 #0033aa, 0 12px 20px rgba(0, 85, 255, 0.4)',
                '3d-blue-hover': '0 6px 0 #0044cc, 0 12px 25px rgba(0, 255, 204, 0.5)',
                '3d-blue-active': '0 2px 0 #0033aa, 0 4px 10px rgba(0, 85, 255, 0.4)',
                'green-300': '0 0 20px rgba(0, 255, 204, 0.3), inset 0 0 15px rgba(0, 255, 204, 0.2)',
                '3d-red': ' 0 20px 0 #8b0000, 0 12px 20px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(0, 0, 0, 0.2)',
                'panel-cyan': '0 0 20px rgba(0, 255, 204, 0.3), inset 0 0 15px rgba(0, 255, 204, 0.2)',
                'cyan-focus': '0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc'
            }
        }
    }
}