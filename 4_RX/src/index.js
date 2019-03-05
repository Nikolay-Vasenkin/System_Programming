import "./styles.css";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/observable/of";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/scan";
import "rxjs/add/operator/map";
import "rxjs/add/observable/timer";

class Timer {
    constructor(title, timer) {
        this.title = title;
        this.timer = Observable.timer(0, timer);
        this.pauseValue = 0;
        this.currentValue = 0;
        this.paused = false;
        this.sub = Subscription;
    }
}

const timer1 = new Timer("timer1", 1000);
const timer2 = new Timer("timer2", 500);
const timer3 = new Timer("timer3", 250);

$(".hidden").hide();

const startBtn = document.getElementsByClassName("start");
[].forEach.call(startBtn, btn => {
    Observable.fromEvent(btn, "click").subscribe(() => {
        switch (btn.name) {
            case "1":
                startTimer(timer1);
                break;
            case "2":
                startTimer(timer2);
                break;
            case "3":
                startTimer(timer3);
                break;
        }
        $(`.start[name=${btn.name}]`).hide();
        $(`.restart[name=${btn.name}]`).show();
        $(`.stop[name=${btn.name}]`).show();
    });
});

const stopBtn = document.getElementsByClassName("stop");
[].forEach.call(stopBtn, btn => {
    Observable.fromEvent(btn, "click").subscribe(() => {
        switch (btn.name) {
            case "1":
                checkPauseTimer(timer1, btn.name);
                break;
            case "2":
                checkPauseTimer(timer2, btn.name);
                break;
            case "3":
                checkPauseTimer(timer3, btn.name);
                break;
        }
    });
});

const checkPauseTimer = (event, num) => {
    if (!event.paused) {
        pauseTimer(event);
        $(`.stop[name=${num}]`).html("Старт");
    } else {
        $(`.stop[name=${num}]`).html("Стоп");
        event.paused = false;
        startTimer(event);
    }
};

let pauseTimer = object => {
    object.sub.unsubscribe();
    object.paused = true;
    object.pauseValue = object.currentValue + 1;
};

const restartBtn = document.getElementsByClassName("restart");
[].forEach.call(restartBtn, btn => {
    Observable.fromEvent(btn, "click").subscribe(() => {
        switch (btn.name) {
            case "1":
                checkRestartTimer(timer1, btn.name);
                break;
            case "2":
                checkRestartTimer(timer2, btn.name);
                break;
            case "3":
                checkRestartTimer(timer3, btn.name);
                break;
        }
        $(`.start[name=${btn.name}]`).show();
        $(`.restart[name=${btn.name}]`).hide();
        $(`.stop[name=${btn.name}]`).hide();
    });
});

const checkRestartTimer = (event, num) => {
    event.pauseValue = 0;
    event.currentValue = 0;
    event.paused = false;
    event.sub.unsubscribe();
    $(`.stop[name=${num}]`).html("Стоп");
    console.log(`Остановлен Таймер # ${num}`);
};

let startTimer = object => {
    object.sub = object.timer.subscribe(x => outputTimer(object, x));
};

let outputTimer = (obj, val) => {
    console.log(`${obj.title}: ${obj.currentValue = val + obj.pauseValue}`);
};