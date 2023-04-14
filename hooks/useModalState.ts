import { useCallback, useState } from "react";

type useModalStateReturnType = [boolean, () => void, () => void, () => void];

export const useModalState = (): useModalStateReturnType => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const toggleModal = useCallback(() => setIsOpen(isOpen => !!isOpen), []);

  return [isOpen, openModal, closeModal, toggleModal];
};
