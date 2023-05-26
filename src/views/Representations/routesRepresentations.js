import Representations from "./Representation"
import Calicomp from "../../assets/calicomp.svg";
import Bugados from '../../assets/BUGADOS1.png';
import Softeam from "../../assets/LOGOSOFTEAM.svg"
import inter from "../../assets/inter.png"
//Arrays criados para testes

const pathBase = 'represents'


const Projects = [
    {
      name: "Semac 8° Edição",
      describe:
        "A semana de acolhimento aos calouros (SEMAC) foi um evento promovido pela Atlética Bugados, a empresa júnior Softeam, o Centro acadêmico de Computação e o Departamento de Computação. Realizado com o intuito de apresentar a Universidade Federal de Sergipe, o DCOMP e suas representações dentro da UFS.",
    },
    {
      name: "HackaComp",
      describe:
        "Hackathon promovido pelo DComp juntamente com suas representações, para promover o desenvolvimento através de uma competição, realizado em 48 horas diretas dentro da Universidade.",
    },
  ];

  const ProjectsS = [
    {
      name: "Clínica Dermatológica Michelle Pontes",
      describe:
      "Um site profissional e moderno desenvolvido pelos membros da Softeam para uma clínica dermatológica."
    },
    {
      name: "Inovector 3D",
      describe: "Um projeto desenvolvido usando as tecnologias mais recentes para uma empresa de venda de impressoras 3D, ferramentas e suprimentos para a mesma. O site foi desenvolvido com métodos de pagamento online e uma calculadora de frete para melhor venda dos produtos."
    }
  ];

  const ProjectsB = [
    {
      name: "Campeonato Interatléticas",
      describe: 
      "O primeiro campeonato entre atléticas da UFS, com 6 atléticas como participantes, entre elas, a Bugados. A disputa ocorreu em esportes como futsal, vôlei, dominó, basquete e queimado.",
    },
    {
      name: "Calourada DCOMP",
      describe: "Primeira calourada realizada pela atlética Bugados, realizada atrás do departamento de computação com o tema Halloween."
    },
    {
      name: "Noite de Jogos",
      describe: "Evento realizado pela atlética Bugados no ano de 2023 para os associados, onde houveram jogos eletrônicos, músicas entre outros."
    }
  ]

  const Members = [
    {
      name: "Pablo",
      img: "",
    },
    {
      name: "Gyovani",
      img: "",
    },
    {
      name: "Ícaro",
      img: "",
    },
    {
      name: "Fernanda",
      img: "",
    },
    {
      name: "Vinícius",
      img: "",
    },
  ];

const simpleRoute = [
    {
        path: `${pathBase}/calicomp`,
        name: 'Calicomp',
        template: true,
        dataComponent: {
            projects: Projects,
            title: "Calicomp",
            image: Calicomp,
            members: Members
        }
    },
    {
        path: `${pathBase}/softeam`,
        name: 'Softeam',
        template: true,
        dataComponent: {
            projects: ProjectsS,
            title: "Softeam",
            image: Softeam,
            members: Members
        }
    },
    {
      path: `${pathBase}/bugados`,
      name: 'Bugados',
      template: true,
      dataComponent: {
          projects: ProjectsB,
          title: "Bugados",
          image: Bugados,
          members: Members
      }
  }
]

export const routesRepresentations = simpleRoute.map((elem) => {
    return {...elem, component: <Representations data={elem.dataComponent}/>}
})