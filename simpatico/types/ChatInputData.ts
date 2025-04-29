interface IChatInputData {
  id: string;
  nome: string;
  curso: string | null;
  materia: string | null;
  mensagem_usuario: string;
}

export default IChatInputData;
