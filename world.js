//prints hello world every 5 seconds then after that prints done
let counter = 0;
const intervals = setInterval(() => {
    console.log("Hello World");
    counter += 1;
    if(counter === 5) {
        console.log("Done");
        clearInterval(intervals);
    }
}, 1000);