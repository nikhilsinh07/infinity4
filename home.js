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
//pic changes

/*
    let pic1=document.querySelector('.pic1');
    let pic2=document.querySelector('.pic2');
    let pic3=document.querySelector('.pic3');
 
    pic2.style.display="none";
    pic3.style.display="none";
document.querySelector('.slidebtn2').addEventListener('click',function(){
  pic1.style.display="none";
  
  pic2.style.display="block";
});
document.querySelector('.slidebtn1').addEventListener('click',function(){
    pic1.style.display="none";
    pic3.style.display="block";
  });
  document.querySelector('.slidebtn3').addEventListener('click',function(){
    pic2.style.display="none";
    pic1.style.display="block";
   
  });
  document.querySelector('.slidebtn4').addEventListener('click',function(){
    pic2.style.display="none";
    pic3.style.display="block";

  });
  document.querySelector('.slidebtn5').addEventListener('click',function(){
    pic3.style.display="none";
    pic2.style.display="block";
  });
  document.querySelector('.slidebtn6').addEventListener('click',function(){
    pic3.style.display="none";
    pic1.style.display="block";
  });
  */