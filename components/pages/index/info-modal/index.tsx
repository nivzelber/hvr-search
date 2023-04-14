import { Button, DialogContentText } from "@mui/material";

import { useModalState } from "../../../../hooks/useModalState";
import { Modal } from "../../../modal";

import { StyledInfoIcon } from "./info-modal.styled";
import { infoModalText, legalNoticeModalText } from "./modal-text";

export const InfoModal = () => {
  const [isInfoModalOpen, openInfoModal, closeInfoModal] = useModalState();
  const [isLegalNoticeModalOpen, openLegalNoticeModal, closeLegalNoticeModal] = useModalState();

  return (
    <>
      <StyledInfoIcon onClick={openInfoModal} />
      <Modal
        isOpen={isInfoModalOpen}
        onClose={closeInfoModal}
        title="ברוכים הבאים למחפשים בחבר!"
        aria={{
          title: "מידע",
          description: "מידע ראשוני בכניסה לאתר"
        }}
      >
        <DialogContentText>{infoModalText}</DialogContentText>
        <br />
        <Button variant="text" color="info" onClick={openLegalNoticeModal}>
          מידע משפטי
        </Button>

        <Modal
          isOpen={isLegalNoticeModalOpen}
          onClose={closeLegalNoticeModal}
          title="מידע משפטי"
          aria={{
            title: "מידע משפטי",
            description: "מידע משפטי"
          }}
        >
          <DialogContentText>{legalNoticeModalText}</DialogContentText>
        </Modal>
      </Modal>
    </>
  );
};
