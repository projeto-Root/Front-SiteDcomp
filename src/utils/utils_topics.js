import { lorem } from "./utils_content_messages";
export const listTopics = [
  {
    id: 1,
    title: "Prova de kalil de ontem",
    numberComments: 8,
    numberLikes: 3,
    userCreated: "Pablo Freire",
    dateCreated: "2023-03-20",
    description:
      "Olá, queria postar sobre minha indignação com a prova de pi ontem. Uma falta de respeito com o estudante",
  },
  {
    id: 2,
    title: "Qual melhor prof para poo?",
    numberComments: 4,
    numberLikes: 1,
    userCreated: "Celestino",
    dateCreated: "2023-04-19",
    description: lorem,
  },
  {
    id: 3,
    title: "Tem alguém na fila do resun?",
    numberComments: 3,
    numberLikes: 2,
    userCreated: "Dionísio",
    dateCreated: "2023-04-23",
    description: "Alguém na fila pelamor de god. Quero comer",
    responses: [
      {
        userCreated: "Icaro",
        dateCreated: "2023-04-23",
        description: "Olá, dio. Estou quase na entrada do resun.",
        reResponse: [
          {
            userCreated: "Dionísio",
            dateCreated: "2023-04-23",
            description: "Muito obrigado por esse alimento.",
          },
          {
            userCreated: "Icaro",
            dateCreated: "2023-04-23",
            description: "Correeee.",
          },
        ],
      },
      {
        userCreated: "Igu",
        dateCreated: "2023-04-23",
        description: "Foi mal, já entrei man.",
      }
    ],
  },
];
