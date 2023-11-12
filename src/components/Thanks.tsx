import thankyou from "../assets/images/icon-thank-you.svg";
function Thanks() {
  return (
    <section className=" px-8 pt-10 pb-8 flex flex-col items-center justify-center">
      <img alt="{thankyou}" className="w-16 h-16 mt-10 lg:w-20 lg:h-20" src={thankyou} />
      <h1 className="mt-8 font-bold text-2xl text-Marine-blue lg:text-3xl">Thank you!</h1>
      <p className="text-center font-[500] text-Cool-gray text-lg mt-3 mb-10 tracking-tight leading-normal px-1 lg:max-w-[500px]">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you
        ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </section>
  );
}

export default Thanks;
