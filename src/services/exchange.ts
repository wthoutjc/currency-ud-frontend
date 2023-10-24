import { api } from "../utils";

// Interfaces
import { ExchangeRate } from "../interfaces";

const getExchanges = async (): Promise<ExchangeRate[]> => {
  try {
    const response = await api.get("/exchange_rate");
    return response.data;
  } catch (error) {
    return [];
  }
};

const registerExchange = async (
  exchange: ExchangeRate
): Promise<ExchangeRate | null> => {
  try {
    const response = await api.post("/exchange_rate", exchange);
    return response.data;
  } catch (error) {
    return null;
  }
};

const deleteExchange = async (id: number): Promise<boolean> => {
  try {
    await api.delete(`/exchange_rate/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};

const updateExchange = async (
  id: number,
  exchange: ExchangeRate
): Promise<ExchangeRate | null> => {
  try {
    const response = await api.put(`/exchange_rate/${id}`, exchange);
    return response.data;
  } catch (error) {
    return null;
  }
};

export { getExchanges, registerExchange, deleteExchange, updateExchange };
