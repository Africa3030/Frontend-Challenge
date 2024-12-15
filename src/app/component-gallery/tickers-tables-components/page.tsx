import { Locale } from "@/i18n-config";
import { useTranslation } from "@/src/app/i18n";
import React from "react";
import Link from "next/link";
import TableSlimTitle from "@/src/Tickers/Infrastructure/Components/Design-components/TableSlim/TableSlimTitle";
import TableSlimItem from "@/src/Tickers/Infrastructure/Components/Design-components/TableSlim/TableSlimItem";

type Props = {
  params: {
    slug: string;
    lng: Locale;
  };
};

export default async function IndexPage({ params: { slug, lng } }: Props) {
  const { t } = await useTranslation(lng, "common");
  const isEtf = false;
  const alphaDropdownShowing = false;

  const ticker = {
    id: 1,
    name: "AAPL",
    company: "Apple Inc.",
    industrySlug: "technology",
    country: "USA",
    score: {
      general: {
        value: 9,
        change: 1,
      },
      fundamental: {
        value: 9,
      },
      technical: {
        value: 9,
      },
      sentiment: {
        value: 9,
      },
      risk: {
        value: 9,
      },
    },
    tradeIdea: "buy",
  };

  const market = "usa";

  const defaultUSCountryFlagItems = {
    country_flag_img: "https://cdn.danelfin.com/assets/images/flags/svg/US.svg",
    country_name: "United States",
    country_numcode: "840",
  };
  const countryFlagName =
    market === "usa" && !ticker.country
      ? defaultUSCountryFlagItems.country_name
      : ticker.country;
  // @ts-ignore
  const isRegion = isEtf && !ticker?.country;
  const bullsEyeIcon = (signal: any) => (
    <img
      src={
        process.env.NEXT_PUBLIC_CDN_URL +
        `/images/icons/stockList/${signal}BullsEye.svg`
      }
      alt="bulls eye icon"
    />
  );
  const changeArrow = (number: any) => {
    if (number === "") {
      return "";
    } else {
      return (
        <img
          width="13px"
          height="10px"
          loading="lazy"
          className="arrow-icon"
          src={
            process.env.NEXT_PUBLIC_CDN_URL +
            `/images/icons/${
              number > 0
                ? "greenArrow"
                : number === "0" || number === 0
                ? "orangeArrow"
                : "redArrow"
            }.svg`
          }
          alt="arrow-icon"
        />
      );
    }
  };

  // TODO: Refactor tooltips for Next 14

  return (
    <>
      <h1 className="text-3xl font-bold underline pb-10">
        Tickers Tables Components
      </h1>

      <section className="">
        <h2 className="text-2xl font-bold underline pb-5">TableSlimItem</h2>

        <TableSlimTitle>
          <div className="flex items-center justify-center w-[100%]">
            TableSlimTitle
          </div>
        </TableSlimTitle>
        <div className="w-[100%] sm:w-[630px] rounded-b-[6px] mb-[50px] sm:border-l sm:border-b sm:border-r border-solid border-[var(--clr-border)] ">
          <ul>
            <TableSlimItem key="">
              <span className="w-[16%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                {1}
              </span>
              <span className="w-[63%] sm:w-[448px] flex items-center">
                <Link href="/" title="">
                  {t("popularSearches.table.tableData", {
                    shortName: "--shortName--",
                  })}
                </Link>
              </span>
              <span className="w-[21%] sm:w-[100px] flex justify-center items-center">
                <img
                  src={
                    process.env.NEXT_PUBLIC_CDN_URL +
                    `/images/donutScores/9.svg`
                  }
                  alt="AI score"
                  width="33px"
                  height="33px"
                />
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[36%] sm:w-[291px] flex items-center pl-[10px] sm:pl-[21px]">
                <Link href="/" title="">
                  --A2A SPA (A2.Mi)--
                </Link>
              </span>
              <span className="w-[20%] sm:w-[82px] flex justify-center items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_URL_FLAGS}/US.svg`}
                  className="w-[19px] h-[11px] rounded-[3px]"
                />
              </span>
              <span className="w-[42%] sm:w-[259px] flex items-center pl-[10px] sm:pl-[21px]">
                Life Sciences Tools & Services
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[20%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                {1}
              </span>
              <span className="w-[100%] flex items-center">
                <Link href="/" title="">
                  --ShortName1-- {t("popularComparisons.table.vs")}{" "}
                  --ShortName2--
                </Link>
              </span>
            </TableSlimItem>
          </ul>
        </div>
        <hr className="m-4" />

        <TableSlimTitle>
          <div className="flex items-center justify-center w-[100%]">
            TableSlimTitle
          </div>
        </TableSlimTitle>
        <div className="w-[100%] sm:w-[630px] rounded-b-[6px] mb-[50px] sm:border-l sm:border-b sm:border-r border-solid border-[var(--clr-border)] animate-pulse">
          <ul>
            <TableSlimItem key="">
              <span className="w-[20%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></div>
              </span>
              <span className="w-[100%] flex items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-2.5"></div>
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[20%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></div>
              </span>
              <span className="w-[100%] flex items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-48 mb-2.5"></div>
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[38%] sm:w-[291px] flex items-center pl-[10px] sm:pl-[21px]">
                <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
              </span>
              <span className="w-[20%] sm:w-[82px] flex justify-center items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></div>
              </span>
              <span className="w-[34%] sm:w-[259px] flex items-center pl-[10px] sm:pl-[21px]">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[38%] sm:w-[291px] flex items-center pl-[10px] sm:pl-[21px]">
                <div className="h-2.5 bg-gray-300 rounded-full w-32 mb-2.5"></div>
              </span>
              <span className="w-[20%] sm:w-[82px] flex justify-center items-center">
                <div className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></div>
              </span>
              <span className="w-[34%] sm:w-[259px] flex items-center pl-[10px] sm:pl-[21px]">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[16%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                <span className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></span>
              </span>
              <span className="w-[63%] sm:w-[448px] flex justify-center items-center animate-pulse">
                <span className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></span>
              </span>
              <span className="w-[21%] sm:w-[100px] flex justify-center items-center animate-pulse ">
                <img
                  src={
                    process.env.NEXT_PUBLIC_CDN_URL +
                    `/images/donutScores/empty.svg`
                  }
                  alt="AI score"
                  width="33px"
                  height="33px"
                />
              </span>
            </TableSlimItem>
            <TableSlimItem key="">
              <span className="w-[16%] max-w-[80px] sm:w-[80px] flex justify-center items-center">
                <span className="h-2.5 bg-gray-300 rounded-full w-5 mb-2.5"></span>
              </span>
              <span className="w-[63%] sm:w-[448px] flex justify-center items-center animate-pulse">
                <span className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></span>
              </span>
              <span className="w-[21%] sm:w-[100px] flex justify-center items-center animate-pulse ">
                <img
                  src={
                    process.env.NEXT_PUBLIC_CDN_URL +
                    `/images/donutScores/empty.svg`
                  }
                  alt="AI score"
                  width="33px"
                  height="33px"
                />
              </span>
            </TableSlimItem>
          </ul>
        </div>
      </section>
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
