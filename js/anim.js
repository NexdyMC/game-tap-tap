
(function () {
    const canvas = document.getElementById('net');
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');
    let W, H, DPR;
    let points = [];
    let mouse = {
        x: null,
        y: null
    };

    const LINK_DIST = 170;
    const MOUSE_DIST = 200;

    function resize() {
        W = hero.clientWidth;
        H = hero.clientHeight;
        DPR = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = W * DPR;
        canvas.height = H * DPR;
        canvas.style.width = W + 'px';
        canvas.style.height = H + 'px';
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        initPoints();
    }

    function initPoints() {
        const count = Math.max(28, Math.round((W * H) / 26000));
        points = [];
        for (let i = 0; i < count; i++) {
            points.push({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.22,
                vy: (Math.random() - 0.5) * 0.22,
                r: Math.random() * 1.6 + 1.1
            });
        }
    }

    function step() {
        ctx.clearRect(0, 0, W, H);

        // update
        for (const p of points) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < -20) p.x = W + 20;
            if (p.x > W + 20) p.x = -20;
            if (p.y < -20) p.y = H + 20;
            if (p.y > H + 20) p.y = -20;
        }

        // links
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const a = points[i],
                    b = points[j];
                const dx = a.x - b.x,
                    dy = a.y - b.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < LINK_DIST) {
                    const alpha = (1 - dist / LINK_DIST) * 0.55;
                    ctx.strokeStyle =
                        `rgba(${getComputedStyle(document.documentElement).getPropertyValue('--line').trim()}, ${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.stroke();
                }
            }
            // link to mouse
            if (mouse.x !== null) {
                const dx = points[i].x - mouse.x,
                    dy = points[i].y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_DIST) {
                    const alpha = (1 - dist / MOUSE_DIST) * 0.5;
                    ctx.strokeStyle = `rgba(191,242,255, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(points[i].x, points[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }
            }
        }

        // nodes
        for (const p of points) {
            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
            grad.addColorStop(0, 'rgba(191,242,255,0.9)');
            grad.addColorStop(1, 'rgba(95,212,255,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#dff6ff';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        }

        requestAnimationFrame(step);
    }

    window.addEventListener('resize', resize);
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    resize();
    requestAnimationFrame(step);
})();
