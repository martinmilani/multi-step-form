import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
function SelectPlanForm() {
  return (
    <section className=" px-8 py-10">
      <h1 className="font-bold text-2xl text-Marine-blue">Select your plan</h1>
      <p className="text-Cool-gray font-regular text-md my-2">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <input
            className="sr-only peer"
            id="arcade_plan"
            name="plan_type"
            type="radio"
            value="arcade"
          />
          <label
            className="flex flex-row items-center border rounded-lg p-4  hover:border-Purplish-blue peer-checked:ring-Purplish-blue peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-Magnolia"
            htmlFor="arcade_plan"
          >
            <img alt="arcade icon" className="h-10 w-10" src={arcade} />
            <div className="ml-4 text-left">
              <h3 className="font-bold text-md text-Marine-blue">Arcade</h3>
              <p className="text-sm font-regular text-Cool-gray">$9/moo</p>
            </div>
          </label>
        </li>

        <li>
          <input
            className="sr-only peer"
            id="advanced_plan"
            name="plan_type"
            type="radio"
            value="advanced"
          />
          <label
            className="flex flex-row items-center border rounded-lg p-4 active:bg-Magnolia hover:border-Purplish-blue peer-checked:ring-Purplish-blue peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-Magnolia"
            htmlFor="advanced_plan"
          >
            <img alt="advanced icon" className="h-10 w-10" src={advanced} />
            <div className="ml-4 text-left">
              <h3 className="font-bold text-md text-Marine-blue">Advanced</h3>
              <p className="text-sm font-regular text-Cool-gray">$12/mo</p>
            </div>
          </label>
        </li>

        <li>
          <input className="sr-only peer" id="pro_plan" name="plan_type" type="radio" value="pro" />
          <label
            className="flex flex-row items-center border rounded-lg p-4 active:bg-Magnolia hover:border-Purplish-blue peer-checked:ring-Purplish-blue peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-Magnolia"
            htmlFor="pro_plan"
          >
            <img alt="pro icon" className="h-10 w-10" src={pro} />
            <div className="ml-4 text-left">
              <h3 className="font-bold text-md text-Marine-blue">Pro</h3>
              <p className="text-sm font-regular text-Cool-gray">$15/mo</p>
            </div>
          </label>
        </li>

        <div className="bg-Magnolia rounded-lg flex justify-center items-center p-3 mt-4">
          <span className="mr-3 text-sm font-medium text-Cool-gray">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" value="" />
            <div className="w-11 h-6 bg-Marine-blue  rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-Marine-blue" />
          </label>
          <span className="ml-3 text-sm font-medium text-Cool-gray">Yearly</span>
        </div>
      </ul>
    </section>
  );
}

export default SelectPlanForm;
