"use client";

import { useState, useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import "nprogress/nprogress.css";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import {
  globalStyles,
  modalsStyles,
  mobilePopUp,
  dataTableGeneric,
} from "@/styles/global";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../../../components/Header/Header";

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isNewPage, setIsNewPage] = useState(null);
  const pathname = usePathname();
  const { t } = useTranslation("common");

  /* analytics code to know if user scrolled 50% of the page */
  useEffect(() => {
    if (currentPage !== pathname) {
      setCurrentPage(pathname);
      setIsNewPage(true);
    } else {
      setIsNewPage(false);
    }
  }, [pathname, currentPage]);
  /* / analytics code to know if user scrolled 50% of the page */

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <div className="layout">
        <Header />
        <main className="section-content-wrapper">{children}</main>
        {/*<Footer/>*/}
        <style jsx global>
          {globalStyles}
        </style>
        <style jsx global>
          {modalsStyles}
        </style>
        <style jsx global>
          {mobilePopUp}
        </style>
        <style jsx global>
          {dataTableGeneric}
        </style>
        <style jsx global>{`
          /* styling google login popup */
          #credential_picker_container {
            top: 120px !important;
            right: 0 !important;
          }
          /* / styling google login popup */
        `}</style>
        <style jsx>{`
          .anniversary-promo-discount-underline {
            text-decoration: underline;
          }

          .promo-toast-text {
            display: flex;
            color: var(--clr-light);
            font-family: var(--ff-bold);
            justify-content: center;
            text-align: center;
            position: relative;
            padding-left: 131px;
            font-size: 18px;
          }

          .promo-toast-text-left {
            height: 42px;
            position: absolute;
            left: 56px;
            top: -2px;
          }

          .promo-toast-text-right {
            height: 42px;
            position: absolute;
            right: -457px;
            top: -2px;
          }

          @media (max-width: 770px) {
            .promo-target-text {
              max-width: 296px;
              margin-right: 0;
              padding-left: 0;
              font-size: 16px;
            }

            .promo-toast-text {
              line-height: 18px;
              padding-left: 0;
            }

            .promo-toast-text-left,
            promo-toast-text-right {
              display: none;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default appWithTranslation(Layout);
