"use client";

import { FC } from "react";
import { useTranslation } from "next-i18next";
import { Modal, Button } from "react-bootstrap";

interface ModalLastUpdateProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const ModalLastUpdate: FC<ModalLastUpdateProps> = ({
  showModal,
  setShowModal,
}) => {
  const { t } = useTranslation("common");

  const handleClose = () => {
    setShowModal(false);
  };

  // Only render the Modal if showModal is true
  if (!showModal) return null;

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      className="market-filter-modal"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          {t("stockMarketFilter.modals.modalDateTitle")}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t("stockMarketFilter.modals.description")}</p>
        {t("stockMarketFilter.modals.modalDateBody")}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          {t("stockMarketFilter.modals.close")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalLastUpdate;
