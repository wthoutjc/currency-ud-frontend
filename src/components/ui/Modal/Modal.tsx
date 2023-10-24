"use client";
import { Box, Divider, IconButton, Typography } from "@mui/material";

// Zustand
import { useModalStore } from "@/zustand";

// Components - Forms
import { NewExchangeForm } from "@/components/exchange/NewExchangeForm";
import { NewCurrencyForm } from "@/components/currency/NewCurrencyForm";

// Icons
import CloseIcon from "@mui/icons-material/Close";

// Interfaces
import { Currency, ExchangeRate } from "@/interfaces";

const Modal = () => {
  const { modal, hideModal } = useModalStore();
  const { show, modalType, modalProps } = modal;

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: show ? "flex" : "none",
        zIndex: 99999,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={hideModal}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            {modalType === "new-currency" && "New Currency"}
            {modalType === "update-currency" && "Update Currency"}
            {modalType === "new-exchange" && "New Exchange"}
            {modalType === "update-exchange" && "Update Exchange"}
          </Typography>
          <IconButton onClick={hideModal}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />
        {modalType === "new-currency" || modalType === "update-currency" ? (
          <NewCurrencyForm
            update={!!modalProps}
            currency={modalProps as Currency}
            hideModal={hideModal}
          />
        ) : modalType === "new-exchange" || modalType === "update-exchange" ? (
          <NewExchangeForm
            update={modalProps}
            exchange={modalProps as ExchangeRate}
            hideModal={hideModal}
          />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};

export { Modal };
