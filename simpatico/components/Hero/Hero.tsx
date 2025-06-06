"use client";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
export const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={0.5} justifyContent={"center"} pt={15}>
        <Grid size={{ md: 7, sm: 11 }} textAlign={"center"} padding={1}>
          <Typography
            color="text.primary"
            variant={"h2"}
            component={"h1"}
            fontWeight={"bold"}
          >
            O apoio que faltava entre&nbsp;
            <Typography
              color="primary"
              variant="h2"
              component={"span"}
              fontWeight={"bold"}
            >
              você&nbsp;
            </Typography>
            e o conteúdo.
          </Typography>
        </Grid>
        <Grid size={{ md: 6, sm: 10 }} textAlign={"center"} padding={1}>
          <Typography color="secondary" variant={"h6"} component={"h2"}>
            O&nbsp;
            <Typography
              color="text.primary"
              variant={"h6"}
              component={"span"}
              fontWeight={"bold"}
            >
              SIMPATICO
            </Typography>
            &nbsp;é um assistente inteligente que te ajuda a tirar dúvidas sobre
            as matérias do seu curso. É só escolher a disciplina e começar o
            papo, simples assim.
          </Typography>
          <Button
            size="large"
            variant="contained"
            sx={{ margin: 4, borderRadius: 999 }}
            onClick={() => {
              router.push("/selecionar_disciplina");
            }}
          >
            Começar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
