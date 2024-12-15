"use server";

import { headers } from "next/headers";
import HomeClient from "./HomeClient";

function isBot(userAgent) {
  return /bot|googlebot|crawler|spider|crawling/i.test(userAgent);
}

async function getStocks(params) {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, value.toString());
    }
  });

  const url = `http://localhost:5000/stocks${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=86400",
      },
      next: { revalidate: 0 },
    });

    const text = await response.text();

    try {
      const data = JSON.parse(text);
      const stocksData = data.data || data.stocks || data.results || data;

      return stocksData;
    } catch (error) {
      throw new Error(`Invalid JSON response: ${error.message}`);
    }
  } catch (error) {
    console.error("Fetch error:", {
      message: error.message,
      cause: error.cause,
      code: error.cause?.code,
    });
    throw error;
  }
}

export default async function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";

  try {
    const topStocks = await getStocks({
      limit: 5,
      order_by: "id",
      order_dir: "asc",
    });

    const botStatus = isBot(userAgent);
    return <HomeClient topStocks={topStocks} botStatus={botStatus} />;
  } catch (error) {
    return <HomeClient topStocks={null} botStatus={false} />;
  }
}
