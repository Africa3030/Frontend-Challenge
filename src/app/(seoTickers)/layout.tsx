import React, { ReactNode } from "react";
import { useTranslation } from "@/src/app/i18n";
import { Locale } from "@/i18n-config";

type Props = {
  children?: ReactNode;
  params: {
    lng: Locale;
  };
};

export default async function Layout({ children, params: { lng } }: Props) {
  const { t } = await useTranslation(lng, "common");

  return (
    <div className="w-full max-w-[1200px] mx-auto my-0">
      <div className="bg-[color:var(--clr-light)] border-t border-b sm:border-r sm:border-l border-[color:var(--clr-border)] border-solid sm:rounded-[0_8px_8px_8px] sm:min-h-[calc(100vh_-_730px)] min-h-[100vh] mb-[50px]">
        {children}
      </div>
    </div>
  );
}
