export const localStorageMock = {
    state: {
        filter: 'color*yellow*grey-author*vasilisa-price*54*180',
    },
    setItem(key, value) {
        this.state[key] = value;
    },
    getItem(key) {
        return this.state[key];
    },
    clear() {
        this.state = {};
    },
    removeItem(key) {
        delete this.state[key];
    },

    key(index) {
        return this.store[index];
    },
    length: 0,
};

// export class LocalStorageMock {
//     store: { [prop: string]: string };
//     length: number;

//     constructor() {
//         this.store = { filter: 'color*yellow*grey-author*vasilisa-price*54*180' };
//         this.length = Object.keys(this.store).length;
//     }

//     clear() {
//         this.store = {};
//     }

//     getItem(key: string) {
//         return this.store[key] || null;
//     }

//     setItem(key: string, value: string) {
//         this.store[key] = value;
//     }

//     removeItem(key: string) {
//         delete this.store[key];
//     }

//     key(index: number): string | null {
//         return this.store[index];
//     }
// }
