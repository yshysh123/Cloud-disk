function CZsxrleftFn(data){
	var arrh = location.hash.substr(1).split('/');
	var str = '';
	str = fn(data);
	function fn(data){
		var str = '';
		for(var i=0;i<data.length;i++){
			console.log(data[i])
			if(data[i].child.length){
				//有子集
				str+='<li><img src="images/down.png" class="right">&nbsp;<img src="images/wenjianjia3.png" class="wjj">&nbsp;<h3>'+data[i].name+'</h3><ul>'+fn(data[i].child)+'</ul></li>';
			}else{
				//没子集
				str+='<li><img src="" class="right">&nbsp;<img src="images/wenjianjia3.png" class="wjj">&nbsp;<h3>'+data[i].name+'</h3></li>';
				continue;
			}	
		}
		return str;
	}
	list.innerHTML = str;
	var h3s = list.getElementsByTagName('h3');
	var sj = list.getElementsByClassName('right');
	var wjj = list.getElementsByClassName('wjj');
	var num=1;
	for(var i=0;i<arrh.length;i++){
		for(var j=0;j<h3s.length;j++){
			if(h3s[j].nextElementSibling){
				if(arrh[i]==h3s[j].innerHTML){
					h3s[j].nextElementSibling.style.display = 'block';
				}
			}else{
				
			}
		}
	}
	for(var i=0;i<h3s.length;i++){
		//true：收缩，false：展开
		h3s[i].onOff = true;
		h3s[i].index = i;
		h3s[i].onclick = function(){
			var next = this.nextElementSibling;
			if(next){
				if(this.onOff){
					location.hash = '';
					next.style.display = 'block';
					sj[this.index].style.transform = 'rotate(0) translateY(-4px)';
					wjj[this.index].src = "images/wenjianjia2.png";
					changehash(this)
				}else{
					location.hash = '';
					next.style.display = '';
					sj[this.index].style.transform = 'rotate(-90deg) translateX(3px)'
					wjj[this.index].src = "images/wenjianjia3.png";
					changehash(this)
				}
				this.onOff = !this.onOff;
			}else{
				location.hash = '';
				wjj[this.index].src = "images/wenjianjia3.png";
				changehash(this);
			}
		}
	}
}