import { cookies, headers } from "next/headers";
import HomeClient from "./HomeClient";

async function fetchTopItems(isEtf) {
  const baseFilters = [
    { field: "is_etf", operation: "=", value: isEtf ? "1" : "0" },
  ];

  const etfFilters = isEtf
    ? [
        { field: "is_etf_leverage", operation: "=", value: "0" },
        { field: "technical.avg_volume", operation: "<=", value: "1000000" },
      ]
    : [];

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
        filters: [...baseFilters, ...etfFilters],
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Error fetching ${isEtf ? "ETFs" : "stocks"}: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching ${isEtf ? "ETFs" : "stocks"}:`, error);
    return null;
  }
}

function isBot(userAgent) {
  return /bot|googlebot|crawler|spider|crawling/i.test(userAgent);
}

export default async function Home() {
  const cookieStore = cookies();
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";
  const lastUpdateCookie = cookieStore.get("last_update_cookie");
  const version = lastUpdateCookie ? lastUpdateCookie.value : Math.random();

  const [topStocks, topEtfs] = await Promise.all([
    fetchTopItems(false),
    fetchTopItems(true),
  ]);

  const botStatus = isBot(userAgent);

  return (
    <HomeClient topStocks={topStocks} topEtfs={topEtfs} botStatus={botStatus} />
  );
}
