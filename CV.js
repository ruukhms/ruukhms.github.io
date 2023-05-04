let contantform =document.getElementById('contactform')
formContact.addEventListener("save",function(event){
    event.preventDefault();

var name=document.querySelector('#name').value;
var address = document.querySelector('#address').value;
var email=document.querySelector('#email').email;
var comments =document.querySelector('#comments').value;

var contact ={
    name: name,
    address:address,
    email:email,
    comments:comments,
};

let contacts=JSON.parse(localStorage.getItem("contacts")) ||[];
contacts.push(contact);
localStorage.setItem('contacts',JSON.stringify(contacts));

alert('form submitted')
formContact.reset();


});