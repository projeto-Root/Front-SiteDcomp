import { areas } from "../../utils/utils_areas"
import Areas from "../Areas/Areas"

const simpleRoute = areas.map(elem => {
    return {
        path: elem.link,
        name: elem.name,
        template: true
    }
})

export const routesMenuAreas = simpleRoute.map((elem) => {
    return {...elem, component: <Areas areaDefault={areas[elem.path?.split('/')[2]]?.name}/>}
})