type PersonalInfoProps = {
  name: string;
  email: string;
  phone: string;
};

function PersonalInfoForm({name, email, phone}: PersonalInfoProps) {
  return (
    <section className=" px-8 py-10">
      <h1 className="font-bold text-2xl text-Marine-blue">Personal Info</h1>
      <p className="text-Cool-gray font-regular text-md my-2">
        Please provide your name, email address, and phone number.
      </p>
      <div className="flex flex-col gap-4 mt-4">
        <div className="flex flex-col">
          <label className="text-sm text-Marine-blue" htmlFor="name">
            Name
          </label>
          <input
            autoFocus
            required
            className="border cursor-pointer rounded-md px-3 py-2 font-medium placeholder-Cool-gray focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue"
            placeholder="e.g. Stephen King"
            type="text"
            value={name}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-Marine-blue" htmlFor="email">
            Email Address
          </label>
          <input
            required
            className="border rounded-md px-3 py-2 font-medium placeholder-Cool-gray focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            value={email}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm text-Marine-blue" htmlFor="phone">
            Phone Number
          </label>
          <input
            required
            className="border rounded-md px-3 py-2 font-medium placeholder-Cool-gray focus-visible:outline-none focus:border-Purplish-blue hover:border-Purplish-blue"
            placeholder="e.g. +1 234 567 890"
            type="text"
            value={phone}
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalInfoForm;
