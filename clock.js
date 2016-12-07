'use strict'
function initializeClock() {
 var now = new Date();
 var hour=now.getHours();
 var minute=now.getMinutes();
 var second=now.getSeconds();
 
 document.getElementById('clock').innerHTML = +(hour<10?'0':'')+hour+':'+(minute<10?'0':'')+minute+':'+(second<10?'0':'')+second;
 setInterval('initializeClock()',1000);
}
initializeClock();
