const btnSurvey = document.querySelector('.btn_survey');
const btnAdd = document.querySelector('.btn_add');

const popWindow = document.getElementById('pop_add');
const frmSurvey = document.getElementById('addSurvey');
const frmEvent = document.getElementById('addEvent');

btnSurvey.addEventListener('click', function() {
    popWindow.dataset.show = true;
    frmSurvey.dataset.show = true;
    frmEvent.dataset.show = false;
});

btnAdd.addEventListener('click', function() {
    popWindow.dataset.show = true;
    frmSurvey.dataset.show = false;
    frmEvent.dataset.show = true;
});

var btnClose = popWindow.querySelectorAll('.btn_cancel');

for(var i = 0; i < btnClose.length; i ++) {
    btnClose[i].addEventListener('click', function() {
        popWindow.dataset.show = false;
    });
}

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