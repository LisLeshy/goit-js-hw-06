const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;
  // console.log(email);
  // console.log(password);

  if (email === "" || password === "") {
    return alert("заполните поле ввода");
  } else console.log({ email, password });
  form.reset();
}
