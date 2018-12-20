//SQRT

function sqrt(){
	//alert("Извлечение  корня квадратного");
	//Объявление переменных
	var r, result;
	//присвоение переменных
	r=document.getElementById("demo").value;
	//расчет   
	result= Math.sqrt(r);
	result=result.toFixed(3);//округление до 3 разряда
	// output result
	//alert(result);
	document.getElementById("demo1").innerHTML= result;
	//end
	
};

function pozent(){
	//alert("Расчет процента от числа");
	var p,  result;
	p=document.getElementById("demo").value;
	p=parseInt(p);
	
	var b = prompt("Введите величину  процента");
	
	//b=parseInt(b);
	
	result = (p/100)*b;
	result=result.toFixed(3);//округление до 3 разряда
	document.getElementById("demo1").innerHTML= result;
	
};

function qarakusi(){
	//alert("Возведение в квадрат");
	var q, result;
	q= document.getElementById("demo").value;
	//q=parseInt(q);
	//
	result = q*q;
	result=result.toFixed(3);//округление до 3 разряда
	document.getElementById("demo1").innerHTML= result;
	
};