import { Box, Divider, IconButton, Typography } from "@mui/material";

// Components
import { Exchanges, NewExchange } from "@/components";

// Services
import { getExchanges } from "@/services";

// Icons
import ReplayIcon from "@mui/icons-material/Replay";

const ExchangePage = async () => {
  const exchanges = await getExchanges();

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Manage Exchange Rates
      </Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <NewExchange />
          <IconButton sx={{ ml: 2 }}>
            <ReplayIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Exchanges exchanges={exchanges} />
        </Box>
      </Box>
    </>
  );
};

export default ExchangePage;
