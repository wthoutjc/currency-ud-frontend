"use client";
import { Button } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Zustand
import { useModalStore } from "@/zustand";

const NewCurrency = () => {
  const { showModal } = useModalStore();

  const handleShowModal = () => {
    showModal({
      show: true,
      modalProps: {},
      modalType: "update-currency",
    });
  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<AddIcon />}
      size="small"
      onClick={handleShowModal}
    >
      New Currency
    </Button>
  );
};

export { NewCurrency };
