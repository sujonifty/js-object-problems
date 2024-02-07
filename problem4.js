/*
### Task-4

Count the `number of properties`.

**Input:**
<br>
```js
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
```
**Output:**

<br>

    4

---
*/
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count =0;
for(let key in student){
    console.log(key);
    count++
    
}
console.log(count);