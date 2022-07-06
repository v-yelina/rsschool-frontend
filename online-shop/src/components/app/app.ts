import Card from '../view/card/card';
import { picturesList } from '../../pictures-list';

class App {
    start() {
        const card = new Card();
        card.draw(picturesList);
    }
}

export default App;
