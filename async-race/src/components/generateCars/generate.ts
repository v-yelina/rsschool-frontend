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
            ['Tesla', ['Model 3', 'Model S', 'Model X', 'Model Y']],
            ['BMW', ['X1', 'X3', 'X5', 'X6', 'Z4']],
            ['Opel', ['Astra', 'Mocca', 'Corsa', 'Insignia']],
            ['Mersedes', ['GLC', 'G-Klasse', 'C-Klasse', 'Sprinter']],
            ['VW', ['Golf', 'Polo', 'Passat', 'Tiguan', 'Touran', 'Caddy']],
            ['Alfa Romeo', ['Stelvio', 'Giulia']],
            ['Bentley', ['Continental', 'Bentayga', 'Flying Spur']],
            ['Cadillac', ['XT4', 'XT5', 'XT6']],
            ['Chevrolet', ['Trax', 'Trailblazer', 'Equinox', 'Traverse', 'Tahoe', 'Suburban']],
            ['Fiat', ['500', 'Tipo', 'Panda', '500X', '500L']],
            ['Ford', ['Focus', 'Fiesta', 'Mustang', 'Explorer', 'Kuga', 'Puma']],
            ['Lexus', ['CT', 'IS', 'ES', 'LS']],
            ['Mazda', ['3', 'CX-5', 'MX-5', '6']],
            ['Maseratti', ['Quattroporte', 'Ghibli', 'Levante', 'MC20']],
            ['Toyota', ['Corolla', 'Yaris', 'Land Cruiser', 'RAV4']],
            ['Volvo', ['XC60', 'XC90', 'XC40', 'S60', 'V60']],
        ];
        const randomCar = carBrands[Math.floor(Math.random() * carBrands.length)];
        const name = `${randomCar[0]} ${randomCar[1][Math.floor(Math.random() * randomCar[1].length)]}`;
        const color: Color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return { name, color };
    }
}

export default Generate;
