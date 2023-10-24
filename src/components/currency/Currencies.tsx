// Interfaces
import { Currency } from "@/interfaces";
import { Card, CardActions, CardHeader } from "@mui/material";

// Components
import { ManageCurrency } from ".";

interface Props {
  currencies: Currency[];
}

const Currencies = ({ currencies }: Props) => {
  return (
    <>
      {currencies.map(({ id, code, name }: Currency) => (
        <Card sx={{ minWidth: 245, m: 2 }} key={id}>
          <CardHeader title={code} subheader={name} />
          <CardActions disableSpacing>
            <ManageCurrency currency={{ id, code, name }} />
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export { Currencies };
