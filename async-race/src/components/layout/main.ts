import Garage from '../garage/garage';
import Update from '../updateGarage/update';
import Winners from '../winners/winners';

class Main {
    update: Update;
    garage: Garage;
    winners: Winners;

    constructor() {
        this.update = new Update();
        this.garage = new Garage();
        this.winners = new Winners();
    }
    public async draw(): Promise<void> {
        const main = document.createElement('main');

        const body = document.querySelector('body');
        if (body) {
            body.appendChild(main);
        }
        main.appendChild(this.update.draw());
        main.appendChild(await this.garage.draw());
        main.appendChild(this.winners.draw());
    }
}

export default Main;
