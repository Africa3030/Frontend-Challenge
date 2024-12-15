import { Locale } from "@/i18n-config";
import { useTranslation } from "@/src/app/i18n";
import LastUpdateComponentApp from "@/src/Shared/Infrastructure/Components/LastUpdateComponentApp/LastUpdateComponentApp";

import React from "react";
import ArrowLateralScrolling from "@/src/Shared/Infrastructure/Design-components/ArrowLateralScrolling";

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
    <>
      <h1 className="text-3xl font-bold underline pb-10">
        Component Gallery (Single Responsibility Principle)
      </h1>

      <LastUpdateComponentApp market={slug || "usa"} params={{ lng: lng }} />

      <hr className="m-4" />
      <p>
        <ArrowLateralScrolling active={true} position={"right"} />
      </p>
      <p>
        <ArrowLateralScrolling active={false} position={"right"} />
      </p>
      <p>
        <ArrowLateralScrolling active={true} position={"left"} />
      </p>
      <p>
        <ArrowLateralScrolling active={false} position={"left"} />
      </p>
    </>
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
