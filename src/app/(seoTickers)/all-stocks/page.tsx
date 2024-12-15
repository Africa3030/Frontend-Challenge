import React from "react";
import { Locale } from "@/i18n-config";
import { useTranslation } from "@/src/app/i18n";
import TopStocksTable from "@/src/Tickers/Infrastructure/Components/TopStocksTable";

type Props = {
  params: {
    lng: Locale;
  };
  searchParams: any;
};

export const revalidate = 86400; // revalidate at 24 hour

export default async function Page({ params: { lng }, searchParams }: Props) {
  const { t } = await useTranslation(lng, "common");
  const limit = 100;

  return (
    <>
      <div>
        <h1 className="sm:text-[30px] text-[24px] leading-[42px] w-full text-center mt-[20px] sm:mt-[46px] mb-1.5 mx-auto font-d-graphicBold">
          {t("allStocks.title")}
        </h1>
        <div className="w-full font-medium text-center tracking-[0] sm:mt-[11px] b-[24px] flex justify-center">
          <h2 className="leading-[32px] sm:text-[22px] text-[18px] mr-3 ml-3 block sm:w-[445px] w-auto font-d-graphikMedium font-medium">
            {t("allStocks.subtitle")}
          </h2>
        </div>
        <TopStocksTable
          params={{ lng: lng }}
          searchParams={searchParams}
          limit={limit}
        />
      </div>
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
