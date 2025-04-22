"use client";
import { Cursos } from "@/lib/Cursos";
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const DisciplineForm = () => {
  const router = useRouter();

  const [cursoSelecionado, setCursoSelecionado] = useState<string | null>(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState<
    string | null
  >(null);

  // Extrai os nomes dos cursos para o primeiro autocomplete
  const nomesDosCursos = Cursos.map((curso) => curso.nome);

  // Encontra as disciplinas do curso selecionado
  const disciplinasDisponiveis = cursoSelecionado
    ? Cursos.find((curso) => curso.nome === cursoSelecionado)?.disciplinas || []
    : [];

  return (
    <>
      <Grid container spacing={2} justifyContent={"center"} pt={15}>
        <Grid item md={7} sm={11} textAlign={"center"} padding={1}>
          <Typography
            color="text.primary"
            variant={"h4"}
            component={"h1"}
            fontWeight={"bold"}
          >
            Escolha seu curso e a disciplina que tá te tirando o&nbsp;
            <Typography
              color="primary.main"
              variant="h4"
              component={"span"}
              fontWeight={"bold"}
            >
              sono 😅
            </Typography>
          </Typography>
        </Grid>

        <Grid item size={{ md: 7, sm: 11 }} textAlign={"center"}>
          <FormControl fullWidth>
            <Autocomplete
              sx={{ borderRadius: 999 }}
              fullWidth
              disablePortal
              options={nomesDosCursos}
              value={cursoSelecionado}
              onChange={(_, novoCurso) => {
                setCursoSelecionado(novoCurso);
                setDisciplinaSelecionada(null); // reseta disciplina quando curso muda
              }}
              renderInput={(params) => <TextField {...params} label="Curso" />}
            />

            <Autocomplete
              sx={{ borderRadius: 999 }}
              fullWidth
              disablePortal
              disabled={!cursoSelecionado}
              options={disciplinasDisponiveis}
              value={disciplinaSelecionada}
              onChange={(_, novaDisciplina) =>
                setDisciplinaSelecionada(novaDisciplina)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Disciplina"
                  helperText={
                    !cursoSelecionado ? "Selecione um curso primeiro" : ""
                  }
                />
              )}
              sx={{ mt: 2 }}
            />

            <Button
              type="submit"
              size="large"
              variant="contained"
              sx={{ margin: 4, borderRadius: 999 }}
              disabled={!cursoSelecionado || !disciplinaSelecionada}
              onClick={() => {
                router.push("/selecionar_disciplina");
              }}
            >
              Iniciar Chat
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};
