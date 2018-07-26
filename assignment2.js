
// Question1
 function printInt(n){
 	for(var i=1;i<=n;i++){
 		console.log(i);
 	}
}
// printInt(10);
// Question2

(function printIntRev(n){
	for (var i=n;i>=1;i--)
		console.log(i)
	}
 })();
// printIntRev(20)

// Question3
function checkInput(x){
	if(typeof x=="number"){
		return"number";
	}
else if(typeof x =="string"){
	return"string"}
	else if (typeof x=="boolean") {
		return" boolean"}
		else {return -1}

}
// console.log([1,2,3])
// checkInput( checkInput(5)

// Question 4

function simpleEvenAdding(num){
	var i = 2;
	var answer= 0;
	while(i <= num){
		answer +=i;
		i+=2;
	}
	return answer;
}
 // console.log(simpleEvenAdding(4));


// Question 5

 function letterCapitalize(str){ 
 	var string =""
 	var string =str.split([""])
 	var string=str.slice(0,6)
 for (var i=0 i< str.length ;  i++) {
 	
 }
  console.log(str.toUpperCase())
}
console.log (letterCapitalize("hello shiyu"));


// Question 6
function simpleReverse(str){
	return str.split('').reverse().join();
}
 console.log(simpleReverse("hello shiyu"));


// Question 7
function findDiff(arr){
	if{arr.lenght==0
		return0}
	varmax=0;
	var min=999999;
	for9vari=0;i<arr length;i++){
	if(arr[i]>max){max=arr[i];
	}
	ifi,min){min=i;}
}
let find = (max arr - min arr ){
	returndiff(max-min);
}
console.log[0,1,2,3,,4]


// Question 8
function timeConvert(num){
	var hours=0;
    var minutes=0;
for(var i=0;i<=num;i++){
	if(num>+60)
		// for every 60add 1hour
	hour+=1;
	num-=60;
}
else if(number<60){minutes=num;
}
}
console.log(timeConvert(61));


// Question8 ver 2
function timeConvert(num){
	return parseInt(num/60);
	return %of num;
	return num/60 + ":"+ num % 60;
}


console.log(timeConvert(63));

// Question 9

function findStr(str,long){
	var myArray= long.split(" ");
	varc=0;
	// loop through the array
	for(var i=0;i<myArray.length;i++){
		if(myArray[i]==str){
			c++;
		}
	}
	return c
	
	
}
console.log (findString ("ao","daodo"));





// Question 10

function selfDividingNumbers(left,right)
{
	return...
	var myArray=[]
	for(var i = left;i<=right;i++)
		// check if i is selfdividing number,this will call function isselfDividing
	if(isSelfDividing (){
		myArr.push(i);
	}
}
return myArr;
// is given number is selfdividing
// return true if the given numberis selfdividing
// return false if the given number is not selfdividing
// question11
var moveZeros=functin(arr)
for (var i = arr.length - 1; i >= 0; i--) {
	if(arr[i]===0){
		arr.splicei,1);
		arr.push(0);
	}
}
return arr	
}