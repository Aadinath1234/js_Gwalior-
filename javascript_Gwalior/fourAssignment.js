function show(){
   car.innerHTML="<h1>" + cars.value + "</h1>"
   cimg.src=cars.value + ".png"
   if(cars.value == "Honda city"){
      carprice.innerHTML="<h1> 1500000/- </h1>"

   } 
   else if(cars.value == "Ciaz"){
      carprice.innerHTML="<h1> 1200000/- </h1>"
   }

   else if(cars.value == "Verna"){
      carprice.innerHTML="<h1> 2000000/-</h1>"
   } 
}