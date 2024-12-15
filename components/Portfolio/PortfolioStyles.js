import css from "styled-jsx/css";

export default css`
  .portfolio-details-page-container {
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: 75px;
  }

  .portfolio-page-content-wrapper {
    background-color: var(--clr-light);
    width: 100%;
    border-radius: 6px;
  }

  .portfolio-exit-button {
    width: 100%;
    text-align: right;
  }

  ${
    "" /* .save-btn-new-portfolio {
    display: flex;
    justify-conten: center;
    align-items: center;
    position: relative;
  } */
  }

  .save-btn-new-portfolio {
    position: relative;
  }

  .save-btn-new-portfolio-spinner-button {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .save-btn-new-portfolio-spinner-button .spinner-border {
    border-width: 0.2em;
  }

  .spinner-save-popup-modal {
    position: absolute;
    right: 10px;
  }

  .portfolio-exit-button img {
    cursor: pointer;
  }

  .portfolio-top-logo-danelfin {
    padding: 14px 0 22px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .portfolio-top-logo-danelfin img {
    width: 138px;
    height: 43px;
  }

  .portfolio-inputs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--clr-light);
    position: relative;
  }

  .portfolio-modal-notification-container {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 100;
    overflow-y: scroll;
  }

  .portfolio-modal-notification-container .portfolio-modal-notification-body {
    background-color: var(--clr-light);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 12px;
    border-radius: 8px;
    text-align: center;
    padding: 33px 13px 12px;
    margin-top: 50%;
    font-size: 16px;
    font-family: var(--ff-primary);
  }

  .portfolio-modal-notification-buttons div {
    width: 157px;
    height: 45px;
    border-radius: 6px;
    font-family: var(--ff-medium);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .portfolio-modal-notification-buttons div:first-child {
    background-color: var(--clr-light);
    border: 1px solid var(--clr-border);
  }

  .portfolio-modal-notification-buttons div:last-child {
    background-color: var(--clr-accent);
    border: 1px solid var(--clr-accent);
    color: var(--clr-light);
  }

  .portfolio-modal-notification-text {
    padding: 0 17px;
  }

  .portfolio-modal-notification-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 28px;
  }

  .form-inner-portfolio-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form-inner-portfolio-section h1,
  .form-inner-portfolio-section h2 {
    text-align: center;
    font-size: 22px;
    font-family: var(--ff-bold);
    margin-bottom: 13px;
  }

  .portfolio-subtitle {
    text-align: center;
    font-size: 14px;
    margin: 0 0 21px;
    max-width: 301px;
  }

  .portfolio-subtitle a {
    text-decoration: underline !important;
  }

  .portfolio-form .content-tickers-searching {
    max-width: 351px;
  }

  .input-red {
    border: 1px solid var(--clr-red) !important;
  }

  .spinner-save-popup-modal {
    width: 25px;
    height: 25px;
  }

  .portfolio-details-modal-body-wrapper {
    height: 100%;
  }

  .portfolio-market-radio-buttons-items label {
    text-align-last: left;
  }

  .portfolio-form-group label,
  .portfolio-market-radio-buttons-title {
    margin-bottom: 0;
    font-size: 14px;
    max-width: 100%;
    text-align: left;
  }

  .portfolio-market-radio-buttons-title {
    display: flex;
    align-items: center;
    height: 100%;
  }

  label.portfolio-form-group-label {
    margin-bottom: 7px;
  }

  .portfolio-market-radio-buttons-title {
    display: block;
    margin-bottom: 0px;
  }

  .portfolio-radio-market-title {
    text-align-last: left !important;
    width: fit-content;
  }

  .portfolio-form input[type="radio"] {
    width: 18px;
    height: 18px;
  }

  .portfolio-market-radio-buttons-items {
    width: 100%;
    max-width: 330px;
  }

  .portfolio-market-radio-buttons-items,
  .portfolio-market-radio-buttons-items span,
  .portfolio-market-radio-buttons-items span div {
    display: flex;
    align-items: center;
  }

  .portfolio-market-radio-buttons-items span {
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .portfolio-market-radio-buttons {
    display: flex;
    flex-direction: row;
  }

  .portfolio-form-group + .portfolio-form-group {
    margin-top: 17px;
  }

  .portfolio-form-group
    input:not(.portfolio-form-group input.portfolio-radio-input) {
    width: 100%;
    height: 45px;
    max-width: 351px;
    border-radius: 5px;
    border: 1px solid var(--clr-txtgrey);
    background-color: var(--clr-background);
    padding: 10px;
  }

  .portfolio-form-group
    input:not(.portfolio-form-group input.portfolio-radio-input):focus-visible {
    color: var(--clr-txt);
    border-radius: 6px;
  }

  .portfolio-form-group .search-input-nav {
    width: 100%;
  }

  .portfolio-radio-input {
    margin-right: 4px;
    margin-left: 20px;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .portfolio-form-recommended {
    max-width: 351px;
  }

  .portfolio-form-group input:focus {
    background-color: var(--clr-aiScoreColumn);
    border: 1px solid var(--clr-txtgrey);
    outline: none;
  }

  .portfolio-submit-button-valid {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 19px auto 0;
    max-width: 440px;
  }

  .portfolio-submit-button-valid a,
  .portfolio-submit-button-valid a:hover {
    text-decoration: none;
  }

  .portfolio-submit-button-valid span {
    cursor: pointer;
  }

  .portfolio-submit-button-valid span,
  .portfolio-submit-button-valid input,
  .portfolio-submit-button-valid .spinner-container-portfolio,
  .portfolio-submit-button-valid button {
    width: 100%;
    height: 40px;
    max-width: 440px;
    border-radius: 6px;
    border: none;
    background-color: var(--clr-accent);
    color: var(--clr-light);
    font-size: 17px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portfolio-error-message {
    text-align: center;
    border: 1px solid var(--clr-red);
    border-radius: 6px;
    padding: 12px 30px 9px;
    font-family: var(--ff-primary);
    font-size: 14px;
    line-height: 18px;
    color: var(--clr-txt);
    width: 440px;
    max-width: 90vw;
    margin: 9px auto 20px;
  }

  .portfolio-error-message a {
    text-decoration: underline;
  }

  .portfolio-footer-skip {
    text-align: center;
    color: var(--clr-links);
    text-decoration: underline;
    padding-top: 26px;
    padding-bottom: 15px;
    line-height: 18px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .portfolio-footer-skip a {
    font-size: 14px;
  }

  .portfolio-market-recomendation-container {
    display: flex;
    justify-content: center;
    align-items: center !important;
    flex-direction: column !important;
  }

  .portfolio-market-recomendation-container span {
    margin-bottom: 5px;
  }

  .portfolio-market-recomendation-item-europe
    + .portfolio-market-recomendation-item-europe::before,
  .portfolio-market-recomendation-item
    + .portfolio-market-recomendation-item::before {
    content: "";
    border-right: 1px solid #3a608d !important;
    margin-top: 5px;
  }

  .portfolio-market-recomendation-item
    + .portfolio-market-recomendation-item::before {
    margin: 0 10px;
  }

  .portfolio-market-recomendation-item-europe
    + .portfolio-market-recomendation-item-europe::before {
    margin: 0 5px;
  }

  .portfolio-market-recomendation-item,
  .portfolio-market-recomendation-item-europe {
    color: var(--clr-links);
    text-decoration: underline;
    cursor: pointer;
  }

  .portfolio-radio-input-container {
    width: 18px;
    height: 18px;
  }

  .portfolio-form-group input:focus-visible {
    background-color: var(--clr-aiScoreColumn) !important;
    -webkit-outline-radius: 5px;
    -moz-outline-radius: 5px;
    border-radius: 5px;
    border: 1px solid var(--clr-accent) !important;
  }

  .portfolio-tickers-chosen-item {
    width: 100%;
    max-width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
    margin: 0 auto;
  }

  .portfolio-tickers-chosen-item {
    background-color: var(--clr-light);
  }
  .portfolio-tickers-chosen-item.portfolio-tickers-chosen-item-new,
  .create-first-portfolio-tickers-searching .portfolio-tickers-chosen-item {
    background-color: #eef4ff;
  }

  .portfolio-tickers-chosen-item {
    border-bottom: 1px solid var(--clr-border);
  }
  .portfolio-tickers-chosen-item:first-child {
    border-top: 1px solid var(--clr-border);
  }

  .portfolio-tickers-chosen-item-ticker {
    font-family: var(--ff-bold);
    font-size: 16px;
  }

  .portfolio-tickers-chosen-item-company {
    font-family: var(--ff-primary);
    font-size: 12px;
  }

  .mobile-popup-body {
    background-color: var(--clr-light);
    border-radius: 6px;
    height: 100%;
  }

  .portfolio-ico-trash {
    display: inline-block;
    cursor: pointer;
    width: 15px;
    height: 18px;
  }

  .portfolio-ico-trash-container:hover .portfolio-ico-trash {
    display: none;
  }

  .portfolio-ico-trash-hover {
    display: none;
    cursor: pointer;
  }

  .portfolio-ico-trash-container:hover .portfolio-ico-trash-hover {
    display: inline-block;
  }

  /* empty portfolio secction */

  .empty-portfolio-image-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .empty-portfolio-image-container img {
    width: 116px;
    height: 90px;
    margin-bottom: 25px;
  }

  .empty-portfolio-content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .empty-portfolio-content-wrapper .portfolio-top-logo-danelfin {
    padding-bottom: 21px;
  }

  .empty-portfolio-content-wrapper .portfolio-subtitle {
    font-size: 18px;
    max-width: 468px;
  }

  .portfolio-empty-content-wrapper {
    background-color: var(--clr-light);
    border-radius: 6px;
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 380px;
    padding: 0 20px;
  }

  .empty-portfolio-submit-button-valid {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3px;
    margin-bottom: 34px;
  }

  .empty-portfolio-submit-button-valid input,
  .empty-portfolio-submit-button-valid button {
    width: 100%;
    height: 40px;
    max-width: 440px;
    border-radius: 6px;
    border: none;
    background-color: var(--clr-accent);
    color: var(--clr-light);
    font-size: 17px;
    padding: 0px;
  }

  /* /empty portfolio section */

  /* successfully created section */

  .created-portfolio-content-wrapper {
    background-color: var(--clr-light);
    border-radius: 6px;
    width: 100%;
    height: 100%;
    max-width: 520px;
    max-height: 405px;
    padding: 0 20px;
  }

  .portfolio-created-image-container {
    display: flex;
    justify-content: center;
    margin-bottom: 24px;
  }

  .portfolio-created-content-wrapper .portfolio-subtitle {
    font-size: 18px;
    max-width: 468px;
    margin-bottom: 2px;
  }

  .portfolio-created-content-wrapper h1 {
    font-size: 22px !important;
  }

  /* / successfully created section */

  @media (max-width: 374px) {
    .portfolio-or-separation {
      max-width: 80px;
    }

    .portfolio-external-sources-buttons button {
      height: 45px;
      width: 30%;
    }

    .portfolio-form-group
      input:not(.portfolio-form-group input.portfolio-radio-input),
    .portfolio-form-group {
      max-width: 95vw;
    }

    .portfolio-market-recomendation-container div {
      font-size: 12px;
    }

    .portfolio-modal-notification-container .portfolio-modal-notification-body {
      max-width: 95vw;
    }

    .portfolio-modal-notification-buttons div {
      max-width: 40vw;
    }
  }

  @media (max-width: 770px) {
    .portfolio-page-container .portfolio-form {
      padding: 20px 0 40px;
      width: 100vw;
    }

    .portfolio-empty-content-wrapper,
    .empty-portfolio-content-wrapper {
      height: 100%;
      max-height: 568px;
      overflow-y: scroll;
      display: flex;
      justify-content: flex-start !important;
      align-items: center;
      padding: 0px;
    }

    .portfolio-page-container .portfolio-tickers-chosen-item {
      margin: 0;
      height: 70px;
      width: 100vw;
      max-width: 100vw;
      padding: 0 10px;
    }

    .portfolio-page-container .portfolio-tickers-chosen-item:last-child {
      margin-bottom: 30px;
    }

    .empty-portfolio-content-wrapper .portfolio-subtitle {
      max-width: 301px;
    }

    .empty-portfolio-content-wrapper .empty-portfolio-submit-button-valid {
      position: absolute;
      width: 351px;
      bottom: 20px;
      right: 0;
      left: 0;
      margin: 0 auto;
    }

    .portfolio-submit-button-valid button {
      position: absolute;
      width: 351px;
      bottom: 11px;
      right: 0;
      left: 50%;
      /* margin-left: -47.5vw !important; */
    }

    .portfolio-submit-button-valid {
      max-width: 351px;
      left: 50% !important;
    }

    .portfolio-modal-notification-container .portfolio-modal-notification-body {
      width: 351px;
      max-width: 95vw;
    }

    .portfolio-submit-button-valid span,
    .portfolio-submit-button-valid input,
    .portfolio-submit-button-valid .spinner-container-portfolio,
    .portfolio-submit-button-valid button {
      height: 45px;
    }

    .portfolio-tickers-chosen-item:first-child {
      margin: 8px auto 0;
    }

    .portfolio-tickers-chosen-item:last-child {
      margin-left: 0;
    }

    .portfolio-error-message {
      margin: 9px auto 30px;
      width: 351px;
      max-width: 95vw;
    }
  }

  @media (min-width: 770px) {
    .portfolio-form {
      height: 100%;
      min-height: auto;
    }
    .portfolio-page-content-wrapper {
      width: 520px;
      max-width: 520px;
    }
    .portfolio-page-content-wrapper {
      background-color: var(--clr-light);
      width: 100%;
      max-width: 520px;
      height: 567px;
      border-radius: 6px;
    }

    .portfolio-top-logo-danelfin {
      padding: 34px 0 18px;
    }

    .form-inner-portfolio-section h1,
    .form-inner-portfolio-section h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .portfolio-subtitle {
      margin-bottom: 24px;
      line-height: 22px;
      max-width: 395px;
    }

    .portfolio-forgot-password {
      margin: 7px 0 26px;
    }

    .portfolio-forgot-password a {
      margin: 0px;
    }

    .portfolio-form-group {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      max-width: 440px;
    }

    .portfolio-form-group label,
    .portfolio-market-radio-buttons-title {
      margin-bottom: 0;
      font-size: 14px;
      width: 100%;
      max-width: 97px;
      text-align: right;
      margin-right: 13px;
      white-space: nowrap;
    }

    .portfolio-radio-input {
      margin-left: 0px;
    }

    .portfolio-form-group
      input:not(.portfolio-form-group input.portfolio-radio-input),
    .portfolio-submit-button input {
      height: 40px;
      width: 330px;
    }

    .portfolio-form-group
      input:not(.portfolio-form-group input.portfolio-radio-input) {
      height: 40px;
      width: 330px;
      max-width: 330px;
      border-radius: 5px;
      padding: 10px;
      color: var(--clr-txt);
    }

    .portfolio-form-group
      + .portfolio-form-group:not(
        .portfolio-form-group.portfolio-tickers-chosen
      ) {
      margin-top: 23.5px;
    }

    .portfolio-external-sources-buttons button {
      height: 40px;
      width: 106px;
    }

    .portfolio-submit-button-valid input,
    .portfolio-submit-button-valid button {
      height: 40px;
      width: 440px;
    }

    .portfolio-form .content-tickers-searching {
      max-width: 331px;
    }

    .portfolio-inputs-container {
      padding: 0 40px;
    }

    .portfolio-market-radio-buttons-items {
      width: 330px;
    }

    .portfolio-footer-skip {
      padding-top: 26px;
      background-color: var(--clr-light);
      margin-bottom: 14px;
      padding-top: 24px;
      padding-bottom: 34px;
    }

    .portfolio-footer-skip a {
      font-size: 12px;
    }

    .portfolio-market-recomendation-item
      + .portfolio-market-recomendation-item::before {
      content: "";
      margin: 0 5px;
    }

    /* empty portfolio section */
    .portfolio-empty-content-wrapper {
      width: 520px;
    }

    /* / */

    .created-portfolio-content-wrapper {
      width: 520px;
    }

    .portfolio-tickers-chosen-item {
      max-width: 210px;
      height: 60px;
      border: 1px solid var(--clr-border);
      padding: 11px 10px;
      border-radius: 6px;
      margin-bottom: 10px;
    }

    .portfolio-tickers-chosen-item:nth-child(2n) {
      margin-left: 12px;
      margin-right: 0px;
    }

    .portfolio-tickers-chosen-item-ticker {
      font-size: 14px;
    }

    .portfolio-tickers-chosen-item-company {
      font-size: 10px;
    }

    .portfolio-error-message {
      margin: 11px auto;
      width: 100%;
      max-width: 440px;
    }
  }

  @media (max-width: 450px) {
    .portfolio-submit-button-valid span,
    .portfolio-submit-button-valid input,
    .portfolio-submit-button-valid .spinner-container-portfolio,
    .portfolio-submit-button-valid button,
    .portfolio-submit-button-valid {
      width: 95vw !important;
      max-width: 351px !important;
      left: 0 !important;
      margin: 0 auto;
      position: fixed;
      bottom: 10px;
      right: 0;
      left: 0;
    }
  }
`;

