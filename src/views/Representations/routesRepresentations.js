import Representations from "./Representation"
import Calicomp from "../../assets/calicomp.svg";
import Bugados from '../../assets/BUGADOS1.png';
import Softeam from "../../assets/LOGOSOFTEAM.svg"
import semac from '../../assets/semac.png'
import hackacomp from '../../assets/hackacomp.png'
import interatletica from '../../assets/inter.png'
import calourada from '../../assets/calourada.png'
import noite from '../../assets/noite.png'
import clinica from '../../assets/clinica.png'

//Arrays criados para testes

const pathBase = 'represents'


const Projects = [
    {
      name: "Semac 8° Edição",
      img: semac,
      describe:
        "A semana de acolhimento aos calouros (SEMAC) foi um evento promovido pela Atlética Bugados, a empresa júnior Softeam, o Centro acadêmico de Computação e o Departamento de Computação. Realizado com o intuito de apresentar a Universidade Federal de Sergipe, o DCOMP e suas representações dentro da UFS.",
    },
    {
      name: "HackaComp",
      img: hackacomp,
      describe:
        "Hackathon promovido pelo DComp juntamente com suas representações, para promover o desenvolvimento através de uma competição, realizado em 48 horas diretas dentro da Universidade.",
    },
  ];

  const ProjectsS = [
    {
      name: "Clínica Dermatológica Michelle Pontes",
      img: clinica,
      link: 'https://dramichellepontes.com.br/',
      describe:
      "Um site profissional e moderno desenvolvido pelos membros da Softeam para uma clínica dermatológica."
    },
    {
      name: "Inovector 3D",
      img: '',
      link: 'https://www.inovector3d.com.br/',
      describe: "Um projeto desenvolvido usando as tecnologias mais recentes para uma empresa de venda de impressoras 3D, ferramentas e suprimentos para a mesma. O site foi desenvolvido com métodos de pagamento online e uma calculadora de frete para melhor venda dos produtos."
    }
  ];

  const ProjectsB = [
    {
      name: "Campeonato Interatléticas",
      img: interatletica,
      link: 'https://www.instagram.com/p/CrekBC_ueXH/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      describe: 
      "O primeiro campeonato entre atléticas da UFS, com 6 atléticas como participantes, entre elas, a Bugados. A disputa ocorreu em esportes como futsal, vôlei, dominó, basquete e queimado.",
    },
    {
      name: "Calourada DCOMP",
      img: calourada,
      link: 'https://www.instagram.com/p/CjMMhasuI4B/',
      describe: "Primeira calourada realizada pela atlética Bugados, realizada atrás do departamento de computação com o tema Halloween."
    },
    {
      name: "Noite de Jogos",
      img: noite,
      link: 'https://www.instagram.com/reel/CpRIq66PlV2/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
      describe: "Evento realizado pela atlética Bugados no ano de 2023 para os associados, onde houveram jogos eletrônicos, músicas entre outros."
    }
  ]

  const Members = [
    {
      name: "Pablo",
      img: noite,
    },
    {
      name: "Gyovani",
      img: calourada,
    },
    {
      name: "Ícaro",
      img: interatletica,
    },
    {
      name: "Fernanda",
      img: clinica,
    },
    {
      name: "Vinícius",
      img: hackacomp,
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