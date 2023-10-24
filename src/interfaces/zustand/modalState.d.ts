type ModalType = "notification" | "confirm" | "normal" | "custom";

export interface ModalState {
  modalType: ModalType | null;
  modalProps: any;
  show: boolean;
}
