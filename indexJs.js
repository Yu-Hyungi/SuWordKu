const correct = ['E', 'D', 'I', 'Y', 'A'];

var times = 0;

function input(){
    if(times===4){
        times = 0;
        const input = document.querySelectorAll(".input");
        for(var i =0;i<20;i++){
            input[i].style.borderColor='rgb(107, 107, 116)';
            input[i].style.backgroundColor='white';
        }
        return;
    }
    for(var i=(times*5);i<5+(times*5);i++){
        const input = document.querySelectorAll(".input");
        if(correct[i%5]===input[i].value){
            input[i].style.borderColor='rgb(67, 253, 98)';
            input[i].style.backgroundColor='rgb(67, 253, 98)';
        }
        else{
            input[i].style.borderColor='rgb(255, 87, 87)';
            input[i].style.backgroundColor='rgb(255, 87, 87)';
        }
        correct.map((value)=>{if(input[i]===value){
            input[i].style.borderColor='rgb(229, 255, 80)';
            input[i].style.backgroundColor='rgb(229, 255, 80)';
        }});
    }
    times++;
}
