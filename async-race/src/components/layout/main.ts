import Update from '../updateGarage/update';

class Main {
    update: Update;

    constructor() {
        this.update = new Update();
    }
    draw(): void {
        const main = document.createElement('main');

        const body = document.querySelector('body');
        if (body) {
            body.appendChild(main);
        }
        main.appendChild(this.update.draw());
    }
}

export default Main;
