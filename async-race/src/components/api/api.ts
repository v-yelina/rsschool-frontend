import { ICar } from '../car/car.interface';
import ENV from '../common/config';

export const getCars = async (): Promise<ICar[]> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}`);

    const data: ICar[] = await response.json();
    return data;
};
