import React from 'react';

import { Particle } from '@/services';
import type { RadiantParticleProps } from '@/types';

// Thanks ChatGPT for this component
const RadiantParticle: React.FC<RadiantParticleProps> = ({
  width,
  height,
  speed = 2,
  size = 2,
  numberOfParticles = 5,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const resizeCanvas = (): void => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Particle[] = [];

    const animate = (): void => {
      if (!canvas || !ctx) {
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw(ctx);
        if (particles[i].size < 0.5 || particles[i].opacity <= 0) {
          particles.splice(i, 1);
        }
      }
      requestAnimationFrame(animate);
    };

    const createParticles = (): void => {
      if (!canvas) {
        return;
      }
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle(centerX, centerY, size, speed));
      }
    };

    const interval = setInterval(createParticles, 100);
    animate();

    return (): void => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [width, height, size, speed, numberOfParticles]);

  return React.createElement('canvas', {
    ref: canvasRef,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      width,
      height,
    },
  });
};

export default React.memo(RadiantParticle);
