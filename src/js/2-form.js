const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

Object.keys(savedData).forEach(key => {
  if (form.elements[key]) {
    form.elements[key].value = savedData[key];
    formData[key] = savedData[key];
  }
});

form.addEventListener('input', handleInput);
function handleInput(event) {
  formData.email = event.currentTarget.elements.email.value;
  formData.message = event.currentTarget.elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form submitted:', formData);
  localStorage.removeItem(localStorageKey);
  formData.email = '';
  formData.message = '';

  form.reset();
}
