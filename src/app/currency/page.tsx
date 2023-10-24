import { Divider, Typography } from "@mui/material";

// Components
import { Table } from "@/components";

// Services
import { getCurrencies } from "@/services/currency";

const CurrencyPage = async () => {
  const { currencies } = await getCurrencies();

  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Manage Currencies
      </Typography>
      <Divider />
      {/* <Table
        to="xd"
        title="Currencies"
        loading={false}
        columns={["Cédula", "Cliente"]}
        data={currencies}
        context={{
          update: {
            enabled: false,
          },
          delete: {
            enabled: false,
          },
          read: {
            enabled: false,
          },
        }}
      /> */}
    </>
  );
};

export default CurrencyPage;
