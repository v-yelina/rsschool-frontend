import Events from '../eventListeners/events';
import Update from '../updateGarage/update';
import { Color, ICar } from './car.interface';

class Cars {
    public draw(cars: ICar[]) {
        const carsList = document.createElement('section');
        carsList.classList.add('cars-list');
        cars.forEach((car) => {
            carsList.appendChild(this.drawCar(car));
        });
        return carsList;
    }

    private drawCar(car: ICar) {
        const carContainer = document.createElement('div');
        carContainer.className = 'cars-list__item car';
        carContainer.setAttribute('data-id', String(car.id));

        const startBtn = document.createElement('button');
        startBtn.className = 'car__btn car__btn--start';
        startBtn.innerHTML = 'Start';
        const stopBtn = document.createElement('button');
        stopBtn.innerHTML = 'Stop';
        stopBtn.className = 'car__btn car__btn--stop';
        carContainer.appendChild(this.createCarHeader(car.name));
        carContainer.appendChild(this.drawCarRace(car));
        carContainer.appendChild(startBtn);
        carContainer.appendChild(stopBtn);
        return carContainer;
    }

    private drawCarRace(car: ICar) {
        const carRace = document.createElement('div');
        carRace.classList.add('car__race');
        carRace.innerHTML += this.createSvg(car.color);
        const finish = document.createElement('img');
        finish.classList.add('finish');
        finish.setAttribute('src', '../../assets/svg/finish.svg');
        carRace.appendChild(finish);
        return carRace;
    }

    private createCarHeader(name: string) {
        const update = new Update();
        const events = new Events();
        const carHeader = document.createElement('div');
        carHeader.classList.add('car__header');
        const carname = document.createElement('h3');
        carname.innerHTML = name;
        const selectBtn = document.createElement('button');
        selectBtn.innerHTML = 'Select';
        selectBtn.className = 'car__btn car__btn--select';
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = 'Remove';
        removeBtn.className = 'car__btn car__btn--remove';

        removeBtn.addEventListener('click', (e) => {
            const id = update.deleteCar(e);
            if (id) {
                events.deleteCar(id);
            }
        });

        carHeader.appendChild(carname);
        carHeader.appendChild(selectBtn);
        carHeader.appendChild(removeBtn);
        return carHeader;
    }

    private createSvg(color: Color): string {
        return `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"  class="car__img"
 width="1280.000000pt" height="640.000000pt" viewBox="0 0 1280.000000 640.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
</metadata>
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill="${color}" stroke="none">
<path d="M4880 5759 c-586 -51 -1428 -339 -2345 -803 l-260 -131 -140 1 c-169
1 -245 18 -565 124 -359 119 -514 150 -653 131 -136 -19 -222 -65 -319 -170
-74 -79 -106 -149 -120 -259 -27 -223 33 -771 172 -1557 51 -286 98 -526 104
-532 4 -5 113 8 201 23 29 5 33 1 80 -73 64 -101 217 -254 326 -326 170 -112
382 -195 585 -228 43 -7 151 -13 239 -12 132 0 181 4 281 26 290 61 526 188
711 380 114 118 195 246 248 388 l17 46 116 6 c591 32 2893 33 3907 3 925 -28
1722 -59 1729 -68 2 -1 26 -48 55 -103 109 -213 277 -384 501 -508 222 -123
519 -184 766 -159 200 21 331 59 500 144 189 94 366 250 477 420 l52 81 115
-7 c159 -9 803 -54 870 -61 l56 -6 49 67 c26 36 60 96 74 133 24 61 26 77 25
231 0 126 -4 181 -17 230 -76 281 -185 492 -333 650 -327 347 -999 711 -1569
851 -149 37 -194 44 -430 69 -646 69 -1333 124 -2495 200 -388 26 -650 102
-1310 380 -451 190 -632 259 -844 319 -303 87 -605 122 -856 100z m4803 -1216
c-7 -2 -19 -2 -25 0 -7 3 -2 5 12 5 14 0 19 -2 13 -5z m115 -10 c-10 -2 -28
-2 -40 0 -13 2 -5 4 17 4 22 1 32 -1 23 -4z m110 -10 c-10 -2 -28 -2 -40 0
-13 2 -5 4 17 4 22 1 32 -1 23 -4z m188 -13 c43 -5 169 -19 279 -30 236 -25
348 -46 525 -101 382 -117 812 -335 1090 -552 100 -79 228 -206 273 -271 129
-190 216 -461 204 -640 -3 -43 -10 -83 -16 -89 -7 -7 -133 -1 -403 18 -216 15
-394 28 -395 29 -2 1 4 37 12 80 21 111 19 277 -5 397 -89 436 -404 776 -850
917 -263 83 -558 84 -818 1 -429 -137 -733 -448 -843 -864 -15 -58 -23 -123
-26 -239 l-6 -159 -91 7 c-50 3 -345 15 -656 26 -1492 52 -2757 69 -3808 51
-405 -7 -812 -15 -904 -18 l-168 -5 0 41 c0 61 -18 175 -42 260 -46 170 -150
344 -286 480 -103 103 -184 163 -324 237 -109 57 -123 69 -36 31 42 -18 62
-21 98 -16 25 4 83 8 129 8 45 1 147 5 225 10 77 6 238 15 356 21 118 6 296
15 395 20 99 5 266 14 370 20 105 5 276 14 380 20 105 5 276 14 380 20 105 5
278 14 385 20 107 6 278 15 380 20 236 12 512 27 760 40 107 6 279 15 383 20
103 6 273 15 377 20 105 6 276 15 380 20 105 6 276 15 380 20 105 6 277 15
383 20 105 6 273 15 372 20 99 5 275 14 390 20 116 6 280 15 365 20 85 5 236
13 335 17 99 4 173 8 165 10 -9 2 -72 10 -140 17 -69 8 -104 14 -79 15 25 0
81 -3 125 -9z m-8611 -433 c-190 -103 -333 -231 -444 -394 -51 -77 -116 -209
-138 -283 l-17 -55 -23 140 c-33 201 -75 535 -69 548 2 7 5 0 5 -15 1 -33 -7
-32 163 -18 68 5 186 11 263 14 l140 5 80 45 c44 25 84 46 90 46 5 0 -17 -15
-50 -33z"/>
</g>
</svg>
`;
    }
}

export default Cars;
