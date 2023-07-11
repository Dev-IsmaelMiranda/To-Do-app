// Select the Elements
const dateElement = document.getElementById("date");

// Show todays date
const options = { weekday: "long", month: "long", day: "numeric" };
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

export default dateElement;