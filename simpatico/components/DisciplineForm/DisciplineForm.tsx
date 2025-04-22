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
import { useRouter } from "next/navigation";
import { useCourse } from "@/lib/context/useCourse";

export const DisciplineForm = () => {
  const router = useRouter();
  const {
    selectedCourse,
    setSelectedCourse,
    selectedDiscipline,
    setSelectedDiscipline,
  } = useCourse();

  const nomesDosCursos = Cursos.map((curso) => curso.nome).sort();

  const disciplinas = selectedCourse
    ? Cursos.find((curso) => curso.nome === selectedCourse)?.disciplinas || []
    : [];
  const disciplinasDisponiveis = disciplinas.sort();

  return (
    <Grid container spacing={2} justifyContent={"center"} pt={15}>
      <Grid sx={{ md: 7, sm: 11 }} textAlign={"center"} padding={1}>
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

      <Grid size={11} textAlign={"center"}>
        <FormControl fullWidth>
          <Autocomplete
            sx={{ borderRadius: 999, mt: 5 }}
            fullWidth
            disablePortal
            options={nomesDosCursos}
            value={selectedCourse}
            onChange={(_, novoCurso) => {
              setSelectedCourse(novoCurso);
              setSelectedDiscipline(null);
            }}
            renderInput={(params) => <TextField {...params} label="Curso" />}
          />

          <Autocomplete
            sx={{ borderRadius: 999, mt: 5 }}
            fullWidth
            disablePortal
            disabled={!selectedCourse}
            options={disciplinasDisponiveis}
            value={selectedDiscipline}
            onChange={(_, novaDisciplina) =>
              setSelectedDiscipline(novaDisciplina)
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Disciplina"
                helperText={
                  !selectedCourse ? "Selecione um curso primeiro" : ""
                }
              />
            )}
          />

          <Button
            type="submit"
            size="large"
            variant="contained"
            sx={{ margin: 4, borderRadius: 999 }}
            disabled={!selectedCourse || !selectedDiscipline}
            onClick={() => {
              router.push("/chat_simpatico");
            }}
          >
            Iniciar Chat
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};
