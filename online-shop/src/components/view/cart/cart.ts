import './cart.scss';

class Cart {
    public addToCart(e: Event): void {
        const cart = document.querySelector('.cart');
        const addButton = e.target as HTMLElement;
        let product;
        if (addButton) product = addButton.parentElement;
        let removeBtn;
        if (product) removeBtn = product.querySelector('.card__item-btn--remove');

        addButton.classList.add('hidden');
        if (removeBtn) removeBtn.classList.remove('hidden');

        if (cart) {
            const cartAmount = cart.querySelector('span');
            const cartWarning = document.querySelector('.cart-warning');

            if (cartAmount && cartWarning) {
                const crossButton = cartWarning.querySelector('.btn-cross_warning');
                if (crossButton) crossButton.addEventListener('click', () => cartWarning.classList.add('hidden'));
                const newAmount = +cartAmount.innerHTML + 1;
                if (newAmount > 20) {
                    cartWarning.classList.remove('hidden');
                } else {
                    cartAmount.innerHTML = newAmount.toString();
                    cartWarning.classList.add('hidden');
                }
            }
        }
    }

    public removeFromCart(e: Event) {
        const cart = document.querySelector('.cart');
        const removeBtn = e.target as HTMLElement;
        console.log(removeBtn);

        let product;
        if (removeBtn) {
            product = removeBtn.parentElement;
            removeBtn.classList.add('hidden');
        }

        let addBtn;
        if (product) addBtn = product.querySelector('.card__item-btn--cart');

        if (addBtn) addBtn.classList.remove('hidden');
        if (cart) {
            const cartAmount = cart.querySelector('span');
            if (cartAmount) {
                const newAmount = +cartAmount.innerHTML - 1;
                if (newAmount < 0) {
                    return;
                } else {
                    cartAmount.innerHTML = newAmount.toString();
                }
            }
        }
    }
}

export default Cart;
