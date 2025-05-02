import './style.css'

document.addEventListener('DOMContentLoaded', bootstrap);

function bootstrap() {
  document.querySelector<HTMLButtonElement>('button')?.addEventListener('hover', () => {
    import('canvas-confetti');
  });

  document.querySelector<HTMLButtonElement>('button')?.addEventListener('click', () => {
    import('canvas-confetti').then(({ default: confetti }) => {
      const defaults = {
        spread: 360,
        ticks: 70,
        gravity: 0,
        decay: 0.95,
        startVelocity: 30,
        colors: ["006ce9", "ac7ff4", "18b6f6", "713fc2", "ffffff"],
        origin: {
          x: 0.5 - Math.random() + Math.random(),
          y: 0.35 - Math.random() + Math.random(),
        },
      };
  
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 80,
          scalar: 1.2,
        });
  
        confetti({
          ...defaults,
          particleCount: 60,
          scalar: 0.75,
        });
      }
  
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
      setTimeout(shoot, 300);
      setTimeout(shoot, 400);
    });
  });  
}