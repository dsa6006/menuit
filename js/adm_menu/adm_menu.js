//업로드된 이미지 미리보기
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#pre_img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(":input[name='u_file']").change(function () {
    if ($(":input[name='u_file']").val() == '') {
        $('#pre_img').attr('src', '');
    }
    $('#pre_imgView').css({
        'display': ''
    });
    readURL(this);
});

// 이미지 에러 시 미리보기영역 미노출
// function imgAreaError() {
//     $('#pre_imgView').css({
//         'display': 'none'
//     });
// }

//신규메뉴등록창 닫기(닫기버튼)
$(document).ready(function () {
    $(".add_close").click(function () {
        $("#pop_add").hide();
    });
});

//메뉴추가 버튼 클릭 > 신규메뉴등록창 출력
$(document).ready(function () {
    $(".addProd").click(function () {
        $("#pop_add").show();
    });
});

//등록된 메뉴의 이미지 클릭시 수정창 출력
$(document).ready(function () {
    $(".eachProd").click(function () {
        var imgSrc = $("#imgArea").attr("src");

        $("#pre_img").attr("src", imgSrc);
        $("#pop_add").show();
    });
});

//수정창에서 등록하기 누르면 이미지 삽입
$(document).ready(function () {
    $(".add_register").click(function () {
        var addImg = $("#pre_img").attr("src");

        $("#imgArea").attr("src", addImg);
        $("#pop_add").hide();
    });
});