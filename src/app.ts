// Data Types

function dataTypes() {
    // Нельзя вместо одного типа задать другой тип данных, кроме типа any
    const str: string = 'Hello';
    const num: number = 15;
    const bool: boolean = true;
    const n: null = null;
    const u: undefined = undefined;
    const obj: object = {};
    const sym: symbol = Symbol('id');
    const bgi: bigint = 9999n;

    let a: any = '';
    a = 10;
    console.log(typeof a);

    //Тип array

    //После двоеточия ставиться тип для значений массива (лучше использовать вот такой вариант записи)
    const arr: number[] = [2, 4, 6, 7];
    const arr1: boolean[] = [true, false];
    const arr2: string[] = ['Hello', 'Bye'];

    //Также пишут еще по другому: такой пример абсолютно равен записи arr, arr1, arr2
    const mass: Array<number> = [4, 5, 6];
    const mass1: Array<boolean> = [true, false];
    const mass2: Array<string> = ['Hello', 'Bye'];

    const newArr: number[] = [...arr, 9];
    console.log(newArr);

    // Можно добавить несколько и более значений:
    const ex: (number | boolean)[] = [6, 7, true, false];

    //Если поставить readonly, то массив нельзя будет мутировать:
    // Readonly для того, чтобы просто читать массив (его изменить)
    const notMut: readonly (
        number |
        string |
        boolean
    )[] = [5, 'Hi', true];

    // В типе Tuple можно хранить порядок типов:
    // Типы значений указываются по порядку после двоеточия
    const tup: [number, string] = [3, 'Hello'];

    // Type object

    //Object type with any:
    const user: any = {
        name: 'Yauhen',
        age: 30
    }

    //Define object type:
    const user1: { name: string, age: number } = {
        name: 'Yauhen',
        age: 30
    }

    //Using Type for objects structure:
    type Person = { name: string, age: number, nickName?: string, getPass?: string };

    const human: Person = {
        name: 'Max',
        age: 30,
        nickName: 'Iogga'
    }

    const admin: Person = {
        name: 'Alex',
        age: 20,
        getPass: 'password'
    }
}


//Functions

function functions() {
    const createPasswoed = (name: string, age: number | string): void => {
        console.log(`${name} ${age}`);
    }

    createPasswoed('Name', 30);
    createPasswoed('Name', '30');

    //Function with optional argument "age"
    const createUser = (name: string = 'Max', age?: number | string): void => {
        age === undefined ? age = '' : age;
        console.log(`${name} ${age}`);
    }

    createUser('Max');

    //Rest type
    const createSkills = (name: string, ...skills: string[]): void => {
        console.log(`I'm ${name}, my skills: ${skills}`);
    }

    createSkills('Nikita', 'programming', 'cook', 'play hockey');

    //Write the return type
    const sum = (a: number, b: number): number => a + b;
    console.log(sum(7, 3));

    //Describe function type:
    let myFunc: (firstArg: string) => void; // If write any type, will be Error

    const oldFunc = (name: string): void => {
        console.log(name);
    }

    myFunc = oldFunc;
    myFunc('Nick');
}