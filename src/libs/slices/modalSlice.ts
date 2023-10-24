import { StateCreator } from "zustand";

// Interfaces
import { ModalState } from "@/interfaces";

const initialState: ModalState = {
  modalType: null,
  modalProps: {},
  show: false,
};

export interface ModalSlice {
  modal: ModalState;
  showModal: (modal: ModalState) => void;
  hideModal: () => void;
}

export const createModalSlice: StateCreator<ModalState> = (set) => ({
  ...initialState,
  showModal: (modal: ModalState) => {
    set({
      ...modal,
    });
  },
  hideModal: () => {
    set({
      ...initialState,
    });
  },
});
