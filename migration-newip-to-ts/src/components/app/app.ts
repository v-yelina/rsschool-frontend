import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources = document.querySelector('.sources') as HTMLDivElement;
        sources.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        const categories = document.querySelector('.categories') as HTMLDivElement;
        categories.addEventListener('click', (e: Event) => {
            this.controller.getSourcesByCategory(e, (data) => {
                this.view.drawSources(data);
            });
        });
        this.view.drawCategories();
        this.controller.getSources((data) => {
            this.view.drawSources(data);
            this.controller.chooseFirstCategory((data) => this.view.drawNews(data));
        });
    }
}

export default App;
