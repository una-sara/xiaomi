/**
 * Created by Administrator on 2017/6/2.
 */
$(function(){
    var items = $(".home-elect,.intelligence,.match,.parts,.others");
    /*
    *  find()方法和children方法的区别是children方法只遍历子元素，对于子元素的
    *  后代不能遍历；
    */
    items.mouseenter(function(){
        var tabItems   = $(this).find(".h-tab li"),
              brickList = $(this).find(".brick-list"),
              moreLink = $(this).find(".brick-item .more-link small"),
              curIndex =0;
        tabItems.mouseenter(function(){
            var $this = $(this);
            $this.addClass("selected").siblings().removeClass("selected");
            brickList.removeClass("active");
            curIndex = $this.index();
            brickList.eq(curIndex).addClass("active");
            moreLink.text($this.text());
        });
    });
});