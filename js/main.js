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
    this.bottomBarInit();
    this.contentSwipeUp();
    this.contentSwipeDown();
    this.kvClick();
  },
  bottomBarInit : function() {
    $("#rightbtn").on("tap", function() {
      $(".inwrap").show();
      $(".instroe").show();
      $("#citySelect").on("change", function(e) {
        var storeHtml = '';
        for (var i = 0; i < storeSouth[$(this).val()].length; i++) {
          var obj = storeSouth[$(this).val()][i];
          storeHtml += '<li><span class="cityname">' + obj.cityname + '</span><span class="local">' + obj.local + '</span></li>';
        }
        $("#instroe_content ul").html('');
        $("#instroe_content ul").html(storeHtml);
      });
      $(".inwrap").on("tap", function() {
        $(".inwrap").hide();
        $(".instroe").hide();
      });
    });
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
      continuous : true,
      callback : function(pos) {
        var i = bullets.length;
        while (i--) {
          bullets[i].className = ' ';
        }
        bullets[pos].className = 'on';
        $("#descTextbtn").attr("data", pos);
      }
    });
    this.initDesc();
    var bullets = document.getElementById('position').getElementsByTagName('li');
  },
  initDesc : function() {
    $(".desc").on("tap", function(e) {
      var flag = parseInt(e.target.getAttribute('data')) + 1;
      $("#descImage").show();
      $("#descImage").css("background-image", "url('images/sence2/picb" + flag + ".jpg');");
      $("#descImage").on("tap", function() {
        $("#descImage").hide();
      });
    });
    $("#descTextbtn").on("tap", function(e) {
      var textIndex = parseInt(e.target.getAttribute('data')) + 1;
      console.log(textIndex);
    });
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

var storeSouth = {
  "shanghai" : [{
    "cityname" : "上海",
    "local" : "上海市徐汇区天钥桥路666号1楼北区PUMA专卖店"
  }, {
    "cityname" : "上海",
    "local" : "上海市浦东新区张扬路588号4楼PUMA专卖店"
  }, {
    "cityname" : "上海",
    "local" : "上海市芳甸路858号附近（世纪公园4号门）PUMA专卖店"
  }],
  "beijing" : [{
    "cityname" : "北京",
    "local" : "北京市房山区京良路致力超越首创奥莱球汇多品足球角店PUMA专柜"
  }, {
    "cityname" : "北京",
    "local" : "北京市东城区夕照寺街东玖大厦致力超越足球店PUMA专柜"
  }, {
    "cityname" : "北京",
    "local" : "北京市海淀区华北滔博公主坟翠微大厦3楼PUMA专柜"
  }, {
    "cityname" : "北京",
    "local" : "北京市朝阳区三里屯北街九号院三里屯太古里南区s9-16、25 PUMA旗舰店"
  }],
  "zhejiang" : [{
    "cityname" : "浙江",
    "local" : "杭州市萧山区市心中路288号5楼PUMA专卖店"
  }, {
    "cityname" : "浙江",
    "local" : "义乌市工人西路15号银泰百货PUMA专卖店"
  }],
  "neimenggu" : [{
    "cityname" : "内蒙古",
    "local" : "呼和浩特市中山西路维多利商厦PUMA专卖店"
  }, {
    "cityname" : "内蒙古",
    "local" : "包头市青山区青年路26号PUMA专卖店"
  }, {
    "cityname" : "内蒙古",
    "local" : "包头市昆都仑区钢铁大街116号PUMA专卖店"
  }],
  "shanxi" : [{
    "cityname" : "山西",
    "local" : "太原市迎泽区双塔西街美莎国际运动城体育路PUMA专卖店"
  }],
  "tianjin" : [{
    "cityname" : "天津",
    "local" : "天津市和平区泽锐永浩班尼路大厦3楼PUMA专卖店"
  }],
  "liaoning" : [{
    "cityname" : "辽宁",
    "local" : "大连市沙河口区黄河路667号PUMA专卖店"
  }],
  "ningxia" : [{
    "cityname" : "宁夏",
    "local" : "银川市新华东街99号PUMA专卖店"
  }],
  "yunnan" : [{
    "cityname" : "云南",
    "local" : "昆明市北京路延长线财富中心2楼滔博运动城PUMA专卖店"
  }, {
    "cityname" : "云南",
    "local" : "昆明市人民中路11号天浩运动城2楼PUMA专卖店"
  }],
  "hunan" : [{
    "cityname" : "湖南",
    "local" : "长沙市黄兴路步行商业街西厢北栋2楼F区PUMA专卖店"
  }, {
    "cityname" : "湖南",
    "local" : "长沙市芙蓉区八一路1号阿波罗商业广场4楼PUMA专卖店"
  }],
  "guangdong" : [{
    "cityname" : "广东",
    "local" : "深圳市罗湖区新园路中海商城1楼PUMA专卖店"
  }, {
    "cityname" : "广东",
    "local" : "深圳市福田区华强北路华强茂业百货7楼PUMA专卖店"
  }, {
    "cityname" : "广东",
    "local" : "广州市北京路广百百货6楼PUMA专卖店"
  }, {
    "cityname" : "广东",
    "local" : "广州市越秀区东川路名店城3楼PUMA专卖店"
  }],
  "fujian" : [{
    "cityname" : "福建",
    "local" : "厦门市嘉禾路SM商业城4楼PUMA专卖店"
  }, {
    "cityname" : "福建",
    "local" : "厦门市湖里万达广场1楼PUMA专卖店"
  }, {
    "cityname" : "福建",
    "local" : "泉州市新华都购物广场PUMA专卖店"
  }],
  "gansu" : [{
    "cityname" : "甘肃",
    "local" : "甘肃省兰州市城关区西北滔博国芳百盛5楼PUMA专卖店"
  }],
  "chongqing" : [{
    "cityname" : "重庆",
    "local" : "重庆市沙坪坝区渝碚路6号劲浪体育PUMA专卖店"
  }],
  "xinjiang" : [{
    "cityname" : "新疆",
    "local" : "新疆乌鲁木齐市红旗路101号PUMA专卖店"
  }, {
    "cityname" : "新疆",
    "local" : "乌鲁木齐市天山区解放南路PUMA专卖店"
  }],
};
