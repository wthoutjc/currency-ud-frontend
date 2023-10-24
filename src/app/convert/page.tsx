import { Divider, Typography } from "@mui/material";

// Components
import { Convert } from "@/components";

const ConvertPage = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Convert Currency
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Convert />
    </>
  );
};

export default ConvertPage;