export const portfolioPageStyles = css`
  /* new table styles */

  .portfolio-table-container .table-component-column-company div,
  .portfolio-table-container th.table-component-column-company {
    max-width: 193px;
    width: 193px;
  }

  .portfolio-table-container .table-component-column-rank,
  .portfolio-table-container .table-component-column-rank span:first-child,
  .portfolio-table-container th.table-component-column-rank {
    width: 100%;
    min-width: auto;
  }

  .portfolio-table-container tbody td.table-component-column-rank span {
    width: 50px;
  }

  .portfolio-table-container
    tbody
    tr:first-child
    td.table-component-column-rank {
    margin-top: 1px;
  }

  .portfolio-table-container
    tbody
    tr:first-child
    td.table-component-column-rank
    span {
    height: 60px;
  }

  /* new table styles */

  .portfolio-table-container .table-component-column-company div {
    padding-left: 10px;
  }

  .portfolio-table-container .table-component-column-fundamental {
    max-width: 83px;
  }

  .portfolio-table-container
    .table-component-container.table-component-footer-border-radius {
    border-bottom: 0px;
  }

  .portfolio-table-container + .portfolio-table-total-companies {
    border-top: 1px solid var(--clr-border);
  }

  .portfolio-table-container .generic-table-component-container .bg-white {
    border: 1px solid var(--clr-border);
    border-radius: 8px;
  }

  .portfolio-table-container .generic-table-component-container {
    border-radius: 8px;
  }

  .portfolio-details-page-container .sec-ind-table-content-wrapper {
    background-color: initial;
    border: none;
    margin-bottom: 17px;
  }

  .portfolio-details-page-container .sec-ind-header-container {
    border-top-right-radius: 8px;
    border: 1px solid var(--clr-border);
    border-bottom: 0px;
    padding: 27px 30px 25px;
    height: auto;
  }

  .portfolio-table-total-companies {
    background-color: var(--clr-light);
    height: 72px;
    display: flex;
    border-right: 1px solid var(--clr-border);
    border-left: 1px solid var(--clr-border);
    border-bottom: 1px solid var(--clr-border);
    padding: 0 20px 0 30px;
    justify-content: space-between;
    align-items: center;
  }

  .portfolio-table-total-companies-info {
    display: flex;
    flex-direction: column;
    line-height: 18px;
  }

  .portfolio-table-total-companies-info span {
    width: 100%;
  }

  .portfolio-table-total-companies div {
    font-size: 12px;
    line-height: 18px;
  }

  .portfolio-details-page-container .generic-table-component-body + div {
    border-right: 1px solid var(--clr-border);
    border-left: 1px solid var(--clr-border);
  }

  .portfolio-details-page-container
    .generic-table-component-container
    #column-ticker,
  .portfolio-details-page-container
    .generic-table-component-container
    .company-gens-list {
    width: 193px !important;
  }

  .portfolio-details-page-container .sec-ind-scores-text-small {
    max-width: 40%;
    text-align: center;
  }

  .portfolio-details-page-container .sec-ind-big-donut-section {
    width: 177px;
    height: 119px;
  }

  .portfolio-details-page-container .sec-ind-header-title {
    text-transform: capitalize;
    line-height: 29px;
    display: flex;
    cursor: pointer;
    margin-bottom: 7px;
  }

  .dropdown-protfolio-list-visible {
    display: flex;
    position: absolute;
    flex-direction: column;
    left: 0;
    top: 30px;
    z-index: 10000;
    background: white;
    background-color: var(--clr-background);
    box-shadow: 0px 5px 7px 1px #b3b3b38a;
    border-radius: 6px;
    padding: 5px 0;
    width: 218px;
    max-height: 236px;
    z-index: 100;
  }

  ${
    "" /* .sec-ind-titles-container {
    position: relative;
  } */
  }

  .sec-ind-titles-container {
    display: flex;
  }

  .dropdown-protfolio-list-visible a {
    color: var(--clr-txt) !important;
  }

  .dropdown-protfolio-list-visible a:not(a:hover) {
    text-decoration: none;
  }

  .dropdown-protfolio-list-hidden {
    display: none;
  }

  .portfolios-list-container {
    height: auto;
    width: 100%;
    max-height: 190px;
    overflow-y: auto;
  }

  .portfolios-list-item {
    min-height: 38px;
    padding: 0 13px;
    color: var(--clr-txt) !important;
    width: 100%;
  }

  .portfolios-list-item:hover,
  .create-new-portfolio-button:hover {
    background-color: var(--clr-lowgrey);
    text-decoration: none;
  }

  .portfolios-list-item a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 38px;
  }

  .portfolios-list-item:hover a,
  .portfolios-list-item a {
    text-decoration: none;
  }

  .create-new-portfolio-button {
    border-top: 1px solid var(--clr-border);
    cursor: pointer;
    font-family: var(--ff-medium);
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
  }

  .create-new-portfolio-button img {
    margin-right: 8px;
  }

  .portfolio-edit-button {
    color: var(--clr-links);
    cursor: pointer;
    border-left: 1px solid var(--clr-txtgrey);
    line-height: 14px;
    padding-left: 14px;
    margin-left: 14px;
  }

  .portfolio-edit-button:hover {
    text-decoration: underline;
  }

  .portfolio-details-page-container .sec-ind-header-title img {
    width: 10px;
    height: 20px;
  }

  .dropdown-button-portfolios img {
    filter: grayscale(100%);
    margin-left: 10px !important;
    width: 10px;
    height: 20px;
  }

  .portfolio-details-page-container
    .sec-ind-header-title
    .portfolio-details-button-edit {
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px !important;
  }

  .portfolio-details-page-container .sec-ind-header-title {
    position: relative;
  }

  .portfolio-details-page-container .sec-ind-header-title h1 {
    margin-bottom: 0;
  }

  .dropdown-protfolio-list-visible .portfolios-list-item a {
    font-family: var(--ff-primary);
    font-size: 14px !important;
  }

  .portfolio-details-button-edit:hover {
    cursor: pointer;
  }

  .portfolio-details-date {
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 14px;
    margin-top: 4px;
  }

  .portfolioCount {
    font-family: var(--ff-primary);
    line-height: 14px;
    font-size: 14px;
    margin-bottom: 24px;
  }

  .maxPortfolio {
    color: var(--clr-orange);
  }

  .maxPortfolio:hover {
    text-decoration: underline;
  }

  .pointercursor {
    cursor: pointer;
  }

  .portfolio-detaills-buttons-container {
    display: flex;
  }

  .portfolio-details-button-item {
    border: 0;
    border: none;
    background-color: var(--clr-accent);
    color: var(--clr-light);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    font-size: 14px;
    font-family: var(--ff-medium);
    padding: 0 16px;
  }

  .portfolio-details-button-item:hover {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .portfolio-details-button-item img {
    filter: brightness(0) invert(100%) !important;
    transition: all 0.2s ease-in-out;
  }

  .portfolio-details-button-item:not(:first-child) {
    width: 46px;
  }

  .portfolio-details-button-item:first-child img {
    margin-right: 7px;
    width: 16px;
    height: 16px;
  }

  .portfolio-details-button-item:nth-child(2) img {
    width: 20px;
    height: 20px;
  }

  .portfolio-details-button-item + .portfolio-details-button-item {
    margin-left: 10px;
  }

  .portfolio-details-page-container .sec-ind-small-donut {
    padding-bottom: 0;
    width: 40px;
    height: 40px;
  }

  .portfolio-details-page-container .sec-ind-big-donut {
    padding-bottom: 0;
  }

  .portfolio-details-page-container
    .sec-ind-big-donut
    .doughnut-component-container-number {
    font-size: 29px;
    margin-bottom: 10px;
  }

  .portfolio-details-buttons-mobile {
    display: none;
  }

  .portfolio-details-buttons-desktop {
    display: block;
    height: 40px;
    margin-top: 24px;
  }

  .portfolio-details-buttons-desktop {
    display: block;
    align-items: center;
    justify-content: center;
    margin-left: 37px;
    margin-top: auto;
    margin-bottom: auto;
  }

  .portfolio-detaills-mobile-title {
    display: none;
  }

  .spinner-container-portfolio {
    border-radius: 6px;
    padding: 2px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner-container-ticker .text-light {
    color: var(--clr-accent) !important;
  }
  .spinner-container-portfolio .text-light {
    color: var(--clr-accent) !important;
  }

  /* modals */

  .portfolio-details-modal-title {
    font-size: 24px;
    line-height: 26px;
    font-family: var(--ff-bold);
    width: 100%;
    text-align: center;
  }

  .portfolio-details-modal-close,
  .delete-portfolio-details-modal-close {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 11px;
  }

  .portfolio-details-modal-close img,
  .delete-portfolio-details-modal-close img {
    cursor: pointer;
  }

  .portfolio-details-modal-delete-section {
    text-align: center;
    font-size: 16px;
    margin: 10px auto;
    max-width: 325px;
    line-height: 24px;
    margin-top: 20px;
  }

  .my-portfolios-add-stocks-popup-delete {
    background-color: rgba(27, 27, 27, 0.493) !important;
  }

  .my-portfolios-add-stocks-popup-delete .save-popup-buttons-mobile {
    left: 0;
    bottom: 0;
    border-radius: 0.3rem;
  }

  .my-portfolios-add-stocks-popup-delete .save-popup-buttons-mobile {
    padding: 20px 40px;
  }

  .my-portfolios-add-stocks-popup-delete .save-popup-buttons-mobile button {
    font-family: var(--ff-medium);
    font-size: 16px !important;
    width: 90%;
    max-width: 175px;
  }

  .my-portfolios-add-stocks-popup.the-whole-mobile-modal
    .portfolio-tickers-chosen {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .portfolio-tickers-chosen-current-title {
    font-family: var(--ff-bold);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 35px;
    margin-bottom: -6px;
  }

  .my-portfolios-add-stocks-popup.the-whole-mobile-modal .portfolio-form-group {
    max-width: 100% !important;
  }

  .my-portfolios-add-stocks-popup .save-btn-new-portfolio {
    border: 0 !important;
  }

  .save-btn-new-portfolio.btn:hover {
    color: var(--clr-light);
  }

  .portfolio-details-error {
    border: 1px solid var(--clr-red);
    width: 100%;
    max-width: 440px;
    border-radius: 6px;
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 25px auto;
  }

  /* edit portfolio */

  .portfolio-details-modal-edit-section {
    width: 100%;
    max-width: 440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 29px;
  }

  .portfolio-details-modal-edit-section input {
    max-width: 325px !important;
  }

  .edit-portfolio-tickers-chosen {
    display: flex;
    flex-direction: column;
  }

  .edit-portfolio-tickers-chosen-title {
    width: 100%;
    max-width: 440px;
    margin-bottom: 7px;
  }

  .portfolio-details-modal-edit-section-text {
    font-family: var(--ff-bold);
  }

  .portfolio-details-modal-edit-section input {
    background-color: var(--clr-background);
    border: 1px solid var(--clr-darkgrey);
    height: 40px;
    border-radius: 6px;
    padding: 0 10px;
    color: var(--clr-txt);
  }

  .portfolio-details-modal-edit-section input:focus-visible {
    outline: none;
    border: 1px solid var(--clr-accent);
    background-color: var(--clr-aiScoreColumn);
  }

  .portfolio-details-modal-edit-section span,
  .portfolio-details-modal-edit-section input {
    width: 100%;
    max-width: 330px;
  }

  .portfolio-table-footer span {
    white-space: nowrap;
    max-width: 300px;
    display: flex;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .portfolio-table-footer span span {
    margin-left: 4px;
  }

  .portfolio-table-footer img {
    margin: auto 0px auto 5px;
    cursor: pointer;
  }

  /* columns alignment */

  .portfolio-details-page-container .industry-title,
  .industry-gen-list-tables {
    width: 100px;
  }
  /* / columns alignment */

  .portfolio-tickers-chosen-item-new {
    background-color: var(--clr-chosenItems);
  }

  .portfolio-details-last-update-mobile {
  }

  @media (max-width: 968px) {
    .portfolio-details-page-container .sec-ind-big-donut-section {
      padding: 16px 0;
    }

    .portfolio-table-total-companies span,
    .portfolio-table-total-companies div {
      margin: 0px;
      border-top: 0;
      height: auto;
    }

    .portfolio-table-total-companies-info {
      width: 185px;
    }

    .portfolio-table-total-companies {
      height: auto;
      padding: 12px 14px;
    }
  }

  @media (min-width: 1000px) and (max-width: 1100px) {
    .portfolio-details-page-container
      .generic-table-component-container
      #column-ticker,
    .portfolio-details-page-container
      .generic-table-component-container
      .company-gens-list {
      width: 145px !important;
    }

    .portfolio-details-page-container .rank-gens-list {
      min-width: 45px !important;
    }

    .listable-component-footer-explanatory-text {
      max-width: 53vw;
    }
  }

  @media (max-width: 1070px) {
    .portfolio-details-page-container .sec-ind-table-content-wrapper {
      margin-bottom: 19px;
    }

    .portfolio-details-page-container .rank-gens-list-footer-title {
      margin-left: 7px;
    }

    .portfolio-details-page-container .sec-ind-header-container {
      height: auto;
      border: 0;
      border-radius: 0px;
      margin-bottom: 0;
      margin-top: 0;
      padding: 12px 13px 20px;
    }

    .portfolio-details-page-container .sec-ind-header-title {
      font-size: 22px;
      line-height: 32.6px;
    }

    .portfolio-details-date {
      margin-bottom: 11px;
    }

    .portfolio-details-page-container .portfolio-details-hide-mobile {
      display: none !important;
    }

    .portfolio-details-page-container .sec-ind-big-donut-section {
      width: 107px;
      height: 151px;
    }

    .portfolio-details-page-container .sec-ind-scores-text-small {
      max-width: 100%;
    }

    .generic-table-component-header {
      border-radius: 0;
    }

    .portfolio-details-buttons-desktop {
      display: none;
    }

    .portfolio-details-buttons-mobile {
      display: block;
      margin: 20px 0 0;
    }

    .portfolio-tickers-chosen-current-title {
      margin: 20px 0;
    }

    .portfolio-table-total-companies {
      border-radius: 0;
      border-right: 0;
      border-left: 0;
    }

    .portfolio-table-total-companies span {
      height: auto;
    }

    .portfolio-detaills-mobile-title {
      display: flex;
      align-items: center;
      background-color: var(--clr-light);
      font-size: 16px;
      font-family: var(--ff-bold);
      height: 53px;
      padding: 0 12px;
    }

    .portfolio-detaills-mobile-title span {
      border-bottom: 1px solid var(--clr-border);
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .portfolio-detaills-mobile-title img {
      margin-right: 14px;
    }

    .portfolio-table-footer-mobile-text {
      font-size: 12px;
      line-height: 18px;
      height: 70px;
      padding-right: 10px;
    }

    .portfolio-details-button-item {
      width: 254px;
      max-width: 95vw;
      font-size: 15px;
    }

    .portfolio-details-button-item:first-child img {
      width: 16px;
      height: 16px;
    }

    div.my-portfolios-add-stocks-popup {
      padding-right: 0px !important;
    }

    .search-popup-mobile.the-whole-mobile-modal .portfolio-tickers-chosen {
      margin-bottom: 40px !important;
      max-height: 75vh;
      overflow-y: scroll;
      margin-top: 28px;
    }

    .portfolio-table-footer span {
      white-space: normal;
      max-width: 140px;
      display: inline-block;
      text-overflow: normal;
      overflow: visible;
    }

    .portfolio-table-container .rank-gens-list-footer-title {
      width: 188px;
      min-width: 188px;
    }

    .rank-gens-list-footer-title span {
      align-items: flex-end;
    }

    .portfolio-table-footer img {
      margin-bottom: 3px;
      margin-left: 0;
    }

    .portfolio-details-modal-edit-section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 21px auto;
      max-width: 351px;
    }

    .portfolio-details-modal-edit-section:last-child {
      flex-direction: row;
    }

    .portfolio-details-modal-edit-section:last-child span {
      margin-left: 4px;
    }

    .portfolio-details-modal-edit-section input {
      max-width: 351px !important;
    }

    .portfolio-details-page-container
      .generic-table-component-container
      #column-sector,
    .portfolio-details-page-container
      .generic-table-component-container
      .sector-stock-lists {
      width: 125px;
    }

    .portfolio-details-page-container .sec-ind-big-donut {
      margin-left: 0px;
      padding-bottom: 40%;
    }

    .portfolio-details-page-container
      .sec-ind-big-donut
      .doughnut-component-container-number {
      font-size: 29px;
      top: 0;
    }

    .portfolio-table-footer span span {
      margin-left: 0px;
    }
  }

  @media (max-width: 769px) {
    .portfolio-table-container .table-component-column-rank,
    .portfolio-table-container .table-component-column-rank span:first-child,
    .portfolio-table-container th.table-component-column-rank {
      width: 50px;
      max-width: 50px;
      min-width: 50px;
    }

    .portfolio-table-container
      tbody
      tr:first-child
      td.table-component-column-rank {
      margin-top: 0px;
    }

    .portfolio-details-modal-delete-section {
      margin-top: 30px;
    }

    .portfolio-table-container .table-component-column-company div,
    .portfolio-table-container th.table-component-column-company {
      width: 150px;
      max-width: 150px;
      min-width: 150px;
    }

    .portfolio-details-modal-title {
      color: var(--clr-txt);
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 12px;
      font-size: 18px;
      font-family: var(--ff-medium);
      border: 1px solid var(--clr-border);
    }

    .portfolio-details-modal-close {
      position: absolute;
      top: 10px;
    }

    .portfolio-details-modal-close img {
      margin-top: 5px;
    }

    .my-portfolios-add-stocks-popup-delete .save-popup-buttons-mobile {
      position: absolute;
    }

    .my-portfolios-add-stocks-popup
      .save-popup-buttons-mobile
      .d-flex.justify-content-center {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      background-color: var(--clr-light);
    }

    .portfolio-details-page-container {
      margin-bottom: 50px;
    }

    .portfolio-details-page-container
      .sec-ind-scores-item
      + .sec-ind-scores-item {
      margin-top: 0px;
    }

    .portfolio-table-total-companies span {
      font-size: 12px;
    }

    .portfolio-table-total-companies div {
      font-size: 10px;
    }
  }

  @media (max-width: 374px) {
    .portfolio-details-modal-edit-section {
      max-width: 95vw;
    }

    .portfolio-details-modal-edit-section input {
      width: 100% !important;
      max-width: 95vw;
    }
  }
`;

