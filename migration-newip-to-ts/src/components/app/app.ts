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
        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        this.controller.getSources((data) => {
            this.view.drawSources(data);
            this.controller.chooseFirstCategory((data) => this.view.drawNews(data));
        });
    }
}

export default App;
