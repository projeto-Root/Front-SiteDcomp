import Representations from "./Representation"
import Calicomp from "../../assets/LOGOCALICOMPSVG.svg";
import Bugados from '../../assets/LOGOBUGADOS.png';
import Softeam from "../../assets/LOGOSOFTEAMSVG.svg"
//Arrays criados para testes

const pathBase = 'represents'


const Projects = [
    {
      name: "Projeto 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
    {
      name: "Projeto 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
    {
      name: "Projeto 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellendus atque culpa architecto nulla, accusamus fugiat delectus praesentium, illum non iste incidunt vitae fuga rem. Eos assumenda praesentium ut pariatur?",
    },
  ];

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
            projects: Projects,
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
          projects: Projects,
          title: "Bugados",
          image: Bugados,
          members: Members
      }
  }
]

export const routesRepresentations = simpleRoute.map((elem) => {
    return {...elem, component: <Representations data={elem.dataComponent}/>}
})