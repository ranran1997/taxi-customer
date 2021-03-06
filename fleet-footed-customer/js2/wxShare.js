wx.config({  
   
    appId : 'wx622ca8545e5c354b', //必填，公众号的唯一标识  
    timestamp : timestamp, //必填，生成签名的时间戳  
    nonceStr : nonceStr, //必填，生成签名的随机串  
    signature : signature,//必填，签名，见附录1  
    jsApiList : [ 'onMenuShareAppMessage','onMenuShareTimeline' ]//必填，需要使用的JS接口列表，所有JS接口列表见附录2  
});  
wx.ready(function(){  
    wx.onMenuShareTimeline({  
        title: $('#friendGroupTittle').val(),  
        link: $('#friendGroupLink').val(),  
        imgUrl: $('#friendGroupsUrl').val(),  
        success: function () {   
            // 用户确认分享后执行的回调函数  
             alert('分享到朋友圈成功');  
        },  
        cancel: function () {   
            // 用户取消分享后执行的回调函数  
             alert('你没有分享到朋友圈');  
        }  
    });  
    wx.onMenuShareAppMessage({  
          title: $('#friendGroupTittle').val(),  
          desc: $('#friendGroupContent').val(),  
          link: $('#friendGroupLink').val(),  
          imgUrl: $('#friendGroupsUrl').val(),  
          trigger: function (res) {  
            // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回  
          },  
          success: function (res) {  
              alert('分享给朋友成功');  
          },  
          cancel: function (res) {  
            alert('你没有分享给朋友');  
          },  
          fail: function (res) {  
            alert(JSON.stringify(res));  
          }  
        });  
});