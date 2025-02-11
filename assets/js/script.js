
document.addEventListener('DOMContentLoaded', displayHistory);

document.getElementById('formGrade').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const units = document.querySelectorAll('.unit');
    const grades = document.querySelectorAll('.grade');

    let totalWeightedGrade = 0;
    let totalUnits = 0;

    for (let i = 0; i < 5; i++) {
        let unit = parseFloat(units[i].value);
        let grade = parseFloat(grades[i].value);

        if (unit <= 0) {
            alert(`Invalid unit value for Subject ${i + 1}. Units must be greater than 0.`);
            return;
        }

        totalWeightedGrade += unit * grade;
        totalUnits += unit;
    }

    let gwa = (totalWeightedGrade / totalUnits).toFixed(2);

    document.getElementById('output').innerHTML = 
        `<p><strong>${name}</strong>, your General Weighted Average (GWA) is: <strong>${gwa}</strong></p>`;

    saveHistory(name, gwa);
    displayHistory();
});

function saveHistory(name, gwa) {
    let history = JSON.parse(localStorage.getItem('gwaHistory')) || [];
    history.push({ name, gwa, date: new Date().toLocaleString(), timestamp:Date.now() });
    localStorage.setItem('gwaHistory', JSON.stringify(history));
}

function displayHistory() {
    const historyList = document.getElementById('history');
    historyList.innerHTML = '';

    let history = JSON.parse(localStorage.getItem('gwaHistory')) || [];
    const now = Date.now();

    history = history.filter(entry => { now - entry.timestamp < 1800000 }); // history will be remove after 30mins
    localStorage.setItem('gwaHistory', JSON.stringify(history));

    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} - GWA: ${entry.gwa} (Date: ${entry.date})`;
        historyList.appendChild(li);
    });
}