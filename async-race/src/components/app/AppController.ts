import Footer from '../layout/footer';
import Header from '../layout/header';

export class AppController {
    footer: Footer;
    header: Header;

    constructor() {
        this.header = new Header();
        this.footer = new Footer();
    }

    public start() {
        this.header.draw();
        this.footer.draw();
    }
}
