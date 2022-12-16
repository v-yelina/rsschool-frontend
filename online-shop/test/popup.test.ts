/**
 * @jest-environment jsdom
 */
import Popup from '../src/components/view/popup/popup';
const popup = new Popup();

describe('closePopup', () => {
    test('remove popup from page', () => {
        document.body.innerHTML = `<body><main class="products"><article        class="popup__item">
                <div class="popup__item-container">
                    <img src="#" alt="" class="popup__item-img" />
                    <div class="popup__item-description">
                    </div>
                </div>
            </article></main></body>
        `;
        popup.closePopup();

        const main = document.querySelector('main');
        expect(main?.innerHTML).toEqual('');
    });
});
