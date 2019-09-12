// Return a function reference

// const init = () => {
//     let db = [];

//     const create = (element) => {
//         db.push(element);
//         return db.length;
//     }
//     return create;
// }

// const createInDb = init();

// console.log(createInDb('testing'));
// console.log(createInDb(4));
// console.log(createInDb('how long is this'));

// Expose more function references(provide an API)

// Part one: refactor`init`

const init = () => {
    let api = [];

    const create = (element) => {
        api.push(element);
        return api.length;
    }

    return create;
}

const createInApi = init();

console.log(createInApi('testing'));
console.log(createInApi(4));
console.log(createInApi('how long is this'));