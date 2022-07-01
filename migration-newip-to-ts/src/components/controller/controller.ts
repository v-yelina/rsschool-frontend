import AppLoader from './appLoader';
import { SourcesData } from '../view/sources/sourceData.interface';
import { AllNewsData } from '../view/news/newsData.interface';
import { AppView } from '../view/appView';

class AppController extends AppLoader {
    view: AppView;

    constructor() {
        super();
        this.view = new AppView();
    }

    public getSources(callback: (data: SourcesData) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getSourcesByCategory(e: Event, callback: (data: SourcesData) => void): void {
        const target = e.target as HTMLElement;
        const categoryContainer = e.currentTarget as HTMLElement;

        while (target !== categoryContainer) {
            if (target.classList.contains('category__item') || target.classList.contains('category__item-name')) {
                const categoryName = (target.getAttribute('data-category') || target.innerHTML) as string;
                console.log('category:' + categoryName);

                const sources = document.querySelector('.sources') as HTMLDivElement;

                sources.innerHTML = '';

                if (categoryName === 'all') {
                    super.getResp(
                        {
                            endpoint: 'sources',
                        },
                        callback
                    );
                } else {
                    super.getResp(
                        {
                            endpoint: 'sources',
                            options: {
                                category: categoryName,
                            },
                        },
                        callback
                    );
                }
                return;
            }
        }
    }

    public getNews(e: Event, callback: (data: AllNewsData) => void): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }

    public chooseFirstCategory(callback: (data: AllNewsData) => void): void {
        const newsContainer = document.querySelector('.sources') as HTMLElement;
        const firstCategory = document.querySelector('.source__item') as HTMLElement;

        const sourceId = firstCategory.getAttribute('data-source-id') as string;

        if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
                {
                    endpoint: 'everything',
                    options: {
                        sources: sourceId,
                    },
                },
                callback
            );
        }
        return;
    }
}

export default AppController;
