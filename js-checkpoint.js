// use addEventListener to handle form submit event
const form = document.querySelector('form')

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    let gender;
    if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    }
    else if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    }


    // formValidation(name, surname, email, age, gender);

    const promise = new Promise((resolve, reject) => {
        if (formValidation(name, surname, email, age, gender)) {
            resolve("success")
        }
        else {
            reject('Fill all the fields')
        }

    })

    promise.then(() => {
        addAttendee(name, surname, email, age, gender)
    })
        .catch(() => {
            alert('error')
        })

})

function formValidation(name, surname, email, age) {

    if (name.length > 0 && surname.length > 0 && email.length > 0 && age > 13) {
        return true;
    }
    else {
        return false;
    }
}

function addAttendee(name, surname, email, age, gender) {
    let attendee = document.getElementById('attendees');
    attendee.innerHTML += ` <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">${name} ${surname} ${age}</div>
        ${email}, ${gender}
    </div>
    <span class="badge bg-primary rounded-pill">M</span>
</li>`
}


// Write a function called "formValidation" that validates the form where
//  (name is not empty)
//  (surname is not empty)
//  (email is not empty)
//  (age is greater or equal 13)

// Write another function "addAttendee" that adds an attendee to the list

// use a promise to execute the addAttendee as a resolver function / alert the validation error as a rejection function
