import AppLoader from './appLoader';
import { SourcesData } from '../view/sources/sourceData.interface';
import { AllNewsData } from '../view/news/newsData.interface';

class AppController extends AppLoader {
    getSources(callback: (data: SourcesData) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: AllNewsData) => void) {
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

    chooseFirstCategory(callback: (data: AllNewsData) => void) {
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
