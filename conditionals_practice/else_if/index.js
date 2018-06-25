function myfunction(){
    var date = new Date().getHours();
    var greeting;

    if (date < 12){
        greeting = "Good Morning!";
    } else if (date < 15){
        greeting = "Good Noon!";
    } else if (date < 18){
        greeting = "Good Evening!";
    } else {
        greeting = "Good Night";
    }

    document.getElementById("time").innerHTML = greeting;
}