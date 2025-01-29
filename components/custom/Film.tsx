import React from "react";

const Film = () => {
  return (
    <section className="w-full h-auto flex justify-center my-5 items-center">
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col">
        <div>
          <h2 className="text-4xl  font-bold my-2 text-center md:text-left">
            Tak wygląda moja praca!
          </h2>
        </div>
        <div className="flex justify-center">
          <video
            className="rounded-lg w-full"
            width={1000}
            height={500}
            muted
            autoPlay
            loop
          >
            <source src="/film.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Film;
