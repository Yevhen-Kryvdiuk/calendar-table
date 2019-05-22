const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

function createCalendar(id, year, month) {
    const containerForTable = document.querySelector(`#${id}`);
    const table = document.createElement('table');
    const thead = createTableHead(days);
    const dataMonth = getDataMonth(year, month);
    const tbody = createTableBody(dataMonth);

    table.appendChild(thead);
    table.appendChild(tbody);
    containerForTable.appendChild(table);
}

function getDataMonth(year, month) {
    const currentMonth = month - 1;

    const startDay = new Date(year, currentMonth).getDay();
    const quantityDays = new Date(year, month, 0).getDate();

    return {startDay, quantityDays};
}

function createTableHead(days) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');

    days.forEach((day) => {
        const th = document.createElement('th');

        th.innerText = day;
        tr.appendChild(th);
    });
    return thead.appendChild(tr);
}

function createTableBody(dataMonth) {
    const tbody = document.createElement('tbody');
    const position = dataMonth.startDay - 1;
    let tr = document.createElement('tr');

    for (let i = 1; i < dataMonth.startDay; i++) {
        tr.appendChild(document.createElement('td'));
    }

    for (let i = 1; i <= dataMonth.quantityDays; i++) {
        const td = document.createElement('td');
        td.textContent = `${i}`;
        tr.appendChild(td);
        if ((i + position) % 7 === 0) {
            tbody.appendChild(tr);
            tr = document.createElement('tr');
        }
    }

    for(let i = tr.childNodes.length +1; i <= 7; i++ ) {
        tr.appendChild(document.createElement('td'));
    }

    tbody.appendChild(tr);
    return tbody;
}
createCalendar('calendar', 2019, 5);

