"use client";
import { IconButton } from "@mui/material";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Zustand
import { useModalStore } from "@/zustand";

// Interfaces
import { ExchangeRate } from "@/interfaces";

// Services
import { deleteExchange } from "@/services";

interface Props {
  exchange: ExchangeRate;
}

const ManageExchange = ({ exchange }: Props) => {
  const { id } = exchange;

  const { showModal } = useModalStore();

  const handleShowModal = () => {
    showModal({
      show: true,
      modalProps: { ...exchange },
      modalType: "update-exchange",
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this exchange?")) return;
    const success = await deleteExchange(id);
    alert(success ? "Exchange deleted" : "Error deleting exchange");
  };

  return (
    <>
      <IconButton aria-label="Edit" onClick={handleShowModal}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="Delete" onClick={() => handleDelete(id!)}>
        <DeleteIcon />
      </IconButton>
    </>
  );
};

export { ManageExchange };
