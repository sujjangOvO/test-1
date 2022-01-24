function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Links.setColor('powderblue');
} else {
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value = 'night';

  Links.setColor('yellow');
}
}

var Links = { // 객체화
  setColor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while( i < alist.length){
    //   alist[i].style.color = color;
    //   i++;
    // }

    /* $라는 이름의 함수, 이 웹페이지의 모든 a태그를 jqeury로 제어한다. 굉장히 직관적이다.*/
    $('a').css('color',color);
    // 새로운 언어가 아닌 js의 라이브러리인 jqeury !!
    // css함수라는 것은 jquery의 함수. 내부적으로 위의 작업을 처리해주는 것이다.
  }
}

var Body = { // 객체화
  setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);

  }, // 객체의 property를 구분할 땐 ,를 사용한다.
  setBackgroundColor : function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
