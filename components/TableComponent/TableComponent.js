import React, { useEffect, useState } from "react";
import tableComponentStyles from "./TableComponentStyles";
import portfolioStyles from "../Portfolio/PortfolioStyles";
import useStocks from "../../hooks/useStocks/useStocks";

const TableComponent = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getStocks } = useStocks();

  useEffect(() => {
    const fetchStocks = async () => {
      setLoading(true);
      try {
        const response = await getStocks({
          limit: 5,
          order_by: "rank",
          order_dir: "asc",
        });

        if (response && response.data) {
          setStocks(response.data);
        }
      } catch (error) {
        console.error("Error fetching stocks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, [getStocks]);

  const headers = [
    {
      id: "1",
      name: "Rank",
      class: "rank",
      tooltipText:
        "Ranking based on AI Score, the lower the ranking, the better",
    },
    { id: "2", name: "Company", class: "company", tooltipText: "Company name" },
    {
      id: "3",
      name: "Country",
      class: "country",
      tooltipText: "Country where the headquarters are located",
    },
    {
      id: "4",
      name: "AI Score",
      class: "scoretable",
      tooltipText:
        "Danelfin AI global score based on all data available (1-10)",
    },
    {
      id: "5",
      name: "Change",
      class: "change",
      tooltipText: "Change in AI Score vs the previous day",
    },
    {
      id: "6",
      name: "Fundamental",
      class: "fundamental",
      tooltipText:
        "Danelfin AI subscore only based on company fundamental indicators (1-10)",
    },
    {
      id: "7",
      name: "Teachnical",
      class: "technical",
      tooltipText:
        "Danelfin AI subscore only based on technical indicators produced by price & volume (1-10)",
    },
    {
      id: "8",
      name: "Sentiment",
      class: "sentiment",
      tooltipText:
        "Danelfin AI subscore only based on sentiment indicators (1-10)",
    },
    {
      id: "9",
      name: "Low Risc",
      class: "risk",
      tooltipText:
        "Risk subscore based on the negative price fluctuations (semi-deviation) latest 500 market days. The higher the score, the lower the downside risk.",
    },
  ];

  const renderStockRow = (stock) => (
    <div key={stock.id} className="table-component-row justify-between">
      <div className="table-component-column-rank">{stock.id}</div>
      <div className="table-component-column-company">{stock.company}</div>
      <div className="table-component-column-country">{stock.country}</div>
      <div className="table-component-column-score">{stock.shortName}</div>
      <div className="table-component-column-score">{stock.change}</div>
      <div className="table-component-column-score">{stock.fundamental}</div>
      <div className="table-component-column-score">{stock.technical}</div>
      <div className="table-component-column-score">{stock.sentiment}</div>
      <div className="table-component-column-score">{stock.risk}</div>
    </div>
  );

  return (
    <>
      <div>
        <div className="table-component-container table-component-footer-border-radius">
          <div className="table-component-content-wrapper">
            <span className="table-component-alpha-col-dropdown-mobile"></span>
            <div className="table-component-content">
              <div className="table-component-shadow-background"></div>
              <div className="table-container table-component-with-alpha-column">
                <div className="table-component-header">
                  <div className="table-component-with-alpha-column table-component-row justify-between">
                    {headers.map((header) =>
                      header.class !== "scoretable" ? (
                        <div
                          key={header.id}
                          className={`table-component-column-${header.class} table-component-data-head tooltipCustomStockList tootipCustomStockLlistDoubleSize`}
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
                    </div>
                    <div className="table-component-column-country-mobile table-component-data-head">
                      <span>Country</span>
                    </div>
                  </div>
                </div>
                <div className="table-component-body">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    stocks.map((stock) => renderStockRow(stock))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{tableComponentStyles}</style>
      <style jsx>{portfolioStyles}</style>
    </>
  );
};

export default TableComponent;
