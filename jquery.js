const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
const btnLogin = document.querySelector("#btnlogin");
const message = document.querySelector("#messege");
let database = [
  {
    email: "mochechakhurrahman@gmail.com",
  },
  {
    email: "admin@gmail.com",
    password: "password",
  },
];
btnLogin.addEventListener("click", () => {
  Message.inerHTML = "";
  let email = emailInput.value;
  let password = passwordInput.value;
  if (email === "") {
    Message.innerHTML += '<div class="alert alert-danger>Email Tidak Boleh Kosong</div>';
  }
  if (password === "") {
    Message.innerHTML += '<div class="alert alert-danger>Password Tidak Boleh Kosong</div>';
  }

  if (validate) {
    let success = { email: false, password: false };
    for (let i = 0; i < database.length; i++) {
      if (email == database[i]["email"]) {
        success.email = true;
        if (password == database[i]["password"]) {
          success.password = true;
          alert("password dan email cocok");
        } else {
          alert("password salah");
        }
      }
    }
    if (success.email) {
      if (success.password) document.location.href = "menu.html";
    } else {
      message.innerHTML = '<div class="alert alert-danger>Password salah</div>';
    }
  } else {
    message.innerHTML = '<div class="alert alert-danger>Email Tidak Di kenali</div>';
  }
});
