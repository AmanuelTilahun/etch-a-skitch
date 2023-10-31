const body = document.querySelector('#body');
const container = document.querySelector('#container');
body.appendChild(container);


let mouseIsDown = false;
function grid(size) {
    resetGrid();
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let coloumn = document.createElement('div');
            coloumn.className = 'coloumn';
            row.appendChild(coloumn);

            // Set the background color when the mouse is down
            coloumn.addEventListener('mousedown', () => {
                mouseIsDown = true;
                coloumn.style.backgroundColor = 'black';
            });

            // Change the background color while the mouse is down and moving
            coloumn.addEventListener('mouseover', () => {
                if (mouseIsDown) {
                    coloumn.style.backgroundColor = 'black';
                }
            });

            // Reset the flag when the mouse is up
            coloumn.addEventListener('mouseup', () => {
                mouseIsDown = false;
            });
        }
    }
}

const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'set size';

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function buildGrid() {
    button.addEventListener('click', () => {
        let size = prompt("Please enter the size of the grid. 1- 100. Example: 16 will give 16x16 grid", "16");
        size = parseInt(size);
        while (size > 100) {
            size = prompt("Please enter under 100");
            size = parseInt(size);
        }
        grid(size);
    });
}

buildGrid();













