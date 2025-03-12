import Image from 'next/image';
import { Icon } from '@iconify/react';

import Employees from './Employees';

import Breadcrumb from '@/components/Breadcrumb';
import FeaturesSection from '@/components/FeaturesSection';
import { IconSale } from '@/utils/IconCustomize';

function About() {
  return (
    <>
      <Breadcrumb pageName="About" />

      <section className="pb-16">
        <div className="container">
          <div className="flex gap-20 items-center">
            <div className="w-full">
              <h2 className="headingSecondary text-5xl mb-8">Our Store</h2>
              <p className="mb-6">
                Launced in 2015, Exclusive is South Asia&apos;s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p>
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="w-full grow">
              <Image
                className="max-w-full"
                src="/two-african-females-holding-shopping-bags.png"
                alt="Portrait two african females holding shopping bags"
                width={600}
                height={667}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="stats py-14">
        <div className="container">
          <div className="flex justify-between gap-8">
            <div className="flex-[20%] text-center border-2 p-6 transition-all hover:bg-primary-600 hover:text-white">
              <p className="inline-block p-2 mb-2 border-8 rounded-full bg-black text-white">
                <Icon icon="iconoir:shop-four-tiles" width="28" height="28" />
              </p>
              <h4 className="text-2xl font-semibold mb-1">10.5k</h4>
              <p className="text-xs">Sallers active our site</p>
            </div>
            <div className="flex-[20%] text-center border-2 p-6 transition-all hover:bg-primary-600 hover:text-white">
              <p className="inline-block p-2 mb-2 border-8 rounded-full bg-black text-white">
                <IconSale />
              </p>
              <h4 className="text-2xl font-semibold mb-1">33k</h4>
              <p className="text-xs">Mopnthly Produduct Sale</p>
            </div>
            <div className="flex-[20%] text-center border-2 p-6 transition-all hover:bg-primary-600 hover:text-white">
              <p className="inline-block p-2 mb-2 border-8 rounded-full bg-black text-white">
                <Icon
                  icon="fluent:shopping-bag-28-regular"
                  width="28"
                  height="28"
                />
              </p>
              <h4 className="text-2xl font-semibold mb-1">45.5k</h4>
              <p className="text-xs">Customer active in our site</p>
            </div>
            <div className="flex-[20%] text-center border-2 p-6 transition-all hover:bg-primary-600 hover:text-white">
              <p className="inline-block p-2 mb-2 border-8 rounded-full bg-black text-white">
                <Icon
                  icon="healthicons:money-bag-outline"
                  width="28"
                  height="28"
                />
              </p>
              <h4 className="text-2xl font-semibold mb-1">25k</h4>
              <p className="text-xs">Anual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>

      <Employees />

      <FeaturesSection />
    </>
  );
}

export default About;
