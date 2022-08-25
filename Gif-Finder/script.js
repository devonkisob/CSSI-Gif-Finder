const myKey = "VkYrtSnPPYuWYTICd9l1e0KPH8mP8Z2h";
const limit = 10;

console.log("Script running");

// Helper function - gets a random integer up to (but not including) the maximum
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// Capture the three major foci of user interaction in variables.
const submitButton = document.querySelector("#submit");
const queryField = document.querySelector("#search");
const imageHolderDiv = document.querySelector("#imageholder");



submitButton.addEventListener("click", async (e) => {
  const topic = queryField.value;
  console.log(topic);

  const myQuery = `https://api.giphy.com/v1/gifs/search?api_key=${myKey}&q=${topic}`
  console.log(myQuery);

  const response = await fetch(myQuery);
  console.log(response);

  const json = await response.json();
  console.log(json);

  let i = getRandomInt(json.data.length);
  if (i > limit) {
    i = 0;
  }

  const imgurl = json.data[i].images.downsized.url;
  const imgwidth = json.data[i].images.downsized.width;
  const imglength = json.data[i].images.downsized.height;

  const imgTag = `<img src="${imgurl}" width="${imgwidth}" length="${imglength}"/>`
  
  imageHolderDiv.innerHTML = imgTag + imageHolderDiv.innerHTML;
});

