// // Role Tuple

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Foo',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'Author']
// }

enum Role {ADMIN, READ_ONLY, AUTHOR};
// enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 200}; // Valid Syntax
// enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'}; // Valid Syntax

// Role Enum
const person = {
    name: 'Foo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
}

let favoriteActivities : string[];
favoriteActivities = ['Sports'];

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN) {
    console.log("Is Admin");
}