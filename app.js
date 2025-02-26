"use strict";
// ! toggle skills section
var _a;
function toggleSkills() {
  const skillsSection = document.getElementById("skills-section");
  const toggleButton = document.getElementById("toggle-skills-btn");
  //! conditions to toggle skills section
  if (skillsSection && toggleButton) {
    if (
      skillsSection.style.display === "none" ||
      skillsSection.style.display === ""
    ) {
      skillsSection.style.display = "block"; //! Show section
      toggleButton.textContent = "Hide Skills"; //! Change button text
    } else {
      skillsSection.style.display = "none"; //! Hide section
      toggleButton.textContent = "Show Skills"; //! Change button text
    }
  }
}
//! event listener for form submission
(_a = document.getElementById("resumeForm")) === null || _a === void 0
  ? void 0
  : _a.addEventListener("submit", function (event) {
      var _a, _b;
      event.preventDefault(); //! Prevent the form from submitting and refreshing the page
      //! Event listener for the "Generate Resume" button
      (_a = document.getElementById("generateBtn")) === null || _a === void 0
        ? void 0
        : _a.addEventListener("click", () => {
            var _a;
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const contactNumber =
              document.getElementById("contactNumber").value;
            const email = document.getElementById("email").value;
            const education = document.getElementById("education").value;
            const skills = document.getElementById("skills").value;
            const workExperience =
              document.getElementById("workExperience").value;
            const languageProficiencies = document.getElementById(
              "languageProficiencies"
            ).value;
            //! Handle the Profile Photo file input
            const profilePhoto =
              (_a = document.getElementById("profilePhoto").files) === null ||
              _a === void 0
                ? void 0
                : _a[0];
            //! generated resume will be displayed here
            const resumeOutput = document.getElementById("resumeOutput");
            if (resumeOutput) {
              if (profilePhoto) {
                const reader = new FileReader();
                reader.onload = function (e) {
                  var _a;
                  //! Check if the resume output section exists and display the resume details
                  resumeOutput.innerHTML = `
          <h1>${firstName} ${lastName}</h1>
          <img src="${
            (_a = e.target) === null || _a === void 0 ? void 0 : _a.result
          }" alt="Profile Photo" style="width: 150px; height: 150px; border-radius: 50%;">
          <p><strong>Contact Number:</strong> ${contactNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h2>Education</h2>
          <p>${education}</p>
          <h2>Skills</h2>
          <p>${skills}</p>
          <h2>Work Experience</h2>
          <p>${workExperience}</p>
          <h2>Language Proficiencies</h2>
          <p>${languageProficiencies}</p>
        `;
                };
                //! Read the profile photo file as a Data URL (base64 string)
                reader.readAsDataURL(profilePhoto);
              } else {
                //! If no profile photo, generate the resume without the photo
                resumeOutput.innerHTML = `
        <h1>${firstName} ${lastName}</h1>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
        <h2>Work Experience</h2>
        <p>${workExperience}</p>
        <h2>Language Proficiencies</h2>
        <p>${languageProficiencies}</p>
      `;
              }
            }
          });
      //! Event listener for the "Reset" button
      (_b = document.getElementById("resetBtn")) === null || _b === void 0
        ? void 0
        : _b.addEventListener("click", () => {
            //! Reset the form fields to their default values
            document.getElementById("resumeForm").reset();
            //! Clear the Resume Output div
            const resumeOutput = document.getElementById("resumeOutput");
            if (resumeOutput) {
              resumeOutput.innerHTML = "";
            }
          });
    });
