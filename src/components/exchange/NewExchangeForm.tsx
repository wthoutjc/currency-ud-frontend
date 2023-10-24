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
        placeholder="Ej: 1"
        label="Moneda de origen"
        error={!!errors.from_currency_id}
        helperText={
          !!errors.from_currency_id
            ? errors.from_currency_id.message
            : "El código de la moneda de origen es requerido"
        }
        {...register("from_currency_id", {
          required: "El código de la moneda de origen es requerido",
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
        placeholder="Ej: 2"
        label="Moneda de destino"
        error={!!errors.to_currency_id}
        helperText={
          !!errors.to_currency_id
            ? errors.to_currency_id.message
            : "El código de la moneda de destino es requerido"
        }
        {...register("to_currency_id", {
          required: "El código de la moneda de destino es requerido",
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
        placeholder="Ej: 1.5"
        label="Tasa de cambio"
        error={!!errors.rate}
        helperText={
          !!errors.rate ? errors.rate.message : "La tasa de cambio es requerida"
        }
        {...register("rate", {
          required: "La tasa de cambio es requerida",
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
