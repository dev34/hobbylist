let listCounter = 1;

function addHobbyList() {
    var confirmation = confirm("Create New Hobby List?");
    if (confirmation) {
        var username = prompt("Enter Username: ");
        var listId = `hobbies_list_${listCounter}`;
        
        var mainCard = document.getElementById('main_card');
        var hobbyListHTML = `
            <div class="hobbies_box">
                <p class="hobbies_title">
                    ${username}'s Hobby List
                    <button class="toggle-button" onclick="toggleHobbyList('${listId}')">Expand/Collapse</button>
                </p>
                <div class="spacer"></div>
                <div class="hobbies_list_box" id="${listId}"></div>
                <div class="spacer"></div>
                <div class="add_hobbies_section">
                    <input type="text" placeholder="Add your hobby" class="add_hobbies_textfield" id="textfield_${listCounter}">
                    <input type="button" value="Add Hobby" class="add_hobbies_button" onclick="addHobby(${listCounter})">
                </div>
            </div>
            <div class="spacer"></div>
        `;
        
        mainCard.insertAdjacentHTML('beforeend', hobbyListHTML);
        listCounter++;
    }
}

function addHobby(listId) {
    var listBox = document.getElementById(`hobbies_list_${listId}`);
    var hobbyInput = document.getElementById(`textfield_${listId}`);
    var hobbyText = hobbyInput.value;

    if (!listBox.hobbyCounter) listBox.hobbyCounter = 1;
    var hobbyId = `hobby_${listId}_${listBox.hobbyCounter}`;

    var hobbyHTML = `
        <div class="hobby-item" id="${hobbyId}">
            <span>${hobbyText}</span>
            <button class="remove-button" onclick="removeHobby('${hobbyId}')">Remove</button>
        </div>
    `;
    
    listBox.insertAdjacentHTML('beforeend', hobbyHTML);
    listBox.hobbyCounter++;
}

function removeHobby(hobbyId) {
    var hobbyItem = document.getElementById(hobbyId);
    if (hobbyItem) hobbyItem.remove();
}

function toggleHobbyList(listId) {
    var listBox = document.getElementById(listId);

    if (listBox.style.display === "none" || listBox.style.display === "") {
        listBox.style.display = "block";
    } else {
        listBox.style.display = "none";
    }
}