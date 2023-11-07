window.addEventListener("DOMContentLoaded", () => {
    const btnAdd = document.getElementById("add")
    const btnRemove = document.getElementById("remove")
    const txtInput = document.querySelector("input[type='text']");

    btnAdd.onclick = addProfile;
    btnRemove.onclick = removeProfile;
  txtInput.onchange = txtFillInput;

    loadAccount()
});

const loadAccount = () => {
    const accountInStorage = localStorage.getItem("profile");
return accountInStorage === true ? document.documentElement.classList.add("added") : document.documentElement.classList.add("removed")
    // if (accountInStorage) {
    //     const html = document.documentElement;
    //     html.classList.add("added")
    // } else {
    //     const html = document.documentElement;
    //     html.classList.add("removed")
    // }
};

const addProfile = () => {
localStorage.setItem("profile", "account");
// document.documentElement.classList.add("added")
loadAccount()
};
const removeProfile = () => {
    localStorage.removeItem("profile")
 loadAccount()
  };
 
  const txtFillInput = (event) => {
console.log(event)
  }