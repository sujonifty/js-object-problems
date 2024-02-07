let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};
for(let a in myObject){
    console.log('key:',a,'|','type:',typeof myObject[a]);
}