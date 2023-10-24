import { Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Welcome to Currency App
      </Typography>
      <Divider />
      <Typography variant="body2" sx={{ mb: 2 }}>
        My name is Juan Camilo Ramírez Rátiva and I&apos;m a AWS Fullstack
        Developer.
      </Typography>
    </>
  );
}
