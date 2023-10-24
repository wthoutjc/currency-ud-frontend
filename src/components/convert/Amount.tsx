import { Box, Card, CardContent, CardHeader } from "@mui/material";

// Interfaces
import { Amount } from "@/interfaces";

interface Props {
  amounts: Amount[];
}
const Amount = ({ amounts }: Props) => {
  return (
    <Box sx={{ mt: 2 }}>
      {amounts.map(({ amount, from, to }, index) => (
        <Card key={index}>
          <CardHeader title={`from: ${from}`} subheader={`to: ${to}`} />
          <CardContent>Amount: {amount}</CardContent>
        </Card>
      ))}
    </Box>
  );
};

export { Amount };
