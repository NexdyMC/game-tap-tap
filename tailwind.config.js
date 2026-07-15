tailwind.config = {
    theme: {
        extend: {
            Colors: {
                // --- Warna Skema Neon Biru ---
                'neon-blue-start': '#0055ff', // Warna gradient dari image_1.png
                'neon-blue-end': '#00a3ff',   // Warna gradient dari image_1.png
                'electric-blue': '#00f2ff',   // Warna glow neon yang lebih terang (sesuai glow kotak image_1.png)

                // --- Warna Skema Neon Kuning ---
                'neon-yellow-start': '#eab308',
                'neon-yellow-end': '#ca8a04',
                'electric-yellow': '#facc15',
            },
            backgroundImage: {
                'striped-pattern': 'repeating-linear-gradient(45deg, #ffcc00, #ffcc00 20px, #000 20px, #444 40px)',
                'gradient-red': 'radial-gradient(circle at 30% 30%, #ff4d4d, #c0392b)',
                'screen-main': 'radial-gradient(circle at 50% 40%, #1e293b, #020617)',
                'screen-play': 'radial-gradient(circle at 50% 40%, #164e63, #020617)',
                'screen-end': 'radial-gradient(circle at 50% 40%, #365314, #020617)'
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
                'timer': '0 -16px 0 #444',
                '3d-blue': '0 6px 0 #0033aa, 0 12px 20px rgba(0, 85, 255, 0.4)',
                '3d-blue-hover': '0 6px 0 #0044cc, 0 12px 25px rgba(0, 255, 204, 0.5)',
                '3d-blue-active': '0 2px 0 #0033aa, 0 4px 10px rgba(0, 85, 255, 0.4)',
                
                // --- Definisi Shadow Neon 3D untuk Tombol Kuning ---
                '3d-yellow': '0 6px 0 #a16207, 0 12px 20px rgba(250, 204, 21, 0.5)',
                '3d-yellow-hover': '0 6px 0 #854d0e, 0 12px 25px rgba(250, 204, 21, 0.7)',
                '3d-yellow-active': '0 2px 0 #a16207, 0 4px 10px rgba(250, 204, 21, 0.5)',
                
                'green-300': '0 0 20px rgba(0, 255, 204, 0.3), inset 0 0 15px rgba(0, 255, 204, 0.2)',
                '3d-red': ' 0 20px 0 #8b0000, 0 12px 20px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(0, 0, 0, 0.2)',
                '3d-red-active': '0 0 0 #8b0000, 0 3px 5px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(0, 0, 0, 0.2)',
                'panel-cyan': '0 0 20px rgba(0, 255, 204, 0.3), inset 0 0 15px rgba(0, 255, 204, 0.2)',
                'cyan-focus': '0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc'
            },
            fontFamily: {
                'digital': ['Digital', 'sans-serif']
            }
        }
    }
}