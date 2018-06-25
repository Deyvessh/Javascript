function myfunction(){
    var date = new Date().getHours();
    var greeting;
    if(date < 18){
        greeting = 'Good Day!'
    } else{
        greeting = 'Good Evening';
    }

    document.getElementById("time").innerHTML = greeting;
}