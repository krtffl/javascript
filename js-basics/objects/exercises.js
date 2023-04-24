// address object
let address = {
  street: 'street',
  city: 'city',
  zipCode: 'zipCode',
};

const showAddress = (address) => {
  for (let key in address) console.log(key, address[key]);
};

// factory and constructor

const createAddress = (street, city, zipCode) => ({
  street,
  city,
  zipCode,
});

const Address = (street, city, zipCode) => {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
};

// object equality
const areEqual = (add1, add2) => {
  for (let key in Object.keys(add1)) {
    if (add1[key] !== add2[key]) return false;
  }

  return true;
};
