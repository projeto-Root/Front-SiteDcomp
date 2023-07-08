import Disciplina from "../../components/Disciplina/Disciplina"
import { Engenharia, Sistemas, Ciencia } from "../../utils/util_disciplinas"

const simpleRoute = [
    {
        path: `/courses/sistemas`,
        name: 'Sistemas de Informação',
        template: true,
        component: <Disciplina initialCourse={Sistemas}></Disciplina>
        
    },
    {
        path: `/courses/ciencia`,
        name: 'Ciencia da Computação',
        template: true,
        component: <Disciplina initialCourse={Ciencia}></Disciplina>
        
    },
    {
        path: `/courses/engenharia`,
      name: 'Engenharia de Computação',
      template: true,
      component: <Disciplina initialCourse={Engenharia}></Disciplina>
      
  }
]

export const routesCursos = simpleRoute.map((elem) => {
    return {...elem}
})