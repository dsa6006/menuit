const btnSurvey = document.querySelector('.btn_survey');
const btnAdd = document.querySelector('.btn_add');


const frmSurvey = document.getElementById('addSurvey');
const frmEvent = document.getElementById('addEvent');

btnSurvey.addEventListener('click', function() {

});

btnAdd.addEventListener('click', function() {

});

const btnUpload = document.querySelector('.btn_upload');
const fileUploader = document.getElementById('fileAttach');

let triggerClick = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
});

btnUpload.addEventListener('click', function() {
    let triggerClick = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    fileUploader.dispatchEvent(triggerClick);
});