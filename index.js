"strict mode";

const logShoppingArray = async function () {
  const fetchedData = await fetch(
    "https://striveschool-api.herokuapp.com/api/product/",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZTBiMTJkNTI2MjAwMTViNmRjOGQiLCJpYXQiOjE2MjkyODI0ODEsImV4cCI6MTYzMDQ5MjA4MX0.KFzMXEuZKdknd6L7prl-dQh0EjsTHj4Dx-MfEdGaUuo",
      },
    }
  );

  const jsonData = await fetchedData.json();
  console.log(jsonData);
};

logShoppingArray();
