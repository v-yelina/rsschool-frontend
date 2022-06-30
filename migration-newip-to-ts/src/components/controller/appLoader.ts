import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            // apiKey: '2fb88c9945c34e05b203ee894e77347c',
            apiKey: 'ef036ee10a5645c199baa05845f563ec',
        });
    }
}

export default AppLoader;
