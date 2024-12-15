import { ReactNode, Suspense } from "react";
import { NavigationEvents } from "@/context/navigation-events";
import { type Locale } from "@/i18n-config";
import ImportBsJS from "@/context/importBsJS";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import React from "react";
import Layout from "@/src/Shared/Infrastructure/Components/PageLayout";
import NextRouterContextProvider from "@/context/next-router-context.tsx";
import StyledJsxRegistry from "@/context/registry.tsx";
import { useTranslation } from "@/src/app/i18n";
import { headers } from "next/headers";
const languages = ["en", "es"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

type Props = {
  children?: ReactNode;
  params: {
    lng: Locale;
  };
};

const title = "Danelfin | Stock Analytics Platform Powered by AI";
const description =
  "Optimize your portfolio with the power of our Artificial Intelligence. Unique insights to make smart and data-driven investment decisions.";
const image =
  process.env.NEXT_PUBLIC_CDN_URL + "/images/share/logoDanelfin.png";
const pathName = "https://danelfin.com";
const canonical = "/";
const imageSize = "small";
const width = "260";
const height = "258";

// @ts-ignore
export const metadata = {
  title: title,
  description: description,
  metadataBase: new URL(pathName),
  alternates: {
    canonical: canonical,
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#233253",
  openGraph: {
    siteName: title,
    title: title,
    description: description,
    images: [
      {
        url: image,
        width: width,
        height: height,
      },
    ],
    type: "website",
    url: pathName,
  },
  twitter: {
    card: imageSize === "small" ? "summary" : "summary_large_image",
    title: title,
    description: description,
    images: [image],
    creator: "@DanelfinAI",
    site: "@DanelfinAI",
  },
  icons: {
    icon: process.env.NEXT_PUBLIC_CDN_URL + "/favicons/favicon.svg",
  },
};

export default async function Root({ children, params: { lng } }: Props) {
  const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
  const headersList = headers();
  const host = headersList.get("host");
  const { t } = await useTranslation(lng, "common");

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body id="root">
        <NextRouterContextProvider value="app">
          <StyledJsxRegistry>
            <Layout params={{ lng: lng }}>
              <ImportBsJS />
              {children}
              <NavigationEvents />
            </Layout>
          </StyledJsxRegistry>
        </NextRouterContextProvider>
      </body>
    </html>
  );
}
