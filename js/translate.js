window.onload=function(){
	var chnVersion={
		titile:"简历",
		name:"苗宇佳",
		self_discription1:"90后御宅族，爱自娱自乐。计算机专业毕业的伪画娘，徘徊与二次元的真码农。",
		self_discription2:"应聘前端开发职位。2015年应届毕业生，毕业于昆士兰科技大学计算机科学硕士专业。接触前端3年，真正做项目、写程序一年半，除前端开发外，熟悉数据库、PHP、交互设计以及计算机网络。另外有插画设计特长，精通PS等图像处理软件。",
		date_of_birth_title:"出生年月",
		date_of_birth_value:"1992/8",
		tel_title:"电话",
		tel_value:"18554610992",
		email_title:"邮箱",
		email_value:"i@myj.name",
		academy_titile:"学历",
		academy_value:"计算机科学硕士",
	}
	var engVersion={
		titile:"简历",
		name:"苗宇佳",
		self_discription1:"90后御宅族，爱自娱自乐。计算机专业毕业的伪画娘，徘徊与二次元的真码农。",
		self_discription2:"应聘前端开发职位。2015年应届毕业生，毕业于昆士兰科技大学计算机科学硕士专业。接触前端3年，真正做项目、写程序一年半，除前端开发外，熟悉数据库、PHP、交互设计以及计算机网络。另外有插画设计特长，精通PS等图像处理软件。",
		date_of_birth:["Date of Birth","1992/8"],
		tel:["tel","18554610992"],
		email:["email","i@myj.name"],
		academy:["academy backgroud","Master of Computer Science"],
	}
	var chn=document.querySelector("#chn");
	var eng=document.querySelector("#eng");

	var isChn=true;
	
	chn.addEventListener("click",chnTrans,false);
	eng.addEventListener("click",engTrans,false);
	
}