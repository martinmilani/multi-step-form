import {useEffect, useState} from "react";

import {Addon, SummaryProps} from "../types";

function Summary({updateFields, plan, monthly, addons}: SummaryProps) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    function sumTotal() {
      let total = plan.price;

      addons.forEach((addon) => {
        if (addon.selected) {
          total += addon.price;
        }
      });
      setTotal(monthly ? total : total * 10);
    }
    sumTotal();
  }, [monthly, addons, plan.price]);

  return (
    <section className=" px-8 pt-10 pb-8">
      <h1 className="font-bold text-2xl text-Marine-blue lg:text-3xl"> Finishing up</h1>
      <p className="text-Cool-gray font-regular text-base my-2 ">
        Double-check everything looks OK before confirming.
      </p>
      <div className="p-4 bg-Alabaster rounded-lg lg:mt-8">
        <div className="flex flex-row justify-between items-center ">
          <div>
            <p className="text-Marine-blue font-semibold text-sm lg:text-base">
              {plan.name} ({monthly ? "Monthly" : "Yearly"})
            </p>
            <button
              className="text-Cool-gray font-regular text-sm underline lg:text-base"
              onClick={() => updateFields({monthly: !monthly})}
            >
              Change
            </button>
          </div>
          <p className="text-Marine-blue font-semibold text-sm lg:text-base">{`$${
            monthly ? `${plan.price}/mo` : `${plan.price * 10}/yr`
          }`}</p>
        </div>
        <div>
          <div className="w-full h-[1px] bg-Light-gray my-4" />
          <ul>
            {addons.map(
              (addon: Addon) =>
                addon.selected && (
                  <li key={addon.name} className="flex flex-row justify-between items-center my-2">
                    <p className="text-Cool-gray font-regular text-sm lg:text-base">{addon.name}</p>
                    <p className="font-regular text-Marine-blue text-sm lg:text-base">{`+$${
                      monthly ? `${addon.price}/mo` : `${addon.price * 10}/yr`
                    }`}</p>
                  </li>
                ),
            )}
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center ml-4 mt-5">
        <div className="flex flex-row ">
          <p className="text-Cool-gray font-regular text-sm mr-1 lg:text-base">Total</p>
          <p className="text-Cool-gray font-regular text-sm lg:text-base">{`(per ${
            monthly ? "Month" : "Year"
          })`}</p>
        </div>
        <div>
          <p className="font-semibold text-Purplish-blue text-base mr-4 lg:text-xl">{`$${total}/${
            monthly ? "mo" : "yr"
          }`}</p>
        </div>
      </div>
    </section>
  );
}

export default Summary;
