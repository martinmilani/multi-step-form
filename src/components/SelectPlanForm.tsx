import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import {PlanProps, PlanList} from "../types";

const plans: PlanList[] = [
  {plan: "Arcade", price: 9, img: arcade},
  {plan: "Advanced", price: 12, img: advanced},
  {plan: "Pro", price: 15, img: pro},
];

function SelectPlanForm({monthly, plan, updateFields}: PlanProps) {
  return (
    <section className=" px-8 pt-10 pb-5">
      <h1 className="font-bold text-2xl text-Marine-blue lg:text-3xl">Select your plan</h1>
      <p className="text-Cool-gray font-regular text-base my-2">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="flex flex-col gap-4 mt-4 lg:mt-10 lg:flex-row lg:gap-0 lg:justify-between">
        {plans.map((elem) => (
          <li key={elem.plan}>
            <input
              checked={plan.name === elem.plan}
              className="sr-only peer"
              id={elem.plan}
              name="plan_type"
              type="radio"
              value={elem.plan}
              onChange={(e) => {
                updateFields({
                  plan: {name: e.target.value, price: elem.price},
                });
              }}
            />
            <label
              className="flex flex-row items-center border rounded-lg p-4  
              hover:border-Purplish-blue peer-checked:ring-Purplish-blue 
              peer-checked:ring-1 peer-checked:border-transparent peer-checked:bg-Magnolia
              lg:w-[140px] lg:h-[160px] lg:flex-col lg:justify-between lg:items-start"
              htmlFor={elem.plan}
            >
              <img alt="arcade icon" className="h-10 w-10" src={elem.img} />
              <div className="ml-4 text-left lg:ml-0">
                <h3 className="font-bold text-base text-Marine-blue">{elem.plan}</h3>
                <p className="text-sm font-regular text-Cool-gray">
                  {`$${monthly ? `${elem.price}/mo` : `${elem.price * 10}/yr`}`}
                </p>
                {!monthly && <p className="text-sm font-regular text-Marine-blue">2 months free</p>}
              </div>
            </label>
          </li>
        ))}
      </ul>
      <div className="bg-Alabaster rounded-lg flex justify-center items-center p-3 my-4 ">
        <span className="mr-3 text-sm font-medium text-Cool-gray">Monthly</span>
        <label
          className="relative inline-flex items-center cursor-pointer
        focus-within:ring-4 focus-within:ring-offset-0 focus-within:ring-Pastel-blue focus-within:rounded-xl"
        >
          <input
            checked={!monthly}
            className="sr-only peer"
            type="checkbox"
            value=""
            onChange={() => {
              updateFields({monthly: !monthly});
            }}
          />
          <div
            className="w-11 h-6 bg-Marine-blue  rounded-full 
          peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-Marine-blue
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
        "
          />
        </label>
        <span className="ml-3 text-sm font-medium text-Cool-gray">Yearly</span>
      </div>
    </section>
  );
}

export default SelectPlanForm;
