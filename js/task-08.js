const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;

  const email = formEl.email.value;
  const password = formEl.password.value;
  console.log(email);
  console.log(password);

  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  //     formData.forEach((name, value) => console.log("${ name },${value}"));

  if (email === "" || password === "") {
    alert("заполните поле ввода");
  }
  console.log({ email, password });

  form.reset();
}
