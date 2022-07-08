import search from './search';

const removeSearchText = (): void => {
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    searchInput.value = '';

    search();
};

export default removeSearchText;
