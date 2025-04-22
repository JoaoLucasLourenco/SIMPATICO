import { DisciplineForm } from "@/components/DisciplineForm/DisciplineForm";
import { Header } from "@/components/Header/Header";
import { Avatar, Link } from "@mui/material";
export default function SelecionarDisciplina() {
  return (
    <>
      <Header>
        <Link href="/" color="primary.main" underline="none">
          Voltar
        </Link>
        <Link href="#">
          <Avatar sx={{ bgcolor: "primary.main" }} />
        </Link>
      </Header>
      <DisciplineForm />
    </>
  );
}
