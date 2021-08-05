// onmessage = function (event) {
//   console.log(event.data);
//   postMessage("workerPostMessageContent:"+event.data)
// };
var i=0;

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();