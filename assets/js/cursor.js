let cursor = document.getElementById('cursor');
let delayInMilliseconds = 100;
const onMouseMove = (event) => {
    setTimeout(function() {
        cursor.style.left = event.pageX + 'px';
        cursor.style.top = event.pageY - window.scrollY + 'px';
    }, delayInMilliseconds);

    // console.log(event.target);

    if (event.target.hasAttribute('cursor-type')) {
        var cursorSize = event.target.getAttribute('cursor-type');
        cursor.classList.add(cursorSize);
    } else {
        cursor.classList = '';
    }


}

document.addEventListener('mousemove', onMouseMove);