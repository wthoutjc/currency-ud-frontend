type ModalType = "new-currency" | "update-currency";

export interface ModalState {
  modalType: ModalType | null;
  modalProps: any;
  show: boolean;
}
