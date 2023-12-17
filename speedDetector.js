function speedDetector(Speed){
    const speedLimit = 70;
    if (Speed <= 70){
        return 'OK'
    }
    else{
        const demeritPoints = Math.floor((Speed - speedLimit) / 5);
        
        if(demeritPoints > 12){
            return 'License suspended';
            
        }
        else{
            return `Points: ${demeritPoints}`
            

        }
    }
}

function getSpeedAndPoints(){

    const inputSpeed = prompt("Enter the Speed:");

    const numericSpeed = parseFloat(inputSpeed);

    if (!isNaN(numericSpeed)) {
        const result = speedDetector(numericSpeed);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Invalid speed. Speed should be a number.";
    }

}