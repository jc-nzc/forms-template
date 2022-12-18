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

  // Grab Inner HTML for name
  let form_name = document.getElementById("name").value;
  console.log(form_name);

  // Grab email input
  let form_email = document.getElementById("email").value;
  console.log(form_email);
  
  // Grab hand selection... needs an id
  let form_hand = document.getElementById("radio").value;
  console.log(form_hand);

  // Grab file... need to read documentation on files, currently uploads path and file name
  // C:\fakepath\ {{some file}}
  let form_file = document.getElementById("file").value;
  console.log(form_file);

  // Example form post, not fully built, just testing in the console
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: form_name,
      email: form_email,
      hand_preference: form_hand,
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
