import React, { useState } from "react";
import tableComponentStyles, {
  dropdownCSS,
  homeTable,
} from "./TableComponentStyles";
import portfolioStyles from "../Portfolio/PortfolioStyles";

const TableComponent = ({ topStocks }) => {
  const [activeColumn, setActiveColumn] = useState("rank");

  const headers = [
    {
      id: "1",
      name: "Rank",
      class: "rank",
      field: "id",
      tooltipText:
        "Ranking based on AI Score, the lower the ranking, the better",
    },
    {
      id: "2",
      name: "Company",
      class: "company",
      field: "name",
      tooltipText: "Company name",
    },
    {
      id: "3",
      name: "Country",
      class: "country-desktop",
      field: "country",
      tooltipText: "Country where the headquarters are located",
    },
    {
      id: "4",
      name: "AI Score",
      class: "scoretable",
      field: "score",
      tooltipText:
        "Danelfin AI global score based on all data available (1-10)",
    },
    {
      id: "5",
      name: "Change",
      class: "change",
      field: "change",
      tooltipText: "Change in AI Score vs the previous day",
    },
    {
      id: "6",
      name: "Fundamental",
      class: "fundamental",
      field: "fundamental",
      tooltipText:
        "Danelfin AI subscore only based on company fundamental indicators (1-10)",
    },
    {
      id: "7",
      name: "Technical",
      class: "technical",
      field: "technical",
      tooltipText:
        "Danelfin AI subscore only based on technical indicators produced by price & volume (1-10)",
    },
    {
      id: "8",
      name: "Sentiment",
      class: "sentiment",
      field: "sentiment",
      tooltipText:
        "Danelfin AI subscore only based on sentiment indicators (1-10)",
    },
    {
      id: "9",
      name: "Low Risk",
      class: "risk",
      field: "risk",
      tooltipText:
        "Risk subscore based on the negative price fluctuations (semi-deviation) latest 500 market days.",
    },
  ];

  const getCountryCode = (alpha2) => {
    const countryCodes = new Map([
      ["US", "840"],
      ["CA", "124"],
    ]);

    return countryCodes.get(alpha2) || alpha2;
  };

  const getCountryAlpha2 = (countryName) => {
    if (!countryName) return "--";
    return countryName.substring(0, 2).toUpperCase();
  };

  return (
    <>
      <div name="table-component-content">
        <div className="table-component-container table-component-footer-border-radius">
          <div className="table-component-content-wrapper">
            <span className="table-component-alpha-col-dropdown-mobile"></span>
            <div className="table-component-content">
              <div className="table-component-shadow-background"></div>
              <div className="table-container table-component-with-alpha-column">
                <div className="table-component-header">
                  <div className="table-component-with-alpha-column table-component-row">
                    {headers.map((header) =>
                      header.class !== "scoretable" ? (
                        <div
                          key={header.id}
                          className={`table-component-column-${header.class} table-component-data-head tooltipCustomStockList tootipCustomStockLlistDoubleSize`}
                          onClick={() => handleSort(header.field, header.class)}
                        >
                          <span>{header.name}</span>
                          <span className="tooltiptextCustomStockList">
                            {header.tooltipText}
                          </span>
                        </div>
                      ) : (
                        <div
                          key={header.id}
                          className={`table-component-column-score table-component-data-head tooltipCustomStockList tootipCustomStockLlistDoubleSize  table-component-column-score-small`}
                          onClick={() => handleSort(header.field, header.class)}
                        >
                          <span>
                            <span>{header.name}</span>
                            <img
                              src="https://cdn.danelfin.com/assets/next/images/icons/ico-info-white.svg"
                              alt="info icon"
                            />
                          </span>
                          <span className="tooltiptextCustomStockList">
                            {header.tooltipText}
                          </span>
                        </div>
                      )
                    )}
                    <div className="table-component-alpha-col table-component-data-head">
                      <span className="table-component-alpha-col-content">
                        <div className="table-component-alpha-col-title">
                          Perf YTD
                        </div>
                        <div className="table-component-alpha-col-image-container">
                          <img
                            src="https://cdn.danelfin.com/assets/next/images/icons/v1Dropdown.svg"
                            alt="check icon"
                            className="table-component-alpha-col-image"
                          />
                          <img
                            src="https://cdn.danelfin.com/assets/next/images/icons/v1DropdownHover.svg"
                            alt="check icon"
                            className="table-component-alpha-col-image-hover"
                          />
                        </div>
                      </span>
                      <span className="table-component-alpha-col-dropdown-desktop"></span>
                    </div>
                    <div className="table-component-column-country-mobile table-component-data-head">
                      <span>Country</span>
                    </div>
                  </div>
                </div>
                <div className="table-component-body">
                  {!topStocks ? (
                    <div>Loading...</div>
                  ) : (
                    topStocks.map((stock, index) => (
                      <div key={stock.id} className="table-component-row">
                        <div className="table-component-column-rank table-component-data">
                          {index === 0 && activeColumn === "rank" && (
                            <img
                              src="https://cdn.danelfin.com/assets/next/images/icons/upArrowWhite.svg"
                              alt="Sort asc"
                              className="undefined filter-up-active"
                            />
                          )}
                          <span>{stock.id}</span>
                        </div>
                        <div className="table-component-column-company table-component-data">
                          <div className="table-component-company-colum">
                            <span>
                              <a
                                title={`${stock.name} Stock Price`}
                                href={`/stock/${stock.name}`}
                                className="tooltipCustomImageStockList"
                              >
                                {stock.name}
                                <img
                                  src={`https://charts2.finviz.com/chart.ashx?s=m&t=${stock.name}`}
                                  alt="graphic"
                                  className="tooltiptextCustomStockList"
                                />
                              </a>
                            </span>
                            <span className="table-component-company-name">
                              {stock.company}
                            </span>
                          </div>
                        </div>
                        <div className="table-component-column-country-desktop table-component-data">
                          <span className="tooltipCustomStockList">
                            <a
                              title="US Market Stocks | AI scores, stock prices, forecasts, analysis | Danelfin"
                              href={`/us-stocks/0/0/0/${getCountryCode(
                                stock.country
                              )}/0/0/1`}
                            >
                              <span>
                                <img
                                  src={`https://cdn.danelfin.com/assets/images/flags/svg/${getCountryAlpha2(
                                    stock.country
                                  )}.svg`}
                                  alt={`${stock.name} flag`}
                                  className="flag-border"
                                />
                                <span className="tooltiptextCustomStockList">
                                  {stock.country}
                                </span>
                              </span>
                            </a>
                          </span>
                        </div>
                        <div className="table-component-column-score  table-component-column-score-small table-component-data">
                          <span className="d-flex-all-center table-component-doughnuts">
                            <div
                              className="doughnut-component-container tooltipCustomStockList undefined"
                              style={{
                                width: "31px",
                                height: "31px",
                              }}
                            >
                              <span className="tooltiptextCustomStockList">
                                AI Score (from 1 to 10) based on the probability
                                of beating the market in 3 months (51.98%) vs
                                the average probability (35.40%) of all stocks.
                                The "market" is the S&P 500 for US stocks and
                                the STOXX 600 for European stocks.
                              </span>
                              <img
                                src={`https://cdn.danelfin.com/assets/next/images/donutScores/${
                                  stock.score?.general?.value || "-"
                                }.svg?v=1`}
                                alt="ai score"
                                style={{
                                  width: "31px",
                                  height: "31px",
                                }}
                              />
                            </div>
                          </span>
                        </div>
                        <div className="table-component-column-change table-component-data">
                          <span>
                            <img
                              width={13}
                              height={10}
                              loading="lazy"
                              className="arrow-icon"
                              src="https://cdn.danelfin.com/assets/next/images/icons/orangeArrow.svg"
                              alt="arrow-icon"
                            />
                            {stock.score?.general?.change || "-"}
                          </span>
                        </div>
                        <div className="table-component-column-fundamental table-component-data">
                          <span>
                            <img
                              src={`https://cdn.danelfin.com/assets/next/images/donutScores/${
                                stock.score?.fundamental?.value || "-"
                              }.svg?v=1`}
                              alt="ai score"
                              style={{
                                width: "31px",
                                height: "31px",
                              }}
                            />
                          </span>
                        </div>
                        <div className="table-component-column-technical table-component-data">
                          <span>
                            <img
                              src={`https://cdn.danelfin.com/assets/next/images/donutScores/${
                                stock.score?.technical?.value || "-"
                              }.svg?v=1`}
                              alt="ai score"
                              style={{
                                width: "31px",
                                height: "31px",
                              }}
                            />
                          </span>
                        </div>
                        <div className="table-component-column-sentiment table-component-data">
                          <span>
                            <img
                              src={`https://cdn.danelfin.com/assets/next/images/donutScores/${
                                stock.score?.sentiment?.value || "-"
                              }.svg?v=1`}
                              alt="ai score"
                              style={{
                                width: "31px",
                                height: "31px",
                              }}
                            />
                          </span>
                        </div>
                        <div className="table-component-column-risk table-component-data">
                          <span>
                            <img
                              src={`https://cdn.danelfin.com/assets/next/images/donutScores/${
                                stock.score?.risk?.value || "-"
                              }.svg?v=1`}
                              alt="ai score"
                              style={{
                                width: "31px",
                                height: "31px",
                              }}
                            />
                          </span>
                        </div>
                        <div className="table-component-alpha-col table-component-data">
                          <span
                            className={`table-component-alpha-col-content ${
                              stock.perfYear >= 0 ? "positive" : "negative"
                            }`}
                          >
                            {stock.perfYear || "-"}%
                          </span>
                        </div>
                        <div className="table-component-column-country-mobile table-component-data">
                          <a
                            title="US Market Stocks | AI scores, stock prices, forecasts, analysis | Danelfin"
                            href={`/us-stocks/0/0/0/${getCountryCode(
                              stock.country
                            )}/0/0/1`}
                          >
                            <span>
                              <img
                                src={`https://cdn.danelfin.com/assets/images/flags/svg/${getCountryAlpha2(
                                  stock.country
                                )}.svg`}
                                alt={`${stock.name} flag`}
                                className="flag-border"
                              />
                              <span className="tooltiptextCustomStockList">
                                {stock.country}
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{tableComponentStyles}</style>
      <style jsx>{portfolioStyles}</style>
      <style jsx>{dropdownCSS}</style>
      <style jsx>{homeTable}</style>
    </>
  );
};

export default TableComponent;
