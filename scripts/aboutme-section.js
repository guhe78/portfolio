/**
 * Initializes the "About Me" section of the webpage by setting up the icons and text.
 * This function is called when the "About Me" section is loaded to ensure that the icons and text are properly displayed.
 */
function initAboutMeSection() {
  initAboutMeText();
}

/**
 * Initializes the "About Me" section by setting up the icons and text.
 * This function is called when the "About Me" section is loaded to ensure that the icons and text are properly displayed.
 */
function initAboutMeText() {
  const aboutMeDescriptionLocation = document.getElementById("location-icon");
  const aboutMeDescriptionCognition = document.getElementById("cognition-icon");
  const aboutMeDescriptionReleases = document.getElementById("releases-icon");

  aboutMeDescriptionLocation.innerHTML = `${icons.location_on(30)}`;
  aboutMeDescriptionCognition.innerHTML = `${icons.cognition(30)}`;
  aboutMeDescriptionReleases.innerHTML = `${icons.releases(30)}`;
}
