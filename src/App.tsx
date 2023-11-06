import {useState} from "react";

import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlanForm";
import {useMultistepForm} from "./useMultistepForm";

const steps = [1, 2, 3, 4];

type FormData = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  planPrice: number;
  monthly: boolean;
};

type Errors = {
  [key: string]: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "Arcade",
  planPrice: 9,
  monthly: true,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [errors, setErrors] = useState<Errors>({});

  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {...prev, ...fields};
    });
  }

  const {currentStepIndex, step, isFirstStep, isLastStep, back, next} = useMultistepForm([
    <PersonalInfoForm {...data} errors={errors} updateFields={updateFields} />,
    <SelectPlanForm {...data} errors={errors} updateFields={updateFields} />,
  ]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Perform validation
    const newErrors: Errors = {};

    if (!data.name) {
      newErrors.name = "Name is required.";
    }
    if (!data.email) {
      newErrors.email = "Email is required.";
    } else if (!isValidEmail(data.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!data.phone) {
      newErrors.phone = "Phone is required.";
    }
    if (!data.plan) {
      newErrors.plan = "Please select a plan.";
    }

    // Set the errors state
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      next();
    }
  }

  return (
    <form
      className="m-auto grid min-h-screen grid-rows-[auto,1fr,auto] justify-center bg-Light-gray"
      onSubmit={onSubmit}
    >
      <aside className="h-[170px] w-screen bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
        <div className="flex justify-center items-center h-full relative">
          <ul className="flex justify-evenly flex-row w-2/3 px-8 absolute top-10">
            {steps.map((step) => {
              return (
                <li key={step}>
                  <div
                    className={`${
                      currentStepIndex + 1 === step
                        ? "bg-Light-blue text-Marine-blue border-none"
                        : "text-White"
                    }  rounded-full border font-bold w-8 h-8 flex justify-center items-center  active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none `}
                  >
                    {step}
                  </div>
                </li>
              );
            })}
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
          className="px-4 py-2 font-medium rounded-md bg-Marine-blue text-White hover:bg-Purplish-blue focus:bg-Purplish-blue focus-visible:outline-none"
          type="submit"
        >
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </footer>
    </form>
  );
}

export default App;
