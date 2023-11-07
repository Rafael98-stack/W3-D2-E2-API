window.addEventListener("DOMContentLoaded", () => {
    const btnAdd = document.getElementById("add")
    const btnRemove = document.getElementById("remove")
    const btnDeleteInput =  document.getElementById("remove")
    const txtInput = document.querySelector("input[type='text']");

    btnAdd.onclick = addProfile;
    btnRemove.onclick = removeProfile;
  txtInput.onchange = txtFillInput;
  btnDeleteInput.onclick = () => {
    localStorage.removeItem("current");
    txtInput.value = "";
  }

    loadAccount();
preLoadText(txtInput);
});

const preLoadText = inputNode => {
    const storedText = localStorage.getItem("current");
    if (storedText && inputNode) {
        inputNode.value = storedText;
    }
}; 

const loadAccount = () => {
    const accountInStorage = localStorage.getItem("profile");
    const html = document.documentElement;
// return accountInStorage === true ? document.documentElement.classList.add("added") : document.documentElement.classList.add("removed")
    if (accountInStorage) {
       html.classList.add("added")
    } else {
        html.classList.add("removed")
    }
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

localStorage.setItem("current", event.target.value);
  };