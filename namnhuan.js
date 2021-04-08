function kiemtra() {
    let a = +document.getElementById("nam").value;
    if(a % 4 === 0){
        if( a % 100 === 0){
            if(a % 400 === 0){
                document.getElementById("Result").innerHTML = "la nam nhuan";
            }else {
                document.getElementById("Result").innerHTML = "khong la nam nhuan";
            }
        }else {
            document.getElementById("Result").innerHTML = " la nam nhuan";
        }
    }else {
        document.getElementById("Result").innerHTML = "khong la nam nhuan";
    }

}