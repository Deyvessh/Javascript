var x = 4;
var y = 6;

document.getElementById("test").innerHTML = (x == 4 || y == 6) + "</br>" +
                                            (x == 4 || y == 5) + "</br>" +
                                            (x == 6 || y == 6) + "</br>" +
                                            (x == 3 || y == 2);