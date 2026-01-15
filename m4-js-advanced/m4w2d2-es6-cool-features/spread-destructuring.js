// valori
let num1 = 5;
let num2 = num1;
num1 = 7;
// console.log(num2);

// oggetti
let obj1 = {
    name: 'Gigi',
    age: 30,
};
obj1.name = 'Pinco';
let obj2 = { ...obj1 };
// console.log(obj2.name);
// console.log('obj1', obj1);
// console.log('obj2', obj2);

// sub oggetti
let employee1 = {
    name: 'Gigi',
    age: 30,
    experience: [
        {
            company: 'Google',
            role: 'Manager',
            years: 3,
        },
        {
            company: 'Facebook',
            role: 'Developer',
            years: 5,
        },
    ],
};

console.log('esempio 1');
let employee2 = { ...employee1 };
employee1.name = 'Pinco';
employee1.experience.push({
    company: 'Microsoft',
    role: 'Developer',
    years: 1,
});
console.log(employee1);
console.log(employee2);

console.log('esempio 2');
let employee10 = {
    name: 'Gigi',
    age: 30,
    experience: [
        {
            company: 'Google',
            role: 'Manager',
            years: 3,
        },
        {
            company: 'Facebook',
            role: 'Developer',
            years: 5,
        },
    ],
};
let employee3 = { ...employee10 };
employee3.experience = [...employee10.experience];
employee10.name = 'Pinco';
employee10.experience.push({
    company: 'Microsoft',
    role: 'Developer',
    years: 1,
});
employee10.experience[0].company = 'Epicode';
console.log(employee10);
console.log(employee3);

console.log('esempio 3');
let employee100 = {
    name: 'Gigi',
    age: 30,
    experience: [
        {
            company: 'Google',
            role: 'Manager',
            years: 3,
        },
        {
            company: 'Facebook',
            role: 'Developer',
            years: 5,
        },
    ],
};
const employee4 = structuredClone(employee100);
employee100.name = 'Pinco';
employee100.experience.push({
    company: 'Microsoft',
    role: 'Developer',
    years: 1,
});
employee100.experience[1].company = 'Buuuuuuu';
console.log(employee100);
console.log(employee4);
