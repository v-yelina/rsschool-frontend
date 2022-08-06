import { state } from '../app/state';
import Events from '../eventListeners/events';

type Tabs = 'winners' | 'garage';

class Pagination {
    public createButtons(tab: Tabs, page: string = tab === 'winners' ? state.winnersPage : state.garagePage) {
        const events = new Events();
        const pagination = document.createElement('div');
        pagination.classList.add('pagination');
        const firstPageBtn = this.createOneBtn('first-btn', '<<');
        const prevBtn = this.createOneBtn('prev-btn', '<');
        const pageNum = document.createElement('p');
        pageNum.classList.add('page-num');
        pageNum.innerHTML = page;
        const nextBtn = this.createOneBtn('next-btn', '>');
        const lastPageBtn = this.createOneBtn('last-btn', '>>');
        pagination.appendChild(firstPageBtn);
        pagination.appendChild(prevBtn);
        pagination.appendChild(pageNum);
        pagination.appendChild(nextBtn);
        pagination.appendChild(lastPageBtn);
        const paginationBtns = pagination.querySelectorAll('.pagination__btn');
        paginationBtns.forEach((btn) =>
            btn.addEventListener('click', (e) => {
                this.changePage(e, tab);
                const page = localStorage.getItem(`${tab}Page`);
                if (page) {
                    if (tab === 'garage') {
                        events.updateGarage(page);
                    }
                }
            })
        );
        return pagination;
    }

    private createOneBtn(className: string, text: string) {
        const button = document.createElement('button');
        button.className = `pagination__btn ${className}`;
        button.innerHTML = text;
        return button;
    }

    private changePage(e: Event, tab: Tabs) {
        const button = e.target as HTMLElement;
        const pageNum = localStorage.getItem(`${tab}Page`) || '1';

        const allCarsCount = document.querySelector('.cars-count');
        const winnersCount = document.querySelector('.winners-count');
        const all = tab === 'garage' ? allCarsCount : winnersCount;

        if (all) {
            const itemsLimit = tab === 'garage' ? 7 : 10;
            const maxPage = Math.ceil(+all.innerHTML.trim().split('(').join('').split(')')[0] / itemsLimit);
            if (button.classList.contains('first-btn')) {
                localStorage.setItem(`${tab}Page`, '1');
            } else if (button.classList.contains('prev-btn')) {
                if (+pageNum > 1) {
                    localStorage.setItem(`${tab}Page`, `${+pageNum - 1}`);
                }
            } else if (button.classList.contains('next-btn')) {
                if (+pageNum < maxPage) {
                    localStorage.setItem(`${tab}Page`, `${+pageNum + 1}`);
                }
            } else if (button.classList.contains('last-btn')) {
                localStorage.setItem(`${tab}Page`, String(maxPage));
            }
        }
    }
}

export default Pagination;
