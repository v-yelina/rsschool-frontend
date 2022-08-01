import { ICar } from '../car/car.interface';
import ENV from '../common/config';

export const getCars = async (): Promise<ICar[]> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}`);
    const data: ICar[] = await response.json();
    return data;
};

export const addCars = async (data: Partial<ICar>): Promise<ICar> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};
