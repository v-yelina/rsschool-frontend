import { state } from '../app/state';
import { ICar } from '../car/car.interface';
import ENV from '../common/config';

export const getCars = async (page = state.page, limit = 7): Promise<{ page: string; count: string; data: ICar[] }> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}?_limit=${limit}&_page=${page}`);

    const data: ICar[] = await response.json();
    return { page: page, count: response.headers.get('X-Total-Count') || '0', data };
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

export const removeCars = async (id: string): Promise<ICar> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}/${id}`, {
        method: 'DELETE',
    });

    return await response.json();
};
