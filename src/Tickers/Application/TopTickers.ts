import Ticker from "@/src/Tickers/Domain/Ticker";
import { createTickerFilter } from "@/src/Shared/Domain/AZFilters";

interface Response {
  tickers: Ticker[];
  count: number;
}

type Params = {
  offset: number;
  limit: number;
  filter?: string;
  isTop?: boolean;
  comesFrom?: string | null;
};

const TopTickers = async ({
  offset,
  limit,
  filter,
  isTop,
  comesFrom,
}: Params): Promise<Response> => {
  try {
    const response = await fetch(
      `${process.env.HADES_HOST}/ticker${isTop ? "/top" : ""}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "max-age=86400",
        },
        body: JSON.stringify({
          limit: limit,
          offset: offset,
          order_by: "company",
          filters: createTickerFilter(filter),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching top tickers: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      tickers: data,
      count: parseInt(response.headers.get("x-total-count") ?? "0"),
    };
  } catch (error) {
    const context = {
      functionName: "TopTickers",
      parameters: { offset, limit, filter },
    };

    console.log(context);
    console.error("Error in TopTickers:", error);
    return {
      tickers: [],
      count: 0,
    };
  }
};

export default TopTickers;
