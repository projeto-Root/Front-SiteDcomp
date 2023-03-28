import Home from "./views/Home/Home";
import Representations from "./views/Representations/Representations";
import { routes } from "./views/Representations/routes";

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
           ...routes 
        ]
    }
]