import PageResponses from "./PageResponses"

const pathBase = 'forum'

const urlId = window?.location?.href?.split('discussion/')[1] || ''

export const routesForum = [
    {
        path: `${pathBase}/discussion/${urlId}`,
        component: <PageResponses id={urlId}/>,
        template: true,
        title: 'Discussões'
    }
]