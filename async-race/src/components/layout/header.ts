class Header {
    draw(): void {
        const header = document.createElement('header');
        header.classList.add('header');
        const toGarage = document.createElement('button');
        toGarage.className = 'btn btn--header btn--garage';
        toGarage.innerHTML = 'To garage';
        const toWinners = document.createElement('button');
        toWinners.className = 'btn btn--header btn--winners';
        toWinners.innerHTML = 'To winners';
        header.appendChild(toGarage);
        header.appendChild(toWinners);
        const body = document.querySelector('body');

        if (body) {
            body.appendChild(header);
        }
    }
}

export default Header;
