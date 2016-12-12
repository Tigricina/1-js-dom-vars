'use strict'
var clocksContainer = document.getElementById('clocksContainer'); 
var clockCount = 0; // отвечает за создание нескольких div 


function initializeClock() { 
	var date = new Date(); 
  var format = ['hours', 'minutes', 'seconds']; 
  
  var clockEl = document.createElement('div');
  clockEl.id = 'clock_' + clockCount;
  clockCount++;
  clocksContainer.appendChild(clockEl);
  
  if(arguments.length > 0){
  	if(typeof arguments[0] == 'object' && arguments[0].constructor == Date){
      date = arguments[0];
      
    	if(typeof arguments[1] == 'object' && arguments[1].constructor == Array ){
      	format = arguments[1];
      }
  		
    } else if (typeof arguments[0] == 'object' && arguments[0].constructor == Array) {
      format = arguments[0];
    }
  }
  
  var formatedDate = formatDate(date, format);
  clockEl.innerHTML = formatedDate;
  
  var timer = setInterval(function(){
  	var tick = date.getSeconds() + 1;
    date.setSeconds(tick); 
    
    var formatedDate = formatDate(date, format);
    
  	clockEl.innerHTML = formatedDate;
  }, 1000);
  
}

function formatDate(date, format){
	var formatedDate = '';
  
  var months = {
  	0: 'Январь',
  	1: 'Февраль',
  	2: 'Март',
  	3: 'Апрель',
  	4: 'Май',
  	5: 'Июнь',
  	6: 'Июль',
    7: 'Август',
  	8: 'Сентябрь',
  	9: 'Октябрь',
  	10: 'Ноябрь',
  	11: 'Декабрь',
  }
  
	for(var i = 0; i < format.length; i++){
  	switch (format[i]){
    	case 'year': formatedDate += date.getFullYear(); break;
    	case 'month': formatedDate += months[date.getMonth()]; break;
    	case 'day': formatedDate += date.getDate(); break;
    	case 'hours': formatedDate += ('0' + date.getHours()).slice(-2); break;
    	case 'minutes': formatedDate += ('0' + date.getMinutes()).slice(-2); break;
    	case 'seconds': formatedDate += ('0' + date.getSeconds()).slice(-2); break;
    }
    formatedDate += '  ';
  }
  return formatedDate;
}

initializeClock();
initializeClock(new Date(2016,9,15,14,42));
initializeClock(new Date(2016,9,15,14,42,22), ['year', 'seconds']);
initializeClock(['day', 'month', 'hours', 'minutes', 'seconds']);