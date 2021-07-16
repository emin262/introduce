
window.onload = function()
{
    alert('WELCOME TO HAMEN WEBSITE');   
};
 
 function thankYou(){
    var a=document.getElementById('name').value;
    var b=document.getElementById('mess').value;
    if(a!='' && b!=''){
        alert('Message sent! Thank You!');
    }
    else alert('None message sent! Thank You!')
 }