"use strict";

let section2 = document.getElementById("tableinfo");
let tabledata = document.createElement("table");
section2.appendChild(tabledata);
tabledata.setAttribute('id','table3');
let tablecontent=document.createElement('tbody');
tabledata.appendChild(tablecontent);
let age;
let properties = ["name",'age',"amount"];
let arrayOfObjects = [];

function donores(username,age,amount) {
  this.username = username;
  this.age=age;
  this.amount = amount;
  this.render();
  

  arrayOfObjects.push(this);
}

function headtable() {
  let tablehead = document.createElement("thead");
  tabledata.appendChild(tablehead);
  let firstrow = document.createElement("tr");
  tablehead.appendChild(firstrow);
  for (let i = 0; i < properties.length; i++) {
      let headdata=document.createElement('th');
      firstrow.appendChild(headdata);
      headdata.textContent=properties[i]
  }
}
headtable();

 

function getRandomInt(max,min){
    return  age=Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomInt(30,18);

let form1=document.getElementById('donardata');
form1.addEventListener('submit',donorinformation);

function donorinformation(event){
    event.preventDefault();

    let newname=event.target.username.value;
    let amount=event.target.amount.value;
    let newdonores=new donores(newname,age,amount);
    savetols();
    
}

donores.prototype.render=function(){
    let rows1=document.createElement('tr');
    tablecontent.appendChild(rows1);

    let rowscontent=document.createElement('td');
    rows1.appendChild(rowscontent);
    rowscontent.textContent=this.username;

    let rowscontent2=document.createElement('td');
    rows1.appendChild(rowscontent2);
    rowscontent2.textContent=age;


    let rowscontent1=document.createElement('td');
    rows1.appendChild(rowscontent1);
    rowscontent1.textContent=this.amount;

    // let sum=0;
    // for(let i=0;i<arrayOfObjects[i];i++){

    //     sum=sum+arrayOfObjects[i].amount;
    //     console.log(sum)
    // }
    


}





function savetols(){
let arrls=JSON.stringify(arrayOfObjects);
localStorage.setItem('information',arrls)
}
function getfromls (){
let getinfo=localStorage.getItem('information');
let info1=JSON.parse(getinfo);

if(info1!==null){
    for(let i=0;i<info1.length;i++){

new donores (info1[i].username,info1[i].age,info1[i].amount)

    }
}


}
getfromls();



