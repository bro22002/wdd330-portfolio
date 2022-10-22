import { deleteItem, createListItem } from "./utilities.js";

const container = document.querySelector(".listContainer");
// ****** local storage **********

// add to local storage
export function addToLocalStorage(id, value) {
    const todo = { id, value };
    let items = getLocalStorage();
    items.push(todo);
    localStorage.setItem("list", JSON.stringify(items));
}

export function getLocalStorage() {
    const toDoList = localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
        : [];
    return toDoList;
}

export function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("list", JSON.stringify(items));
}
export function editLocalStorage(id, value) {
    let items = getLocalStorage();

    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

// SETUP LOCALSTORAGE.REMOVEITEM('LIST');

// ****** setup items **********

export function setupItems() {
    let items = getLocalStorage();

    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

