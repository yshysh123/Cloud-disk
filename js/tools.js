//查找数据
function getData(arr,id){
	var obj = null;
	fn(arr);
	function fn(arr){
		for(var k of arr){
			if(k.id==id){
				obj = k.hashp2;
				return;
			}
			if(k.child.length){
				fn(k.child);
			}	
		}
	}
	return obj;
}
//左侧改变hash值
function changehash(obj){
	location.hash += '/'+obj.innerHTML;
	if(obj.parentNode.parentNode.previousElementSibling){
		changehash(obj.parentNode.parentNode.previousElementSibling)
	}else{
		var h = location.hash.substr(1).split('/');
		var h2 = h.reverse();
		h2.unshift('');
		h2.pop();
		location.hash = h2.join('/')
	}
}

function getDatabyhash(arr,hash){
	var obj = null;
	fn(arr);
	function fn(arr){
		for(var k of arr){
			if(k.hashp2==hash){
				obj = k;
				return;
			}
			if(k.child.length){
				fn(k.child);
			}	
		}
	}
	return obj;
}
//通过名字查找数据
function getDatabyname(arr,name){
	for(var k of arr){
		if(k.name==name){
			n++;
			hashobj = k;
			if(n!=arrpath.length){
				getDatabyname(hashobj.child,arrpath[n])
			}
		}
	}
}
//通过名字找ID
//function getIdbyname(arr,name){
//	var obj = null;
//	fn(arr);
//	function fn(arr){
//		for(var k of arr){
//			if(k.name==name){
//				arr.push(k.id);
//				if(k.child.length){
//					fn(k.child);
//				}
//			}	
//		}
//	}
//	return arr[arr.length-1];
//}
//判断是否有重名
function chongming(arr,str){
	var str1 = ''
	for(var k of arr){
		if(k.name==str){
			str1 = '('+newnum+')';
			newnum++;
			chongming(arr,str+str1);
		}else{
			
		}
//		console.log(newnum)
	}
	return str1;
}
//重命名判断是否有重名
function chongming2(arr,str){
	var str1 = '';
	for(var k of arr){
		if(k.name==str){
			str1 = '('+chongMMnum+')';
			chongMMnum++;
			chongming2(arr,str+str1);
		}else{
			
		}
	}
	return str1;
}

//找最大值ID
//console.log(max)
function maxId(data){
	var max = 0;
	data.forEach(function(a){
		if(a.id>max){
			max = a.id;
		}
	});
	return max;
}