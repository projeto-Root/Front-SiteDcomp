//Aqui é importado os componentes referente as rotas de navegação
import { componentRoutes } from './componentsRoutes'

//Aqui são importadas as rotas de navegação
import { routes } from './routes'
import DataComp from './views/DataComp/DataComp'
import Forum from './views/Forum/Forum'
import MyComp from './views/MyComp/MyComp'

//Aqui são os componentes de rota importados
const { Home, Representations, Profs, MenuAreas, Contato, Cursos } = componentRoutes

//Aqui são as rotas importadas
const { routesRepresentations, routesMenuAreas } = routes

//navigate está relacionada com as rotas do menu principal
export const navigate = [
    {
        path: '/',
        name: 'INÍCIO',
        component: <Home/>,
        template: true,
        isHome: true
    },
    
    // {
    //     path: '/about',
    //     name: 'SOBRE',
    //     title: "Sobre o DCOMP",
    //     component: <Sobre/>,
    //     template: true,
    // },
    {
        path: '/courses',
        name: 'CURSOS',
        title: "Cursos do DCOMP",
        component: <Cursos/>,
        template: true,
    },
    // {
    //     path: '/forum',
    //     name: 'FÓRUM',
    //     title: "Diploma e Programa EAD",
    //     component: <Home/>,
    //     template: true,
    // },
    {
        path: '/menuareas',
        name: 'ÁREAS',
        title: "Página das áreas",
        component: <MenuAreas/>,
        template: true,
        collections: [
            ...routesMenuAreas
        ]
    },
    {
        path: '/profs',
        name: 'PROFESSORES',
        title: "Professores do DCOMP",
        component: <Profs/>,
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
    },
   
    {
        path: '/datacomp',
        name: 'DATACOMP',
        title: 'DATACOMP',
        component: <DataComp/>,
        template: true
    },
    {
        path: '/mycomp',
        name: 'MYCOMP',
        title: "MYCOMP",
        component: <MyComp/>,
        template: true,
    },
    {
        path: '/contact',
        name: 'CONTATO',
        title: "Contate-nos",
        component: <Contato/>,
        template: true,
    },
    {
        path: '/forum',
        name: 'FORUM',
        title: "Forum",
        component: <Forum/>,
        template: true,
    }
]


//Aqui são exportadas todas as rotas da aplicação
export const navigations = [
    ...navigate,
    ...routesRepresentations,
    ...routesMenuAreas
]