export const topPageDonutStyes = css`
  .sec-ind-container {
    width: 100%;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .sec-ind-header-container {
    background-color: var(--clr-light);
    height: 155px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    border-top-right-radius: 8px;
    border-top: 1px solid var(--clr-border);
    border-right: 1px solid var(--clr-border);
    border-left: 1px solid var(--clr-border);
  }

  .sec-ind-titles-container {
    position: relative;
  }

  .sec-ind-header-title {
    font-family: var(--ff-graphicSemibold);
    font-size: 28px;
    max-width: 487px;
    padding-right: 28px;
  }

  .sec-ind-header-title h1 {
    font-family: var(--ff-graphicSemibold);
    font-size: 28px;
    max-width: 487px;
  }

  .sec-ind-scores-container {
    display: flex;
    align-items: center;
  }

  .sec-ind-scores-item {
    display: flex;
    align-items: center;
  }

  .sec-ind-small-donut {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    margin-right: 7px;
  }

  .sec-ind-donut-number {
    padding-top: 10px;
    position: absolute;
    font-size: 14px;
    font-family: var(--ff-medium);
  }

  .sec-ind-big-donut {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    margin-left: 14px;
  }

  .sec-ind-container .sec-ind-big-donut .doughnut-component-container-number {
    font-size: 29px;
    font-family: var(--ff-bold);
  }

  .sec-ind-container:not(.sec-ind-container.portfolio-details-page-container)
    .sec-ind-big-donut
    .doughnut-component-container-number,
  .sec-ind-container:not(.sec-ind-container.portfolio-details-page-container)
    .sec-ind-small-donut
    .doughnut-component-container-number {
    top: 10px;
  }

  .sec-ind-container:not(.sec-ind-container.portfolio-details-page-container)
    .sec-ind-big-donut
    .doughnut-component-container
    .chartjs-render-monitor,
  .sec-ind-container:not(.sec-ind-container.portfolio-details-page-container)
    .sec-ind-small-donut
    .doughnut-component-container
    .chartjs-render-monitor {
    margin-bottom: 0px;
  }

  .sec-ind-scores-text-small {
    font-size: 14px;
    font-family: var(--ff-medium);
  }

  .sec-ind-big-donut-section {
    border: 1px solid var(--clr-border);
    height: 119px;
    width: 177px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
  }

  .sec-ind-small-donuts-section {
    display: flex;
    margin-left: 15px;
  }

  .sec-ind-small-donuts-side:first-child {
    padding-right: 15px;
  }

  .sec-ind-small-donuts-side + .sec-ind-small-donuts-side-desktop {
    border-left: 1px solid var(--clr-border);
    padding: 20px 0 20px 15px;
  }

  .sec-ind-small-donuts-side-mobile {
    display: none;
  }

  .sec-ind-scores-text-small-donuts {
    font-size: 14px;
    font-family: var(--ff-primary);
  }

  .sec-ind-scores-item + .sec-ind-scores-item {
    margin-top: 10px;
  }

  .sec-ind-scores-evolution-container {
    margin-top: 35px;
  }

  /* tooltips */

  /* top tooltip */

  .portfolio-details-page-container .tooltipCustom .tooltiptextCustom {
    bottom: 110%;
  }

  .portfolio-details-page-container
    .tooltipCustom-sec-ind
    .tooltiptextCustom-sec-ind {
    bottom: 100%;
  }

  .tooltipCustom-sec-ind {
    position: relative;
  }

  .tooltipCustom-sec-ind .tooltiptextCustom-sec-ind {
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: #272727;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 120%;
    left: 50%;
    margin-left: -70px;
    font-family: var(--ff-primary);
    font-size: var(--fs-tooltip) !important;
    line-height: var(--lh-tooltip) !important;
  }

  .tooltipCustom-sec-ind .tooltiptextCustom-sec-ind::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #272727 transparent transparent transparent;
  }

  .tooltipCustom-sec-ind:hover .tooltiptextCustom-sec-ind {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s linear;
  }

  .portfolio-details-page-container
    .tooltipCustom-sec-ind.tooltipCustomDiversityScores
    .tooltiptextCustom-sec-ind {
    width: 468px;
    left: initial;
    right: calc(-30px - 15px);
  }

  .tooltipCustom-sec-ind.tooltipCustomDiversityScores
    .tooltiptextCustom-sec-ind::after {
    left: initial;
    right: calc(30px + 15px + 55px);
    margin-left: -5px;
  }

  /* / tooltips */

  @media (max-width: 1000px) {
    .sec-ind-header-container {
      display: flex;
      flex-direction: column;
      height: auto;
      padding: 18px 12px 25px;
      border-top-right-radius: 0;
      border-top: 0px;
      border-right: 0px;
      border-left: 0px;
      margin-top: 1px;
    }

    .sec-ind-container .btn-stocks.active {
      margin-bottom: -2px;
      height: 46.2px;
    }

    .sec-ind-scores-text-small {
      font-size: 13px;
      line-height: 16px;
      text-align: center;
    }

    .sec-ind-big-donut-section {
      display: flex;
      flex-direction: column;
      height: 141px;
      justify-content: space-between;
      padding: 13px 0 15px;
    }

    .sec-ind-small-donuts-side:last-child .sec-ind-scores-item,
    .sec-ind-big-donut-section {
      width: 114px;
    }

    .sec-ind-small-donuts-side:last-child .sec-ind-scores-item:first-child {
      align-items: center;
      justify-content: center;
    }

    .sec-ind-small-donuts-side:last-child .sec-ind-scores-item:last-child {
      width: 134px;
      justify-content: flex-start;
      padding-left: 20px;
    }

    .sec-ind-small-donuts-side:last-child {
      width: 252.55px;
    }

    .sec-ind-small-donuts-side-desktop {
      display: none;
    }

    .sec-ind-small-donuts-side-mobile {
      display: flex;
      margin-top: 18px;
    }

    .sec-ind-small-donuts-side:not(
        .sec-ind-small-donuts-side-mobile .sec-ind-small-donuts-side
      ) {
      height: 141px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .sec-ind-small-donut {
      height: 30px;
      width: 30px;
    }

    .sec-ind-small-donuts-side:not(
        .sec-ind-small-donuts-side-mobile .sec-ind-small-donuts-side
      )
      .sec-ind-scores-item
      + .sec-ind-scores-item {
      margin-top: 12px;
    }

    .sec-ind-scores-item + .sec-ind-scores-item {
      margin-left: 0;
      margin-top: 0;
    }
    .sec-ind-scores-item .sec-ind-scores-text-small-donuts {
      line-height: 16px;
    }

    .sec-ind-small-donuts-side-mobile
      .sec-ind-scores-item
      .sec-ind-scores-text-small-donuts {
      max-width: 57px;
    }

    .sec-ind-small-donuts-side:first-child {
      padding-right: 0px;
    }

    .sec-ind-small-donuts-side:last-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    .sec-ind-big-donut {
      padding-bottom: 40px;
      top: 18%;
      margin-left: 0;
    }

    .sec-ind-small-donuts-section {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 20px;
    }

    .sec-ind-header-title,
    .sec-ind-header-title h1 {
      font-family: var(--ff-graphicSemibold);
      font-size: 22px;
      line-height: 30px;
      max-width: 100%;
      padding-right: 0;
    }

    .sec-ind-titles-container {
      width: 100%;
      margin-bottom: 20px;
    }

    /* tooltips */

    /* top tooltip */

    .tooltipCustom-sec-ind {
      position: relative;
    }

    .tooltipCustom-sec-ind .tooltiptextCustom-sec-ind,
    .portfolio-details-page-container
      .tooltipCustom-sec-ind.tooltipCustomDiversityScores
      .tooltiptextCustom-sec-ind {
      left: 50%;
      margin-left: -55px;
      font-size: 11px;
      width: 140px;
      pointer-events: none;
    }

    .tooltipCustom-sec-ind .tooltiptextCustom-sec-ind {
      margin-bottom: 10px;
      bottom: 130%;
    }

    .tooltipCustom-sec-ind .tooltiptextCustom-sec-ind::after,
    .portfolio-details-page-container
      .tooltipCustom-sec-ind.tooltipCustomDiversityScores
      .tooltiptextCustom-sec-ind::after {
      left: 10%;
      margin-left: -7px;
      right: initial;
    }

    .sec-ind-small-donuts-side:last-child
      .tooltipCustom-sec-ind
      .tooltiptextCustom-sec-ind::after {
      margin-left: 5px;
    }

    /* / tooltips */
  }
`;

