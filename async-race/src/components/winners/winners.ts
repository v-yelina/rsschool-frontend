import { getOneCar, getWinners } from '../api/api';
import { state } from '../app/state';
import Cars from '../car/cars';
import Pagination from '../pagination/pagination';
import { IWinner } from './winners.interface';

class Winners {
    pagination: Pagination;
    constructor() {
        this.pagination = new Pagination();
    }

    public async draw(page = state.winnersPage): Promise<HTMLElement> {
        const winners = document.createElement('section');
        const availableWinners = await getWinners(page);
        winners.className = 'winners hidden';
        const winnersTitle = document.createElement('h2');
        const allWinnersCount = document.createElement('span');
        allWinnersCount.classList.add('winners-count');
        allWinnersCount.innerHTML = ` (${availableWinners.count})`;
        winnersTitle.innerHTML = 'Winners';
        winnersTitle.appendChild(allWinnersCount);
        const pageNum = document.createElement('h3');
        pageNum.innerHTML = `Page: ${availableWinners.page}`;

        winners.appendChild(winnersTitle);
        winners.appendChild(pageNum);
        winners.appendChild(this.drawWinnersTable(availableWinners.data));
        winners.appendChild(this.pagination.createButtons('winners', String(page)));

        return winners;
    }

    private drawWinnersTable(data: IWinner[]) {
        const winnersTable = document.createElement('table');
        winnersTable.appendChild(this.drawWinnersTableHeader());
        data.forEach(async (winner) => winnersTable.appendChild(await this.drawWinner(winner)));
        return winnersTable;
    }

    private drawWinnersTableHeader() {
        const winnerHeader = document.createElement('tr');
        const carImg = document.createElement('th');
        carImg.innerHTML += 'Car image';
        const carName = document.createElement('th');
        carName.innerHTML += 'Car name';
        const winsNum = document.createElement('th');
        winsNum.innerHTML += 'Wins number';
        const bestTime = document.createElement('th');
        bestTime.innerHTML += 'Best time (seconds)';
        winnerHeader.appendChild(carImg);
        winnerHeader.appendChild(carName);
        winnerHeader.appendChild(winsNum);
        winnerHeader.appendChild(bestTime);
        return winnerHeader;
    }

    private async drawWinner(data: IWinner) {
        const carFunc = new Cars();
        const car = await this.getWinner(String(data.id));
        const winnerContainer = document.createElement('tr');
        winnerContainer.className = `winner-list__item winner winner${data.id}`;
        winnerContainer.setAttribute('data-id', String(data.id));
        const carImg = document.createElement('td');
        carImg.innerHTML += carFunc.createSvg(car.color);
        const carName = document.createElement('td');
        carName.innerHTML += car.name;
        const winsNum = document.createElement('td');
        const bestTime = document.createElement('td');
        winnerContainer.appendChild(carImg);
        winnerContainer.appendChild(carName);
        winnerContainer.appendChild(winsNum);
        winnerContainer.appendChild(bestTime);
        return winnerContainer;
    }

    private getWinner(winnerID: string) {
        return getOneCar(winnerID);
    }
}

export default Winners;
