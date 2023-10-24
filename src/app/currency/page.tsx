import { Box, Divider, IconButton, Typography } from "@mui/material";

// Components
import { Currencies, NewCurrency } from "@/components";

// Services
import { getCurrencies } from "@/services";

// Icons
import ReplayIcon from "@mui/icons-material/Replay";

const CurrencyPage = async () => {
  const currencies = await getCurrencies();

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Manage Currencies
      </Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <NewCurrency />
          <IconButton sx={{ ml: 2 }}>
            <ReplayIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Currencies currencies={currencies} />
        </Box>
      </Box>
    </>
  );
};

export default CurrencyPage;
