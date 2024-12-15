"use client";

import { useState } from "react";

export default function BtnPagination({ tipe, total, limit, offset }: any) {
  const [showModalDate, setShowModalDate] = useState(false);

  return (
    <>
      {/*<span onClick={() => {
                // return offset = 0
            }}>
                <img src={process.env.NEXT_PUBLIC_CDN_URL + `/images/icons/pagination/pagination1${offset > 0 ? 'A' : 'Ina'}ctive.svg`}
                     alt="first page icon"/>
            </span>*/}
      {/*    <span onClick={() => {
                    offset = offset - 1
                }}>
                <img
                    src={process.env.NEXT_PUBLIC_CDN_URL + `/images/icons/pagination/pagination2${offset > 0 ? 'A' : 'Ina'}ctive.svg`}
                    alt="first page icon"/>
            </span>
                <span onClick={() => {
                    offset = offset + 1
                }}>
                <img
                    src={process.env.NEXT_PUBLIC_CDN_URL + `/images/icons/pagination/pagination3${offset < total - limit ? 'A' : 'Ina'}ctive.svg`}
                    alt="first page icon"/>
            </span>
                <span
                    onClick={() => {
                        offset = Math.ceil(total / limit) === 0 ? total - limit : Math.floor(total / limit) * limit
                    }}>
                <img
                    src={process.env.NEXT_PUBLIC_CDN_URL + `/images/icons/pagination/pagination4${offset < total - limit ? 'A' : 'Ina'}ctive.svg`}
                    alt="first page icon"/>
            </span>*/}
    </>
  );
}
