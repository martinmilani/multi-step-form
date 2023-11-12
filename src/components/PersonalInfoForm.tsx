import {PersonalInfoProps} from "../types";

function PersonalInfoForm({name, email, phone, updateFields, errors}: PersonalInfoProps) {
  return (
    <section className=" px-8 py-10">
      <h1 className="font-bold text-2xl text-Marine-blue lg:text-3xl">Personal Info</h1>
      <p className="text-Cool-gray font-regular text-base my-3">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col gap-4 mt-4 lg:gap-8 lg:mt-12">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-2">
            <label
              className="text-sm text-Marine-blue lg:font-semibold lg:text-base"
              htmlFor="name"
            >
              Name
            </label>
            {errors.name && (
              <span className="text-Strawberry-red font-bold text-sm lg:text-base">
                {errors.name}
              </span>
            )}
          </div>
          <input
            className="border cursor-pointer rounded-md px-3 py-2 font-medium placeholder-Cool-gray  
            focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue
            text-Marine-blue"
            placeholder="e.g. Stephen King"
            type="text"
            value={name}
            onChange={(e) => {
              updateFields({name: e.target.value});
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-2">
            <label
              className="text-sm text-Marine-blue lg:font-semibold md_text-base"
              htmlFor="email"
            >
              Email Address
            </label>
            {errors.email && (
              <span className="text-Strawberry-red font-bold text-sm lg:text-base">
                {errors.email}
              </span>
            )}
          </div>
          <input
            className="border rounded-md px-3 py-2 font-medium text-Marine-blue placeholder-Cool-gray focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue"
            placeholder="e.g. stephenking@lorem.com"
            type="text"
            value={email}
            onChange={(e) => {
              updateFields({email: e.target.value});
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-2">
            <label
              className="text-sm text-Marine-blue lg:font-semibold lg:text-base"
              htmlFor="phone"
            >
              Phone Number
            </label>
            {errors.phone && (
              <span className="text-Strawberry-red font-bold text-sm lg:text-base">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            className="border rounded-md px-3 py-2 font-medium text-Marine-blue placeholder-Cool-gray 
            focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue"
            placeholder="e.g. +1 234 567 890"
            type="text"
            value={phone}
            onChange={(e) => {
              updateFields({phone: e.target.value});
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalInfoForm;
