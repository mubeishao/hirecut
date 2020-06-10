export function getDate(dates) {
    var dd = new Date();
    var n = dates || 0;
    dd.setDate(dd.getDate() + n);
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1;
    var d = dd.getDate();
    m = m < 10 ? "0" + m: m;
    d = d < 10 ? "0" + d: d;
    var day = y + "/" + m + "/" + d;

    var dateObject = new Date(day)
    var dayweek = dateObject.getDay()
    var weeklist = ['一','二','三','四','五','六','日']
    var week = '周'+weeklist[dayweek-1]
    // var weekObj = {
    //     day,week
    // }
    return day;
};
