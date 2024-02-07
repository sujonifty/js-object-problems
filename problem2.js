/*
### Task-2
For this object below add a property named `passenger capacity` with value 5
```js
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

```
*/
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
 car["passenger capacity"] = 5;
Object.assign(car, {'address':4})
//  console.log(car);

