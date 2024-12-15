import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import HomeTablesNav from "./HomeTablesNav/HomeTablesNav";
import styles from "./HomeTablesStyles";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import TableComponent from "../../TableComponent/TableComponent";
import { FILTERS_MAP } from "@/src/Tickers/Domain/Filter";

const HomeTables = ({ topStocksTable, isCompare, topStocks, topEtfs }) => {
  const { t } = useTranslation("common");
  const [topStocksActive, setTopStocksActive] = useState(true);
  const [topEtfsActive, setTopEtfsActive] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={`home-tables-wrapper ${isCompare ? "compare-page" : ""}`}>
        {isCompare ? (
          <>
            <p className="title">{t("comparePage.bestStocks.title")}</p>
            <p className="description">
              {t("comparePage.bestStocks.usdescription")}
              <span className="description-percentage">
                {t("comparePage.bestStocks.usdescriptionPercentage")}
              </span>
              {t("comparePage.bestStocks.usdescription2")}
            </p>
          </>
        ) : null}
        <HomeTablesNav
          setTopEtfsActive={setTopEtfsActive}
          setTopStocksActive={setTopStocksActive}
          t={t}
          topStocksActive={topStocksActive}
          topEtfsActive={topEtfsActive}
        />
        <div className="home-tables-title">
          <h2>
            {t(
              `home.stockTables.${topStocksActive ? "topStocks" : "etfs"}.title`
            )}
          </h2>
          <p>
            {t(
              `home.stockTables.${
                topStocksActive ? "topStocks" : "etfs"
              }.description`
            )}
          </p>
        </div>

        <TableComponent />

        {loading && <LoadingSpinner />}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export default HomeTables;
