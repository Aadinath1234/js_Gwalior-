function show(){
    // alert(cars.value);
   // alert(cars.selectedIndex);
    // selectedIndex shows the index no. of the selected car.

   // alert(cars.options[1].text); // this showing always index 1 output here is honda city , 
  // alert(cars.options[cars.selectedIndex].text);
//   alert(cars.options[cars.selectedIndex].value );

car.innerHTML="<h1>"+cars.options[cars.selectedIndex].text + "</h1>"
carprice.innerHTML = "<h1>"+cars.value + "</h1>"
cimg.src=cars.options[cars.selectedIndex].text+".png"

}