export const alphaColumnStyles = css.global`
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-company-column,
  .portfolio-table-container
    .table-component-with-alpha-column
    th.table-component-column-company {
    min-width: 196px;
    max-width: 196px;
    width: 196px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-company-column,
  .table-component-with-alpha-column .table-component-column-company {
    min-width: 232px;
    width: 232px;
    max-width: 232px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-company-colum {
    padding-left: 30px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-country-desktop,
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-country-mobile {
    width: 82px;
  }

  .portfolio-table-container
    .table-component-content
    .table-component-with-alpha-column
    .table-component-doughnuts {
    width: 80px;
    min-width: 80px;
    max-width: 80px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-change,
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-risk {
    width: 81px;
  }
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-technical,
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-fundamental,
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-sentiment {
    width: 86px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-sector,
  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-industry {
    width: 138px;
    max-width: 161px;
    min-width: 161px;
  }

  .portfolio-table-container
    .table-component-content
    .table-component-with-alpha-column
    td.table-component-column-industry,
  .portfolio-table-container
    .table-component-content
    .table-component-with-alpha-column
    td.table-component-column-sector {
    padding-left: 4px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-gain {
    width: 69px;
    max-width: 69px;
    min-width: 69px;
  }

  .portfolio-table-container
    .table-component-with-alpha-column
    .table-component-column-trash {
    width: 63px;
  }

  @media (max-width: 968px) {
    /* columns sizing with the alpha extra column */
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-company-column,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-company {
      min-width: 151px;
      width: 151px;
      max-width: 151px;
    }

    /* TODO: remove this when Orlando says if he wants the new table alignment or not
  .portfolio-table-container .table-component-shadow-background {
    left: 150px;
  }

  .portfolio-table-container .table-component-with-alpha-column .table-component-company-column,
  .portfolio-table-container .table-component-with-alpha-column .table-component-data-head.table-component-column-company,
  .portfolio-table-container .table-component-with-alpha-column .table-component-column-company div:not(div.table-component-column-company-ticker-is-in-portfolio-tooltip-item, 
  .portfolio-table-container .table-component-with-alpha-column div.table-component-column-company-ticker-is-in-portfolio-tooltip-title),
  .portfolio-table-container .table-component-with-alpha-column .table-component-data.table-component-column-company,
  .portfolio-table-container .table-component-with-alpha-column .table-component-company-colum .table-component-company-name {
    min-width: 120px !important;
    max-width: 120px !important;
    width: 120px !important;
    overflow: hidden;
  }
  */

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-company-colum {
      padding-left: 10px;
    }

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-country-desktop,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-country-mobile,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-trash {
      width: 62px;
    }

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-data-head.table-component-column-score,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-data.table-component-column-score,
    .portfolio-table-container
      .table-component-content
      .table-component-with-alpha-column
      .table-component-doughnuts {
      width: 246px;
      min-width: 246px;
      max-width: 246px;
    }

    .portfolio-table-container
      .table-component-content
      .table-component-with-alpha-column
      .table-component-doughnuts {
      width: 94px;
      min-width: 94px;
      max-width: 94px;
    }

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-score {
      padding-left: 151px !important;
    }

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-technical,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-sentiment,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-change,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-risk {
      width: 72px;
    }

    .table-component-with-alpha-column .table-component-column-fundamental {
      width: 82px;
    }

    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-sector,
    .portfolio-table-container
      .table-component-with-alpha-column
      .table-component-column-industry {
      width: 135px;
      max-width: 135px;
      min-width: 135px;
    }

    .portfolio-table-container
      .table-component-content
      .table-component-with-alpha-column
      td.table-component-column-industry,
    .portfolio-table-container
      .table-component-content
      .table-component-with-alpha-column
      td.table-component-column-sector {
      padding-left: 7px;
    }

    /* / columns sizing with the alpha extra column */
  }
`;

