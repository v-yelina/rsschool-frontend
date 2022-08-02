import { addCars } from '../api/api';
import { Color, ICar } from '../car/car.interface';

class Generate {
    public start() {
        for (let i = 0; i < 100; i += 1) {
            addCars(this.generateCar());
        }
    }

    private generateCar(): Partial<ICar> {
        const carBrands = [
            'Tesla',
            'BMW',
            'Opel',
            'Mersedes',
            'VW',
            'Alfa Romeo',
            'Bentley',
            'Cadillac',
            'Chevrolet',
            'Fiat',
            'Ford',
            'Lexus',
            'Mazda',
            'Maseratti',
            'Toyota',
            'Volvo',
        ];
        const name = carBrands[Math.floor(Math.random() * carBrands.length)];
        const color: Color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return { name, color };
    }
}

export default Generate;
