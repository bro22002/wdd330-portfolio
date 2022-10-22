import { editItem, setBackToDefault } from "./ToDos.js";
import { removeFromLocalStorage } from "./ls.js";

const list = document.querySelector("ul");
const input = document.querySelector("input");
const alert = document.querySelector(".alert");
const container = document.querySelector(".listContainer");

// delete item
export function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");

    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

// display alert
export function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

export function createListItem(id, content) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("todo-item");
    element.innerHTML = `<label><input type="checkbox"><span class="title">${content}</span></input></label>
              <div class="btn-container">
                <!-- edit btn -->
                <button type="button" class="edit-btn">
                  📝
                </button>
                <!-- delete btn -->
                <button type="button" class="delete-btn">
                  ❎
                </button>
              </div>
            `;
    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);

    input.focus();
}