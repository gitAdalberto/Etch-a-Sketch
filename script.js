const DEFAULT_SIZE = 16;

let mouseDown = false;

document.getElementById("container").addEventListener("mousedown", () => {
    mouseDown = true;
})

document.getElementById("container").addEventListener("mouseup", () => {
    mouseDown = false;

})


function clear (){
    const container = document.getElementById("container");
    const divList = container.querySelectorAll("div");
    divList.forEach(e => {
        e.style.background = "#ffffff";
    });
}

document.getElementById("clear").onclick = clear;

function createGrid(size) {
    document.getElementById("size").value = DEFAULT_SIZE;

    document.getElementById("container").style.cssText = `
     background-color: #fff;
     width: 500px;
     height: 500px;
     margin-top: 1rem;
     display: flex;
     flex-wrap: wrap;
     user-select: none;
    `;


    const container = document.getElementById("container");

    container.innerHTML = '';

    for (let index = 0; index < size **2; index++) {
        const div = document.createElement("div");
        div.style.height = `${500/size}px`;
        div.style.width = `${500/size}px`;
        div.style.backgroundColor = 'white';
        div.style.userSelect = 'none;'
        div.addEventListener("mouseover", colorDiv);
        container.appendChild(div);
    }
}

document.getElementById("set-size").onclick = () => {
    const size = document.getElementById("size");
    const number = parseInt(size.value);
    if (!number || number > 100) return;
    if (number && number <= 100 ) createGrid(number);
}

function colorDiv(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }

    if (e.type === 'mouseover' && mouseDown) {
        const container = e.target;
        if (container.style.backgroundColor !== 'black') {
            container.style.backgroundColor = 'black';
            //container.style.opacity = 0.1;
            return;
        }
        //container.style.opacity = parseFloat(container.style.opacity) + 0.1;
    }
}

createGrid(DEFAULT_SIZE);