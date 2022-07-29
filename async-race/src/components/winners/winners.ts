class Winners {
    public draw(): HTMLElement {
        const winners = document.createElement('section');
        winners.className = 'winners hidden';
        const winnersTitle = document.createElement('h2');
        winnersTitle.innerHTML = 'Winners';
        winners.appendChild(winnersTitle);

        return winners;
    }
}

export default Winners;
