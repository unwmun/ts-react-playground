export {}

interface Person {
    name: string;
    age?: number;
}

interface Developer extends Person {
    // name: string;
    // age?: number;
    skills: string[];
}

const person: Person = {
    name: '김사람',
    age: 20
}

const expert: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
}

const people: Person[] = [person, expert];