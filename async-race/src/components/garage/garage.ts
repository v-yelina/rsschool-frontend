class Garage {
    public draw(): HTMLElement {
        const garage = document.createElement('section');
        garage.classList.add('garage');
        const garageTitle = document.createElement('h2');
        garageTitle.innerHTML = 'Garage';
        garage.appendChild(garageTitle);

        return garage;
    }
}

export default Garage;
