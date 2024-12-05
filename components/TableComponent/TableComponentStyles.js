import css from "styled-jsx/css";

export default css.global`
  .table-component-container {
    background: white;
    position: relative;
    border-bottom: 1px solid var(--clr-border);
  }

  .table-component-body {
    width: 100%;
  }

  .table-component-body .table-component-row {
    display: flex;
    width: 100%;
    border-left: 1px solid var(--clr-border);
    border-right: 1px solid var(--clr-border);
  }

  .table-component-row.loading {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .table-component-container.table-component-container-empty,
  .table-component-container-empty .table-container {
    border-radius: 0 0 8px 8px;
  }

  .table-component-container.table-component-container-empty
    .table-component-body {
    text-align: center;
  }

  .table-component-text-no-data-content {
    width: 100%;
    margin: 40px auto 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .table-component-text-no-data-content-skeleton {
    width: 100%;
    margin-top: -30px;
    padding: 0 12px;
  }

  .table-component-text-no-data-content
    span:not(span.table-component-text-no-data-content-skeleton) {
    color: var(--clr-links);
    cursor: pointer;
    margin-left: 3px;
  }

  .table-component-text-no-data-content span:hover {
    text-decoration: underline;
  }

  .table-component-empty-table-bottom {
    height: 10px;
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid var(--clr-border);
  }

  .table-component-table-bottom {
    height: 5px;
    border-right: 1px solid var(--clr-border);
    border-left: 1px solid var(--clr-border);
    border-bottom: 1px solid var(--clr-border);
    border-radius: 0 0 8px 8px;
    background-color: var(--clr-light);
  }

  .table-component-container {
    position: relative;
  }

  .table-component-header-section {
    display: flex;
    align-items: center;
    background: var(--clr-light);
    color: var(--clr-light);
    font-size: 16px;
    height: 70px;
    border: 1px solid var(--clr-border);
  }

  .table-component-header {
    width: 100%;
  }

  .table-component-header-sticky {
    position: sticky;
    top: 65px;
  }

  .table-component-header-section span {
    padding-left: 20px;
    margin: 0px;
    font-family: var(--ff-medium);
    font-size: 20px;
    line-height: 26px;
    color: var(--clr-txt);
  }

  /* TABLE STYLES */

  .table-component-content {
    background-color: var(--clr-light);
  }

  .table-component-content-loading {
    border: 1px solid var(--clr-border);
    background-color: var(--clr-light);
    border-radius: 8px;
    padding: 10px;
  }

  .table-component-content a:not(.table-component-content a:hover) {
    text-decoration: none;
  }

  .table-component-content .table-container {
    width: 100%;
    max-width: 1200px;
    z-index: 99;
    background-color: var(--clr-light);
  }

  .table-component-data {
    position: relative;
  }

  .table-component-content .table-container .table-component-data-head {
    font-weight: initial;
    background-color: var(--clr-newDarkgrey);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .table-component-data-head:hover {
    cursor: pointer;
  }

  .table-component-content .table-container .table-component-data-head:hover {
    background-color: var(--clr-tableSpanHover);
  }

  .filter-down-active {
    position: absolute;
    top: 0px;
  }

  .filter-up-active {
    position: absolute;
    top: -6px;
  }

  .left-50 {
    left: 50%;
  }

  .pl-20 {
    padding-left: 20px;
  }

  .table-component-content
    .table-container
    .table-component-body
    .table-component-data {
    white-space: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-component-data.table-component-column-company {
    justify-content: flex-start !important;
  }

  .table-component-data.table-component-column-company {
    background-color: var(--clr-light);
  }

  .table-component-content .table-component-header .table-component-row {
    color: var(--clr-light);
    background-color: var(--clr-newDarkgrey);
    display: flex;
    align-items: center;
  }

  .table-component-data.table-component-column-score {
    padding: 0;
  }

  .table-component-data .focus-column {
    color: var(--clr-links);
    cursor: pointer;
  }

  .table-component-data .focus-column:hover {
    text-decoration: underline;
  }

  .table-component-header .table-component-data-head {
    border-left: 1px solid var(--clr-tableBorder);
  }

  .table-component-data-head.table-component-column-score
    img:not(.filter-up-active, .filter-down-active) {
    margin-left: 4px;
    margin-bottom: 1px;
    width: 11px;
    height: 11px;
  }

  .table-component-content .table-component-data-head {
    font-size: 12px;
    line-height: 16px;
    height: 48px;
    text-align: center;
    font-family: var(--ff-primary);
    position: relative;
  }

  .table-component-content .table-component-data-head span {
    cursor: pointer;
  }

  .tooltiptextCustomStockList {
    white-space: normal;
    pointer-events: none;
  }

  .mobile-tooltip:hover {
  }

  .mobile-tooltip:hover span {
    display: block !important;
    visibility: visible !important;
    opacity: 100 !important;
  }

  .table-component-content .table-component-data,
  .table-component-content .table-component-row .table-component-data,
  .table-component-content .table-component-doughnuts {
    max-height: 62px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .table-component-content .table-component-row .table-component-data {
    height: 62px;
  }

  .table-component-content .table-component-doughnuts {
    height: 59px;
  }

  .table-component-content .table-component-data {
    font-size: 14px;
    line-height: 17px;
    font-family: var(--ff-primary);
  }

  .table-component-content
    .table-component-body
    .table-component-row:not(:last-child) {
    border-bottom: 0.8px solid var(--clr-border);
  }

  @supports (-webkit-touch-callout: none) {
    .table-component-content
      .table-component-body
      .table-component-row:not(:last-child) {
      border-bottom: 1px solid var(--clr-border);
    }
  }

  .table-component-content
    .table-component-body
    .table-component-company-colum {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .table-component-content
    .table-component-body
    .table-component-company-colum
    span:first-child,
  .table-component-content
    .table-component-body
    .table-component-company-colum
    span:first-child
    a {
    height: 17px;
    display: flex;
  }

  .table-component-content
    .table-component-body
    .table-component-company-colum
    img.tooltiptextCustomStockList {
    background-color: var(--clr-light);
    z-index: 999;
    width: 320px;
    height: auto;
    left: 140px;
    top: -165px;
    box-shadow: 0 2px 12px 0 #b3b3b3;
  }

  /* columns sizig */

  .table-component-column-rank,
  .table-component-data.table-component-column-rank span:first-child,
  .table-component-data-head.table-component-column-rank span:first-child,
  .table-component-data-head.table-component-column-rank {
    width: 70px;
    max-width: 70px;
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-component-data.table-component-column-rank span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-component-column-company,
  .table-component-data-head.table-component-column-company {
    min-width: 193px;
    max-width: 230px;
    width: 230px;
    position: relative;
  }

  .table-component-column-country-desktop,
  .table-component-column-country-mobile {
    width: 100px;
  }

  .table-component-body .table-component-column-score {
    background-color: var(--clr-aiScoreColumn);
    border-right: 1px solid var(--clr-aiScoreColumnLines);
    border-left: 1px solid var(--clr-aiScoreColumnLines);
  }

  .table-component-body
    .table-component-column-score
    span:first-child:not(span.tooltiptextCustomStockList) {
    max-height: 59px;
  }

  .table-component-data-head.table-component-column-score,
  .table-component-body
    .table-component-column-score
    span:not(span.tooltiptextCustomStockList) {
    width: 100px;
  }

  .table-component-column-fundamental {
    width: 95px;
  }

  .table-component-column-technical,
  .table-component-column-sentiment,
  .table-component-column-risk {
    width: 81.75px;
  }

  .table-component-column-change {
    width: 80px;
  }

  .table-component-column-sector {
    width: 125px;
    max-width: 125px;
  }

  .table-component-column-industry {
    width: 135px;
    max-width: 135px;
  }

  .table-component-column-gain {
    width: 74px;
  }

  .table-component-column-gain.tootipCustomStockLlistDoubleSize
    .tooltiptextCustomStockList {
    bottom: 50px;
  }

  .table-component-trash .tooltiptextCustomStockList {
    bottom: 50px !important;
    height: auto;
  }

  .table-component-data.table-component-column-gain .column-gain-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  .table-component-column-industry-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 4px 0 4px;
  }

  .table-component-column-industry-content img {
    margin-left: 4px;
  }

  .secIndText {
    width: 100%;
  }

  .etf-region {
    cursor: pointer;
  }

  /* / columns sizig */

  .table-component-column-country-desktop
    img:not(.filter-up-active, .filter-down-active, .is-region),
  .table-component-column-country-mobile
    img:not(.filter-up-active, .filter-down-active, .is-region) {
    width: 19px;
    height: 12px;
  }

  .table-component-column-country-mobile > span,
  .table-component-column-country-desktop > span {
    height: 40px;
    width: 100%;
    margin: auto;
  }

  .table-component-column-country-desktop span,
  .table-component-column-country-mobile span,
  .table-component-column-fundamental span,
  .table-component-body .table-component-column-score span:first-child,
  .table-component-column-technical span,
  .table-component-column-sentiment span,
  .table-component-column-risk span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-component-body .table-component-column-rank {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    max-height: 62px !important;
    min-height: 62px !important;
  }

  .table-component-company-colum {
    padding-left: 15px;
    height: 100%;
  }

  .table-component-column-change span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-component-content
    .table-component-data.table-component-column-industry,
  .table-component-content .table-component-data.table-component-column-sector {
    padding-left: 12px;
    padding-right: 12px;
    max-height: 60px;
    text-align: center;
  }

  .table-component-trash span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    max-height: 60px;
  }

  .table-component-data.table-component-trash {
    max-height: 60px;
    width: 63px;
  }

  .table-component-trash img {
    cursor: pointer;
    width: 16px;
    height: 21px;
  }

  .table-component-portfolio {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 91px !important;
    position: relative;
  }

  .table-component-portfolio-img-container {
    margin-right: 25px;
  }

  .table-component-portfolio-img-container
    .table-component-portfolio-img-hover {
    display: none;
  }

  @media (min-width: 770px) {
    .table-component-portfolio-img-container:hover
      .table-component-portfolio-img,
    .table-component-portfolio-img-container
      .table-component-portfolio-img-hover {
      display: none;
    }

    .table-component-portfolio-img-container .table-component-portfolio-img,
    .table-component-portfolio-img-container:hover
      .table-component-portfolio-img-hover {
      display: block;
    }
    .table-component-portfolio-img-container:hover
      .table-component-portfolio-img-hover {
      cursor: pointer;
    }
  }

  .table-component-content
    .table-component-footer-container
    .table-component-data.table-component-footer-title {
    font-family: var(--ff-bold);
    padding-left: 30px;
    padding-right: 5px;
    width: 301px;
    min-width: 293px;
    justify-content: flex-start !important;
  }

  .portfolio-table-container
    .table-component-content
    .table-component-footer-container
    .table-component-data.table-component-footer-title {
    width: 232px;
    min-width: 232px;
  }

  .table-component-data.table-component-footer-title div {
    max-width: 50ch;
  }

  .table-component-data.table-component-footer-title
    span.portfolio-table-footer,
  .table-component-footer-explanation div {
    display: flex;
    align-items: center;
  }

  .table-component-footer-explanation div {
    max-width: 680px;
    width: 90vw;
  }

  .table-component-footer-explanation {
    padding-left: 21px;
  }

  .table-component-column-country-mobile {
    display: none !important;
  }

  .arrow-icon {
    margin-right: 5px;
  }

  .table-component-content .arrow-icon-vertical {
    width: 10px;
    height: 13px;
  }
  .table-component-content .arrow-icon-horizontal {
    width: 13px;
    height: 10px;
  }

  /* tooltips */
  /* image tooltip ticker and company */

  .tooltipCustomImageStockList {
    position: relative;
  }

  .tooltipCustomImageStockList .tooltiptextCustomStockList {
    visibility: hidden;
    opacity: 0;
    border-radius: 4px;
    margin: 5px;
    position: absolute;
    z-index: 100;
    top: -75%;
    left: 150%;
    margin-left: -70px;
    box-shadow: 0px 2px 12px 0px #b3b3b3;
  }

  .tooltipCustomImageStockList .tooltiptextCustomStockList--little {
    background-color: var(--clr-light);
    z-index: 999;
    width: 320px;
    height: auto;
    left: 140px;
    top: -150px;
    box-shadow: 0 2px 12px 0 #b3b3b3;
  }

  .tooltipCustomImageStockList .tooltiptextCustomStockList::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
  }

  .tooltipCustomImageStockList:hover .tooltiptextCustomStockList {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s linear;
  }

  @media (min-width: 1070px) {
    .tooltipCustomStockList:not(
        .table-component-portfolio-img-container.tooltipCustomStockList
      ) {
      position: relative;
    }
  }

  .tooltipCustomStockList .tooltiptextCustomStockList {
    visibility: hidden;
    opacity: 0;
    background-color: #272727;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    bottom: 115%;
    width: 100%;
    left: 0;
    font-family: var(--ff-primary);
    pointer-events: none;
    font-size: var(--fs-tooltip) !important;
    line-height: var(--lh-tooltip) !important;
  }

  .tooltipCustomStockList .tooltiptextCountry {
    bottom: 84% !important;
  }

  .table-component-portfolio-img-container.tooltipCustomStockList
    .tooltiptextCustomStockList {
    width: 124px;
    right: 0;
    left: initial;
    bottom: 50px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-medium);
    font-size: 13px !important;
  }

  .table-component-portfolio-img-container.tooltipCustomStockList
    .tooltiptextCustomStockList::after {
    left: 50%;
    margin-left: 12px;
  }

  .tooltipCustomStockList
    .tooltiptextCustomStockList.tooltiptextCustomGainFooter {
    width: 283px;
    left: initial;
    right: 0;
    bottom: 90%;
  }

  .tooltipCustomStockList.tooltipCustomStockListChangeFooter
    .tooltiptextCustomStockList {
    width: 226px;
    left: initial;
    right: -100%;
    bottom: 90%;
  }

  .tooltipCustomStockList
    .tooltiptextCustomStockList.tooltiptextCustomGainFooter::after {
    left: initial;
    right: 15%;
  }

  .table-component-alpha-col-item.tooltipCustomStockList
    .tooltiptextCustomStockList {
    width: 90%;
    left: 5%;
  }

  .tooltipCustomStockList
    .tooltiptextCustomStockList.tooltiptextBottomStockList {
    bottom: -70%;
  }

  .tootipCustomStockLlistRank .tooltiptextCustomStockList {
    width: 240px;
    left: 0;
    white-space: normal;
  }

  .tootipCustomStockLlistDoubleSize .tooltiptextCustomStockList {
    width: 190%;
    left: -45%;
    bottom: 35px;
  }

  .doughnut-component-container.tooltipCustomStockList
    .tooltiptextCustomStockList {
    width: 450%;
    left: -170%;
    bottom: 40px;
  }

  .tootipCustomStockLlistIndustry .tooltiptextCustomStockList {
    width: 200%;
    left: -100%;
    bottom: 35px;
  }

  .table-component-header
    .tootipCustomStockLlistDoubleSize
    .tooltiptextCustomStockList,
  .table-component-header
    .tootipCustomStockLlistIndustry
    .tooltiptextCustomStockList {
    bottom: 50px;
  }

  :not(.country-title).country-gens-list.tooltipCustomStockList
    .tooltiptextCustomStockList {
    bottom: 150%;
  }

  .tooltipCustomStockList .tooltiptextCustomStockList::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #272727 transparent transparent transparent;
  }

  .tooltipCustomStockList
    .tooltiptextCustomStockList.tooltiptextBottomStockList::after {
    bottom: 140%;
    top: -55%;
    left: 50%;
    border-color: transparent transparent #272727 transparent;
  }

  .tootipCustomStockLlistIndustry .tooltiptextCustomStockList::after {
    top: 100%;
    left: 75%;
  }

  .tootipCustomStockLlistRank .tooltiptextCustomStockList::after {
    top: 100%;
    left: 10%;
  }

  .tooltipCustomStockList:hover .tooltiptextCustomStockList {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    transition: opacity 0.15s linear;
  }

  /* ticker already in portfolio */

  .table-component-column-company-ticker-is-in-portfolio {
    margin-left: 8px;
    display: inline-block;
    border-radius: 4px;
    height: 14px;
    text-align: center;
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .table-component-column-company-ticker-is-a-trade-idea {
    margin-left: 8px;
    display: inline-block;
    border-radius: 4px;
    height: 14px;
    text-align: center;
    position: relative;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .table-component-black-check-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 9px;
    width: 10px;
  }

  .table-component-column-company-ticker-is-in-portfolio:hover {
    background-color: var(--clr-lowgrey);
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip {
    visibility: hidden;
    position: absolute;
    display: inline-block;
    background-color: var(--clr-txt);
    min-width: 150px;
    padding: 4px 5px;
    border-radius: 5px;
    color: var(--clr-light);
    text-align: left;
    margin-left: 18px;
    top: -8px;
    z-index: 99999;
    font-family: var(--ff-primary);
    font-size: var(--fs-tooltip) !important;
    line-height: var(--lh-tooltip) !important;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip.my-portfolio-tooltip {
    padding: 9px;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip::after,
  .table-component-column-company-ticker-is-in-portfolio-over::after {
    content: "";
    position: absolute;
    top: 12px;
    left: -10px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #272727 transparent transparent;
  }

  .table-component-column-company-ticker-is-in-portfolio:hover
    .table-component-column-company-ticker-is-in-portfolio-tooltip {
    visibility: visible;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip a {
    color: var(--clr-light) !important;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip-item {
    display: flex;
    align-items: center;
    margin-top: 7px;
    padding-left: 7px;
  }
  .table-component-column-company-ticker-is-in-portfolio-tooltip-item a {
    padding-left: 4px;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip-item span {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    display: flex;
  }

  .table-component-column-company-ticker-is-in-portfolio-tooltip-item img {
    width: 14px;
    height: 11px;
  }

  .table-component-column-company-ticker-is-in-portfolio-over {
    visibility: hidden;
  }
  /* / ticker already in portfolio  */

  .table-component-content-wrapper {
    position: relative;
  }

  .table-component-white-background-border {
    display: none;
  }

  /* ALPHA SIGNALS COLUMN */

  .table-component-alpha-col-dropdown-mobile {
    display: none;
  }

  .table-component-alpha-col-title {
    max-width: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table-component-alpha-col-dropdown-mobile-header {
    display: none;
  }

  .compare_page_border {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    overflow: hidden;
  }

  /* columns sizing with the alpha extra column */

  .table-component-with-alpha-column .table-component-column-rank,
  .table-component-with-alpha-column
    .table-component-data.table-component-column-rank
    span:first-child,
  .table-component-with-alpha-column
    .table-component-data-head.table-component-column-rank
    span:first-child,
  .table-component-with-alpha-column
    .table-component-data-head.table-component-column-rank {
    width: 70px;
    max-width: 70px;
    min-width: 70px;
  }

  .table-component-column-rank span {
    padding-left: 31px;
    padding-right: 11px;
  }

  .table-component-with-alpha-column .table-component-company-column,
  .table-component-with-alpha-column .table-component-column-company {
    min-width: 227px;
    width: 227px;
    max-width: 227px;
  }

  .ticker-etf-portfolio .table-component-column-company {
    min-width: 232px;
    width: 232px;
    max-width: 232px;
  }

  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-company-column,
  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-company {
    min-width: 232px;
    width: 232px;
    max-width: 232px;
  }

  .table-component-with-alpha-column .table-component-company-colum {
    padding-left: 10px;
  }

  .table-component-content
    .table-component-with-alpha-column
    .table-component-data.table-component-column-industry,
  .table-component-content
    .table-component-with-alpha-column
    .table-component-data.table-component-column-sector {
    padding-left: 7px;
  }

  .table-component-with-alpha-column .table-component-column-country-desktop,
  .table-component-with-alpha-column .table-component-column-country-mobile {
    width: 82px;
  }

  .table-component-with-alpha-column
    .table-component-data-head.table-component-column-score,
  .table-component-with-alpha-column
    .table-component-data.table-component-column-score,
  .table-component-content
    .table-component-with-alpha-column
    .table-component-doughnuts {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
  }

  .table-component-with-alpha-column .table-component-column-change {
    width: 76px;
  }

  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-change {
    width: 80px;
  }

  .table-component-with-alpha-column .table-component-column-technical,
  .table-component-with-alpha-column .table-component-column-sentiment,
  .table-component-with-alpha-column .table-component-column-fundamental {
    width: 84px;
  }

  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-fundamental {
    width: 86px;
  }

  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-technical,
  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-sentiment {
    width: 86px;
  }

  .table-component-with-alpha-column .table-component-column-risk {
    width: 80px;
  }

  .table-component-alpha-col {
    text-align: center;
    width: 88px;
    max-width: 88px;
  }

  .add-to-portfolio-column .table-component-alpha-col,
  .ticker-etf-portfolio .table-component-alpha-col {
    width: 92px;
    max-width: 92px;
  }

  .table-component-with-alpha-column .table-component-column-sector,
  .table-component-with-alpha-column .table-component-column-industry {
    width: 130px;
    max-width: 130px;
  }

  .table-component-with-alpha-column .table-component-column-sector,
  .table-component-with-alpha-column .table-component-column-industry {
    width: 130px;
    max-width: 130px;
  }

  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-sector,
  .table-component-with-alpha-column.add-to-portfolio-column
    .table-component-column-industry {
    width: 161px;
    max-width: 161px;
  }

  .table-component-with-alpha-column .table-component-portfolio {
    width: 64px;
  }

  /* / columns sizing with the alpha extra column */

  .table-component-alpha-col-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 4px 0 4px;
    width: 100%;
  }

  .table-component-alpha-col-title {
    width: 100%;
  }

  .table-component-alpha-col-content img {
    margin-left: 4px;
  }

  .table-component-alpha-col-image-hover {
    display: none;
  }

  .table-component-alpha-col-image-container:hover
    .table-component-alpha-col-image {
    display: none;
  }

  .table-component-alpha-col-image-container:hover
    .table-component-alpha-col-image-hover {
    display: inline-block;
    cursor: pointer;
  }

  .table-component-industry-dropdown.table-component-industry-dropdown-hidden {
    display: none;
  }

  .table-component-alpha-col-dropdown,
  .table-component-industry-dropdown {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 48px;
    background-color: var(--clr-light);
    color: var(--clr-txt);
    text-transform: none;
    width: 188px;
    border-radius: 8px;
    z-index: 1;
    padding: 11px 0;
    box-shadow: 0 0 12px 0 rgba(179, 179, 179, 0.5);
    max-height: 322px;
    overflow-y: scroll;
  }
  .table-component-alpha-col-dropdown__top {
    margin-top: 48px;
  }
  .table-component-alpha-col-dropdown__short,
  .table-component-industry-dropdown__short {
    width: 170px;
  }
  .table-component-focus-dropdown {
    overflow: hidden;
  }

  .small_height {
    max-height: 277px;
  }

  .table-component-alpha-col-item,
  .table-component-industry-dropdown-item {
    height: 42px;
    display: flex;
    align-items: center;
    text-align: left;
    width: 100%;
    font-family: var(--ff-primary);
    font-size: 14px;
    padding: 0 12px;
    cursor: pointer;
    justify-content: space-between;
    color: var(--clr-txt);
  }

  .table-component-industry-dropdown-item {
    text-transform: capitalize;
  }

  .table-component-alpha-col-item:hover,
  .table-component-industry-dropdown-item:hover {
    background-color: var(--clr-limitationModal);
  }

  .table-component-alpha-col-item,
  .table-component-industry-dropdown-item {
    border-top: 1px solid var(--clr-border);
  }

  .table-component-alpha-col-item:last-child,
  .table-component-industry-dropdown-item:last-child {
    border-bottom: 1px solid var(--clr-border);
  }

  .table-component-alpha-col-item.table-component-alpha-col-chosen-item,
  .table-component-industry-dropdown-item.table-component-industry-dropdown-chosen-item {
    background-color: var(--clr-aiScoreColumn);
    color: var(--clr-txt);
  }

  .table-component-alpha-col-chosen-item img,
  .table-component-industry-dropdown-item img,
  .table-component-blue-check {
    width: 13px;
    height: 13px;
  }

  .industry-col-empty {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .positive {
    color: var(--clr-green);
  }

  .negative {
    color: var(--clr-red);
  }

  .table-component-footer-container {
    border-top: 2px solid var(--clr-border);
    border-bottom: 2px solid var(--clr-border);
  }

  .blur-effect {
    filter: blur(3px);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* / ALPHA SIGNALS COLUMN */

  @media (max-width: 1070px) {
    .table-component-content .table-container .table-component-data-head:hover {
      background-color: var(--clr-newDarkgrey);
    }

    .pl-20 {
      padding-left: 0px;
    }

    .table-component-content .table-container {
      max-width: initial;
      width: auto;
      min-width: 100%;
    }

    .table-component-header .tooltiptextCustomStockList {
      display: none;
    }

    .table-component-trash .tooltiptextCustomStockList {
      display: none;
    }

    .table-component-container {
      border-radius: 0px;
      border-left: 0px;
      border-right: 0px;
      padding: 0;
      position: initial;
    }

    .tootipCustomStockLlistDoubleSize .tooltiptextCustomStockList {
      width: 200%;
      left: -55%;
    }

    .table-component-header-section {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      font-size: 16px;
      margin-left: 0;
      margin-right: 0;
    }

    .table-component-content {
      width: 100vw;
      max-width: 100vw;
      overflow-x: scroll;
      overflow-y: hidden;
    }

    .compare_page_border {
      border-top-right-radius: 0px;
      border-top-left-radius: 0px;
    }

    .table-component-column-company-ticker-is-in-portfolio:hover
      .table-component-column-company-ticker-is-in-portfolio-tooltip-desktop {
      visibility: hidden;
    }

    .table-component-column-company-ticker-is-in-portfolio-tooltip {
      background-color: transparent;
      pointer-events: initial;
    }

    .table-component-column-company-ticker-is-in-portfolio-tooltip:not(
        .table-component-column-company-ticker-is-in-portfolio-tooltip.table-component-column-company-ticker-is-in-portfolio-over
      )::after {
      border-color: transparent;
    }

    .table-component-column-company-ticker-is-in-portfolio-over {
      visibility: visible;
      z-index: 9999;
      background-color: var(--clr-txt);
      pointer-events: initial;
      margin-top: 10px;
    }

    .table-component-shadow-background {
      position: absolute;
      z-index: 2;
      left: 180px;
      top: 0;
      height: 100%;
      width: 20px;
      box-shadow: 5px 0 10px -6px rgb(0 0 0 / 29%);
    }

    .table-component-with-alpha-column .table-component-shadow-background {
      left: 180px;
    }

    .portfolio-table-container .table-component-shadow-background {
      left: 131px;
    }

    .table-component-white-background {
      background-color: var(--clr-light);
      position: absolute;
      top: 44px;
      left: 0;
      bottom: 0;
      width: 200px;
      z-index: 99;
    }

    .table-component-container {
      overflow: hidden;
    }

    .table-component-content .table-component-data-head {
      background-color: var(--clr-tableSpanHover);
    }

    .table-component-content .table-component-data-head {
      background-color: var(--clr-tableSpanHover);
    }

    .table-component-content .table-component-body .table-component-row,
    .table-component-content .table-container .table-component-body {
      border-left: 0px;
      border-right: 0px;
    }

    .table-component-header .table-component-column-rank {
      border-right: 1px solid var(--clr-tableBorder) !important;
    }

    .table-component-body
      .table-component-row
      .table-component-column-rank
      span {
      padding-left: 10px;
      padding-right: 11px;
    }

    .table-component-content .table-container {
      width: fit-content;
    }

    .table-component-column-country-desktop {
      position: relative;
    }

    .table-component-column-rank,
    .table-component-footer-title,
    .table-component-content
      .table-component-data-head.table-component-column-rank,
    .table-component-content
      .table-component-data-head.table-component-footer-title {
      position: absolute;
      position: -webkit-absolute;
      left: 0px;
      margin-bottom: 2px;
      z-index: 100;
      border-style: none;
      border-collapse: collapse;
      width: 50px;
      max-width: 50px;
      min-width: 50px;
    }

    .table-component-column-rank,
    .table-component-data.table-component-column-rank span:first-child,
    .table-component-data-head.table-component-column-rank span:first-child,
    .table-component-data-head.table-component-column-rank {
      width: 50px;
      max-width: 50px;
      min-width: 50px;
      padding-left: 9px;
    }

    .table-component-data-head.table-component-column-rank,
    .table-component-data-head.table-component-column-company {
      display: flex;
      justify-content: center;
      align-items: center;
      top: 1px;
    }

    .table-component-with-alpha-column.add-to-portfolio-column
      .table-component-column-company {
      width: 151px;
      max-width: 151px;
      min-width: 151px;
    }

    .table-component-content .table-component-data-head {
      position: relative;
    }

    .table-component-footer-title {
      background-color: var(--clr-light);
    }

    .table-component-body .table-component-column-rank {
      background-color: var(--clr-light);
      height: 70px;
      max-height: 70px !important;
      min-height: 70px;
    }

    .table-component-data-head.table-component-column-rank {
      background-color: var(--clr-newDarkgrey);
    }

    .table-component-data-head.table-component-column-company,
    .table-component-data.table-component-column-company {
      position: absolute;
      left: 49px;
      z-index: 2;
    }

    .portfolio-table-container
      .table-component-data-head.table-component-column-company,
    .portfolio-table-container
      .table-component-data.table-component-column-company {
      left: 0px;
    }

    .table-component-data-head.table-component-column-company {
      width: 100%;
      max-width: 151.5px;
    }

    .table-component-column-score {
      padding: 0 0 0 200px !important;
    }

    .table-component-body .table-component-data.table-component-column-company {
      z-index: 98;
      height: 60px;
    }

    .table-component-data-head.table-component-column-company {
      background-color: var(--clr-newDarkgrey);
      z-index: 97;
    }

    .table-component-column-country-mobile {
      display: flex !important;
    }

    .table-component-column-country-desktop {
      display: none !important;
    }

    .table-component-content
      .table-component-body
      .table-component-row:not(:last-child) {
      border-bottom: 0.8px solid var(--clr-border);
    }

    .table-component-column-company-ticker-is-in-portfolio-tooltip {
      max-width: 53vw;
    }

    @supports (-webkit-touch-callout: none) {
      .table-component-content
        .table-component-body
        .table-component-row:not(:last-child) {
        border-bottom: 1px solid var(--clr-border);
      }
    }

    .table-component-text-no-data-content {
      max-width: 100vw;
    }

    .table-component-no-stocks-portfolio {
      padding: 30px 40px;
    }

    .table-component-container-empty
      .table-component-content
      .table-component-header {
      display: none;
    }

    .table-component-container.table-component-container-empty,
    .table-component-container-empty .table-container {
      border-radius: 0;
    }

    /* columns sizig */
    .table-component-column-rank {
      width: 50px;
      margin-left: 0;
    }

    .table-component-column-company
      div:not(
        div.table-component-column-company-ticker-is-in-portfolio-tooltip-item,
        div.table-component-column-company-ticker-is-in-portfolio-tooltip-title
      ),
    .portfolio-table-container .table-component-column-company div,
    .portfolio-table-container
      .table-component-data-head.table-component-column-company,
    .table-component-data-head.table-component-column-company,
    .table-component-data.table-component-column-company {
      width: 150px;
      min-width: 150px;
      max-width: 150px;
    }

    .table-component-company-colum {
      padding-right: 5px;
    }

    .table-component-company-colum .table-component-company-name {
      font-size: 12px;
      display: inline-block;
      width: 131px;
      min-width: 131px;
      max-width: 131px;
    }

    .table-component-white-background-border {
      border-bottom: 1px solid var(--clr-border);
      height: 70px;
      width: 100%;
      display: inline-block;
    }

    .table-component-column-country-desktop span,
    .table-component-column-country-mobile span {
      width: 100px;
    }

    .table-component-body .table-component-column-score span:first-child {
      width: 100px;
    }

    .table-component-column-change {
      width: 75px;
      padding: 0 10px;
    }

    .table-component-column-fundamental,
    .table-component-column-technical,
    .table-component-column-sentiment,
    .table-component-column-risk {
      width: 83px;
    }

    .table-component-column-fundamental span:first-child,
    .table-component-column-technical span:first-child,
    .table-component-column-sentiment span:first-child,
    .table-component-column-risk span:first-child {
      display: flex;
      width: 83px;
    }

    .table-component-column-sector {
      width: 125px;
    }

    .table-component-column-industry,
    .table-component-column-industry a {
      width: 135px;
    }

    .table-component-column-industry a {
      display: flex;
      width: 105px;
      justify-content: center;
    }

    .table-component-data.table-component-column-gain .column-gain-content {
      width: 63px;
    }

    .table-component-trash span {
      margin-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
    }

    .table-component-content .table-component-data-head {
      height: 48px;
    }

    .table-component-content
      .table-component-data-head.table-component-column-rank,
    .table-component-content
      .table-component-data-head.table-component-column-company {
      height: 48px;
    }

    .table-component-column-country-mobile span.tooltipCustomStockList {
      height: 70px;
    }

    .table-component-doughnuts {
      z-index: 96;
    }

    .table-component-content .table-component-data,
    .table-component-content .table-component-row .table-component-data,
    .table-component-content .table-component-doughnuts,
    .table-component-body .table-component-column-rank {
      height: 70px;
      max-height: 70px;
    }

    .table-component-data.no-tickers {
      position: absolute;
      right: 0;
      left: 0;
      background-color: var(--clr-light);
      z-index: 9;
      width: 100vw;
    }

    .table-component-body .table-component-column-rank span {
      height: 100%;
      border-bottom: 0;
    }

    /* / columns sizig */

    .table-component-header-section {
      height: auto;
    }

    .table-component-header-section span {
      padding-left: 14px;
      font-size: 18px;
      padding-top: 30px;
      padding-bottom: 15px;
    }

    /* tooltips */

    .doughnut-component-container.tooltipCustomStockList
      .tooltiptextCustomStockList {
      bottom: 150%;
      width: 45vw;
      max-width: 240px;
      left: -35px;
      z-index: 1;
    }

    .doughnut-component-container.tooltipCustomStockList
      .tooltiptextCustomStockList::after {
      top: 100%;
      left: 52px;
      margin-left: -7px;
    }

    .tooltipCustomStockList.tooltipCustomStockListChangeFooter
      .tooltiptextCustomStockList {
      width: 200%;
      left: 0;
      right: 0;
    }

    .tooltipCustomStockListChangeFooter.tooltipCustomStockList
      .tooltiptextCustomStockList::after {
      top: 100%;
      left: 25px;
      margin-left: 0;
    }

    .tooltipCustomStockList
      .tooltiptextCustomStockList.tooltiptextCustomGainFooter {
      width: 200%;
      left: 0;
    }

    .tooltipCustomStockList
      .tooltiptextCustomStockList.tooltiptextCustomGainFooter::after {
      left: 20%;
      right: initial;
    }

    .table-component-content
      .table-component-body
      .table-component-row:first-child
      .doughnut-component-container.tooltipCustomStockList
      .tooltiptextCustomStockList {
      width: 25vw;
      max-width: 170px;
      left: 45px;
      top: -35px;
      bottom: -85px;
      height: auto;
    }

    .table-component-content
      .table-component-body
      .table-component-row:first-child
      .doughnut-component-container.tooltipCustomStockList
      .tooltiptextCustomStockList::after {
      left: -2px;
      top: 45px;
      border-color: transparent #272727 transparent transparent;
    }

    .table-component-portfolio-img-container.tooltipCustomStockList:hover
      .tooltiptextCustomStockList {
      display: none;
    }

    .table-component-content
      .table-component-body
      .table-component-company-colum
      img.tooltiptextCustomStockList {
      display: none;
    }

    .table-component-content
      .table-component-footer-container
      .table-component-data.table-component-footer-title {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 10px;
      width: 100%;
      max-width: 199px;
    }

    .portfolio-table-container
      .table-component-content
      .table-component-footer-container
      .table-component-data.table-component-footer-title {
      max-width: 151px;
    }

    table-component-content
      .table-component-footer-container
      .table-component-with-alpha-column
      .table-component-data.table-component-footer-title {
      max-width: 171px;
    }

    .table-component-content
      .table-component-footer-container
      .table-component-data.table-component-footer-title {
      min-width: auto !important;
    }

    .table-component-footer-container
      .table-component-data:not(:first-child, :last-child) {
      border-top: 0;
    }

    .table-component-content-loading {
      border: none;
      border-bottom: 1px solid var(--clr-border);
      border-radius: 0px !important;
    }

    /* ALPHA SIGNALS COLUMN */

    .table-component-alpha-col-dropdown,
    .table-component-industry-dropdown {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 100vw;
      min-height: 100vh;
      height: 100%;
      z-index: 999999999999999;
      background-color: var(--clr-light);
      padding: 0;
      margin-top: 0;
      border-radius: 0;
    }

    .table-component-alpha-col-item,
    .table-component-industry-dropdown-item {
      font-size: 15px;
      height: 60px;
    }

    .table-component-alpha-col-item:last-child {
      border-bottom: 1px solid var(--clr-border);
      margin-bottom: 33px;
    }

    .table-component-alpha-col-dropdown-mobile-header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      padding: 15px 12px 7px;
      text-align: left;
      color: #838e91;
      border-bottom: 1px solid var(--clr-border);
      font-size: 12px;
    }

    .table-component-alpha-col-dropdown-mobile-header-image {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
    }

    .table-component-alpha-col-dropdown-mobile-header-image img {
      width: 15px;
      height: 15px;
    }

    /* columns sizing with the alpha extra column */

    .table-component-with-alpha-column .table-component-column-rank,
    .table-component-with-alpha-column
      .table-component-data.table-component-column-rank
      span:first-child,
    .table-component-with-alpha-column
      .table-component-data-head.table-component-column-rank
      span:first-child,
    .table-component-with-alpha-column
      .table-component-data-head.table-component-column-rank {
      width: 50px;
      max-width: 50px;
      min-width: 50px;
    }

    .table-component-with-alpha-column .table-component-company-column,
    .table-component-with-alpha-column
      .table-component-data-head.table-component-column-company,
    .table-component-with-alpha-column
      .table-component-column-company
      div:not(
        div.table-component-column-company-ticker-is-in-portfolio-tooltip-item,
        .table-component-with-alpha-column
          div.table-component-column-company-ticker-is-in-portfolio-tooltip-title
      ) {
      min-width: 151px;
      max-width: 151px;
      width: 151px;
    }

    .table-component-with-alpha-column .table-component-company-colum {
      padding-left: 10px;
    }

    .table-component-content
      .table-component-with-alpha-column
      .table-component-data.table-component-column-industry,
    .table-component-content
      .table-component-with-alpha-column
      .table-component-data.table-component-column-sector {
      padding-left: 7px;
    }

    .table-component-with-alpha-column .table-component-column-country-mobile,
    .table-component-with-alpha-column
      .table-component-column-country-mobile
      span {
      width: 62px;
    }

    .table-component-portfolio {
      width: 72px;
    }

    .table-component-data-head.table-component-column-score {
      width: 302px;
    }

    .table-component-with-alpha-column
      .table-component-data-head.table-component-column-score,
    .table-component-with-alpha-column
      .table-component-data.table-component-column-score {
      width: calc(94px + 201px);
      min-width: calc(94px + 201px);
      max-width: calc(94px + 201px);
    }

    .table-component-content
      .table-component-with-alpha-column
      .table-component-doughnuts {
      width: 94px;
      min-width: 94px;
      max-width: 94px;
    }

    .table-component-with-alpha-column .table-component-column-score {
      padding-left: 201px !important;
    }

    .table-component-with-alpha-column .table-component-column-change,
    .table-component-with-alpha-column .table-component-column-risk,
    .table-component-with-alpha-column .table-component-column-technical,
    .table-component-with-alpha-column .table-component-column-sentiment {
      width: 72px;
      min-width: 72px;
    }

    .table-component-with-alpha-column .table-component-column-fundamental {
      width: 82px;
    }

    .table-component-alpha-col {
      text-align: center;
      width: 94px;
      max-width: 94px;
      min-width: 94px;
    }

    .table-component-with-alpha-column .table-component-column-sector,
    .table-component-with-alpha-column .table-component-column-industry {
      width: 135px;
      max-width: 135px;
      min-width: 135px;
    }

    /* / columns sizing with the alpha extra column */

    .table-component-alpha-col-dropdown-desktop {
      display: none;
    }

    .table-component-alpha-col-dropdown-mobile {
      display: block;
    }

    /*/ ALPHA SIGNALS COLUMN */
  }

  @media (max-width: 770px) {
    .table-component-with-alpha-column
      .table-component-column-country-mobile
      .tooltipCustomStockList
      .tooltiptextCustomStockList {
      display: none;
    }
  }

  @media (max-width: 374px) {
    .table-component-column-company-ticker-is-in-portfolio {
      white-space: normal;
    }

    .table-component-column-company-ticker-is-a-trade-idea {
      white-space: normal;
    }

    .table-component-column-company-ticker-is-in-portfolio-over-last {
      margin-top: -180px;
    }

    .table-component-column-company-ticker-is-in-portfolio-over-last::after {
      bottom: 24px;
      top: initial;
    }

    .table-component-portfolio {
      justify-content: right !important;
    }

    .table-component-company-colum .table-component-company-name {
      font-size: 12px;
      line-height: 16px;
    }

    .table-component-portfolio-img-container {
      margin-right: 23px;
    }
  }
`;

