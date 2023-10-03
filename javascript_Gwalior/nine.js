function call(){
    var s = " "
    var total =0;
    if(chke.checked){
        s = s+chke.value+",";
        total+=34000
    }
    if(chks.checked){
        s = s+chks.value+",";
        total+=50000
    }

    if(chkel.checked){
        s = s+chkel.value + ",";
        total+=145000
    }
    result.innerHTML = s;
    totalprice.innerHTML = total;
}