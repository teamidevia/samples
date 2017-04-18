var nowTime = new Date();
var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
document.getElementById('calendarMonth').textContent = months[nowTime.getMonth()];
var el = document.getElementById('calendarYear');
el.textContent = nowTime.getFullYear();
var firstDay = new Date(nowTime.getFullYear(), nowTime.getMonth(),1).getDay();
var endDate = new Date(nowTime.getFullYear(), nowTime.getMonth()+1,0).getDate();
var dayCounter = 1;
for(var i=0; i <= 37; i++) {
	if(i > firstDay) {
		document.getElementById('calendarDay' + i).textContent = (dayCounter < 10) ? '0' + dayCounter : dayCounter;
		dayCounter++;
		if(dayCounter > endDate) {
			break;
		}
	}
}
document.getElementById('calendarDay' + (firstDay + nowTime.getDate())).setAttribute('fill', '#E76C6C');
document.getElementById('calendarDay' + (firstDay + nowTime.getDate())).setAttribute('font-weight', 'bold');
console.log(el);