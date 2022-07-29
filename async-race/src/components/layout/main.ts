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
    public draw(): void {
        const main = document.createElement('main');

        const body = document.querySelector('body');
        if (body) {
            body.appendChild(main);
        }
        main.appendChild(this.update.draw());
        main.appendChild(this.garage.draw());
        main.appendChild(this.winners.draw());
    }
}

export default Main;
