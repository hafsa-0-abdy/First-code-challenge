let speed=180
// This is for speed less than 70
if(speed>=0 && speed<=70){
    console.log("Ok");
}


// This whole section calculates demerits points for 5km/hr over the speed
// Speed Greater than 71 and less than 75
 else if(speed>=71 && speed <=75){
console.log("1");
}

// Speed Greater than 76 and less than 80 gives 2 demerit points
else if(speed>=76 && speed<=80){
    console.log("2");
}

// Speed Greater than 81 and less than 85 it gives 3 demerits points
else if(speed>=81 && speed <=85){
    console.log("3");
}

// Speed Greater than 86 and less than 90 this supplies 4 demerit points
else if(speed>=86 && speed <=90){
    console.log("4");
}

// Speed Greater than 91 and less than 95 it provides 5 demerit point
else if(speed>=91 && speed<=95){
    console.log("5");
}

// Speed Greater than 96 and less than 100 this gives 6 demerit points
else if (speed>=96 && speed<=100){
    console.log("6"); 
}

// Speed Greater than 101 and less than 105 It gives 7 demerits points
else if(speed>=101 && speed <= 105){
    console.log("7");
}

// Speed Greater than 106 and less than 110 It also gives 8 dmeerits points
else if(speed>=106 && speed <=110){
    console.log("8");
}

// Speed Greater than 111 and less than 115 It also gives 9 demerits points
else if(speed>=111 && speed <=115){
    console.log("9");
}

// Speed Greater than 116 and less than 120 It also gives 10 demerits points
else if( speed>=116 && speed <=120){
    console.log("10");
}

// Speed Greater than 121 and less than 125 It also gives 11 demerits points
else if(speed>=121 && speed<=125){
    console.log("11");
}

// Speed Greater than 126 and less than 130 It also gives 12 demerit points
else if(speed>=126 && speed<= 130){
    console.log("12")
}

// This checks if demerit points is above 12
else{
    console.log("License suspended")
}


