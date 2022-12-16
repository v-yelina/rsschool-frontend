import { getOneCar } from '../api/api';
import { IWinner } from '../winners/winners.interface';

class Popup {
    public async createPopup(winner: Partial<IWinner>) {
        const popup = document.createElement('div');

        if (winner.id && winner.time) {
            const winnerData = await getOneCar(String(winner.id));
            popup.classList.add('popup');
            const popupText = document.createElement('p');
            popupText.innerHTML = `${winnerData.name} went first (${(winner.time / 1000).toFixed(2)}s)`;
            popup.appendChild(popupText);
        }
        return popup;
    }
}

export default Popup;
