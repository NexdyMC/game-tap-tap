        tailwind.config = {
            theme: {
                extend: {
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
                    }
                }
            }
        }