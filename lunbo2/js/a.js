function Slider(options){
	if(!options){
		throw new Error("请传入参数");
	}else if(!options.myDiv){
		throw new Error("请给myDiv属性传入一个div")
	}else if(!Array.isArray(options.imgs)){
		throw new Error("请传入图片数组")
	}
     this.myDiv = options.myDiv;
     this.myDiv.classList.add("slider");
     this.imgs =options.imgs;
     this.hrefs= options.hrefs;
     this.height=options.height;
     this.width=window.innerWidth;
     this.currentIndex=0;
     
     
     this.init();
}
Slider.prototype.init=function(){
	var myLink=document.createElement("link");
	myLink.rel="stylesheet";
	myLink.type="text/css";
	myLink.href="css/slider.css";
	document.getElementsByTagName("head")[0].appendChild(myLink);
	
	//创建轮播
	this.createUl();
	this.createButtons();
	this.createNav();
}
Slider.prototype.createUl=function(){
	var myUl = document.createElement("ul");
	this.myUl =myUl;
	myUl.style.width=this.width*this.imgs.length+"px";
	myUl.classList.add("clearFix");
	myUl.classList.add("sliders");
	
	var myLi=null;
	var myA=null;
	for(var i=0;i<this.imgs.length;i++){
		myLi =document.createElement("li");
		myA  =document.createElement("a");
		myA.href=this.hrefs[i];
		myA.style.backgroundImage="url("+this.imgs[i]+")";
		myA.style.height=this.height+"px";
		myA.style.width=this.width+"px";
		myLi.appendChild(myA);
		myUl.appendChild(myLi);
	}
	this.myDiv.appendChild(myUl);
}
Slider.prototype.createButtons=function(){
	var myFirstBtn=document.createElement("span");
    myFirstBtn.innerHTML="&lt;";
    var mySecondBtn=document.createElement("span");
    mySecondBtn.innerHTML="&gt;";
    this.myDiv.appendChild(myFirstBtn);
    this.myDiv.appendChild(mySecondBtn);
    myFirstBtn.className="btn";
    mySecondBtn.className="btn";
    console.dir(this.nextSlider);
    mySecondBtn.onclick=holdThis(this,this.nextSlider.name);
}
function holdThis(obj,method){
	console.log(method);
	obj[method].call(obj);
}
Slider.prototype.createNav=function(){
	var myNav=document.createElement("div");
	this.myDiv.appendChild(myNav);
	myNav.className="mnav";	
	
	var myD=null;
	for(var i=0;i<this.imgs.length;i++){
		myD=document.createElement("div");
		myD.className="mD";
		myNav.appendChild(myD);
		
	}
}
Slider.prototype.prevSlider=function(){
	
}
Slider.prototype.nextSlider=function nextSlider(){
	console.log(this);
	if(this.currentIndex<this.imgs.length-1){
		this.currentIndex++;
	}
	this.myUl.style.left = this.myUl.offsetLeft-this.currentIndex*this.width+"px";
}
