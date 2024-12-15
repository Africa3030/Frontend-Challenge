import Link from "next/link";
import styles from "./PaginationComponentApp.module.css";
import PaginationArrow from "@/src/Shared/Infrastructure/Design-components/PaginationArrow";

type Props = {
  total: number;
  limit: number;
  offset: number;
  copy: string;
  url: string;
};
export default function PaginationComponentApp({
  total,
  limit,
  offset,
  copy,
  url,
}: Props) {
  return (
    <div className={styles.content}>
      <span className={styles.copy}> {copy} </span>
      <div className={styles.links}>
        <Link
          href={`${process.env.NEXT_PUBLIC_URL}${url}`}
          aria-label="First Page"
          replace
        >
          <PaginationArrow
            active={offset !== 1}
            position={"left"}
            extreme={true}
          />
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_URL}${url}?limit=${limit}&offset=${
            offset - limit
          }`}
          aria-label="Previous Page"
          replace
        >
          <PaginationArrow
            active={offset !== 1}
            position={"left"}
            extreme={false}
          />
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_URL}${url}?limit=${limit}&offset=${
            offset + limit
          }`}
          aria-label="Next Page"
          replace
        >
          <PaginationArrow
            active={total - offset > limit}
            position={"right"}
            extreme={false}
          />
        </Link>
        <Link
          href={`${process.env.NEXT_PUBLIC_URL}${url}?limit=${limit}&offset=${
            Math.ceil(total / limit) === 0
              ? total - limit
              : Math.floor(total / limit) * limit
          }`}
          aria-label="Last Page"
          replace
        >
          <PaginationArrow
            active={total - offset > limit}
            position={"right"}
            extreme={true}
          />
        </Link>
      </div>
    </div>
  );
}
