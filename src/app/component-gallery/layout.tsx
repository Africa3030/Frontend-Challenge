import { ReactNode } from "react";
import { type Locale } from "@/i18n-config";
import React from "react";

const languages = ["en", "es"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Props = {
  children?: ReactNode;
  params: { lng: Locale };
};

export default async function Root({ children, params: { lng } }: Props) {
  return (
    <section className={"section-content-wrapper"}>
      <div className="layout-container pt-10">{children}</div>
    </section>
  );
}
