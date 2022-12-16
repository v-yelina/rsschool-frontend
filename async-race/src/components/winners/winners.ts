import { addWinners, getOneCar, getOneWinner, getWinners, updateWinners } from '../api/api';
import { SortBy, SortOrder, state } from '../app/state';
import Cars from '../car/cars';
import Events from '../eventListeners/events';
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
        winners.className = 'winners';
        if (localStorage.getItem('tab') === 'garage' || !localStorage.getItem('tab')) {
            winners.classList.add('hidden');
        }
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
        winners.appendChild(this.renderSortButtons());
        winners.appendChild(await this.drawWinnersTable(availableWinners.data, +availableWinners.page));
        winners.appendChild(this.pagination.createButtons('winners', String(page)));

        return winners;
    }

    public async addWinnerResult(winner: Partial<IWinner>) {
        if (winner.id) {
            const existedWinner = await getOneWinner(winner.id);

            if (winner.time && existedWinner.id) {
                await updateWinners({
                    wins: (existedWinner.wins += 1),
                    id: existedWinner.id,
                    time: winner.time < existedWinner.time ? winner.time : existedWinner.time,
                });
            } else {
                await addWinners({ ...winner, wins: 1 });
            }
        }
    }

    private async drawWinnersTable(data: IWinner[], page: number) {
        let ind = 1;
        const winnersTable = document.createElement('table');
        winnersTable.appendChild(this.drawWinnersTableHeader());
        for (const winner of data) {
            winnersTable.appendChild(await this.drawWinner(winner, ind, page));
            ind += 1;
        }
        return winnersTable;
    }

    private drawWinnersTableHeader() {
        const winnerHeader = document.createElement('tr');
        winnerHeader.classList.add('table-header');
        const num = document.createElement('th');
        num.innerHTML += '#';
        const carImg = document.createElement('th');
        carImg.innerHTML += 'Car image';
        const carName = document.createElement('th');
        carName.innerHTML += 'Car name';
        const winsNum = document.createElement('th');
        winsNum.innerHTML += 'Wins number';
        const bestTime = document.createElement('th');
        bestTime.innerHTML += 'Best time (seconds)';
        winnerHeader.appendChild(num);
        winnerHeader.appendChild(carImg);
        winnerHeader.appendChild(carName);
        winnerHeader.appendChild(winsNum);
        winnerHeader.appendChild(bestTime);
        return winnerHeader;
    }

    private async drawWinner(data: IWinner, index: number, page: number) {
        const carFunc = new Cars();
        const car = await this.getWinner(String(data.id));
        const winnerContainer = document.createElement('tr');
        winnerContainer.className = `winner-list__item winner winner${data.id}`;
        winnerContainer.setAttribute('data-id', String(data.id));
        const num = document.createElement('td');
        num.innerHTML += (page - 1) * 10 + index;
        const carImg = document.createElement('td');
        carImg.innerHTML += carFunc.createSvg(car.color);
        const carName = document.createElement('td');
        carName.innerHTML += car.name;
        const winsNum = document.createElement('td');
        winsNum.innerHTML += data.wins;
        const bestTime = document.createElement('td');
        bestTime.innerHTML += (data.time / 1000).toFixed(2);
        winnerContainer.appendChild(num);
        winnerContainer.appendChild(carImg);
        winnerContainer.appendChild(carName);
        winnerContainer.appendChild(winsNum);
        winnerContainer.appendChild(bestTime);
        return winnerContainer;
    }

    private getWinner(winnerID: string) {
        return getOneCar(winnerID);
    }

    private renderSortButtons() {
        const events = new Events();
        const sortBtn = document.createElement('div');
        const winAsc = document.createElement('button');
        winAsc.innerHTML = 'wins ascending';
        winAsc.classList.add('wins-asc');
        winAsc.addEventListener('click', () => {
            localStorage.setItem('sortBy', SortBy.wins);
            localStorage.setItem('sortOrder', SortOrder.ASC);
            events.updateWinners();
        });
        const winDesc = document.createElement('button');
        winDesc.innerHTML = 'wins descending';
        winDesc.classList.add('wins-desc');
        winDesc.addEventListener('click', () => {
            localStorage.setItem('sortBy', SortBy.wins);
            localStorage.setItem('sortOrder', SortOrder.DESC);
            events.updateWinners();
        });
        const timeAsc = document.createElement('button');
        timeAsc.innerHTML = 'time ascending';
        timeAsc.classList.add('time-asc');
        timeAsc.addEventListener('click', () => {
            localStorage.setItem('sortBy', SortBy.time);
            localStorage.setItem('sortOrder', SortOrder.ASC);
            events.updateWinners();
        });
        const timeDesc = document.createElement('button');
        timeDesc.innerHTML = 'time descending';
        timeDesc.classList.add('time-desc');
        timeDesc.addEventListener('click', () => {
            localStorage.setItem('sortBy', SortBy.time);
            localStorage.setItem('sortOrder', SortOrder.DESC);
            events.updateWinners();
        });
        sortBtn.appendChild(winAsc);
        sortBtn.appendChild(winDesc);
        sortBtn.appendChild(timeAsc);
        sortBtn.appendChild(timeDesc);
        return sortBtn;
    }
}

export default Winners;
