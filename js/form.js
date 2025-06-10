const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mdkgwoby", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      status.textContent = "Message sent!";
      form.reset();
    } else {
      status.textContent = "Oops! Something went wrong.";
    }
  } catch (error) {
    status.textContent = "Network error. Please try again later.";
  }
});
