var plats=document.querySelectorAll('img');
plats.forEach(element => {
    element.addEventListener('mouseout', function(e){
    console.log(e.target.nextElementSibling.classList.toggle('active'));
})

    element.addEventListener('mouseover', function(e){  
    console.log(e.target.nextElementSibling.classList.toggle('active'));
   // e.target.nextElementSibling.style.background = '#fff';
  })
});