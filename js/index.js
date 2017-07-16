function addDataFn(){
	var max = maxId(Data);
	if(tianjiaOnf){
		tianjiaOnf = false;
		hashFn();
		yun_rename.style.display = 'block';
		if(!yun_bookOnf){
			yun_rename.style.top = 160 +'px';
			yun_rename.style.left = 23 +'px';
		}else{
			yun_rename.style.top = 62 +'px';
			yun_rename.style.left = 63 +'px';
		}
		var j = {
	    		id:max,
				name:inpval.value,
				child:[]
	    	}
	    arrdata.unshift(j);
	    createChild(arrdata);
		spans[0].onclick = function(){
			yun_rename.style.display = 'none';
			if(inpval.value){
				inpval.value = inpval.value + chongming(arrdata,inpval.value);
			}else{
				inpval.value = '新建文件夹' + chongming(arrdata,inpval.placeholder);
			}
	    	hashFn();
			arrdata[0].name = inpval.value;
			inpval.value = '';
	    	createChild(arrdata);
	    	CZsxrleftFn(Data);
	    	quanxuan();
	    	tianjiaOnf = true;
		}
		spans[1].onclick = function(){
			yun_rename.style.display = 'none';
			arrdata.splice(0,1);
			createChild(arrdata);
			CZsxrleftFn(Data);
			quanxuan();
			tianjiaOnf = true;
		}
	}
}
function renameFn(){
	if(tianjiaOnf){
//		hashFn();
		var inps = yun_content_right_bottom.getElementsByTagName('input');
//		console.log(numCMM)
		if(numCMM==1){
			tianjiaOnf = false;
			for(var i=0;i<inps.length;i++){
				if(inps[i].checked){
					numCM = i;
					break;
				}
			}
			yun_rename.style.display = 'block';
			if(!yun_bookOnf){
				yun_rename.style.top = 160 + Math.floor(numCM/5)*160 + 'px';
				yun_rename.style.left = 23 + 160*(numCM%5) +'px';
			}else{
				yun_rename.style.top = 62+ 51*numCM +'px';
			}
    		
    		spans[0].onclick = function(){
    			yun_rename.style.display = 'none';
    			if(inpval.value){
    				inpval.value = inpval.value + chongming(arrdata,inpval.value);
    				arrdata[numCM].name = inpval.value;
    			}else{
    			}
    			inpval.value = '';
    			createChild(arrdata);
    			CZsxrleftFn(Data);
    			quanxuan();
    			tianjiaOnf = true;
    		}
    		spans[1].onclick = function(){
    			yun_rename.style.display = 'none';
    			quanxuan();
    			tianjiaOnf = true;
    		}
		}
	}
}

function deleteFn(){
	if(tianjiaOnf){
		tianjiaOnf =false;
		//循环哪个勾选，删哪个
//		hashFn();
		var inps = yun_content_right_bottom.getElementsByTagName('input');
		
		var hashnew = location.hash;
		if(hashnew){
			for(var i=0;i<inps.length;i++){
	    		if(inps[i].checked){
	    			//删数据
	                for(var j=0;j<arrdata.length;j++){
		        		if(inps[i].nextElementSibling.innerHTML == arrdata[j].name){
		        			arrdata.splice(j,1);
		        		}
		        	}
	                //删结构
					yun_content_right_bottom.removeChild(inps[i].parentNode);
					//inps获取元素动态性，删完会重新获取，所以i--，不然少判断一位
	    			i--;
	    		}
	    	}
			createChild(arrdata);
			CZsxrleftFn(Data);
			quanxuan();
			tianjiaOnf = true;
		}else{
			for(var i=0;i<inps.length;i++){
	    		if(inps[i].checked){
	    			//删数据
	                for(var j=0;j<Data.length;j++){
		        		if(inps[i].nextElementSibling.innerHTML == Data[j].name){
		        			Data.splice(j,1);
		        		}
		        	}
	                //删结构
					yun_content_right_bottom.removeChild(inps[i].parentNode);
					//inps获取元素动态性，删完会重新获取，所以i--，不然少判断一位
	    			i--;
	    		}
	    	}
			createChild(Data);
			CZsxrleftFn(Data);
			quanxuan();
			tianjiaOnf = true;
		}
	}
}
