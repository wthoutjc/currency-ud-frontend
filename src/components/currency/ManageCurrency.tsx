"use client";
import { IconButton } from "@mui/material";

// Icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Zustand
import { useModalStore } from "@/zustand";

// Interfaces
import { Currency } from "@/interfaces";

// Services
import { deleteCurrency } from "@/services/currency";

interface Props {
  currency: Currency;
}

const ManageCurrency = ({ currency }: Props) => {
  const { id } = currency;

  const { showModal } = useModalStore();

  const handleShowModal = () => {
    showModal({
      show: true,
      modalProps: { ...currency },
      modalType: "update-currency",
    });
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this currency?")) return;
    const success = await deleteCurrency(id);
    alert(success ? "Currency deleted" : "Error deleting currency");
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

export { ManageCurrency };
