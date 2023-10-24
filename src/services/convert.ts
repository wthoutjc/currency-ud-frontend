import { api } from "../utils";

// Interfaces
import { Amount, Convert } from "../interfaces";

const convertCurrencies = async (
  convert: Convert
): Promise<
  | {
      message: string;
    }
  | Amount[]
> => {
  try {
    const response = await api.post("/convert", convert);
    return response.data;
  } catch (error) {
    return {
      message: "[CLIENT SIDE]: ERROR",
    };
  }
};

export { convertCurrencies };
