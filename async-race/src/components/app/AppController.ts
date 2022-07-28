import Footer from '../layout/footer';

export class AppController {
    footer: Footer;

    constructor() {
        this.footer = new Footer();
    }
    public start() {
        this.footer.draw();
    }
}
