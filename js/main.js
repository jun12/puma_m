/**
 * @author wjsu
 */

var Iteam = {
  init : function() {
    ContentSwipe.setVars();
    this.autoSize();
    this.addEvent();
    Iteam.initSence2();
  },
  autoSize : function() {
    $("#wrap-all").height($(window).height());
    $("#content").height($(window).height() * 3);
    $(".content_child").height($(window).height());
  },
  addEvent : function() {
    this.contentSwipeUp();
    this.contentSwipeDown();
    this.kvClick();
  },
  contentSwipeUp : function() {
    $("#content").on("swipeUp", function() {
      ContentSwipe.contentSwipeUp();
    });
  },
  contentRemoveswipeUp : function() {

  },
  contentSwipeDown : function() {
    $("#content").on("swipeDown", function() {
      ContentSwipe.contentSwipeDown();
    });
  },
  contentRemoveSwipeDown : function() {

  },
  kvClick : function() {
    $(".content_btn_a1").on("click", function() {
      ContentSwipe.contentSwipeUp();
    });
  },
  initSence2 : function() {
    var slider = Swipe(document.getElementById('slider'), {
      auto : 3000,
      continuous : true,
      callback : function(pos) {

        var i = bullets.length;
        while (i--) {
          bullets[i].className = ' ';
        }
        bullets[pos].className = 'on';

      }
    });

    var bullets = document.getElementById('position').getElementsByTagName('li');
  }
};

var ContentSwipe = {
  setVars : function() {
    this.index = 0;
  },
  contentSwipeUp : function(e) {
    if (this.index < 2) {
      this.index++;
      $("#content").addClass("contentTransition");
      $("#content").css("margin-top", -$(window).height() * parseInt(this.index));
    } else {
      return;
    }
    if (this.index == 2) {
      $("#changeControl").addClass("change");
    }
  },
  contentSwipeDown : function(e) {
    if (this.index > 0) {
      this.index--;
      $("#content").addClass("contentTransition");
      $("#content").css("margin-top", -$(window).height() * parseInt(this.index));
    } else {
      return;
    }
    if (this.index == 0) {
      $("#changeControl").removeClass("change");
    }
  }
};
$(function() {
  Iteam.init();
});
