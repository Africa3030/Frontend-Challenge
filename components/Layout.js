import { useState, useEffect } from "react";
import useRouter from "@/hooks/useRouter";
import { useTranslation } from "next-i18next";
import {
  globalStyles,
  modalsStyles,
  mobilePopUp,
  dataTableGeneric,
} from "@/styles/global";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [isNewPage, setIsNewPage] = useState(null);
  const router = useRouter();
  const { t } = useTranslation("common");

  /* analytics code to know if user scrolled 50% of the page */
  useEffect(() => {
    const handleComplete = () => {
      if (currentPage !== window.location.pathname) {
        setCurrentPage(window.location.pathname);
        setIsNewPage(true);
      } else {
        setIsNewPage(false);
      }
    };

    router.events.on("routeChangeComplete", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router, currentPage, isNewPage]);
  /* / analytics code to know if user scrolled 50% of the page */

  return (
    <>
      <div className="layout ">
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

export default Layout;
