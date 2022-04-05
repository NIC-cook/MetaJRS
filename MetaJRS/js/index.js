window.onload = function(){
	function swiper(){
			 // swiper的使用
			 let mySwiper = new Swiper('.swiper',{
				// 如果需要分页器
				pagination: {
					el: '.swiper-pagination',
					bulletClass : 'my-bullet', // 小圆点样式
					bulletActiveClass: 'my-bullet-active', // 小圆点状态
				},
				loop: true, // 循环模式选项
				// 如果需要前进后退按钮
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: {
					delay: 2000,//1秒切换一次
				},
			})
			// 鼠标移入停止自动滚动
			$('.swiper-slide').mouseenter(function() {
					mySwiper.autoplay.stop();
			})
			// 鼠标移出开始自动滚动
			$('.swiper-slide').mouseleave(function() {
					mySwiper.autoplay.start();
			})

				// wow.js和animate.css的使用方式
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


			var swiper = new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 30,
			centeredSlides: true,
			loop: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
	}
	// 插件初始化
	swiper();

	function typingFn(){
		// 文字打字效果
  	let divTyping = document.getElementById('text')
  	let i = 0,
  	  timer = 0,
  	  str = 'Meta-JRS工作室欢迎你'
  	function typing () {
  	  if (i <= str.length) {
  	    divTyping.innerHTML = str.slice(0, i++) + '_'
  	    timer = setTimeout(typing, 100)
  	  }
  	  else {
  	    divTyping.innerHTML = str//结束打字,移除 _ 光标
  	    clearTimeout(timer)
  	  }
  	}
  	typing();
	}
	// 打字函数调用
	typingFn()

	function toolbar(){
		// 观看视频轮播图效果
		let ols = document.querySelectorAll('.portfolio ol>li');
		let oPort = document.querySelector('.portfolio')
		let uls = document.querySelector('.portfolio ul')
		let movels = ols[0]
		console.log(movels);
		let oPortW = oPort.offsetWidth;
		for(let i = 0;i<ols.length;i++){
			ols[i].onclick = function(){
				// 排他思想
				movels.className = ''
				this.className = 'block';
				movels = this;
				// 调用动画
				animate(uls,-(i*oPortW))
			}
		}
	}
	// 作品展示轮播图
	toolbar();

	var fhdb = document.querySelector('.fhdb');
	fhdb.addEventListener('click', function() {
		animate2(window, 0);
	})
	// 返回顶部调用
	// fhdb();

  // 动画封装
  function animate(obj, target, amy) {
    // 当我们不断的点击按钮，这个元素的速度会越来越快，因为开启了太多定时器
    // 解决方案就是 让我们元素只有一个定时器执行
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.time)
    obj.time = setInterval(function() {
        // 缓速动画就是（ 目标位置 - 移动后距离网页的位置） / 10
        // var spp = Math.ceil((target - obj.offsetLeft) / 10)
        var spp = (target - obj.offsetLeft) / 10;
        spp = spp > 0 ? Math.ceil(spp) : Math.floor(spp)
        if (obj.offsetLeft == target) {
            // console.log(obj.offsetLeft);
            clearInterval(obj.time);
            if (amy) {
                amy();
            }
        }
        obj.style.left = obj.offsetLeft + spp + 'px';
    }, 10)
  }
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

