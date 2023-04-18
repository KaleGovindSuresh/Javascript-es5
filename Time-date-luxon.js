const { DateTime } = require("luxon");

console.log(DateTime.now()); //=>	[ DateTime 2022-07-21T19:09:00.101+05:30 ]
console.log(DateTime.now().toUnixInteger()); //=>	1658410740
console.log(DateTime.now().toJSDate()); //=>	[ Date Thu Jul 21 2022 19:09:00 GMT+0530 (India Standard Time) ]
console.log(DateTime.utc().toISO()); //=>	"2022-07-21T13:39:00.111Z"
console.log(DateTime.utc(2017, 5, 15, 17, 36)); //=>	[ DateTime 2017-05-15T17:36:00.000Z ]
console.log(DateTime.utc(2017, 5, 15, 17, 36).toLocal()); //=>	[ DateTime 2017-05-15T23:06:00.000+05:30 ]
console.log(DateTime.local(2017, 5, 15, 17, 36)); //=>	[ DateTime 2017-05-15T17:36:00.000+05:30 ]
console.log(DateTime.local(2017, 5, 15, 17, 36).toUTC()); //=>	[ DateTime 2017-05-15T12:06:00.000Z ]
console.log(DateTime.now().toObject()); //=>	{"year":2022,"month":7,"day":21,"hour":19,"minute":9,"second":0,"millisecond":111}
console.log(
  DateTime.fromObject({ year: 2017, month: 5, day: 15, hour: 17, minute: 36 })
); //=>	[ DateTime 2017-05-15T17:36:00.000+05:30 ]
console.log(
  DateTime.fromObject(
    { year: 2017, month: 5, day: 15, hour: 17, minute: 36 },
    { zone: "America/New_York" }
  )
); //=>	[ DateTime 2017-05-15T17:36:00.000-04:00 ]
console.log(
  DateTime.fromObject(
    { year: 2017, month: 5, day: 15, hour: 17, minute: 36 },
    { zone: "Asia/Singapore" }
  )
); //=>	[ DateTime 2017-05-15T17:36:00.000+08:00 ]
console.log(DateTime.now().setZone("America/New_York")); //=>	[ DateTime 2022-07-21T09:39:00.114-04:00 ]
console.log(DateTime.now().setZone("America/New_York").startOf("day")); //=>	[ DateTime 2022-07-21T00:00:00.000-04:00 ]
console.log(DateTime.now().plus({ minutes: 15, seconds: 8 })); //=>	[ DateTime 2022-07-21T19:24:08.115+05:30 ]
console.log(DateTime.now().plus({ days: 6 })); //=>	[ DateTime 2022-07-27T19:09:00.115+05:30 ]
console.log(DateTime.now().minus({ days: 6 })); //=>	[ DateTime 2022-07-15T19:09:00.115+05:30 ]
console.log(DateTime.now().diff(DateTime.local(1982, 5, 25)).milliseconds); //=>	1267297740116
console.log(DateTime.now().diff(DateTime.local(1982, 5, 25), "days").days); //=>	14667.797918009259
console.log(
  DateTime.now().diff(DateTime.local(1982, 5, 25), ["days", "hours"])
); //=>	[ Duration {"days":14667,"hours":19.150032222222222} ]
console.log(DateTime.now().toLocaleString()); //=>	"21/07/2022"
console.log(DateTime.now().setLocale("zh").toLocaleString()); //=>	"2022/7/21"
console.log(DateTime.now().toLocaleString(DateTime.DATE_MED)); //=>	"21 Jul 2022"
console.log(DateTime.now().setLocale("zh").toLocaleString(DateTime.DATE_MED)); //=>	"2022年7月21日"
console.log(DateTime.now().setLocale("fr").toLocaleString(DateTime.DATE_FULL)); //=>	"21 juillet 2022"
console.log(DateTime.fromISO("2017-05-15")); //=>	[ DateTime 2017-05-15T00:00:00.000+05:30 ]
console.log(DateTime.fromISO("2017-05-15T17:36")); //=>	[ DateTime 2017-05-15T17:36:00.000+05:30 ]
console.log(DateTime.fromISO("2017-W33-4")); //=>	[ DateTime 2017-08-17T00:00:00.000+05:30 ]
console.log(DateTime.fromISO("2017-W33-4T04:45:32.343")); //=>	[ DateTime 2017-08-17T04:45:32.343+05:30 ]
console.log(DateTime.fromFormat("12-16-2017", "MM-dd-yyyy")); //=>	[ DateTime 2017-12-16T00:00:00.000+05:30 ]
console.log(DateTime.now().toFormat("MM-dd-yyyy")); //=>	"07-21-2022"
console.log(DateTime.now().toFormat("MMMM dd, yyyy")); //=>	"July 21, 2022"
console.log(DateTime.now().setLocale("fr").toFormat("MMMM dd, yyyy")); //=>	"juillet 21, 2022"
console.log(DateTime.fromFormat("May 25, 1982", "MMMM dd, yyyy")); //=>	[ DateTime 1982-05-25T00:00:00.000+05:30 ]
console.log(
  DateTime.fromFormat("mai 25, 1982", "MMMM dd, yyyy", { locale: "fr" })
); //=>	[ DateTime 1982-05-25T00:00:00.000+05:30 ]
console.log(DateTime.now().plus({ days: 1 }).toRelativeCalendar()); //=>	"tomorrow"
console.log(DateTime.now().plus({ days: -1 }).toRelativeCalendar()); //=>	"yesterday"
console.log(DateTime.now().plus({ months: 1 }).toRelativeCalendar()); //=>	"next month"
console.log(
  DateTime.now().setLocale("fr").plus({ days: 1 }).toRelativeCalendar()
); //=>	"demain"
console.log(
  DateTime.now().setLocale("fr").plus({ days: -1 }).toRelativeCalendar()
); //=>	"hier"
DateTime.now().setLocale("fr").plus({ months: 1 }).toRelativeCalendar();
