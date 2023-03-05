// Datetime in English
window.addEventListener('DOMContentLoaded', function() {
    setInterval(printDate, 1000);
    document.querySelector('.btn').addEventListener('click', function() {
        insertNote(document.querySelector('#noteText').value.trim());
        reset();
    });
    document.querySelector('#noteText').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            insertNote(this.value.trim());
            reset();
        }
    })
});

function printDate() {
    let current = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = current.toLocaleDateString('en-EU', options);
    let time = current.toLocaleTimeString();
    document.getElementById("date-time").innerHTML = date + "<br>" + time;
}

function insertNote(note) {
    if (!note) {
        return;
    }

    const rowTemplate = document.querySelector('.row');
    let newRow = rowTemplate.cloneNode(true);
    newRow.classList.remove('hidden');

    const checkbox = newRow.querySelector('#inputChkbox');
    const label = newRow.querySelector('label');
    const deleteBtn = newRow.querySelector('button');

    label.innerHTML = note;
    label.classList.add('note-text');

    checkbox.addEventListener('change', function() {
        label.classList.toggle('strike-through', this.checked);
    });

    deleteBtn.addEventListener('click', function() {
        newRow.remove();
    });

    document.querySelector('.main').appendChild(newRow);
    reset();
}

function reset() {
    document.querySelector('#noteText').value = '';
}