const myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-cpj3dkrle27lc6e-io");
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const silverPriceContainer = document.querySelector("#silver-price");

  fetch("https://www.goldapi.io/api/XAG/USD/20230212", requestOptions)
    .then(response => response.text())
    .then(result => {
      silverPriceContainer.innerHTML = result;
    })
    .catch(error => {
      silverPriceContainer.innerHTML = "Unable to fetch silver price data";
      console.error(error);
    });
