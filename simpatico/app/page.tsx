import { Header } from "@/components/Header/Header";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header>
        <Button variant="outlined" color="primary">
          Entrar
        </Button>
      </Header>
    </>
  );
}
