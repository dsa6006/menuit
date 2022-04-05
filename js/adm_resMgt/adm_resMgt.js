const btnAdd = document.querySelector('.btn_add');

const popWindow = document.getElementById('pop_add');
const frmSurvey = document.getElementById('addSurvey');

btnAdd.addEventListener('click', function() {
    popWindow.dataset.show = true;
});

// 팝업 창 열기

var btnClose = popWindow.querySelector('.btn_cancel');

btnClose.addEventListener('click', function() {
    popWindow.dataset.show = false;
});

// 팝업 창 닫기