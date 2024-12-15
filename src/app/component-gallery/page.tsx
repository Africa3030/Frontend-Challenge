import { Locale } from "@/i18n-config";
import { useTranslation } from "@/src/app/i18n";
import React from "react";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
    lng: Locale;
  };
};

export default async function IndexPage({ params: { slug, lng } }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "common");

  return (
    <section className={"section-content-wrapper"}>
      <div className="layout-container pt-10">
        <h1 className="text-3xl font-bold underline">Component Gallery</h1>
        <ul className="divide-y divide-gray-200 pt-5">
          <li className="py-4 flex">
            <div className="ml-3">
              <p className="text-md-start font-medium text-gray-900">
                <Link href={"/component-gallery/srp-components"}>
                  Component Gallery
                </Link>
              </p>
            </div>
          </li>
          <li className="py-4 flex">
            <div className="ml-3">
              <p className="text-md-start font-medium text-gray-900">
                <Link href={"/component-gallery/tickers-tables-components"}>
                  Tickers Tables Components
                </Link>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: any) {
  return {
    robots: {
      index: false,
      follow: false,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
  };
}
