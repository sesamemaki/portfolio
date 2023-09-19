"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { LuFileEdit } from "react-icons/lu";


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        My path to development was{" "}
        <span className="font-bold"> unconventional</span>. After studied
        biology and great volunteer works in related area, worked in a
        pharmaceutical company for 6 years. Then I listened to my inner voice, I{" "}
        <span className="font-bold">left my full time job</span> and started to
        learn front-end frameworks on my own.
      </p>
      <p className="mb-3">
        As a result of the self-development process, I was entitled to
        participate in various bootcamps and I continue to improve myself in
        HTML, CSS,{" "}
        <span className="italic">
          Javascript, Typescript, React, and Next.js
        </span>
        . As a request, I{" "}
        <span className="underline">
          helped people to renew time-tracking application website written with
          old technologies, to make a website contains a 3D cube that constantly returns and with open-source collaboration.
        </span>
        .
      </p>
      <p className="text-[#7C3E66]/100 font-bold ">
        I possess excellent problem-solving skills, a drive to continuously
        learn and improve in web development.
      </p>
    </motion.section>
  );
}
