// Get form inputs
const formFields = {
  firstName: document.getElementById('inputbox'),
  lastName: document.getElementById('lastnamebox'),
  address: document.getElementById('addbox'),
  email: document.getElementById('emailbox'),
  city: document.getElementById('city'),
  zip: document.getElementById('zip'),
  phone: document.getElementById('telnum'),
  qualification: document.getElementById('quali')
};

// Error message elements
const errorFields = {
  firstName: document.getElementById('firstnameError'),
  lastName: document.getElementById('lastnameError'),
  address: document.getElementById('addsError'),
  email: document.getElementById('mailError'),
  phone: document.getElementById('phoneError')
};

// Output display fields
const outputFields = {
  name: document.getElementById('nameValue'),
  address: document.getElementById('addsValue'),
  email: document.getElementById('emailValue'),
  cityZip: document.getElementById('cityzipValue'),
  phone: document.getElementById('phonevalue'),
  qualification: document.getElementById('Qualivalue')
};

const subTable = document.getElementById('submitTable');
const submitBtn = document.getElementById('submbutn');
const cancelBtn = document.getElementById('canlbutn');

const submissions = [];

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  clearErrors();

  const { firstName, lastName, address, email, city, zip, phone, qualification } = formFields;
  let isValid = true;

  // Validations
  if (firstName.value.trim().length < 2) {
    setError('firstName', 'Please enter a valid first name');
    isValid = false;
  }

  if (!lastName.value.trim()) {
    setError('lastName', 'Please enter your last name');
    isValid = false;
  }

  if (!address.value.trim()) {
    setError('address', 'Please enter your address');
    isValid = false;
  }

  if (!email.value.trim()) {
    setError('email', 'Please enter your validemail');
    isValid = false;
  }

  if (phone.value.trim().length < 10) {
    setError('phone', 'Please enter a valid phone number');
    isValid = false;
  }

  if (!isValid) return;

  const submission = {
    name: `${firstName.value} ${lastName.value}`,
    address: address.value,
    city: city.value,
    zip: zip.value,
    email: email.value,
    phone: phone.value,
    qualification: qualification.value
  };

  submissions.push(submission);
  displaySubmission(submission);
  renderTable();
  clearForm();
});

cancelBtn.addEventListener('click', clearForm);

function setError(field, message) {
  errorFields[field].textContent = message;
}

function clearErrors() {
  Object.values(errorFields).forEach(el => el.textContent = '');
}

function clearForm() {
  Object.values(formFields).forEach(field => field.value = '');
}

function displaySubmission({ name, address, email, city, zip, phone, qualification }) {
  outputFields.name.textContent = name;
  outputFields.address.textContent = address;
  outputFields.email.textContent = email;
  outputFields.cityZip.textContent = `${city} - ${zip}`;
  outputFields.phone.textContent = phone;
  outputFields.qualification.textContent = qualification;
}

function renderTable() {
  subTable.innerHTML = submissions.map((item, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${item.name}</td>
      <td>${item.address}</td>
      <td>${item.city}</td>
      <td>${item.zip}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.qualification}</td>
    </tr>
  `).join('');
}
