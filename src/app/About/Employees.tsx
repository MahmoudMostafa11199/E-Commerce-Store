'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

import { employeesInfo } from './data';

type Event = {
  target: {
    classList: { contains: (className: string) => boolean };
    dataset: { slide: number };
  };
};

function Employees() {
  useEffect(() => {
    const dotContainer = document.querySelector('.dots') as HTMLElement;

    const activeDot = (slide: number) => {
      dotContainer.querySelectorAll('button').forEach((dot) => {
        dot.classList.remove('dot-active');
      });

      dotContainer
        .querySelector(`button[data-slide="${slide}"]`)
        .classList.add('dot-active');
    };

    const goToSlide = (e: Event) => {
      if (e.target.classList.contains('dots__dot')) {
        const dotTarget = e.target.dataset.slide;
        activeDot(dotTarget);
      }
    };

    activeDot(4);
    dotContainer.addEventListener('click', goToSlide);
    // cleanup function
    return () => {
      dotContainer.removeEventListener('click', goToSlide);
    };
  }, []);

  return (
    <section className="py-14">
      <div className="container">
        <div className="flex justify-between gap-6 mb-8 overflow-hidden">
          {employeesInfo.map((employee) => (
            <div className="slide flex-[33%] flex-shrink-0" key={employee.id}>
              <Image
                className="bg-gray-100 w-full h-[revert-layer] object-contain pt-6 mb-4 rounded-md"
                src={employee.img}
                alt={employee.name + ' image'}
                width={300}
                height={400}
              />
              <h4 className="text-2xl -tracking-tighter font-semibold mb-1">
                {employee.name}
              </h4>
              <p className="text-xs mb-4">{employee.department}</p>
              <ul className="flex gap-4">
                <li>
                  <Link href={employee.twitter} target="_blank">
                    <Icon
                      className="hover:text-gray-600"
                      icon="teenyicons:twitter-outline"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={employee.instagram} target="_blank">
                    <Icon
                      className="hover:text-gray-600"
                      icon="teenyicons:instagram-outline"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={employee.linkedin} target="_blank">
                    <Icon
                      className="hover:text-gray-600"
                      icon="ri:linkedin-line"
                      width={20}
                      height={20}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="dots flex justify-center gap-2">
          {employeesInfo.map((employee) => (
            <button
              key={employee.id}
              data-slide={employee.id}
              className="dots__dot w-2 h-2 bg-gray-400 rounded-full"
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Employees;
