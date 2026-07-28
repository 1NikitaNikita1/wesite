import React, { useEffect, useRef } from 'react';

interface GradientContainerProps {
    children?: React.ReactNode;
    colorBg1?: string;
    colorBg2?: string;
    color1?: string;
    color2?: string;
    color3?: string;
    color4?: string;
    color5?: string;
    colorInteractive?: string;
    circleSize?: string;
    blending?: React.CSSProperties['mixBlendMode'];
}

const parseColor = (color: string): string => {
    if (/^\d+,\s*\d+,\s*\d+/.test(color)) {
        return color;
    }

    if (color.startsWith('#')) {
        let hex = color.slice(1);

        if (hex.length === 3) {
            hex = hex
                .split('')
                .map((c) => c + c)
                .join('');
        }

        if (hex.length === 6 || hex.length === 8) {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return `${r}, ${g}, ${b}`;
        }
    }

    if (typeof document !== 'undefined') {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, 1, 1);
            const color_hex: any = ctx.getImageData(0, 0, 1, 1).data;
            return `${color_hex.r}, ${color_hex.g}, ${color_hex.b}`;
        }
    }

    return '0, 0, 0';
};

export const GradientContainer: React.FC<GradientContainerProps> = ({
    children,
    colorBg1 = '#fff',
    colorBg2 = '#fff',
    color1 = '220, 82, 134',
    color2 = '107, 74, 255',
    color3 = '100, 100, 255',
    color4 = '50, 160, 220',
    colorInteractive = '254, 190, 186',
    circleSize = '80%',
    blending = 'hard-light'
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null);

    const parsedColor1 = parseColor(color1);
    const parsedColor2 = parseColor(color2);
    const parsedColor3 = parseColor(color3);
    const parsedColor4 = parseColor(color4);
    const parsedColorInteractive = parseColor(colorInteractive);

    useEffect(() => {
        const interBubble = interactiveRef.current;
        if (!interBubble) return;

        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 50;
            curY += (tgY - curY) / 50;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        };

        const handleMouseMove = (event: MouseEvent) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            style={{
                width: 'auto',
                height: 'auto',
                // position: 'relative',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                pointerEvents: 'none',
                opacity: 0.5
            }}
        >
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');

        @keyframes moveInCircle {
          0% { transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes moveVertical {
          0% { transform: translateY(-50%); }
          50% { transform: translateY(50%); }
          100% { transform: translateY(-50%); }
        }

        @keyframes moveHorizontal {
          0% { transform: translateX(-50%) translateY(-10%); }
          50% { transform: translateX(50%) translateY(10%); }
          100% { transform: translateX(-50%) translateY(-10%); }
        }
      `}</style>

            <div
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    background: `linear-gradient(40deg, ${colorBg1}, ${colorBg2})`
                    // pointerEvents: 'none',
                    // zIndex: -1
                }}
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        mixBlendMode: 'soft-light',
                        opacity: 0.3
                    }}
                >
                    <filter id='noiseFilterBg'>
                        <feTurbulence type='fractalNoise' baseFrequency='0.6' stitchTiles='stitch' />
                    </filter>
                    <rect width='100%' height='100%' filter='url(#noiseFilterBg)' />
                </svg>

                <svg xmlns='http://www.w3.org/2000/svg' style={{ display: 'none' }}>
                    <defs>
                        <filter id='goo'>
                            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
                            <feColorMatrix
                                in='blur'
                                mode='matrix'
                                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                                result='goo'
                            />
                            <feBlend in='SourceGraphic' in2='goo' />
                        </filter>
                    </defs>
                </svg>

                <div
                    style={{
                        filter: 'url(#goo) blur(40px)',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {/* G1 */}
                    <div
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${parsedColor1}, 0.8) 0, rgba(${parsedColor1}, 0) 50%) no-repeat`,
                            mixBlendMode: blending,
                            width: circleSize,
                            height: circleSize,
                            top: `calc(50% - ${circleSize} / 2)`,
                            left: `calc(50% - ${circleSize} / 2)`,
                            transformOrigin: 'center center',
                            animation: 'moveVertical 30s ease infinite',
                            opacity: 1
                        }}
                    />

                    {/* G2 */}
                    <div
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${parsedColor2}, 0.8) 0, rgba(${parsedColor2}, 0) 50%) no-repeat`,
                            mixBlendMode: blending,
                            width: circleSize,
                            height: circleSize,
                            top: `calc(50% - ${circleSize} / 2)`,
                            left: `calc(50% - ${circleSize} / 2)`,
                            transformOrigin: 'calc(50% - 400px)',
                            animation: 'moveInCircle 20s reverse infinite',
                            opacity: 1,
                            willChange: 'transform'
                        }}
                    />

                    {/* G3 */}
                    <div
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${parsedColor3}, 0.8) 0, rgba(${parsedColor3}, 0) 50%) no-repeat`,
                            mixBlendMode: blending,
                            width: circleSize,
                            height: circleSize,
                            top: `calc(50% - ${circleSize} / 2 + 200px)`,
                            left: `calc(50% - ${circleSize} / 2 - 500px)`,
                            transformOrigin: 'calc(50% + 400px)',
                            animation: 'moveInCircle 40s linear infinite',
                            opacity: 1,
                            willChange: 'transform'
                        }}
                    />

                    {/* G4 */}
                    <div
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${parsedColor4}, 0.8) 0, rgba(${parsedColor4}, 0) 50%) no-repeat`,
                            mixBlendMode: blending,
                            width: circleSize,
                            height: circleSize,
                            top: `calc(50% - ${circleSize} / 2)`,
                            left: `calc(50% - ${circleSize} / 2)`,
                            transformOrigin: 'calc(50% - 200px)',
                            animation: 'moveHorizontal 40s ease infinite',
                            opacity: 0.7,
                            willChange: 'transform'
                        }}
                    />

                    <div
                        ref={interactiveRef}
                        style={{
                            position: 'absolute',
                            background: `radial-gradient(circle at center, rgba(${parsedColorInteractive}, 0.8) 0, rgba(${parsedColorInteractive}, 0) 50%) no-repeat`,
                            mixBlendMode: blending,
                            width: '100%',
                            height: '100%',
                            top: '-50%',
                            left: '-50%',
                            opacity: 0.7
                        }}
                    />
                </div>

                {children}
            </div>
        </div>
    );
};