export const editPortfolioStyles = css.global`
  .my-portfolios-edit-stocks-popup-container.auth-modal {
    padding: 0;
  }

  .my-portfolios-edit-stocks-popup-container .auth-modal-content {
    max-width: 100vw;
    margin-top: 159px;
    background-color: transparent;
  }

  .my-portfolios-edit-stocks-popup-container .auth-modal-content,
  .my-portfolios-edit-stocks-popup-container .auth-modal-body,
  .my-portfolios-edit-stocks-popup-container .modal-dialog,
  .my-portfolios-edit-stocks-popup {
    min-height: 374px !important;
    height: 100%;
    max-height: 374px;
    width: 520px;
    min-width: 520px;
  }

  .portfolio-details-modal-close {
    margin-top: 1rem;
  }

  .my-portfolios-edit-stocks-popup .save-popup-buttons-mobile {
    position: absolute;
  }

  .my-portfolios-edit-stocks-popup
    .save-popup-buttons-mobile
    button:first-child {
    background-color: var(--clr-light);
    border: 1px solid var(--clr-txtgrey);
  }

  .my-portfolios-edit-stocks-popup-delete {
    background-color: var(--clr-light);
    height: 90px;
    margin-bottom: -15px;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--clr-border);
    border-radius: 0 0 8px 8px;
  }

  .my-portfolios-edit-stocks-popup-delete
    .my-portfolios-edit-stocks-popup-delete-button {
    border: 1px solid var(--clr-txtgrey);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 214px;
    height: 40px;
    border-radius: 6px;
    font-family: var(--ff-medium);
    font-size: 17px;
  }

  .my-portfolios-edit-stocks-popup-delete-button img {
    margin-right: 7px;
  }

  .my-portfolios-edit-stocks-popup-delete-button:hover {
    background-color: var(--clr-accent);
    border: 0;
    color: var(--clr-light);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .my-portfolios-edit-stocks-popup-delete-button:hover img {
    filter: brightness(0) invert(100%) !important;
    transition: all 0.2s ease-in-out;
  }

  @media (min-width: 1000px) {
    .my-portfolios-edit-stocks-popup
      .mobile-popup-body
      .save-popup-buttons-mobile
      button {
      width: 100% !important;
      max-width: 214px !important;
      font-family: var(--ff-medium);
      font-size: 17px !important;
    }
  }

  @media (min-width: 769px) {
    .my-portfolios-edit-stocks-popup-container .auth-modal-content {
      background-color: var(--clr-light);
    }
  }

  @media (max-width: 1000px) {
    .my-portfolios-edit-stocks-popup-container .auth-modal-content,
    .my-portfolios-edit-stocks-popup-container .modal-dialog {
      min-height: 100vh !important;
      height: 100vh;
      max-height: 100vh;
      width: 100vw;
      min-width: 100vw;
    }

    .my-portfolios-edit-stocks-popup-container .auth-modal-content {
      margin-top: 0px;
    }

    .my-portfolios-edit-stocks-popup-container .auth-modal-body {
      padding: 0px;
    }
  }

  @media (max-width: 769px) {
    .my-portfolios-edit-stocks-popup-container.auth-modal {
      background-color: var(--clr-light);
    }

    .my-portfolios-edit-stocks-popup .save-popup-buttons-mobile {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .my-portfolios-edit-stocks-popup
      .save-popup-buttons-mobile
      span:first-child {
      padding: 0 12px;
    }

    .my-portfolios-edit-stocks-popup-container .auth-modal-content,
    .my-portfolios-edit-stocks-popup-container .auth-modal-body,
    .my-portfolios-edit-stocks-popup-container .modal-dialog,
    .my-portfolios-edit-stocks-popup {
      min-height: 100vh !important;
      height: 100%;
      width: 100vw;
      min-width: 100vw;
    }

    .my-portfolios-edit-stocks-popup-container .auth-modal-content {
      margin-top: 0px;
    }

    .portfolio-details-modal-close {
      margin-top: 0;
    }
  }
`;

