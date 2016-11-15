function showDay(){
	var d = new Date();
	var day=d.getDate();
	document.all.show.innerHTML="0"+day;	
	var timeID=setTimeout(showTime,1000);//一秒刷新一次显示时间
}
function showMonth(){
	var d = new Date();
	var month=d.getMonth();
	var m =[Jan,Feb,Mar,Apr,May ,Jun,Jul,Aug,Sep,Oct,Nov,Dec];
	document.all.show.innerHTML=m.[month];
	var timeID=setTimeout(showTime,1000);//一秒刷新一次显示时间
}

