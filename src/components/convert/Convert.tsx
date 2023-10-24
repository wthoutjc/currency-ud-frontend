"use client";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";

// Services
import { getCurrencies, convertCurrencies } from "@/services";

// Interfaces
import { Amount as IAmount, Currency, Convert as IConvert } from "@/interfaces";

// React Hook Form
import { useForm, Controller } from "react-hook-form";

// Components
import { Amount } from "./Amount";

// Icons
import TaskIcon from "@mui/icons-material/Task";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Convert = () => {
  const [loading, setLoading] = useState(false);
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [amount, setAmount] = useState<IAmount[]>([]);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IConvert>({
    defaultValues: {
      from_currency_id: 0,
      to_currency_ids: [],
      amount: 0,
    },
  });

  const fetchData = async () => {
    setLoading(true);
    setCurrencies(await getCurrencies());
    setLoading(false);
  };

  const onSubmit = async (data: IConvert) => {
    setLoading(true);
    const res = await convertCurrencies({
      ...data,
      amount: parseFloat(data.amount.toString()),
    });
    setLoading(false);
    setAmount(res as IAmount[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loading && <CircularProgress />}{" "}
        <TextField
          fullWidth
          select
          disabled={loading}
          type="number"
          label="Currency*"
          error={!!errors.from_currency_id}
          sx={{ mb: 2, mr: 2 }}
          helperText={
            !!errors.from_currency_id
              ? errors.from_currency_id.message
              : "Select a currency"
          }
          {...register("from_currency_id", {
            required: "This field is required",
            validate: (value) =>
              value !== 0 || "You must select a currency to convert",
          })}
          value={watch("from_currency_id")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {loading ? <CircularProgress size={20} /> : <TaskIcon />}
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value={0}>Seleccionar</MenuItem>
          {currencies.map(({ code, name, id }) => (
            <MenuItem key={id} value={id}>
              {code} - {name}
            </MenuItem>
          ))}
        </TextField>
        <Controller
          control={control}
          name="to_currency_ids"
          defaultValue={[]}
          render={({ field }) => (
            <FormControl
              fullWidth
              sx={{
                mb: 2,
              }}
            >
              <InputLabel
                id="currency-ids-select"
                error={!!errors.to_currency_ids}
              >
                {currencies.length > 0
                  ? "Select currencies"
                  : "Loading currencies..."}
              </InputLabel>
              <Select
                labelId="currency-ids-select"
                multiple
                disabled={loading}
                startAdornment={
                  <InputAdornment position="start">
                    {currencies ? (
                      <AddLocationIcon />
                    ) : (
                      <CircularProgress size={13} />
                    )}
                  </InputAdornment>
                }
                {...field}
                defaultValue={[]}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value: number) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                {...register("to_currency_ids", {
                  required: "This field is required",
                })}
                error={!!errors.to_currency_ids}
                input={
                  <OutlinedInput
                    label={
                      currencies.length > 0
                        ? "Select currencies"
                        : "Loading currencies..."
                    }
                  />
                }
              >
                {currencies?.map((currency, index) => {
                  const { id, code, name } = currency;

                  return (
                    <MenuItem key={index} value={id}>
                      <Checkbox checked={field.value.indexOf(id!) > -1} />
                      <ListItemText
                        primary={
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <span>{code}</span>
                            <span>{name}</span>
                          </Box>
                        }
                      />
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText error={!!errors.to_currency_ids}>
                {!!errors.to_currency_ids
                  ? errors.to_currency_ids.message
                  : currencies.length > 0
                  ? "Select currencies"
                  : "Loading currencies..."}
              </FormHelperText>
            </FormControl>
          )}
        />
        <TextField
          sx={{ mb: "1em", mr: 3 }}
          fullWidth
          disabled={loading}
          type="number"
          autoComplete="amount"
          placeholder="Ex: 100"
          label="Amount"
          error={!!errors.amount}
          helperText={
            !!errors.amount
              ? errors.amount.message
              : "The amount to convert is required"
          }
          {...register("amount", {
            required: "The amount to convert is required",
            validate: (value) =>
              value > 0 || "The amount must be greater than 0",
          })}
          value={watch("amount")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained">
          {loading ? "Loading..." : "Convert"}
        </Button>
      </form>
      <Amount amounts={amount} />
    </Box>
  );
};

export { Convert };
