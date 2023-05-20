import React from "react";
import { SectionHeader } from "@/components/layout";

interface ISection {
  label: string;
  link?: string;
  children: React.ReactNode;
}

export const Section = ({ label, link, children }: ISection) => {
  return (
    <section className="mx-auto w-12/12 py-7">
      {label && <SectionHeader label={label} link={link} />}
      <div className="mt-5 flex flex-wrap justify-evenly">{children}</div>
    </section>
  );
};
