fetch("./assets/partials/navbar.html")
  .then(response => {
      console.log(response.body);
    return response.text()
  })
  .then(data => {
      let header = document.createElement('div');
      header.id = "main-header";
      document.querySelector('body').prepend(header);
    header.innerHTML = data;
  });


fetch("./assets/partials/footer.html")
  .then(response => {
      console.log(response);
    return response.text()
  })
  .then(data => {
    document.querySelector("body").innerHTML += data;
  });
