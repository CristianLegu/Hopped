clic=1;
		 function mostrar() {
    if(clic==1){
     div = document.getElementById('flotante');
            div.style.display = '';
   clic = clic + 1;
   } else{
        div = document.getElementById('flotante');
            div.style.display = 'none';   
    clic = 1;
   }   
          
        }