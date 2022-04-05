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

// 팝업 창 열기

var btnClose = popWindow.querySelectorAll('.btn_cancel');

for(var i = 0; i < btnClose.length; i ++) {
    btnClose[i].addEventListener('click', function() {
        popWindow.dataset.show = false;
    });
}

// 팝업 창 닫기

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

fileUploader.addEventListener('change', function() {
    const fileURL = document.getElementById('txtFileName');

    fileURL.value = this.value;
});

// 광고 이미지 및 영상 업로드

const questPrimaryTemplate = document.querySelector('[data-quest-item]');
const optRadioTemplate = document.querySelector('[data-rdo-item]');
const optCheckTemplate = document.querySelector('[data-chk-item]');

const questCard = questPrimaryTemplate.content.cloneNode(true).children[0];
const optionRdo = optRadioTemplate.content.cloneNode(true).children[0];
const optionChk = optCheckTemplate.content.cloneNode(true).children[0];

const cardContainer = document.querySelector('.questContainer');
const questContainer = questCard.querySelector('.opt_container');

// 템플릿 설정

const addCard = document.querySelector('.btn_add_question');

addCard.addEventListener('click', function() {
    cardContainer.append(questCard);
});

const addOption = document.querySelectorAll('.btn_addopt');

for(var i = 0; i < addOption.length; i ++) {
    addOption[i].addEventListener('click', function() {
        alert('끼에엑');
    });
}