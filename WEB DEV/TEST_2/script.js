 
    let btn = document.getElementById("btn");
    let bdy = document.getElementById("bdy");
    let bt = document.getElementById("bt");
    let ttn = document.getElementById("ttn");
btn.classList.add("move");
btn.onclick = function(){
    btn.classList.add("move");
    bdy.classList.add("bdy");
    bt.classList.remove("c");
};
bt.onclick = function(){
    btn.classList.add("move");
    bdy.classList.remove("bdy");
    bt.classList.remove("c");
};
btn.onmouseenter = function(){
    btn.classList.add("b");
};
btn.onmouseleave = function(){
    btn.classList.remove("b");
};
bt.onmouseenter =  function(){
    bt.classList.add("n");
};
bt.onmouseleave = function(){
    bt.classList.remove("n");
};
window.onload = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth",
    })
};
window.onscroll = function(){
    if(scrollY >= 500){
        ttn.style.display = 'block';
    }else{
        ttn.style.display = 'none'
    }
};
ttn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth',
    })
};
ttn.onmouseenter = function(){
    ttn.classList.add("b");
};
ttn.onmouseleave = function(){
    ttn.classList.remove("b");
};
const user = {
    name:'zakaria elhiouile',
    contry:'marocco',
    age:17,
};
for(let i in user){
    console.log(`the ${i} is => ${user[i]}`)
};
console.log('$'.repeat(20));
let f= document.getElementById('h')
for(let x=0;x<=8;x++){
    if([x]==2){continue;}
    if([x]==3){continue;}
    if([x]==5){continue;}
    if([x]==7){continue;}

        f.innerHTML+='<center>'+'*'.repeat([x])+'</center></br>'
}
class phone {
    static times =0;
    constructor(serial, color, price) {
        this.serial = serial;
        this.color = color;
        this.price = price - 84.5465 + '$';
        this.model = function () {
            return `2020 ${this.serial} ${this.price}`;
        };
        phone.times++;
    }
    addSerial() {
        return this.serial += 'jgkh4546211233';
    }
    static timesObject =function(){
        return `${this.times} object created`
    }
}
let phone1 = new phone(52649,"red",6000);
let phone2 = new phone(52578,"black",6000);
let phone3 = new phone(94212,"white",6000);
let phone4 = new phone(54876,"green",6000);

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);
console.log(phone1.model());
console.log('$'.repeat(20));

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);
console.log(phone2.model());
console.log('$'.repeat(20));

console.log(phone3.serial);
console.log(phone3.color);
console.log(phone3.price);
console.log(phone3.model());
console.log('$'.repeat(20));

console.log(phone4.serial);
console.log(phone4.color);
console.log(phone4.price);
console.log(phone4.model());
console.log('$'.repeat(20));

console.log(phone2.addSerial());
console.log('$'.repeat(20));
String.prototype.zFill = function(width){
    let theResult = this;
    while(theResult.length<width){
        theResult = `0${theResult}`
    }
    return theResult.toString();
};
console.log(''.zFill(6));
console.log('1'.zFill(6));
console.log('54'.zFill(6));
console.log('321'.zFill(6));
console.log('9852'.zFill(6));
console.log('94213'.zFill(6));
console.log('951324'.zFill(6));
console.log('$'.repeat(20));
console.log('951324'.zFill(6));

console.log(phone.times)

let num = document.getElementById("d").value

function try_it(){
    if(0<=Number(num)){
        while (0<=Number(num)){
            console.log(num)
            num -= 1
        }
    }
    else if (0>Number(num)){
        while (0>=Number(num)){
            console.log(num)
            num += 1
        }
    }
    else {
        console.log('this is not a number')
    }
}