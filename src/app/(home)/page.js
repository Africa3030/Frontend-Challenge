import { headers } from "next/headers";
import HomeClient from "./HomeClient";
import useStocks from "../../../hooks/useStocks/useStocks";

function isBot(userAgent) {
  return /bot|googlebot|crawler|spider|crawling/i.test(userAgent);
}

export default async function Home() {
  const headersList = headers();
  const userAgent = headersList.get("user-agent") || "";

  const { getStocks } = useStocks();

  const fetchStocks = async () => {
    try {
      const response = await getStocks({
        limit: 5,
        order_by: "id",
        order_dir: "asc",
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching stocks:", error);
      return null;
    }
  };

  const topStocks = await fetchStocks();

  const botStatus = isBot(userAgent);

  return <HomeClient topStocks={topStocks} botStatus={botStatus} />;
}
