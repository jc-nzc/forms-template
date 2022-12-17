// Step 3: Create a basic web form. Support the following inputs: Text, Radio Buttons, Checkboxes, and the ability to upload a file.

// Questions and considerations...
// Determine required versus optional fields
// We usually need email validation and formatting -> https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
// Only allow 1 of the 3 radio buttons to be selected

// Get the form element
var form = document.getElementById("myForm");

// Listen for the form submission
form.addEventListener("submit", function (e) {
  // Prevent the form from being submitted
  e.preventDefault();
  console.log("Form Submitted");

  // Example form post, not fully built, just testing in the console
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "Logan Garcia",
      email: "user@domain.com",
      hand_preference: "Ambidexstrous",
      file: "image.png",
      userId: 3
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.warn("Something went wrong.", error);
    });
});
