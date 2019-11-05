/**
 * Created by Administrator on 2017/5/25.
 */
$(function() {
    var $slider = $(".xm-star,.recommend");

    // 给xm-star 和recommend添加鼠标移入事件,根据this指向的对象查找按钮并添加点击事件
    $slider.mouseenter(function () {
        var $this = $(this),
            $sliderItem = $this.find(".brick-list"),         //轮播项
            $pre = $this.find(".btn-group .pre"),
            $next = $this.find(".btn-group .next"),
            len = $sliderItem.children().length,           //li个数
            width = 248 * len,     //248为每个li的占位宽
            page = 0,          //初始页面
            max = len / 5;   //最大页面

        //设置ul宽度，以便使所有li排成一排
        $sliderItem.css("width", width);
        $pre.on("click",clickHandleFn);

        //设置button hover效果
        $pre.hover(mouseIn, mouseOut);
        $next.hover(mouseIn, mouseOut);

        function mouseIn() {
            if (!$(this).hasClass("disabled")) {
                $(this).addClass("active");
            }
        }

        function mouseOut() {
            if (!$(this).hasClass("disabled")) {
                $(this).removeClass("active");
            }
        }

        function clickHandleFn(e) {
            e.stopPropagation();
            console.log(e.currentTarget);
            if($(this).index()){
                page--;
            }else{
                page++;
            }
            move(page);
            $pre.off("click",clickHandleFn);
            $next.off("click",clickHandleFn);
            disable(page);
            enable(page);

        }

        //移动
        function move(page){
            $sliderItem.css("transform","translate("+ (-width / max)*page +"px)");
        }

        //禁用按钮
        function disable(page){
            if(page === 0){
                $next.off("click",clickHandleFn).addClass("disabled").removeClass("active");
            }
            if(page === max-1){
                $pre.off("click",clickHandleFn).addClass("disabled").removeClass("active");
            }
        }

        //激活按钮
        function enable(page) {
            if (page > 0) {
                $next.on("click", clickHandleFn).removeClass("disabled");
            }
            if (page < max - 1) {
                $pre.on("click", clickHandleFn).removeClass("disabled");
            }
        }
    });
});