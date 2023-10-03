function Submitt() {

    let c = parseInt(Hindi.value) + parseInt(English.value) + parseInt(Physics.value) + parseInt(Chemistry.value) + parseInt(Maths.value);
    output.innerHTML = c;
    
    if (c = 0 || c <= 34) {
        output1.innerHTML = "passed with fourth division";
    }
    else if (c = 35 || c <= 47) {
        output1.innerHTML = "passed with third division";
    }
    else if (c = 48 || c <= 59) {
        output1.innerHTML = "passed with second division";
    }
    else if (c = 60 || c <= 100) {
        output1.innerHTML = "passed with first  division";
    }
    else {
        output1.innerHTML = "Nothing found ";
    }



    let g =((parseInt(c)/500)*100);
    output2.innerHTML = g ;






    let v;
    //  { 
    //    if(v = male.value){
    //    output1.innerHTML = "Master";
    //    }
    //    else if(v = female.value){
    //    output1.innerHTML = "Miss";
    //    }
    //    else{
    //     output1.innerHTML = ("Nothing found");
    //    }
    // }





    let d = v + "   " + Name.value + "  " + "is the S/O Mr." + "  " + Fname.value + "" + "his Roll No. is " + " " + Rollno.value;
    output1.innerHTML = d;







}