let mydate=new Date();
//console.log(mydate.toDateString());
let mycreatedate = new Date(2023,0,23);
//console.log(mycreatedate.toString());
let mydatestamp=Date.now();
console.log(mydatestamp);
//console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));
mydate.toLocaleString('default',{
    weekday: "long",
});
console.log(mydate);