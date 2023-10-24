import { api } from "../utils";

// Interfaces
import { Currency } from "../interfaces";

const getCurrencies = async (): Promise<{
  currencies: Currency[][];
}> => {
  try {
    const response = await api.get("/currency");
    return response.data;
  } catch (error) {
    return {
      currencies: [],
    };
  }
};

export { getCurrencies };
