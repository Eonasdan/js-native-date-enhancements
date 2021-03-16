import DateTime from "./datetime.js";

const appDiv = document.getElementById("app");
function spew(message) {
    appDiv.innerHTML += message;
    appDiv.innerHTML += "<br/>";
}

var doFormat = date => {
    date = date || dt;

    var format = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        fractionalSecondDigits: 3
    };

    if (typeof date.format !== "function") {
        return new Intl.DateTimeFormat(undefined, format).format(date);
    }

    return date.format(format);
};

var dt = new DateTime();
spew("<h3>testing manipulate by 2 months</h3>");
spew(`base: ${doFormat()}`);
dt.manipulate(2, "month");
spew(`after: ${doFormat()}`);

(function() {
    spew("<h3>testing convert</h3>");
    var date = new Date(2021, 3, 30, 11, 45, 32, 984);
    spew(
        `as Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ${doFormat(date)}`
    );
    var converted = DateTime.convert(date);
    spew(`as DateTime: ${doFormat(converted)}`);
    spew("<h3>testing clone</h3>");
    spew(
        `cloned and altered: ${doFormat(converted.clone.manipulate(1, "month"))}`
    );
    spew(`orginal: ${doFormat(converted)}`);
})();

(function() {
    spew("<h3>testing startOf</h3>");

    spew(`base: ${doFormat()}`);

    dt.startOf("seconds");
    spew(`seconds: ${doFormat()}`);

    dt.startOf("minutes");
    spew(`minutes: ${doFormat()}`);

    dt.startOf("hours");
    spew(`hours: ${doFormat()}`);

    dt.startOf("date");
    spew(`date: ${doFormat()}`);

    dt.startOf("weekDay");
    spew(`weekDay: ${doFormat()}`);

    dt.startOf("month");
    spew(`month: ${doFormat()}`);

    dt.startOf("year");
    spew(`year: ${doFormat()}`);
})();

(function() {
    spew("<h3>testing endOf</h3>");

    dt = new DateTime();
    spew(`base: ${doFormat()}`);

    dt.endOf("seconds");
    spew(`seconds: ${doFormat()}`);

    dt.endOf("minutes");
    spew(`minutes: ${doFormat()}`);

    dt.endOf("hours");
    spew(`hours: ${doFormat()}`);

    dt.endOf("date");
    spew(`date: ${doFormat()}`);

    dt.endOf("weekDay");
    spew(`weekDay: ${doFormat()}`);

    dt.endOf("month");
    spew(`month: ${doFormat()}`);

    //dt = new DateTime();
    dt.endOf("year");
    spew(`year: ${doFormat()}`);
})();

(function() {
    spew("<h3>testing query</h3>");
    spew(`using: ${doFormat()}`);
    spew(`isBefore (now): ${dt.isBefore(new Date())}`);
    spew(`isAfter (now): ${dt.isAfter(new Date())}`);

    dt = new DateTime().manipulate(-1, "month");
    spew(`using: ${doFormat()}`);
    spew(`isBefore (now): ${dt.isBefore(new Date())}`);
    spew(`isAfter (now): ${dt.isAfter(new Date())}`);
})();

(function() {
    dt = new DateTime(2021, 2, 21);
    spew("<h3>testing format</h3>");
    spew(`using: ${doFormat()}`);
    spew(`browser default: ${dt.format()}`);
    spew(
        `using format object: ${dt.format({
            month: "long"
        })}`
    );

    spew(`using German (de): ${dt.format(undefined, "de")}`);
    spew(
        `using format object: ${dt.format(
            {
                month: "long"
            },
            "de"
        )}`
    );
})();

(function() {
    dt = new DateTime(2021, 3, 15, 15, 0, 15);
    spew("<h3>testing meridiem</h3>");
    spew(`using: ${doFormat()}`);
    spew(`browser default: ${dt.meridiem()}`);
    spew(`Korean: ${dt.meridiem("ko")}`);
    spew(`German: ${dt.meridiem("de")}`);
    spew(`Chinese: ${dt.meridiem("zh")}`);
})();

(function() {
    dt = new DateTime(2021, 3, 15, 15, 0, 15);
    spew("<h3>testing parts</h3>");
    spew(`using: ${doFormat()}`);
    let parts = dt.parts();
    spew(`hour: ${parts.hour}`);
    spew(`month: ${parts.month}`);
    spew(`dayPeriod: ${parts.dayPeriod}`);
    spew("<hr/>Korean locale");
    const ko = dt.clone;
    ko.locale = "ko";
    parts = ko.parts();
    spew(`hour: ${parts.hour}`);
    spew(`month: ${parts.month}`);
    spew(`dayPeriod: ${parts.dayPeriod}`);
})();
