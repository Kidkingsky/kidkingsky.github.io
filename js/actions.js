var exPage1 = "在元富證券任職期間主要開發工具為delphi7、delphi2010、xe6、winform(c#) ，"+
"工作期間開發三個交易工具上線及籌備新交易軟體開發，"+
"在三個月試用期內，已經可以獨立開發偵錯程式，擅於與團隊裡的pm溝通。";

var exPage2 = "在中華網龍任職期間主要使用開發工具為Delphi2007、XE2及Delphi套件FMM4除錯，對於開發Delphi主要善於控管程式資源、釋放暫存記憶體及開發共用工具(繼承及泛型)，使用Delphi存取MySQL資料，並使用MYSQL EVEMT 及 Stored procedure 分析數據，善於Delphi GUI規劃使用及設定。";
var exPage3 = "時常利用閒暇時間進修Html、Css、Js, jQuery, Bootstrap開發網頁前端及試做一些小工具連結後端php。"
$(document).ready(function () {

	$("#Experience").addClass('pageclose');
	$("#Works").addClass('pageclose');

	$("#about").on("click", function(){
		$("#BasicInformation").removeClass('pageclose');
		$("#Experience").addClass('pageclose');
		$("#Works").addClass('pageclose');
	})

	$("#experience").on("click", function(){
		$("#BasicInformation").addClass('pageclose');
		$("#Experience").removeClass('pageclose');
		$("#Works").addClass('pageclose');
		$(".page1").click();
	})
	
	$("#work").on("click", function(){
		$("#BasicInformation").addClass('pageclose');
		$("#Experience").addClass('pageclose');
		$("#Works").removeClass('pageclose');
	})

	$(".page1").hover(function() {
    	$( this ).css("background-color", "yellow")
  			}, function() {
    	$( this ).css("background-color", "#fff");
  	}).on("click",function(){
  		$(".excontext p").html(exPage1);
  	});

	$(".page2").hover(function() {
    	$( this ).css("background-color", "yellow")
  			}, function() {
    	$( this ).css("background-color", "#fff");
  	}).on("click", function(){
  		$(".excontext p").html(exPage2);
  	});

  	$(".page3").hover(function() {
    	$( this ).css("background-color", "yellow")
  			}, function() {
    	$( this ).css("background-color", "#fff");
  	}).on("click", function(){
  		$(".excontext p").html(exPage3);
  	});
});