import { useEffect } from 'react';

export function useDotNavigation() {
  useEffect(() => {
    const dotContainer = document.querySelector('.dots') as HTMLElement;

    const goToSlide = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.classList.contains('dots__dot')) {
        const dotTarget = Number(target.dataset.slide);
        activeDot(dotTarget);
      }
    };

    const activeDot = (slide: number) => {
      const dots = dotContainer.querySelectorAll<HTMLButtonElement>('button');

      dots.forEach((dot) => {
        dot.classList.remove('dot-active');

        if (Number(dot.dataset.slide) === slide) {
          dot.classList.add('dot-active');
        }
      });
    };

    dotContainer.addEventListener('click', goToSlide);

    activeDot(4);

    // cleanup function
    return () => {
      dotContainer.removeEventListener('click', goToSlide);
    };
  }, []);
}
