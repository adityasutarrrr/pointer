const subjectCounter = document.querySelector('#subjectCounter');
const subjectContainer = document.querySelector('#subjectContainer');
const enter = document.querySelector('#enterDetails');
const numOfSub = document.querySelector('#numOfSub');
const pointerDisplay = document.querySelector('#pointerDisplay');

let subjectCount = 0;

let gradePoints = [];
let credits = [];

subjectCounter.addEventListener('click', () => {
    let credit = document.createElement('input');
    credit.type = 'number';
    credit.classList.add('credit');
    credits.push(credit);

    let gradePoint = document.createElement('input');
    gradePoint.type = 'number';
    gradePoint.classList.add('gradePoint');
    gradePoints.push(gradePoint);

    let newLine = document.createElement('br');

    subjectContainer.appendChild(credit);
    subjectContainer.appendChild(gradePoint);
    subjectContainer.appendChild(newLine);

    subjectCount++;

    numOfSub.innerHTML = `number of subjects: ${subjectCount}`;

});

enter.addEventListener('click', () => {

    let numerator = 0;
    let totalCredits = 0;
    for (let i = 0; i < subjectCount; i++) {
        totalCredits += parseInt(credits[i].value);
        numerator += (parseInt(credits[i].value) * parseInt(gradePoints[i].value));
    }

    let pointer = numerator / totalCredits;

    console.log(numerator);
    console.log(totalCredits);
    console.log(pointer);

    pointerDisplay.innerHTML = `ur pointar iz: ${pointer}.`;

});
