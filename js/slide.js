/**
 * Created by jack on 2017/5/18.
 */
 $(function(){

	/*carousel start*/
	var parent = $(".xm-slider-box ul").eq(0);
	var ctrBtn = $(".xm-slider-box ul").eq(1);
	var cur = 0;
	/*利用事件冒泡机制直接在父元素上绑定hover事件也能在子元素上执行事件函数，二*/
     ctrBtn.click(function(e){
		e = e || window.event;
		carousel(e);
	});
	 var timer = setInterval(carousel,3000);
     parent.hover(function(){
		clearInterval(timer);
	 },function(){
		timer = setInterval(carousel,3000);
	 });
     ctrBtn.hover(function(){
         clearInterval(timer);
     },function(){
         timer = setInterval(carousel,3000);
     });
	 
	 function carousel(e){
	     /*注意设置checked、selected属性时只能用prop方法，不能使用attr()方法*/
		 e?(cur = $(e.target.parentNode).index()):(cur<4?cur++:cur = 0);
         parent.children().eq(cur).addClass("active").siblings().removeClass("active");
         ctrBtn.children().find("input:checked").prop("checked",false);
         /*ctrBtn.children().find("input:checked").removeAttr("checked");*/
         ctrBtn.children().eq(cur).find("input").prop("checked",true);
	 }
	 /*carousel end*/
 });
