import { QuoteIcon } from "lucide-react";
import React from "react";

const Quote = () => {
  return (
    <section
      id="quote"
      className="w-full mt-72 md:mt-0 h-[40vh] flex justify-center items-center"
    >
      <div className="w-full overflow-hidden relative bg-secondary rounded-full lg:w-11/12 xl:w-[60%] h-full flex justify-center items-center">
        <div className=" absolute opacity-10">
          <QuoteIcon size={100} />
        </div>
        <blockquote className="text-2xl md:text-3xl skew-x-3 font-semibold tracking-widest text-center p-10">
          &quot;Lorem ipsum dolor sit, amet consectetur adipisicing eli. Rerum
          exercitationem quia distinctio, at iusto temporibus!&quot;
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
