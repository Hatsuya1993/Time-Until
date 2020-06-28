let wday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Augt', 'Sept', 'October', 'Nov', 'Dec'];
let day
let year

setInterval(() => {
    let date = new Date()
    let wdayNum = date.getDay()
    let wdayday = (wday[wdayNum])
    let monthNum = date.getMonth()
    let monthNumNum = month[monthNum]
    let goalYear = 2020
    let goalDay = 30
    let goalMonth = 5
    let goalWday = 1
    $(".real").text(wday[goalWday] + " " + month[goalMonth] + " " + goalDay + " " + goalYear)
    year = date.getFullYear()
    day = date.getDate()
    var h = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()
    var yearDif = goalYear - year
    var monthDif = goalMonth - monthNum
    var dayDif = (goalDay - 1) - day
    $(".current").text("Current " + " " + h + " hours " + m + " mins " + " " + s + " sec")
    var totalDay = (yearDif * 365) + (monthDif * 30) + (dayDif * 1)
    var totalHour = 24 - h
    var totalMin = 60 - m
    var totalSec = 60 - s
    $(".result").text(totalDay + " day " + totalHour + " hours " + totalMin + " mins " + totalSec + " sec ")
}, 1000);