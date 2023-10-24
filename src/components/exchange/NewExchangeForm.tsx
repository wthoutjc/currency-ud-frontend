"use client";
import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Services
import { registerExchange, updateExchange } from "@/services";

// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";

// Interfaces
import { ExchangeRate } from "@/interfaces";

interface Props {
  hideModal: () => void;
  update: boolean;
  exchange?: ExchangeRate;
}

const NewExchangeForm = ({ hideModal, update, exchange }: Props) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ExchangeRate>({
    defaultValues: {
      from_currency_id: exchange?.from_currency_id || 0,
      to_currency_id: exchange?.to_currency_id || 0,
      rate: exchange?.rate || 0,
    },
  });

  const onSubmit = async (data: ExchangeRate) => {
    setLoading(true);
    if (update && exchange) {
      await updateExchange(exchange.id!, data);
    } else {
      await registerExchange(data);
    }
    setLoading(false);
    alert(update ? "Exchange updated" : "Exchange registered");
    hideModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{ mb: "1em", mr: 3 }}
        fullWidth
        disabled={loading}
        type="number"
        autoComplete="to_currency_id"
        placeholder="Ex: 1"
        label="Origin currency"
        error={!!errors.from_currency_id}
        helperText={
          !!errors.from_currency_id
            ? errors.from_currency_id.message
            : "The currency code is required"
        }
        {...register("from_currency_id", {
          required: "The currency code is required",
        })}
        value={watch("from_currency_id")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ mb: "1em", mr: 3 }}
        fullWidth
        disabled={loading}
        type="number"
        autoComplete="to_currency_id"
        placeholder="Ex: 2"
        label="Destination currency"
        error={!!errors.to_currency_id}
        helperText={
          !!errors.to_currency_id
            ? errors.to_currency_id.message
            : "The currency code is required"
        }
        {...register("to_currency_id", {
          required: "The currency code is required",
        })}
        value={watch("to_currency_id")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        sx={{ mb: "1em", mr: 3 }}
        fullWidth
        disabled={loading}
        type="number"
        autoComplete="rate"
        placeholder="Ex: 1.5"
        label="Tasa de cambio"
        error={!!errors.rate}
        helperText={
          !!errors.rate ? errors.rate.message : "The rate is required"
        }
        {...register("rate", {
          required: "The rate is required",
        })}
        value={watch("rate")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBoxIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button type="submit" variant="contained" disabled={loading}>
          {loading
            ? update
              ? "Actualizando..."
              : "Resgistrando..."
            : update
            ? "Actualizar"
            : "Registrar"}
        </Button>
      </Box>
    </form>
  );
};

export { NewExchangeForm };
