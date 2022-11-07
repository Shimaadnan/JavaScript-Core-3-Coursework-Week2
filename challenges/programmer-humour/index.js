//Retrieve the JSON
fetch("https://xkcd.now.sh/?comic=latest")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((headlines) => {
    let image=document.createElement('img')
    let container=document.getElementById('container')
    container.appendChild(image)
    image.src=headlines.img
    
  })
  // If something goes wrong
  .catch((error) => console.log(error));
