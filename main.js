const body = document.querySelector('#body');
const container = document.querySelector('#container');
body.appendChild(container);



function grid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            let coloumn = document.createElement('div');
            coloumn.className = 'coloumn';
            row.appendChild(coloumn);

            coloumn.addEventListener('mouseover', () => {
                coloumn.setAttribute('style', 'background: black');

            });
        };
    }
}
//default grid
grid(16);

const button = document.createElement('button');
body.appendChild(button);
button.textContent = 'set size';

function buildGrid() {
    button.addEventListener('click', () => {
        let size = prompt("Please enter the size of the grid. 1- 100. Example: 16 will give 16x16 grid", "16");
        size = parseInt(size);
        grid(size);
    });
}

buildGrid();











