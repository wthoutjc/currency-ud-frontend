"use client";
import { useState } from "react";
import { Box, Button, InputAdornment, TextField } from "@mui/material";

// React Hook Form
import { useForm } from "react-hook-form";

// Services
import { registerCurrency, updateCurrency } from "@/services";

// Icons
import AccountBoxIcon from "@mui/icons-material/AccountBox";

interface CurrencyFormProps {
  id?: number;
  code: string;
  name: string;
}

interface Props {
  hideModal: () => void;
  update: boolean;
  currency?: CurrencyFormProps;
}

const NewCurrencyForm = ({ hideModal, update, currency }: Props) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CurrencyFormProps>({
    defaultValues: {
      code: currency?.code || "",
      name: currency?.name || "",
    },
  });

  const onSubmit = async (data: CurrencyFormProps) => {
    setLoading(true);
    if (update && currency) {
      const res = await updateCurrency(currency.id!, data);
    } else {
      const res = await registerCurrency(data);
    }
    setLoading(false);
    alert(update ? "Moneda actualizada " : "Moneda registrada");
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
        placeholder="Ej: USD"
        label="Código"
        error={!!errors.code}
        helperText={
          !!errors.code
            ? errors.code.message
            : "El código de la moneda es requerido"
        }
        {...register("code", {
          required: "El código de la moneda es requerido",
          validate: (value) => {
            if (value.length < 3) {
              return "El código de la moneda debe tener al menos 3 caracteres";
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
        placeholder="Ej: Dólar Americano"
        label="Nombre"
        error={!!errors.name}
        helperText={
          !!errors.name
            ? errors.name.message
            : "El nombre de la moneda es requerido"
        }
        {...register("name", {
          required: "El nombre de la moneda es requerido",
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
