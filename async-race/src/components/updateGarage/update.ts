import { Color, ICar } from '../car/car.interface';

class Update {
    public draw() {
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
        }
        const buttons = document.createElement('div');
        buttons.classList.add('update-form__buttons');
        const raceBtn = document.createElement('button');
        raceBtn.innerHTML = 'Race';
        const resetBtn = document.createElement('button');
        resetBtn.innerHTML = 'Reset';
        const generateBtn = document.createElement('button');
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
                return { name: nameInput.value.trim(), color: colorInput.value.trim() as Color };
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
