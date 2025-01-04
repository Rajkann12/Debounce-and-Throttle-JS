let input = document.querySelector('#inputText');
let defaultEle = document.querySelector('#default');
let debounceEle = document.querySelector('#debounce');
let throttleEle = document.querySelector('#throttle');

let mouseSection = document.querySelector('.onMouse');
let defaultMouseEle = document.querySelector('#defaultMouse');
let debounceMouseEle = document.querySelector('#debounceMouse');
let throttleMouseEle = document.querySelector('#throttleMouse');

input.addEventListener('input', function(e){
    defaultEle.querySelector('span').textContent = e.target.value;
    updateDebouce(e.target.value);
    updateThrottle(e.target.value);
});

mouseSection.addEventListener('mousemove', function(e){
    
    defaultMouseEle.querySelector('span').textContent = (parseInt(defaultMouseEle.querySelector('span').textContent) || 0) + 1;
    debounceMouse(incrementCounter(debounceMouseEle.querySelector('span')))
    throttleMouse(incrementCounter(throttleMouseEle.querySelector('span')))
} )

const debounce = (cb, delay) => {
    if (typeof cb !== "function") throw new TypeError("Expected a function");
    if (typeof delay !== "number") throw new TypeError("Expected a number");
    let setTimeoutId;
    return (...arg) => {
        clearTimeout(setTimeoutId);
        setTimeoutId = setTimeout(() => {cb(...arg)}, delay);
    }

};

const updateDebouce = debounce((data) => {
    debounceEle.querySelector('span').textContent = data;
}, 1000);

const debounceMouse = debounce((data) => {
    debounceMouseEle.querySelector('span').textContent = data;
}, 100)


const throttle = (cb, delay) => {
    if (typeof cb !== "function") throw new TypeError("Expected a function");
    if (typeof delay !== "number") throw new TypeError("Expected a number");
    let shouldCall = true;
    let calledArg;

    return (arg) => {
        calledArg = arg;
        if (shouldCall == false) return;

        cb(arg);
        calledArg = null;
        shouldCall = false;
        
        setTimeout(() => {
            shouldCall = true;
            if(calledArg != null) cb(calledArg);
        }, delay)
    }

};

const updateThrottle = throttle((data) => {
    throttleEle.querySelector('span').textContent = data;
}, 1000);

const throttleMouse = throttle((data) => {
    throttleMouseEle.querySelector('span').textContent = data;
}, 100);

function incrementCounter(ele){
    return (parseInt(ele.textContent) || 0) + 1;
}
