import { state } from '../app/state';
import { ICar } from '../car/car.interface';
import ENV from '../common/config';
import { EngineMode, IEngine } from '../drive/drive.interface';
import { IWinner } from '../winners/winners.interface';

export enum Limits {
    cars = 7,
    winners = 10,
}

export const getCars = async (
    page = state.garagePage,
    limit = Limits.cars
): Promise<{ page: string; count: string; data: ICar[] }> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}?_limit=${limit}&_page=${page}`);

    const data: ICar[] = await response.json();
    return { page: page, count: response.headers.get('X-Total-Count') || '0', data };
};

export const getOneCar = async (id: string): Promise<ICar> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}/${id}`);

    const data: ICar = await response.json();
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

export const updateCars = async (data: ICar): Promise<ICar> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.GARAGE}/${data.id}`, {
        method: 'PUT',
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

export const startStopDriveEngine = async (id: string, status: EngineMode): Promise<Partial<IEngine>> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.ENGINE}?id=${id}&status=${status}`, {
        method: 'PATCH',
    });
    return await response.json();
};

export const getWinners = async (
    page = state.winnersPage,
    limit = Limits.winners,
    sort = state.sortBy,
    order = state.sortOrder
): Promise<{ page: string; count: string; data: IWinner[] }> => {
    const response = await fetch(
        `${ENV.API_ROOT}${ENV.WINNERS}?_limit=${limit}&_page=${page}&_sort=${sort}&_order=${order}`
    );

    const data: IWinner[] = await response.json();
    return { page: page, count: response.headers.get('X-Total-Count') || '0', data };
};

export const getOneWinner = async (id: number): Promise<IWinner> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.WINNERS}/${id}`);
    if (response.status !== 200) {
        console.log(response.statusText);
    }
    const data: IWinner = await response.json();
    return data;
};

export const addWinners = async (data: Partial<IWinner>): Promise<IWinner> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.WINNERS}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const updateWinners = async (data: IWinner): Promise<IWinner> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.WINNERS}/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return await response.json();
};

export const removeWinners = async (id: string): Promise<IWinner> => {
    const response = await fetch(`${ENV.API_ROOT}${ENV.WINNERS}/${id}`, {
        method: 'DELETE',
    });

    return await response.json();
};
