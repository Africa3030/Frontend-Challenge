import axios from "axios";
import { useCallback } from "react";
import { StocksResponse } from "./types";

interface GetStocksParams {
  limit?: number;
  offset?: number;
  order_by?: string;
  order_dir?: "asc" | "desc";
  isETF?: boolean;
  country?: string;
}

const apiUrl = "http://localhost:5000/stocks";

const useStocks = () => {
  const getStocks = useCallback(
    async (params: GetStocksParams = {}): Promise<StocksResponse | null> => {
      try {
        const response = await axios.get<StocksResponse>(apiUrl, {
          params: {
            ...params,
          },
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "max-age=86400",
          },
        });

        return response.data;
      } catch (error) {
        console.error("Couldn't load stocks:", error);
        return null;
      }
    },
    []
  );

  return { getStocks };
};

export default useStocks;
