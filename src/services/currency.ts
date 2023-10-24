import { api } from "../utils";

// Interfaces
import { Currency } from "../interfaces";

const getCurrencies = async (): Promise<Currency[]> => {
  try {
    const response = await api.get("/currency");
    return response.data;
  } catch (error) {
    return [];
  }
};

const registerCurrency = async (
  currency: Currency
): Promise<Currency | null> => {
  try {
    const response = await api.post("/currency", currency);
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteCurrency = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/currency/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};

const updateCurrency = async (
  id: number,
  currency: Currency
): Promise<Currency | null> => {
  try {
    const response = await api.put(`/currency/${id}`, currency);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getCurrencies, registerCurrency, deleteCurrency, updateCurrency };
