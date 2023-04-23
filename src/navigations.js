//Aqui é importado os componentes referente as rotas de navegação
import { componentRoutes } from './componentsRoutes'

//Aqui são importadas as rotas de navegação
import { routes } from './routes'
import { Profs } from './views/Profs/Profs'

//Aqui são os componentes de rota importados
const { Home, Representations, Areas } = componentRoutes

//Aqui são as rotas importadas
const { routesRepresentations } = routes

//navigate está relacionada com as rotas do menu principal
export const navigate = [
    {
        path: '/',
        name: 'INÍCIO',
        component: <Home/>,
        template: true,
        isHome: true
    },
    {
        path: '/about',
        name: 'SOBRE',
        title: "Sobre o DCOMP",
        component: <Home/>,
        template: true,
    },
    {
        path: '/courses',
        name: 'CURSOS',
        title: "Cursos do DCOMP",
        component: <Home/>,
        template: true,
    },
    {
        path: '/forum',
        name: 'FÓRUM',
        title: "Diploma e Programa EAD",
        component: <Home/>,
        template: true,
    },
    {
        path: '/contact',
        name: 'CONTATO',
        title: "Contate-nos",
        component: <Home/>,
        template: true,
    },
    {
        path: '/profs',
        name: 'PROFS',
        title: "Professores do DCOMP",
        component: <Profs/>,
        template: true,
    },
    {
        path: '/areas',
        name: 'ÁREAS',
        title: "Página das áreas",
        component: <Areas/>,
        template: true,
    },
    {
        path: '/represents',
        name: 'REPRESENTAÇÕES',
        title: "Representações do DCOMP",
        component: <Representations/>,
        template: true,
        collections: [
           ...routesRepresentations 
        ]
    }
]


//Aqui são exportadas todas as rotas da aplicação
export const navigations = [
    ...navigate,
    ...routesRepresentations
]