class Events {
    public create(): void {
        const headerBtn = document.querySelectorAll('.btn--header');
        headerBtn.forEach((btn) => btn.addEventListener('click', (e) => this.changeTab(e)));
    }

    private changeTab(e: Event): void {
        const targetButton = e.target as HTMLButtonElement;
        const garage = document.querySelector('.garage');
        const winners = document.querySelector('.winners');
        if (targetButton.classList.contains('btn--garage') && garage && winners) {
            garage.classList.remove('hidden');
            winners.classList.add('hidden');
        } else if (targetButton.classList.contains('btn--winners') && garage && winners) {
            garage.classList.add('hidden');
            winners.classList.remove('hidden');
        }
    }
}

export default Events;
