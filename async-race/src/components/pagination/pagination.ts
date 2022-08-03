import { state } from '../app/state';
import Events from '../eventListeners/events';

class Pagination {
    public createButtons(page: string = state.page) {
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
                this.changePage(e);
                const page = localStorage.getItem('page');
                if (page) {
                    events.updateGarage(page);
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

    private changePage(e: Event) {
        const button = e.target as HTMLElement;
        const pageNum = localStorage.getItem('page') || '1';
        const allCarsCount = document.querySelector('.cars-count');
        if (button.classList.contains('first-btn')) {
            localStorage.setItem('page', '1');
        } else if (button.classList.contains('prev-btn')) {
            if (+pageNum > 1) {
                localStorage.setItem('page', `${+pageNum - 1}`);
            }
        } else if (button.classList.contains('next-btn') && allCarsCount) {
            const maxPage = Math.ceil(+allCarsCount.innerHTML.trim().split('(').join('').split(')')[0] / 7);
            if (+pageNum < maxPage) {
                localStorage.setItem('page', `${+pageNum + 1}`);
            }
        } else if (button.classList.contains('last-btn') && allCarsCount) {
            const maxPage = Math.ceil(+allCarsCount.innerHTML.trim().split('(').join('').split(')')[0] / 7);
            localStorage.setItem('page', String(maxPage));
        }
    }
}

export default Pagination;
