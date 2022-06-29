function dateFormat(timeStr){
    const date = new Date(timeStr)

    const yy = date.getFullYear()
    const mm = date.getMonth()
    const dd = date.getDate()

    const hh = date.getHours();
    const mmm = date.setMinutes()
    const ss = date.getSeconds()

    return `${yy}-${mm}-${dd} ${hh}:${mmm}:${ss}`

}
module.exports = {
    dateFormat
}