export const dropdownCSS = css`
  .should-disable {
    color: var(--clr-txtgrey);
  }

  .selected-filter {
    background: var(--clr-aiScoreColumn);
  }

  .body-text-size {
    font-size: 14px !important;
    font-family: var(--ff-primary) !important;
  }

  .loss-container-body {
    height: 60px;
    border-bottom: 1px solid var(--clr-border);
    padding: 0 15px;
  }

  .loss-item {
    height: 100%;
  }

  .loss-item > span {
    color: black;
  }
`;

export const homeTable = css`
  .table-component-with-alpha-column .table-component-company-column,
  .table-component-with-alpha-column .table-component-column-company {
    width: 232px;
    min-width: 232px;
    max-width: 232px;
  }

  .table-component-with-alpha-column .table-component-column-change {
    width: 80px;
  }

  .table-component-with-alpha-column .table-component-column-technical,
  .table-component-with-alpha-column .table-component-column-sentiment,
  .table-component-with-alpha-column .table-component-column-fundamental {
    width: 86px;
  }

  .table-component-alpha-col {
    width: 118px;
    max-width: 118px;
  }

  @media (max-width: 770px) {
    .table-component-with-alpha-column .table-component-company-column,
    .table-component-with-alpha-column .table-component-column-company {
      width: 154px;
      min-width: 154px;
      max-width: 154px;
    }

    .table-component-with-alpha-column
      .table-component-data-head.table-component-column-score,
    .table-component-with-alpha-column
      .table-component-data.table-component-column-score {
      width: calc(80px + 154px + 70px);
      min-width: calc(80px + 154px + 70px);
      max-width: calc(80px + 154px + 70px);
    }
  }
`;
export const blankHomeTable = css``;
