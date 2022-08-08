export enum SortBy {
    wins = 'wins',
    time = 'time',
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export const state = {
    garagePage: localStorage.getItem('garagePage') || '1',
    winnersPage: localStorage.getItem('winnersPage') || '1',
    sortBy: localStorage.getItem('sortBy') || SortBy.time,
    sortOrder: localStorage.getItem('sortOrder') || SortOrder.ASC,
};
