export const convertDateDefault = (date) => {
    const currentDate = new Date(date)
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
    const month = currentDate.getMonth() + 1 < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    return `${day}/${month}/${year}`
}