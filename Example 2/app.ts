

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Foo',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'Author']
}

let favoriteActivities : string[];
favoriteActivities = ['Sports'];

console.log(person);

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}