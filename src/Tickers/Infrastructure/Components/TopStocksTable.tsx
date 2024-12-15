import Ticker from "@/src/Tickers/Domain/Ticker";
import { Locale } from "@/i18n-config";
import TableSlimTitle from "@/src/Tickers/Infrastructure/Components/Design-components/TableSlim/TableSlimTitle";
import { useTranslation } from "@/src/app/i18n";
import PaginationComponentAppAll from "@/src/Shared/Infrastructure/Components/PaginationComponentAppAll/PaginationComponentAppAll";

type Props = {
  params: {
    lng: Locale;
  };
  searchParams: any;
  limit: number;
  isEtf?: boolean;
};

const TopStocksTable = async ({
  params: { lng },
  searchParams,
  limit,
  isEtf,
}: Props) => {
  const { t } = await useTranslation(lng, "common");
  const offset = 0;
  let total = 0;
  let tickers: Ticker[] = [];
  let from = 0;
  let to = 0;
  const alphabetParam = "A";

  return (
    <>
      <div className="flex flex-col items-center box-border table-container">
        <TableSlimTitle>
          <div className="w-[46%] sm:w-[291px] flex justify-center items-center">
            {t("allStocks.table.company")}
          </div>
          <div className="w-[20%] sm:w-[82px] flex justify-center items-center border-l border-r">
            {t("allStocks.table.country")}
          </div>
          <div className="w-[34%] sm:w-[259px] flex justify-center items-center">
            {t("allStocks.table.industry")}
          </div>
        </TableSlimTitle>
        <div className="w-[100%] sm:w-[630px] rounded-b-[6px] mb-[24px] sm:border-l sm:border-b sm:border-r border-solid border-[var(--clr-border)] "></div>
        <PaginationComponentAppAll
          total={total}
          limit={limit}
          offset={offset}
          copy={t("genericTable.paginationEtfStocksWFilterAZ", {
            showingFrom: from,
            showingTo: to,
            totalNum: total,
            stockOrEtf: t("genericTable.stocks"),
            letter: alphabetParam,
          })}
          url={`/all-stocks`}
          letter={alphabetParam}
        />
      </div>
    </>
  );
};

export default TopStocksTable;
