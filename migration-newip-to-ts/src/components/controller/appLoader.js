import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2fb88c9945c34e05b203ee894e77347c',
        });
    }
}

export default AppLoader;
