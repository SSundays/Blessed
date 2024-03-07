const firebaseConfig = {
    apiKey: "AIzaSyAm405jLfQxDDnPp8dgSVVq7KJ1CxhezAg",
    authDomain: "blessed---contact-form.firebaseapp.com",
    databaseURL: "https://blessed---contact-form-default-rtdb.firebaseio.com",
    projectId: "blessed---contact-form",
    storageBucket: "blessed---contact-form.appspot.com",
    messagingSenderId: "1040212382962",
    appId: "1:1040212382962:web:8dbd659db363dd343d2c6b"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference for the database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var fullname = getElementVal('fullName');
    var email = getElementVal('email');
    var number = getElementVal('phoneNumber');
    var text = getElementVal('subject');

    saveMessages(fullname, email, number, text);
}

const saveMessages = (fullname, email, number, text) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        fullname: fullname,
        email: email,
        number: number,
        text: text,
    });

    alert("Message sent successfully!"); // You might want to replace this with a more user-friendly notification.
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};