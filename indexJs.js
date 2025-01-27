const correct = ['E', 'D', 'I', 'Y', 'A'];

var times = 0;

function input(){
    if(times===4){
        times = 0;
        const input = document.querySelectorAll(".input");
        for(var i =0;i<20;i++){
            input[i].style.borderColor='rgb(107, 107, 116)';
            input[i].style.backgroundColor='white';
            input[i].value = "";
        }
        return;
    }
    var count = 0;
    for(var i=(times*5);i<5+(times*5);i++){
        const input = document.querySelectorAll(".input");
        if(correct[i%5]===input[i].value){
            input[i].style.borderColor='rgb(67, 253, 98)';
            input[i].style.backgroundColor='rgb(67, 253, 98)';
            count++;
        }
        else{
            for(var z=0;z<5;z++){
                if(correct[z]===input[i].value){
                    input[i].style.borderColor='rgb(229, 255, 80)';
                    input[i].style.backgroundColor='rgb(229, 255, 80)';
                    break;
                }
                else{
                    input[i].style.borderColor='rgb(255, 87, 87)';
                    input[i].style.backgroundColor='rgb(255, 87, 87)';
                }
            }
            
        }
        if(count===5){
            alert("성공!");
            count = 0;
        }
    }
    times++;
}
