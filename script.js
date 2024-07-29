document.addEventListener('DOMContentLoaded', function () {

    const upgradeSection = document.createElement('div');
    upgradeSection.classList.add('upgrade-section');
    
    const upgradeText = document.createElement('p');
    upgradeText.textContent = 'Upgrade to PRO to get access all Features!';
    
    const upgradeButton = document.createElement('button');
    upgradeButton.textContent = 'Get Pro Now!';
    upgradeButton.classList.add('upgrade-button');
    
    upgradeSection.appendChild(upgradeText);
    upgradeSection.appendChild(upgradeButton);
    
    const sidebar = document.querySelector('.sidebar');
    const userProfile = document.querySelector('.user__profile');
    sidebar.insertBefore(upgradeSection, userProfile);
    
    // Модальне вікно
    function createModal() {
        
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.textContent = '×';
        
        const formTitle = document.createElement('h2');
        formTitle.textContent = 'Upgrade to PRO';
        formTitle.classList.add('form-title'); 
        
        const form = document.createElement('form');
        form.id = 'modalForm';

        const fields = [
            { label: 'First Name:', type: 'text', id: 'firstName', name: 'firstName' },
            { label: 'Last Name:', type: 'text', id: 'lastName', name: 'lastName' },
            { label: 'Email:', type: 'email', id: 'email', name: 'email' },
            { label: 'Phone:', type: 'tel', id: 'phone', name: 'phone' }
        ];

        fields.forEach(field => {
            const label = document.createElement('label');
            label.setAttribute('for', field.id);
            label.textContent = field.label;

            const input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.name;
            input.required = true;

            form.appendChild(label);
            form.appendChild(input);
        });

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Continue';
        
        form.appendChild(submitButton);
        
        modalContent.appendChild(closeBtn);
        modalContent.appendChild(formTitle);
        modalContent.appendChild(form);
        
        modal.appendChild(modalContent);
        
        document.body.appendChild(modal);

        // Закриття модального вікна
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
        
        return modal;
    }

    // Змінна для модального вікна
    let modal = null;

    // Натискання на "Get Pro Now!"
    upgradeButton.onclick = function() {
        if (!modal) {
            modal = createModal();
        }
        modal.style.display = 'block';
    }
});