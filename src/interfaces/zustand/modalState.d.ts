type ModalType =
  | "new-currency"
  | "update-currency"
  | "new-exchange"
  | "update-exchange";

export interface ModalState {
  modalType: ModalType | null;
  modalProps: any;
  show: boolean;
}
