import {addToLocalStorage, removeFromLocalStorage, editLocalStorage, setupItems} from "./ls.js";
import { deleteItem, displayAlert } from "./utilities.js";

const form = document.querySelector("form");
const alert = document.querySelector(".alert");
const input = document.querySelector("input");
const todo = document.getElementById("todo");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const clearBtn = document.querySelector(".clear-btn");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".listContainer");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// add item
function addItem(e) {
  e.preventDefault();
  const content = todo.value;
  const id = new Date().getTime().toString();

  if (content !== "" && !editFlag) {
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
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // set local storage
    addToLocalStorage(id, content);
    // set back to default
    setBackToDefault();
  } else if (content !== "" && editFlag) {
    editElement.innerHTML = content;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, content);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }

  input.focus();
}



// clear items
function clearItems() {
  const items = document.querySelectorAll(".todo-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}



// edit item
export function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  todo.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
  input.focus();
}

// set backt to defaults
export function setBackToDefault() {
  todo.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

