// 列表
$(document).ready(function() {
	$('.cart>li>a').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('ul').slideToggle(2000);
		});
	});
// 小圖換大圖
$(function(){	
	$("#small img").click(function(){		
		var N = $(this).attr("id").substr(2);	
		$("#big").attr( "src" , "img/book" + N + ".jpg" );	
	});
});
// 實時顯示上傳圖片
$('#file').change(function() {
  var file = $('#file')[0].files[0];
  var reader = new FileReader;
  reader.onload = function(e) {
    $('#demo').attr('src', e.target.result);
  };
  reader.readAsDataURL(file);
});
//上傳成功
$(function(){	
	$("#send").click(function(){	
	window.alert("上傳成功");
	window.location.reload();
	});
});