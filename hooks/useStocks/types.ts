export interface Stock {
  id: number;
  name: string;
  company: string;
  shortName: string;
  country: string;
  isIn: string;
  isETF: boolean;
}

export interface StocksResponse {
  data: Stock[];
  total: number;
  limit: number;
  offset: number;
  order_by:
    | "id"
    | "name"
    | "company"
    | "shortName"
    | "country"
    | "isIn"
    | "isETF"
    | null;
  order_dir: "asc" | "desc";
}
