const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

function createCalendar(id, year, month) {
    const currentMonth = month - 1;
    const date = new Date(year, currentMonth);
    const tableDiv = document.querySelector(`#${id}`);
    const table = document.createElement("table");
    let tr = document.createElement("tr");

    days.forEach((day) => {
        const th = document.createElement("th");
        th.innerText = day;
        tr.appendChild(th);
    });
    table.appendChild(tr);

    tr = document.createElement("tr");
    for (let i = 0; i < getDay(date); i++) {
        tr.appendChild(document.createElement("td"));
    }

    while (date.getMonth() === currentMonth) {
        const td = document.createElement("td");
        td.innerHTML = date.getDate();
        tr.appendChild(td);

        if (getDay(date) % 7 === 6) {
            table.appendChild(tr);
            tr = document.createElement("tr");
        }

        date.setDate(date.getDate() + 1);
    }

    if (getDay(date) !== 0) {
        for (let i = getDay(date); i < 7; i++) {
            tr.appendChild(document.createElement("td"));
        }
        table.appendChild(tr);
    }

    tableDiv.appendChild(table);
}

function getDay(date) {
    let day = date.getDay();
    if (day === 0) {
        day = 7;
    }
    return day - 1;
}


createCalendar('calendar', 2019, 5);
