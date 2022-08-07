import { startStopDriveEngine } from '../api/api';
import Events from '../eventListeners/events';
import { EngineMode } from './drive.interface';

type Result = { id: number; time: number };

class Drive {
    raceResults: Result[];

    constructor() {
        this.raceResults = [];
    }
    public async engine(e: Event, status: EngineMode, carId?: string) {
        const events = new Events();
        const carID = carId || events.getCarId(e);

        if (carID) {
            const carSettings = await startStopDriveEngine(carID, status);
            const car = document.querySelector(`.car${carID}`);

            if (car) {
                const startButton = car.querySelector('.car__btn--start') as HTMLButtonElement;
                const stopButton = car.querySelector('.car__btn--stop') as HTMLButtonElement;
                const carImg = car.querySelector('.car__img') as SVGElement;
                if (carImg && startButton && stopButton) {
                    if (status === 'started' && carSettings) {
                        const time = (carSettings.distance as number) / (carSettings.velocity as number);
                        const animationId = this.animation(carImg, time);
                        startButton.disabled = true;
                        stopButton.disabled = false;
                        if (animationId) {
                            await this.drive(carID, time, animationId);
                        }
                    } else if (status === 'stopped') {
                        carImg.style.transform = `translateX(0px)`;
                        carImg.style.transition = `0ms`;
                        startButton.disabled = false;
                        stopButton.disabled = true;
                    }
                }
            }
        }
    }

    private async drive(carID: string, time: number, animationId: number) {
        try {
            await startStopDriveEngine(carID, 'drive');
            this.raceResults.push({ id: +carID, time });
        } catch (e) {
            window.cancelAnimationFrame(animationId);
        }
    }

    public chooseWinner() {
        const raceResults = this.raceResults;
        raceResults.sort((a, b) => a.time - b.time);
        console.log(raceResults);
        console.log(raceResults[0]);

        this.raceResults = [];
        return raceResults[0];
    }

    private animation = (car: SVGElement, animationTime: number): number | undefined => {
        let start: number | null = null;
        const raceWrapper = car.parentElement;
        if (raceWrapper) {
            const width = raceWrapper.clientWidth - 50;

            const step = (timestamp: number) => {
                if (!start) {
                    start = timestamp;
                }
                const time = timestamp - start;
                const passed = Math.round(time * (width / animationTime));
                car.style.transform = `translateX(${Math.min(passed, width)}px`;

                if (passed < width) {
                    return window.requestAnimationFrame(step);
                }
            };

            return window.requestAnimationFrame(step);
        }
    };
}

export default Drive;
