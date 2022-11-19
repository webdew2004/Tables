var data = [
	{
		"name": "Chava Mitchell",
		"phone": "1-308-775-8726",
		"country": "France",
		
	},
	{
		"name": "Jolie Chambers",
		"phone": "(482) 573-4763",
		"country": "Austria",
		
	},
	{
		"name": "Hu Carson",
		"phone": "(910) 242-3027",
		"country": "Sweden",
	
	},
	{
		"name": "Haley Walsh",
		"phone": "(321) 133-6856",
		"country": "Ukraine",
	
	},
	{
		"name": "Abigail Sheppard",
		"phone": "1-857-959-3261",
		"country": "Russian Federation",
		
	},
	{
		"name": "Abigail Sheppard",
		"phone": "1-857-959-3261",
		"country": "Russian Federation",
		
	}
];


data.forEach(element =>{
 let tbody=document.querySelector("#tbody");
 let tr =document.createElement("tr");
 let td_name =document.createElement("td");
 let td_phone =document.createElement("td");
 let td_country =document.createElement("td");
 let td_button =document.createElement("td");
 let td_dalet =document.createElement("td");
 let tahrirButton=document.createElement("button");
 tahrirButton.innerText="Tahrirlash";
   tahrirButton.classList.add("btn","btn-info");
	daletButton = document.createElement("button");
   daletButton.innerText="Delete";
   daletButton.classList.add("btn","btn-danger");



  td_name.innerHTML=element.name;
  td_phone.innerHTML=element.phone;
  td_country.innerHTML=element.country;
//   td_button.innerHTML=element.editButton;
  td_button.appendChild(tahrirButton);
  td_dalet.appendChild(daletButton);
  tr.appendChild(td_name);
  tr.appendChild(td_phone);
  tr.appendChild(td_country);
  tr.appendChild(td_button);
  tr.appendChild(td_dalet);
  tbody.appendChild(tr);


  tahrirButton.addEventListener("click", function f() {
	td_country.contentEditable=true;
	td_name.contentEditable=true;
	td_phone.contentEditable=true;

  })
  daletButton.addEventListener("click", function f() {
	tr.style.display="none"
	
  })
});

 let inp_name=document.querySelector("#name");
 let inp_phone=document.querySelector("#phone");
 let inp_country=document.querySelector("#country");
 let addButton=document.querySelector("#button1");
 let editButton=document.querySelector("#button2");

 addButton.addEventListener("click", function f() {

    
    let tbody=document.querySelector("#tbody")
    let tr =document.createElement("tr");
    let td_name =document.createElement("td");
    let td_phone =document.createElement("td");
    let td_country =document.createElement("td");
    let td_button =document.createElement("td")
	let td_dalet =document.createElement("td");
	tahrirButton=document.createElement("button");
	tahrirButton.innerText="Tahrirlash";
	tahrirButton.classList.add("btn","btn-info");

	daletButton = document.createElement("button");
   daletButton.innerText="Delete";
   daletButton.classList.add("btn","btn-danger");

   

   tahrirButton.addEventListener("click", function f() {
	td_country.contentEditable=true;
	td_name.contentEditable=true;
	td_phone.contentEditable=true;

  });
    daletButton.addEventListener("click", function f() {
	tr.style.display="none"
	
  });

	// tahrirButton.classList.add("btn"," btn-info");
	if (inp_name.value==""|| inp_phone.value==""||  inp_country.value=="") {
		alert("Ma'lumotlatni to'ldiring")
	}
     else{
		td_name.innerHTML=inp_name.value;
		td_phone.innerHTML=inp_phone.value;
		td_country.innerHTML=inp_country.value;
		inp_country.value="";
		inp_name.value="";	
		inp_phone.value="";
		td_button.appendChild(tahrirButton);
		td_dalet.appendChild(daletButton);
		tr.appendChild(td_name);
		tr.appendChild(td_phone);
		tr.appendChild(td_country);
		tr.appendChild(td_button);
		tr.appendChild(td_dalet);
		tbody.appendChild(tr);
		
	 }
  
    
 });
 qosh.addEventListener("click", function f() {

	if (inp_name.value==""|| inp_phone.value==""||  inp_country.value=="") {
		alert("Ma'lumotlatni to'ldiring")
	}
     else{
		td_name.innerHTML=inp_name.value;
		td_phone.innerHTML=inp_phone.value;
		td_country.innerHTML=inp_country.value;
		inp_country.value="";
		inp_name.value="";
		inp_phone.value="";
		td_button.appendChild(tahrirButton);
		tr.appendChild(td_name);
		tr.appendChild(td_phone);
		tr.appendChild(td_country);
		tr.appendChild(td_button);
		tbody.appendChild(tr);
         inp_name=element.name;
		 inp_phone=element.phone;
	     inp_country=element.country;

		
	 }
	 
 })
