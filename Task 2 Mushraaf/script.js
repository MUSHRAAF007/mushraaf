document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todoList');
    const newTaskInput = document.getElementById('new-task-input');

    
    newTaskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
            addTask(newTaskInput.value.trim());
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                <button class="save-btn" style="display:none;">Save</button>
                <button class="cancel-btn" style="display:none;">Cancel</button>
                <input type="checkbox">
            </div>
        `;
        todoList.appendChild(listItem);

        const checkbox = listItem.querySelector('input[type="checkbox"]');
        const editBtn = listItem.querySelector('.edit-btn');
        const deleteBtn = listItem.querySelector('.delete-btn');
        const saveBtn = listItem.querySelector('.save-btn');
        const cancelBtn = listItem.querySelector('.cancel-btn');
        const taskSpan = listItem.querySelector('span');

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                listItem.classList.add('completed');
                todoList.appendChild(listItem); 
            } else {
                listItem.classList.remove('completed');
                todoList.insertBefore(listItem, todoList.firstChild); 
            }
        });

        editBtn.addEventListener('click', function() {
            taskSpan.setAttribute('contenteditable', 'true');
            taskSpan.focus();
            editBtn.style.display = 'none';
            deleteBtn.style.display = 'none';
            saveBtn.style.display = 'inline-block';
            cancelBtn.style.display = 'inline-block';
        });

        saveBtn.addEventListener('click', function() {
            taskSpan.setAttribute('contenteditable', 'false');
            editBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
        });

        cancelBtn.addEventListener('click', function() {
            taskSpan.textContent = taskText; // Revert to original text
            taskSpan.setAttribute('contenteditable', 'false');
            editBtn.style.display = 'inline-block';
            deleteBtn.style.display = 'inline-block';
            saveBtn.style.display = 'none';
            cancelBtn.style.display = 'none';
        });

        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(listItem);
        });
    }
});
