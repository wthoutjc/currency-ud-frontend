"use client";
import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Services
import { registerCurrency, updateCurrency } from "@/services";

// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";

// Interfaces
import { Currency } from "@/interfaces";

interface Props {
  hideModal: () => void;
  update: boolean;
  currency?: Currency;
}

const NewCurrencyForm = ({ hideModal, update, currency }: Props) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Currency>({
    defaultValues: {
      code: currency?.code || "",
      name: currency?.name || "",
    },
  });

  const onSubmit = async (data: Currency) => {
    setLoading(true);
    if (update && currency) {
      await updateCurrency(currency.id!, data);
    } else {
      await registerCurrency(data);
    }
    setLoading(false);
    alert(update ? "Currency updated" : "Currency registered");
    hideModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        sx={{ mb: "1em", mr: 3 }}
        fullWidth
        disabled={loading}
        type="text"
        autoComplete="currency-code"
        placeholder="Ex: USD"
        label="Código"
        error={!!errors.code}
        helperText={
          !!errors.code ? errors.code.message : "The currency code is required"
        }
        {...register("code", {
          required: "The currency code is required",
          validate: (value) => {
            if (value.length < 3) {
              return "The currency code must be at least 3 characters long";
            }
            return true;
          },
        })}
        value={watch("code")}
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
        type="text"
        autoComplete="currency-name"
        placeholder="Ex: Dólar Americano"
        label="Nombre"
        error={!!errors.name}
        helperText={
          !!errors.name ? errors.name.message : "The currency name is required"
        }
        {...register("name", {
          required: "The currency name is required",
        })}
        value={watch("name")}
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

export { NewCurrencyForm };
