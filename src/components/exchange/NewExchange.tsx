"use client";
import { Button } from "@mui/material";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Zustand
import { useModalStore } from "@/zustand";

const NewExchange = () => {
  const { showModal } = useModalStore();

  const handleShowModal = () => {
    showModal({
      show: true,
      modalProps: null,
      modalType: "new-exchange",
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
      New Exchange
    </Button>
  );
};

export { NewExchange };
