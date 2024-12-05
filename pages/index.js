import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import * as cookie from "cookie";
import styles from "../components/HomeComponent/HomeComponentStyles";
import HomeTables from "@/components/HomeComponent/HomeTables/HomeTables";

const Home = (props) => {
  const { t } = useTranslation("common");

  const getFormattedDate = () => {
    return new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

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
          <HomeTables
            t={t}
            topStocksTable={props.topStocksTable}
            isCompare={false}
            topStocks={props.topStocks}
            topEtfs={props.topEtfs}
          />
        </div>
        <style jsx>{styles}</style>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  let headerCookie = context.req.headers.cookie;
  if (typeof headerCookie !== "string") {
    headerCookie = "";
  }
  const userAgent = context.req.headers["user-agent"] || "";

  const parsedCookies = cookie.parse(headerCookie);
  const version =
    parsedCookies && parsedCookies.last_update_cookie
      ? parsedCookies.last_update_cookie
      : Math.random();
  let topStocks;
  let topEtfs;

  try {
    const response = await fetch(`${process.env.HADES_HOST}/ticker`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=86400",
      },
      body: JSON.stringify({
        limit: 5,
        offset: 0,
        order_by: "score.general.gross",
        direction: "DESC",
        filters: [{ field: "is_etf", operation: "=", value: "0" }],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching top tickers: ${response.statusText}`);
    }
    topStocks = await response.json();
  } catch (error) {
    console.error("Error in TopTickers:", error);
  }

  try {
    const response = await fetch(`${process.env.HADES_HOST}/ticker`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=86400",
      },
      body: JSON.stringify({
        limit: 5,
        offset: 0,
        order_by: "score.general.gross",
        direction: "DESC",
        filters: [
          { field: "is_etf", operation: "=", value: "1" },
          { field: "is_etf_leverage", operation: "=", value: "0" },
          { field: "technical.avg_volume", operation: "<=", value: "1000000" },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching top tickers: ${response.statusText}`);
    }
    topEtfs = await response.json();
  } catch (error) {
    console.error("Error in TopTickers:", error);
  }

  const topStocksTable = null;
  const isBot = /bot|googlebot|crawler|spider|crawling/i.test(userAgent);

  return {
    props: {
      topStocks: topStocks ? topStocks : null,
      topEtfs: topEtfs ? topEtfs : null,
      isBot: isBot,
      topStocksTable: topStocksTable?.table_summary
        ? topStocksTable.table_summary
        : null,
      ...(await serverSideTranslations(context.locale, ["common"])),
    },
  };
}
