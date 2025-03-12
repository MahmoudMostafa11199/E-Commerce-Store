import { Icon } from '@iconify/react';

function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-evenly gap-14">
          <div className="text-center">
            <Icon
              icon="hugeicons:delivery-truck-02"
              width="70"
              height="70"
              className="inline-block mb-4 p-3 bg-black text-white border-8 rounded-full border-gray-300"
            />
            <h4 className="font-semibold uppercase font-[Poppins] mb-1">
              Free and Fast delivery
            </h4>
            <p className="text-xs">Free delivery for all orders over $140</p>
          </div>
          <div className="text-center">
            <Icon
              icon="lsicon:service-outline"
              width="70"
              height="70"
              className="inline-block mb-4 bg-black p-3 text-white border-8 rounded-full border-gray-300"
            />
            <h4 className="font-semibold uppercase font-[Poppins] mb-1">
              24/7 Customer service
            </h4>
            <p className="text-xs">Friendly 24/7 customer support</p>
          </div>
          <div className="text-center">
            <Icon
              icon="f7:checkmark-shield"
              width="70"
              height="70"
              className="inline-block mb-4 bg-black p-3 text-white border-8 rounded-full border-gray-300"
            />
            <h4 className="font-semibold uppercase font-[Poppins] mb-1">
              Money back Guarantee
            </h4>
            <p className="text-xs">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
