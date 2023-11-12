import {useState} from "react";

import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlanForm";
import {useMultistepForm} from "./useMultistepForm";
import AddonsForm from "./components/AddOnsForm";
import {Errors, FormData} from "./types";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: {name: "Arcade", price: 9},
  monthly: true,
  addons: [
    {name: "Online service", price: 1, selected: false},
    {name: "Larger storage", price: 2, selected: false},
    {name: "Customizable Profile", price: 2, selected: false},
  ],
};

const stepList = [
  {title: "Step 1", subtitle: "Your info"},
  {title: "Step 2", subtitle: "Select plan"},
  {title: "Step 3", subtitle: "Add-ons"},
  {title: "Step 4", subtitle: "Summary"},
];

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

  const {currentStepIndex, step, isFirstStep, isLastStep, back, next, isSubmited} =
    useMultistepForm([
      <PersonalInfoForm {...data} errors={errors} updateFields={updateFields} />,
      <SelectPlanForm {...data} updateFields={updateFields} />,
      <AddonsForm {...data} updateFields={updateFields} />,
      <Summary {...data} updateFields={updateFields} />,
    ]);

  function handleNext() {
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

    // Set the errors state
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.keys(newErrors).length === 0) {
      next();
    }
  }

  const SideBar = () => {
    return (
      <aside className="hidden w-[270px] h-[580px] m-4 bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover rounded-lg pl-4 pt-3 lg:flex">
        <div className="flex w-full h-2/4">
          <ul className="flex justify-evenly flex-col w-full ml-4 ">
            {stepList.map((step, index) => {
              return (
                <li key={index} className="flex flex-row w-full items-center gap-4">
                  <div
                    className={`${
                      currentStepIndex === index
                        ? "bg-Light-blue text-Marine-blue border-none"
                        : "text-White"
                    } rounded-full border font-bold w-8 h-8 flex justify-center items-center  active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none `}
                  >
                    {index + 1}
                  </div>
                  <div className="">
                    <p className="text-Cool-gray text-xs">{step.title.toUpperCase()}</p>
                    <p className="font-bold text-sm text-Alabaster tracking-wider">
                      {step.subtitle.toUpperCase()}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
  };

  const TopBar = () => {
    return (
      <nav className="h-[170px] w-screen bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover lg:hidden">
        <div className="flex justify-center items-center h-full relative">
          <ul className="flex justify-evenly flex-row w-2/3 px-8 absolute top-10">
            {stepList.map((_step, index) => {
              return (
                <li key={index}>
                  <div
                    className={`${
                      currentStepIndex === index
                        ? "bg-Light-blue text-Marine-blue border-none"
                        : "text-White"
                    }  rounded-full border font-bold w-8 h-8 flex justify-center items-center  active:bg-Light-blue active:text-Marine-blue focus-visible:outline-none `}
                  >
                    {index + 1}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  };

  const FooterDesktop = () => {
    return (
      <footer
        className={` bg-White items-center px-6 pb-4 hidden lg:flex  ${
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
          className="px-4 py-2 font-medium rounded-md bg-Marine-blue text-White 
          hover:bg-Purplish-blue focus:bg-Purplish-blue focus-visible:outline-none
          lg:px-7 lg:py-3"
          onClick={handleNext}
        >
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </footer>
    );
  };

  const Footer = () => {
    return (
      <footer
        className={`w-screen h-[100px] bg-White flex  items-center px-6 lg:hidden ${
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
          onClick={handleNext}
        >
          {isLastStep ? "Confirm" : "Next Step"}
        </button>
      </footer>
    );
  };

  return (
    <section className="m-auto grid min-h-screen grid-rows-[auto,1fr,auto] justify-center bg-Magnolia lg:grid-rows-[auto]">
      <TopBar />
      <div className="w-full flex justify-center">
        <section className="bg-White w-[90%] min-w-[375px] h-auto rounded-xl absolute top-[100px] lg:max-w-[940px] lg:flex">
          <SideBar />
          {isSubmited ? (
            <>
              <Thanks />
            </>
          ) : (
            <div className="lg:flex lg:flex-col lg:my-4 lg:justify-between lg:w-7/12 lg:mx-auto">
              {step}
              <FooterDesktop />
            </div>
          )}
        </section>
      </div>
      {!isSubmited && <Footer />}
    </section>
  );
}

export default App;
