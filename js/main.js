'use strict'

// function onBallClick(){
//     console.log('Green ball');
// }
var gBallSize = 100;
function onBallClick() {
    var elBall = document.querySelector('.ball');
    if (gBallSize < 400) {
        gBallSize += 50
        elBall.style.height = gBallSize + 'px';
        elBall.style.width = gBallSize + 'px';
    } else {
        gBallSize = 100;
        elBall.style.height = gBallSize + 'px';
        elBall.style.width = gBallSize + 'px';
        // document.querySelector('.ball').style.transition = 1 + 's'

    }
}


