/* default javascript */

/* ---------- jQuery basics ---------- */

$(window).on('load', function() {

}); // 페이지 로딩이 끝났을 때

$(document).ready(function() {
    $(".pop_close").click(function () {
        $("#pop_add").hide();
    });
    $(".pop_open").click(function () {
        $("#pop_add").show();
    });
}); // 페이지가 시작될 때

/* ---------- Plain Javascripts ---------- */

/* 모달 열고 닫기 */
const modalWindow = document.querySelector('[data-layer-type="modal"]'); // 레이어 타입이 모달일 때 모달로 지정
const modalOpen = document.querySelector('[data-modal-open]'); // 해당 어트리뷰트가 있을 때 모달 여는 버튼으로 작동
const modalClose = document.querySelector('[data-modal-close]'); // 해당 어트리뷰트가 있을 때 모달 닫는 버튼으로 작동

modalOpen.addEventListener('click', function() {
    modalWindow.showModal();
});

modalClose.addEventListener('click', function() {
    modalWindow.close();
});
/* 모달 열고 닫기 끝 */

/* ---------- Functions ---------- */

function notFound(target) {
    $(target).attr('src', '/resources/images/common/not_exist.png');
} // 존재하지 않는 이미지 대체


/* 팝업 공통 */


