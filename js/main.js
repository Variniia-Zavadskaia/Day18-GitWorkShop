'use strict'

// function onBallClick(){
//     console.log('Green ball');
// }
var gBallSize = 100;

// function onBallClick() {
//     var elBall = document.querySelector('.ball');
//     if (gBallSize < 400) {
//         gBallSize += 50
//         elBall.style.height = gBallSize + 'px';
//         elBall.style.width = gBallSize + 'px';
//     } else {
//         gBallSize = 100;
//         elBall.style.height = gBallSize + 'px';
//         elBall.style.width = gBallSize + 'px';
//         // document.querySelector('.ball').style.transition = 1 + 's'

//     }
// }

// function onBallClick() {
//     var elBall = document.querySelector('.ball');
//     var size = getRandomInt(20, 60) + 'px';
//     elBall.style.height = size;
//     elBall.style.width  = size;
// }

function onBallClick(){
    var elBall = document.querySelector('.ball');
    elBall.style.backgroundColor = getRandomColor();
}