//选择器封装
function Fn(age1,age2){
	for(var j=0;j<arguments.length;j++){
//		alert();
	switch(age1.charAt(0)){
		case "#" : return document.getElementById(age1.slice(0));
		break;
		case "." : return function(){
			var sum=document.getElementsByTagName('*');
			var sarguments=[];
			for (var i=0;i<sum.length;i++) {
				if(sum[i].className==age1.slice(1)){
					sarguments.push(sum[i]);
				}
			}
			return sarguments;
		}()
		break;
		default:if(arguments.length==1){
			return document.getElementsByTagName(age1);
		}
		else if(arguments.length==2){
			return age1.getElementsByTagName(age2);
		}
	}
	}
}
window.onload=function(){
// var age=document.getElementById('ppt').getElementsByTagName('li');
// var Button=document.getElementById('button').getElementsByTagName('li');
// var left=document.getElementById('float_left');
// var right=document.getElementById('float_right');
// //alert(Button);
// var ss=0;
// for (var i = 0; i < Button.length; i++) {
// 	Button[i].index=i;
// 	var ss=i;
// 	var xx=0;
// 	Button[ss].onclick=function(){
// 		for (var i = 0; i < Button.length; i++) {
// 			Button[i].style.background='';
// 			age[i].style.display='none';
// 			age[i].style.zIndex = '1';
// 			// left.className="none";
// 			// right.className="none";
// 			// alert(right.className);
// 			age[this.index].className = '';
// 		}
// 			// alert(left.className);
// 		// left.className='float_ss';
// 		// right.className='float_ss';
// 		this.style.background='#000';
// 		// alert(this.index);
// 		age[xx].style.display='block';
// 		age[this.index].style.display='block';
// 		// age[(this.index-1)].style.display = 'block';
// 		// age[(this.index-1)].style.zIndex = '2';
// 		age[this.index].style.zIndex = '3';
// 		age[this.index].className = 'ww';
// 		// age[this.index].className='style';
// 		 xx=this.index
// 	}
// }
// ss=0;
// var stem=setTimeout(function asd(){
// 	// alert();
// 	// alert(ss);
// 	Button[ss].onclick();
// 	ss++;
// 	if (ss==5) {
// 		ss=0;
// 	}
// 	stem=setTimeout(asd, 2000)
// }, 2000);
// var ppt=document.getElementById('main');
// ppt.onmouseover=function(){
// 	clearTimeout(stem);
// };
// ppt.onmouseout=function(){
// 	 stem=setTimeout(function asd(){
// 		// alert();
// 		// alert(ss);
// 		Button[ss].onclick();
// 		ss++;
// 		if (ss==5) {
// 			ss=0;
// 		}
// 		stem=setTimeout(asd, 2000)
// 	}, 2000)
// }
// var aa=0;
// var zz=0;
// var outWidth=document.documentElement.clientWidth||document.body.clientWidth;
// var outHeight=document.documentElement.clientHeight||document.body.clientHeight;
// var img=document.getElementById('img');
// var stm1=setTimeout(function ss(){
// 	var tt=Math.ceil(Math.random()*10);
// 		aa=Math.ceil(Math.random()*10);;
// 		zz=Math.ceil(Math.random()*10);;
// 	if (img.offsetLeft>outWidth||img.offsetTop>outHeight) {
// 		img.style.top= img.offsetLeft-aa+'px';
// 		img.style.left=img.offsetTop-zz+'px';
// 	}
// 	else if (img.offsetTop<=0||img.offsetLeft<=0){
// 		img.style.top= img.offsetLeft+aa+'px';
// 		img.style.left=img.offsetTop+zz+'px';
// 	}
// 	else {
// 		img.style.top= img.offsetLeft+aa+'px';
// 		img.style.left=img.offsetTop+zz+'px';
// 	}
// 	// alert(tt);
// 	stmi=setTimeout(ss,500);
// },500)
alert(document.visibilityState);
var img=document.getElementsByTagName('img');
	for (var i = 0; i < img.length; i++) {
		img[i].style.width = Math.ceil(Math.random()*20)+'px';
		img[i].style.height = Math.ceil(Math.random()*20)+'px';
		img[i].style.left = Math.ceil(Math.random()*clientWidth)+'px';
	}
var clientWidth=document.documentElement.clientWidth||document.body.clientWidth;
var setm=setTimeout(function aa(){
	var img=document.getElementsByTagName('img');
	var img_s=document.createElement('img');
	img_s.src='img/xh.png';
	img_s.style.width = Math.ceil(Math.random()*20)+'px';
		img_s.style.height = Math.ceil(Math.random()*20)+'px';
		// img_s.style.marignRight = Math.ceil(Math.random()*clientWidth)+'px';
		img_s.style.left = Math.ceil(Math.random()*clientWidth)+'px';
		img_s.style.position = 'absolute';
		img_s.style.top=0+'px';
		img_s.className='aa';
	document.getElementsByTagName('body')[0].appendChild(img_s);
	if (document.visibilityState) {
		setm=setTimeout(aa, 700);
	}
}, 700)
var outHeight=document.documentElement.clientHeight||document.body.clientHeight;
var scrTop;
var smte=setTimeout(function ss(){
	var ww=document.getElementsByTagName('img');
	scrTop=document.documentElement.scrollTop||document.body.scrollTop;
	for (var i = 0; i < ww.length; i++) {
		if (ww[i].offsetTop>outHeight+scrTop) {
			document.getElementsByTagName('body')[0].removeChild(ww[i]);
			// alert(ww[i]);
		}
	}
	smte=setTimeout(ss,500);
},500);
}

