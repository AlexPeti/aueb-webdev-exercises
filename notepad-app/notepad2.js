// Datetime in Greek
// We can do it like that instead of getting toLocaleTimeString and toLocaleDateString
// if we want to customize it
// const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Πααρσκευή', 'Σάββατο'];
// const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαρτίου', 'Μαΐου',
// 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

// printGRDate function for Greek date and time
// function printGRDate() {
//     const currentDate = new Date();
//     const day = currentDate.getDay();
//     const date = currentDate.getDate();
//     const month = currentDate.getMonth();
//     const year = currentDate.getFullYear();
//     const hours = currentDate.getHours();
//     const minutes = currentDate.getMinutes();
//     const seconds = currentDate.getSeconds();

//     let formatedDay = daysGR[day];
//     let formatedMonth = monthsGR[month];
//     let formatedDate = `${formatedDay}, ${date} ${formatedMonth} ${year}`;
//     let formatedTime = `${(hours < 10) ? '0' : ''}${hours} 
//                         :${(minutes < 10) ? '0' : ''}${minutes}
//                         :${(seconds < 10) ? '0' : ''}${seconds}`;

//     document.querySelector('.header').innerHTML = formatedDate 
//     + "<br>" + formatedTime;
// }

// window.addEventListener('DOMContentLoaded', function() {
//     setInterval(printGRDate, 1000);
//     /*
//     on click event on insert note
//     */
//     // document.querySelector('.btn').addEventListener('click', function() {
//     //     insertNote(document.querySelector('#noteText').value.trim());
//     //     reset();
//     // });


//     /*
//         on keydown / keyup
//     */
//     // document.querySelector('#noteText').addEventListener('keyup', function(e) {
//     //     if (e.key === 'Enter') {
//     //         insertNote(this.value.trim());
//     //         reset();
//     //     }
//     // })
// });

// function insertNote(note) {
//     if (!note) {
//         return;
//     }

//     let clone = document.querySelector('.row').cloneNode(true);
//     clone.classList.remove('hidden');

//     clone.querySelector('input').addEventListener('click', function() {
//         strikeThrough(clone.querySelector('label'))
//     });

//     clone.querySelector('button').addEventListener('click', function() {
//         deleteNote(this.parentNode)
//     });

//     clone.querySelector('label').innerHTML = note;
//     document.querySelector('.main').appendChild(clone);
// }

// function strikeThrough(lbl) {
//     lbl.classList.toggle('strike-through');
// }

// function deleteNote(note) {
//     note.remove();
// }

// function reset() {
//     document.querySelector('#noteText').value = '';
// }