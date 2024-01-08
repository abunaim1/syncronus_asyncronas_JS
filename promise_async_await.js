const getData = new Promise(function (resolve, reject) {
  return resolve(20);
});

// getData.then((data) => console.log(data));

const getReject = new Promise(function (resolve, reject) {
  return reject("NO Data");
});

// getReject.then((data) => console.log(data)).catch((err) => console.log(err));

fetch("https://fakestoreapi.com/products?sort=desc").then((res) => res.json());
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// use asyncronus way -- to write fetch
const loadData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products?sort=desc");
    const data = await response.json();
    console.log(data);
  } catch {
    (err) => {
      console.log(err);
    };
  }
};
