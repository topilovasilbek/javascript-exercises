let token = null;

fetch("https://houzing-app.herokuapp.com/api/public/auth/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    email: "okenjaev2192@gmail.com",
    password: "12345",
  }),
})
  .then((res) => res.json())
  .then((res) => {
    token = res.authenticationToken;
  });

// Fires when user submit the form
function handleSubmit(e) {
  e.preventDefault();
  console.log(e);
  /* const formData = new FormData(this);
  const data = Object.fromEntries([...formData.entries()]);
  console.log(data); */
  let obj = {
    address: "string",
    attachments: [
      {
        imgPath: "string",
      },
    ],
    categoryId: 0,
    city: "string",
    componentsDto: {
      additional: "string",
      airCondition: true,
      courtyard: true,
      furniture: true,
      gasStove: true,
      internet: true,
      tv: true,
    },
    country: "string",
    description: "string",
    homeAmenitiesDto: {
      additional: "string",
      busStop: true,
      garden: true,
      market: true,
      park: true,
      parking: true,
      school: true,
      stadium: true,
      subway: true,
      superMarket: true,
    },
    houseDetails: {
      area: 0,
      bath: 0,
      beds: 0,
      garage: 0,
      room: 2,
      yearBuilt: 2000,
    },
    locations: {
      latitude: 0,
      longitude: 0,
    },
    name: "string",
    price: 0,
    region: "string",
    salePrice: 0,
    status: true,
    zipCode: "string",
  };
  fetch("https://houzing-app.herokuapp.com/api/v1/houses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(obj),
  }).then((res) => console.log(res));
}

form.onsubmit = handleSubmit;
