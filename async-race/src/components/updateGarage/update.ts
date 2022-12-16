import { Color, ICar } from '../car/car.interface';
import Events from '../eventListeners/events';

class Update {
    public draw() {
        const events = new Events();
        const updateForm = document.createElement('section');
        updateForm.classList.add('update-form');
        const createInput = this.createInputForm();
        createInput.className = 'update-form--create';
        updateForm.appendChild(createInput);
        const updateInput = this.createInputForm();
        updateInput.className = 'update-form--update';
        updateForm.appendChild(updateInput);
        const createBtn = updateForm.querySelector('.update-form--create button');
        if (createBtn) {
            createBtn.innerHTML = 'Create';
        }
        const updateBtn = updateForm.querySelector('.update-form--update button');
        if (updateBtn) {
            updateBtn.innerHTML = 'Update';
            updateBtn.addEventListener('click', () => {
                events.updateCar();
            });
        }
        const buttons = document.createElement('div');
        buttons.classList.add('update-form__buttons');
        const raceBtn = document.createElement('button');
        raceBtn.innerHTML = 'Race';
        raceBtn.classList.add('race-btn');
        const resetBtn = document.createElement('button');
        resetBtn.classList.add('reset-btn');
        resetBtn.innerHTML = 'Reset';
        const generateBtn = document.createElement('button');
        generateBtn.classList.add('generate-btn');
        generateBtn.innerHTML = 'Generate Cars';
        buttons.appendChild(raceBtn);
        buttons.appendChild(resetBtn);
        buttons.appendChild(generateBtn);
        updateForm.appendChild(buttons);
        return updateForm;
    }

    public createCar(): Partial<ICar> | undefined {
        const createInput = document.querySelector('.update-form--create');
        if (createInput) {
            const nameInput = createInput.querySelector('.input-name') as HTMLInputElement;
            const colorInput = createInput.querySelector('.input-color') as HTMLInputElement;
            if (nameInput && colorInput) {
                const name = nameInput.value.trim();
                const color = colorInput.value.trim() as Color;
                nameInput.value = '';
                return { name, color };
            }
        }
    }

    private createInputForm() {
        const inputContainer = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('input-name');
        const color = document.createElement('input');
        color.setAttribute('type', 'color');
        color.classList.add('input-color');
        const btn = document.createElement('button');
        inputContainer.appendChild(input);
        inputContainer.appendChild(color);
        inputContainer.appendChild(btn);
        return inputContainer;
    }
}

export default Update;
