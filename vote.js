function vote()
{
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var par = document.getElementById("par");

    if(age>18){
        alert("Eligible to vote");
    }
    else{
        alert("you are Miner");
    }
}