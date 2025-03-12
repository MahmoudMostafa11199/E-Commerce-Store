// import Link from 'next/link';
// import Image from 'next/image';
import { Icon } from '@iconify/react';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';

function Contact() {
  return (
    <>
      <Breadcrumb pageName="Contact" />

      <section className="pb-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-5 md:col-span-4 shadow-md px-8 py-10 space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-block bg-primary-700 rounded-full p-2 text-white">
                    <Icon icon="basil:phone-outline" width="28" height="28" />
                  </div>
                  <h4 className="text-lg font-semibold">Call To Us</h4>
                </div>
                <p className="mb-4 text-sm">
                  We are available 24/7, 7 days a week.
                </p>
                <p className="text-sm">Phone: +8801611112222</p>
              </div>
              <hr className="h-[0.1rem] bg-gray-500 rounded-full" />
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="inline-block bg-primary-700 rounded-full p-2 text-white">
                    <Icon icon="bytesize:mail" width="28" height="28" />
                  </div>
                  <h4 className="text-lg font-semibold">Write To Us</h4>
                </div>
                <p className="mb-4 text-sm">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="mb-4 text-sm">Emails: customer@exclusive.com</p>
                <p className="text-sm">Emails: Support@exclusive.com</p>
              </div>
            </div>

            <form className="col-span-12 sm:col-span-7 md:col-span-8 shadow-md px-6 py-10 flex flex-wrap justify-between gap-y-6 gap-x-2 items-start">
              <div className="relative w-full md:w-[48%] lg:w-[32%]">
                <input
                  name="name"
                  className="input peer"
                  type="text"
                  placeholder=""
                  required
                />
                <label htmlFor="name" className="label">
                  Your Name<span className="text-primary-600"> *</span>
                </label>
              </div>
              <div className="relative w-full md:w-[48%] lg:w-[32%]">
                <input
                  name="email"
                  className="input peer"
                  type="email"
                  placeholder=""
                  required
                />
                <label htmlFor="email" className="label">
                  Your Email<span className="text-primary-600"> *</span>
                </label>
              </div>
              <div className="relative w-full md:w-[49%] lg:w-[32%]">
                <input
                  name="phone-number"
                  className="input peer"
                  type="tel"
                  placeholder=""
                  required
                />
                <label htmlFor="phone-number" className="label">
                  Your Phone<span className="text-primary-600"> *</span>
                </label>
              </div>
              <div className="relative w-full">
                <textarea
                  name="message"
                  className="input peer"
                  placeholder=""
                  rows={8}
                ></textarea>
                <label htmlFor="message" className="label">
                  Your Message
                </label>
              </div>
              <div className="text-right w-full">
                <Button type="primary">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
