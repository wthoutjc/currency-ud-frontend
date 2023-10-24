// Interfaces
import { ExchangeRate } from "@/interfaces";
import { Card, CardActions, CardHeader, CardContent } from "@mui/material";

// Components
import { ManageExchange } from ".";

interface Props {
  exchanges: ExchangeRate[];
}

const Exchanges = ({ exchanges }: Props) => {
  return (
    <>
      {exchanges.map(
        ({ id, from_currency_id, rate, to_currency_id }: ExchangeRate) => (
          <Card sx={{ minWidth: 245, m: 2 }} key={id}>
            <CardHeader
              title={`from: ${from_currency_id}`}
              subheader={`to: ${to_currency_id}`}
            />
            <CardContent>{rate}</CardContent>
            <CardActions disableSpacing>
              <ManageExchange
                exchange={{ id, from_currency_id, rate, to_currency_id }}
              />
            </CardActions>
          </Card>
        )
      )}
    </>
  );
};

export { Exchanges };
