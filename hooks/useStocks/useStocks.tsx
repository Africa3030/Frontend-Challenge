import axios from "axios";
import { useCallback } from "react";
import { Stock, StocksResponse } from "./types";

const apiUrl = "/api/v1/datasets";

const useStocks = () => {
  const getStocks = useCallback(async (): Promise<StocksResponse[] | null> => {
    try {
      const response = await axios.get<{ stocks: StocksResponse[] }>(
        `${apiUrl}`,
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=86400",
          },
        }
      );

      if (response.data.stocks.length === 0) {
        console.error("No stocks found");
        return null;
      }

      return response.data.stocks;
    } catch (error) {
      console.error("Couldn't load stocks");
      return null;
    }
  }, []);

  return { getStocks };
};

export default useStocks;
