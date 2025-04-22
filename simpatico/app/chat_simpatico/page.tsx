import { Header } from "@/components/Header/Header";
import { Avatar, Button, Link } from "@mui/material";
export default function Home() {
  return (
    <>
      <Header>
        <Link
          href="/selecionar_disciplina"
          color="primary.main"
          underline="none"
        >
          <Button variant="outlined" sx={{ borderRadius: 999 }}>
            Alterar Disciplina
          </Button>
        </Link>
        <Link href="#">
          <Avatar sx={{ bgcolor: "primary.main" }} />
        </Link>
      </Header>
    </>
  );
}
