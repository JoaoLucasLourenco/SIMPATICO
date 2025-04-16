import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header>
        <Button
          variant="outlined"
          color="primary"
          sx={{ borderRadius: 999, width: 100 }}
        >
          Entrar
        </Button>
      </Header>
      <Hero />
    </>
  );
}
