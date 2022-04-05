window.onload = function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      bulletClass : 'my-bullet', // 小圆点样式
      bulletActiveClass: 'my-bullet-active', // 小圆点状态
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  	// 鼠标移入停止自动滚动
  $('.carousel').mouseenter(function() {
    swiper.autoplay.stop();
  })
  // 鼠标移出开始自动滚动
  $('.carousel').mouseleave(function() {
    swiper.autoplay.start();
  })


  var wow = new WOW({
    boxClass:     'nj',       // 自定义基类名称
    animateClass: 'animated', // 指定需要使用的动画库的名称
    offset:       0,          // 在全局统一的设置元素的data-wow-offset
    mobile:       true,       // 在移动端是否需要执行动画
    live:         true,        // 是否需要开启异步加载内容
    callback: function(box){
      console.log(box);
    }
  });
  wow.init();


  var fhdb = document.querySelector('.fhdb');
	fhdb.addEventListener('click', function() {
		animate2(window, 0);
	})
  
  function animate2(obj, target, callback) {
		// console.log(callback);  callback = function() {}  调用的时候 callback()

		// 先清除以前的定时器，只保留当前的一个定时器执行
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
				// 步长值写到定时器的里面
				// 把我们步长值改为整数 不要出现小数的问题
				// var step = Math.ceil((target - obj.offsetLeft) / 10);
				var step = (target - window.pageYOffset) / 10;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
				if (window.pageYOffset == target) {
						// 停止动画 本质是停止定时器
						clearInterval(obj.timer);
						// 回调函数写到定时器结束里面
						if (callback) {
								// 调用函数
								callback();
						}
				}
				// 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
				// window.sc = window.pageYOffset + step + 'px';
				window.scroll(0, window.pageYOffset + step);
		}, 15);
	}
}