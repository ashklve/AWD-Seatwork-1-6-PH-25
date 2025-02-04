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
});