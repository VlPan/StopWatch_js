
var timer = document.getElementById('timer');
var resetBtn = document.getElementById('reset');
var toggleBtn = document.getElementById('toggle');

var watch = new StopWatch(timer);


function stop(){
    watch.stop();
    toggleBtn.textContent = "Запустить";
}

function start(){
    watch.start();
    toggleBtn.textContent = "Стоп";
}

toggleBtn.addEventListener('click',function(){
    (watch.isOn) ? stop(): start();
});

resetBtn.addEventListener('click',function(){
    watch.reset();
});