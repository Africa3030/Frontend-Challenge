"use client";

import { useTranslation } from "next-i18next";
import styles from "../../../components/HomeComponent/HomeComponentStyles";
import HomeTables from "@/components/HomeComponent/HomeTables/HomeTables";

function getFormattedDate() {
  return new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function HomeClient({ topStocks, topEtfs, botStatus }) {
  const { t } = useTranslation("common");

  return (
    <div>
      <div id="home-content">
        <div className="home-section-tops">
          <h1 className="home-title-section home-generic-blue-title">
            Best Stocks and ETFs Picked by AI
          </h1>
          <div className="subtitle-section">
            <img
              src="https://cdn.danelfin.com/assets/next/images/icons/checkGreenRound.svg"
              alt="green check"
              className="subtitle-section-last-update-check"
            />
            <span>{`${getFormattedDate()}. For next months.`}</span>
          </div>
          <div className="tops-tables">
            <HomeTables
              topStocksTable={null}
              isCompare={false}
              topStocks={topStocks}
              topEtfs={topEtfs}
            />
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    </div>
  );
}
