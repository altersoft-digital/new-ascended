function openpopup(popup) {
    document.querySelector('.popup-overlay').classList.add('show-popup');
    document.querySelector(popup).classList.add('show-popup');
    document.querySelector('body').style.overflowY = 'hidden';

    if (popup == '.popup-menu') {
        document.querySelector(popup).classList.add('openmenu');
        setTimeout(function() {
            document.querySelector(popup).classList.remove("openmenu");
        }, 300);
    }
}

let pop = document.querySelectorAll(".popup");

function closepopup(popup) {
    if (popup == 'all') {
        pop.forEach(pop => {
            pop.classList.remove('show-popup');
        })
        document.querySelector('body').style.overflowY = 'auto';
        document.querySelector('.popup-overlay').classList.remove('show-popup');
    } else {
        document.querySelector('.popup-overlay').classList.remove('show-popup');
        document.querySelector(popup).classList.remove('show-popup');
        document.querySelector('body').style.overflowY = 'auto';
    }
}

function closemenu(popup) {
    document.querySelector(popup).classList.add('closemenu');
    setTimeout(function() {
        document.querySelector(popup).classList.remove("closemenu");
        document.querySelector('.popup-overlay').classList.remove('show-popup');
        document.querySelector('body').style.overflowY = 'auto';
    }, 300);
}


pop.forEach(pop => {
    pop.addEventListener("click", function(e) {
        e = window.event || e;
        if (this === e.target) {
            e.stopPropagation();
        }
    });
    child = pop.childNodes;
    child.forEach(child => {
        child.addEventListener("click", function(e) {
            e = window.event || e;
            if (this === e.target) {
                e.stopPropagation();
            }
        });
        children = child.childNodes;
        children.forEach(children => {
            children.addEventListener("click", function(e) {
                e = window.event || e;
                if (this === e.target) {
                    e.stopPropagation();
                }
            });
        })
    })
})

document.querySelector('#pmn-close-btn').addEventListener("click", function(e) {
    e = window.event || e;
    if (this === e.target) {
        e.stopPropagation();
    }
});

document.querySelector('#pmn-close-btn path').addEventListener("click", function(e) {
    e = window.event || e;
    if (this === e.target) {
        e.stopPropagation();
    }
});