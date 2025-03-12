import { redirect } from 'next/navigation';

// import Button from '@/components/Button';

function Account() {
  redirect('/Account/Profile');

  // return (
  //   <form className="col-span-12 md:col-span-8 shadow-lg px-10 py-8">
  //     <h3 className="font-[Poppins] font-medium text-xl text-primary-600 mb-4">
  //       Edit Your Profile
  //     </h3>
  //     <div className="flex flex-wrap justify-between gap-y-7">
  //       <div className="w-[45%] flex-shrink-0 space-y-2">
  //         <label className="text-sm" htmlFor="firstname">
  //           First Name
  //         </label>
  //         <input
  //           className="input"
  //           type="text"
  //           name="firstname"
  //           id="firstname"
  //           placeholder="Mahmoud"
  //         />
  //       </div>
  //       <div className="w-[45%] flex-shrink-0 space-y-2">
  //         <label className="text-sm" htmlFor="lastname">
  //           Last Name
  //         </label>
  //         <input
  //           className="input"
  //           type="text"
  //           name="lastname"
  //           id="lastname"
  //           placeholder="Elshahat"
  //         />
  //       </div>
  //       <div className="w-[45%] flex-shrink-0 space-y-2">
  //         <label className="text-sm" htmlFor="email">
  //           Email
  //         </label>
  //         <input
  //           className="input"
  //           type="email"
  //           name="email"
  //           id="email"
  //           placeholder="mahmoud@gmail.com"
  //         />
  //       </div>
  //       <div className="w-[45%] flex-shrink-0 space-y-2">
  //         <label className="text-sm" htmlFor="address">
  //           Address
  //         </label>
  //         <input
  //           className="input"
  //           type="text"
  //           name="address"
  //           id="address"
  //           placeholder="Kingston, 5236, United State"
  //         />
  //       </div>
  //       <div className="space-y-3">
  //         <label className="text-sm" htmlFor="password">
  //           Password Changes
  //         </label>
  //         <input
  //           className="input"
  //           type="password"
  //           name="password"
  //           id="password"
  //           placeholder="Current Password"
  //         />
  //         <input className="input" type="password" placeholder="New Password" />
  //         <input
  //           className="input"
  //           type="password"
  //           placeholder="Confirm New Password"
  //         />
  //       </div>
  //       <div className="w-full text-right space-x-8">
  //         <button type="reset">Cancel</button>
  //         <Button type="primary">Save Changes</Button>
  //       </div>
  //     </div>
  //   </form>
  // );
}

export default Account;
