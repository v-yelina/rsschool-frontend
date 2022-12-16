import News from './news/news';
import Sources from './sources/sources';
import { SourcesData } from './sources/sourceData.interface';
import { AllNewsData } from './news/newsData.interface';
import Categories from './categories/categories';

export class AppView {
    news: News;
    sources: Sources;
    categories: Categories;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.categories = new Categories();
    }

    drawNews(data: AllNewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    drawCategories() {
        this.categories.draw();
    }
}

export default AppView;
