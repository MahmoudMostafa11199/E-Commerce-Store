import { ReactNode } from 'react';
import Image from 'next/image';

function template({ children }: { children: ReactNode }) {
  return (
    <section className="pt-20 pb-36 h-[55rem]">
      <div className="relative h-full">
        <div className="hidden absolute w-1/2 h-full top-0 left-0 bg-[#CBE4E8] pt-6 md:block">
          <Image
            src="/beatsnoop.png"
            alt="beatsnoop"
            className="w-full h-full object-contain"
            width={400}
            height={650}
          />
        </div>

        <div className="container h-full flex justify-between items-center">
          <div className=""></div>

          <div className="w-1/3 py-20 ps-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default template;
