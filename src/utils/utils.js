export const idVideo = (url) => {
    var id = ''
    if(url?.includes('youtu.be/')) {
        id = url?.split('youtu.be/')[1]
    } else if (url?.includes('v=')) {
        id = url?.split('v=')[1]?.split('&ab_channel')[0]
    }
    return id
}