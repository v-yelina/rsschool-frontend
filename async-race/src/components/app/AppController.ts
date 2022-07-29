import Events from '../eventListeners/events';
import Footer from '../layout/footer';
import Header from '../layout/header';
import Main from '../layout/main';

export class AppController {
    header: Header;
    main: Main;
    footer: Footer;
    events: Events;

    constructor() {
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
        this.events = new Events();
    }

    public start() {
        this.header.draw();
        this.main.draw();
        this.footer.draw();
        this.events.create();
    }
}
