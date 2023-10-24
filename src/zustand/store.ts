import { create } from "zustand";
import { ModalSlice } from "@/libs";
import { ModalState } from "@/interfaces";

// export const useAppStore = create<ModalState>()((...a) => ({
//   ...createModalSlice(...a),
// }));

const initialState: ModalState = {
  modalType: null,
  modalProps: {},
  show: false,
};

export const useModalStore = create<ModalSlice>()((set) => ({
  modal: initialState,
  showModal: (modal: ModalState) =>
    set({
      modal,
    }),
  hideModal: () =>
    set({
      modal: initialState,
    }),
}));
