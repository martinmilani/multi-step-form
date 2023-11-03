import {FormEvent, useState} from "react";

import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlanForm";
import {useMultistepForm} from "./useMultistepForm";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const {currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <PersonalInfoForm {...data} />,
    <SelectPlanForm />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  return (
    <form
      className="m-auto grid min-h-screen grid-rows-[auto,1fr,auto] justify-center bg-Light-gray"
      onSubmit={onSubmit}
    >
      <aside className="h-[170px] w-screen bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
        <div className="flex justify-center items-center h-full relative">
          <ul className="flex justify-evenly flex-row w-2/3 px-8 absolute top-10">
            <li>
              <button
                className={`${
                  currentStepIndex + 1 === 1
                    ? "bg-Light-blue text-Marine-blue border-none"
                    : "text-White"
                } hover:border-2 cursor-pointer rounded-full border font-bold w-8 h-8 flex justify-center items-center  active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none focus:border-2`}
              >
                1
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentStepIndex + 1 === 2
                    ? "bg-Light-blue text-Marine-blue border-none"
                    : "text-White"
                } hover:border-2 cursor-pointer rounded-full border font-bold w-8 h-8 flex justify-center items-center active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none focus:border-2`}
              >
                2
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentStepIndex + 1 === 3
                    ? "bg-Light-blue text-Marine-blue border-none"
                    : "text-White"
                } hover:border-2 cursor-pointer rounded-full border font-bold w-8 h-8 flex justify-center items-center active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none focus:border-2`}
              >
                3
              </button>
            </li>
            <li>
              <button
                className={`${
                  currentStepIndex + 1 === 4
                    ? "bg-Light-blue text-Marine-blue border-none"
                    : "text-White"
                } hover:border-2 cursor-pointer rounded-full border font-bold w-8 h-8 flex justify-center items-center  active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none focus:border-2`}
              >
                4
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="w-full flex justify-center">
        <section className="container bg-White w-[90%] h-auto rounded-xl absolute top-[100px]">
          {step}
        </section>
      </div>
      <footer
        className={`w-screen h-[100px] bg-White flex  items-center px-6 ${
          currentStepIndex === 0 ? "justify-end" : "justify-between"
        }`}
      >
        {!isFirstStep && (
          <button
            className="py-2 font-medium text-Cool-gray hover:text-Purplish-blue focus:text-Purplish-blue focus-visible:outline-none border-none"
            onClick={back}
          >
            Go Back
          </button>
        )}
        <button
          className="px-4 py-2 font-medium rounded bg-Marine-blue text-White hover:bg-Purplish-blue focus:bg-Purplish-blue focus-visible:outline-none"
          type="submit"
        >
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </footer>
    </form>
  );
}

export default App;