export const deletePortfolioModalStyles = css.global`
  .my-portfolios-add-stocks-popup-delete-container.auth-modal {
    padding: 0;
  }

  .my-portfolios-add-stocks-popup-delete-container .auth-modal-content {
    background-color: transparent;
    margin-top: 30vh;
  }

  .my-portfolios-add-stocks-popup-delete
    .save-popup-buttons-mobile
    button:last-child {
    border: none;
  }

  .portfolio-details-last-update-mobile,
  .portfolio-detaills-mobile-title {
    display: none;
  }

  @media (max-width: 769px) {
    .portfolio-details-last-update-mobile {
      display: flex;
    }

    .portfolio-details-last-update-mobile .stock-market-filter-new-left-bar {
      background-color: transparent;
    }

    .portfolio-details-last-update-mobile .stock-market-filter-new-last-update {
      font-size: 12px;
      padding-bottom: 0;
    }

    .portfolio-details-last-update-mobile
      .stock-market-filter-new-markets-container {
      display: none;
    }

    .breadcrumbs-my-portfolios,
    .market-filter-my-portfolios {
      display: none;
    }

    .the-whole-mobile-modal.my-portfolios-add-stocks-popup-delete {
      width: 97vw !important;
      margin: 0 auto;
      border-radius: 6px;
      max-width: 444px;
      min-height: 199px !important;
      height: 199px !important;
      max-height: 199px !important;
    }

    .my-portfolios-add-stocks-popup-delete-container .auth-modal-content {
      min-height: 199px !important;
      height: 199px !important;
      max-height: 199px !important;
    }

    .my-portfolios-add-stocks-popup-delete .mobile-popup-body {
      width: 97vw !important;
      max-width: 444px;
    }

    .my-portfolios-add-stocks-popup-delete-container.auth-modal {
      width: 100vw;
    }

    .my-portfolios-add-stocks-popup-delete-container
      .save-popup-buttons-mobile {
      position: absolute !important;
    }

    .my-portfolios-add-stocks-popup-delete .save-popup-buttons-mobile button {
      width: 90%;
      max-width: 175px;
    }
  }
`;

export const borderBottoStyles = css.global`
  .portfolio-table-container .table-component-footer-container {
    border-bottom: 1px solid var(--clr-border);
    border-right: 2px solid var(--clr-border);
    border-left: 2px solid var(--clr-border);
    border-spacing: 0px;
    border-collapse: collapse;
  }

  @media (max-width: 1070px) {
    .portfolio-table-container .table-component-footer-container {
      border-bottom: 2px solid var(--clr-border);
    }
  }
`;
