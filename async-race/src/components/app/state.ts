export enum SortBy {
    wins = 'wins',
    time = 'time',
}

export enum SortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum Pages {
    garage = 'garagePage',
    winners = 'winnersPage',
    firstPage = '1',
}

export enum SortSettings {
    by = 'sortBy',
    order = 'sortOrder',
}

export const state = {
    garagePage: localStorage.getItem(Pages.garage) || Pages.firstPage,
    winnersPage: localStorage.getItem(Pages.winners) || Pages.firstPage,
    sortBy: localStorage.getItem(SortSettings.by) || SortBy.time,
    sortOrder: localStorage.getItem(SortSettings.order) || SortOrder.ASC,
};
