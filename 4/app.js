const arr = ["name", "John", "lastname", "Black", "age", "23"];
const obj = {};

for (let i = 0; i < arr.length; i += 2) {
  obj[arr[i]] = arr[i+1];
}

console.log(obj); 