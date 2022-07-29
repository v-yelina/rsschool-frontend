class Update {
    draw() {
        const updateForm = document.createElement('section');
        updateForm.classList.add('update-form');
        const inputContainer = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        const color = document.createElement('input');
        color.setAttribute('type', 'color');
        const btn = document.createElement('button');
        inputContainer.appendChild(input);
        inputContainer.appendChild(color);
        inputContainer.appendChild(btn);
        const createInput = inputContainer.cloneNode(true) as HTMLDivElement;
        createInput.className = 'update-form--create';
        updateForm.appendChild(createInput);
        const updateInput = inputContainer.cloneNode(true) as HTMLDivElement;
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
}

export default Update;
