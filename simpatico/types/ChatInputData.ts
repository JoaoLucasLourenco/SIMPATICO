interface IChatInputData {
  id: number;
  nome: string;
  curso: string | null;
  materia: string | null;
  mensagem_usuario: string;
}

export default IChatInputData;
