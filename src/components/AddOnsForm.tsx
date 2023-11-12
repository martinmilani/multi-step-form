import {AddonList, AddonsProps} from "../types";

const addonsList: AddonList[] = [
  {addon: "Online service", price: 1, info: "Access to multiplayer games"},
  {addon: "Larger storage", price: 2, info: "Extra 1TB of cloud save"},
  {addon: "Customizable Profile", price: 2, info: "Custom theme on your profile"},
];

function AddonsForm({addons, monthly, updateFields}: AddonsProps) {
  return (
    <section className=" px-8 py-10">
      <h1 className="font-bold text-2xl text-Marine-blue lg:text-3xl">Pick add-ons</h1>
      <p className="text-Cool-gray font-regular text-base my-2">
        Add-ons help enhance your gaming experience.
      </p>
      <ul className="flex flex-col gap-4 mt-4 lg:mt-10">
        {addonsList.map((elem, index) => (
          <li key={elem.addon}>
            <input
              checked={addons[index].selected}
              className="sr-only peer"
              id={`custom-checkbox-${index}`}
              name={elem.addon}
              type="checkbox"
              value={elem.addon}
              onChange={(e) => {
                updateFields({
                  addons: addons.map((addon, i) => {
                    if (i === index) {
                      return {...addon, selected: e.target.checked};
                    }

                    return addon;
                  }),
                });
              }}
            />
            <label
              className="cursor-pointer flex flex-row justify-between items-center border rounded-lg gap-4 p-4  
              hover:border-Purplish-blue  peer-checked:border-Purplish-blue peer-checked:bg-Magnolia
              peer-focus:border-Purplish-blue lg:gap-1"
              htmlFor={`custom-checkbox-${index}`}
            >
              <div
                className={`relative w-6 h-6 border rounded-md  ${
                  addons[index].selected ? "bg-Purplish-blue" : "bg-White"
                }`}
              >
                <svg
                  className={`absolute top-[1px] left-0${
                    addons[index].selected ? "opacity-100" : "opacity-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="Interface / Check">
                      {" "}
                      <path
                        d="M6 12L10.2426 16.2426L18.727 7.75732"
                        id="Vector"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <div className="flex flex-row justify-between items-center w-[95%] ml-2: lg:ml-6">
                <div>
                  <h3 className="font-bold text-sm text-Marine-blue lg:text-lg">{elem.addon}</h3>
                  <p className="text-xs font-regular text-Cool-gray lg:text-base">{elem.info}</p>
                </div>
                <p className="text-sm font-regular text-Purplish-blue lg:text-base font-[500]">{`$${
                  monthly ? `${elem.price}/mo` : `${elem.price * 10}/yr`
                }`}</p>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AddonsForm;
