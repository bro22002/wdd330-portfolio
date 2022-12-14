export const operator_btns = document.querySelectorAll("button[data-type=operator]");

let is_operator = false;



// can be module
export function remove_active() {
  operator_btns.forEach((btn) => {
   btn.classList.remove("active")
  ;});
 };