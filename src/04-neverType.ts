const withoutEnd = () => {
    while (true) {
        console.log('never ending')
    }
}

const fail = (message: string) => {
    throw new Error(message);
}

const example = (input: unknown) => {
    if (typeof input === 'string') {
        return 'it is a string'
    } else if (Array.isArray(input)) {
        return 'it is an array'
    }
    return fail('not match');
}

console.log(example('hello'))
console.log(example([1, 2, 3]))
console.log(example(1))
console.log(example('Hola despues del error'))
