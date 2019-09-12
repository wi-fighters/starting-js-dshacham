// const init = () => {
//     let db = [];

//     const create = (element) => {
//         db.push(element);
//         return db.length;
//     }
//     return create;
// }

const init = () => {
    let db = [];

    const create = (element) => {
        db.push(element);
        return db.length;
    }
    return create;
}

const createInDb = init();

console.log(createInDb('testing'));
console.log(createInDb(4));
console.log(createInDb('how long is this'));