import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-auto flex justify-center items-center"
    >
      <div className="w-full lg:w-11/12 xl:w-[60%] h-full flex flex-col md:flex-row md:justify-between">
        <div className="w-full md:w-1/2 py-20">
          <h2 className="text-4xl font-bold ">O mnie</h2>
          <p className="my-3 tracking-widest px-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            aliquid illo, qui sequi numquam perferendis omnis, enim dicta,
            maxime deleniti commodi at minima tempora eligendi magnam nihil quas
            nesciunt consequuntur error. Blanditiis quos rem vero adipisci,
            totam dolore possimus iste, consequatur provident ut quas minima
            tenetur quibusdam excepturi enim quasi labore. Voluptatibus ipsam
            deserunt illum, earum reprehenderit cupiditate eaque ad?
          </p>
          <Link
            className="text-primary font-extrabold flex items-center gap-3"
            href={"/"}
          >
            Dowiedz się więcej <FaArrowRight />
          </Link>
        </div>
        <div className="w-full  md:w-1/2 xl:w-1/3">
          <img className="w-full rounded-2xl" src="/doktor.jpg" alt="doktor" />
        </div>
      </div>
    </section>
  );
};

export default About;
