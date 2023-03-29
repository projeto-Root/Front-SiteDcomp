//Aqui é importado os componentes referente as rotas de navegação
import { componentRoutes } from './componentsRoutes'

//Aqui são importadas as rotas de navegação
import { routes } from './routes'

//Aqui são os componentes de rota importados
const { Home, Representations } = componentRoutes

//Aqui são as rotas importadas
const { routesRepresentations } = routes

//navigate está relacionada com as rotas do menu principal
export const navigate = [
    {
        path: '/',
        name: 'Início',
        component: <Home/>,
        template: true
    },
    {
        path: '/represents',
        name: 'Representações',
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