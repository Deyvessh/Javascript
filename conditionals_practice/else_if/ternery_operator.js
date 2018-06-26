function myfunction(){
    var age, validate;

    age = document.getElementById("age").value;
    validate = (age < 18) ? "Too Young" : "Old Enough";
    
    document.getElementById("test").innerHTML = validate + " to Vote!"; 
}