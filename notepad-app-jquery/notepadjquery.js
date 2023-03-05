$(document).ready(function() {
    setInterval(printDate, 1000);
    $('.btn').click(function() {
        insertNote($('#noteText').val().trim());
        reset();
    });

    $('#noteText').keyup(function(e) {
        if (e.key === 'Enter') {
            insertNote($(this).val().trim());
            reset();
        }
    });

})

function printDate() {
    let current = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let date = current.toLocaleDateString('en-EU', options);
    let time = current.toLocaleTimeString();
    $('#date-time').html(date + '<br>' + time);
}

function insertNote(note) {
    if (!note) {
        return;
    }

    const rowTemplate = $('.row').first();
    let newRow = rowTemplate.clone(true).removeClass('hidden');

    const checkbox = newRow.find('#inputChkbox');
    const label = newRow.find('label');
    const deleteBtn = newRow.find('button');

    label.html(note).addClass('note-text');

    checkbox.change(function() {
        label.toggleClass('strike-through', this.checked);
    });

    deleteBtn.click(function() {
        newRow.remove();
    });

    $('.main').append(newRow);
    reset();
}

function reset() {
    $('#noteText').val('');
}