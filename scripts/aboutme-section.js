function initAboutMeSection() {
  initAboutMeText();
}

function initAboutMeText() {
  const aboutMeDescriptionLocation = document.getElementById("location-icon");
  const aboutMeDescriptionCognition = document.getElementById("cognition-icon");
  const aboutMeDescriptionReleases = document.getElementById("releases-icon");

  aboutMeDescriptionLocation.innerHTML = `${icons.location_on(30)}`;
  aboutMeDescriptionCognition.innerHTML = `${icons.cognition(30)}`;
  aboutMeDescriptionReleases.innerHTML = `${icons.releases(30)}`;
}
