import { configUrl } from './config'

const { googleMaps } = configUrl

export const getMap = () => {
    return fetch(`${googleMaps}`)
}