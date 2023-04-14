import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { PropsWithChildren } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  aria: {
    title: string;
    description: string;
  };
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  aria,
  children
}: PropsWithChildren<ModalProps>) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby={aria.title}
      aria-describedby={aria.description}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
