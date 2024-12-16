//login
const logbtn = document.querySelector('.logbtn');
logbtn.addEventListener('click',function(){
document.querySelector('.login').classList.remove('hidden');
});
const close=document.querySelector('.closelog');
close.addEventListener('click',function(){
    document.querySelector('.login').classList.add('hidden');
});

//searchbar appear
document.querySelector('.searchbtn').addEventListener('click',function(){
document.querySelector('.search').classList.remove('hidden');
});