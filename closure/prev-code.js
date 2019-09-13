// // Return a function reference

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
    const db = [];

    const create = (element) => {
        db.push(element);
        return 'New element added! The new length of the array is ' + db.length + '.';
    };

    const read = () => {
        return [...db];
    };

    const update = (index, newElement) => {
        if (index >= 0 && index <= (db.length - 1)) {
            db[index] = newElement;
        } else {
            return create(newElement);
        }

        return db;
    };

    const remove = (deleteIndex) => {
        if (deleteIndex >= 0 && deleteIndex <= (db.length - 1)) {
            db.splice(deleteIndex, 1);
        } else {
            return 'Error';
        }

        return db;
    };

    // api.push(create, read, update, remove); // reference to create
    const api = [create, read, update, remove];

    return api;
}

const apiFuncs = init();
const createItem = apiFuncs[0];
const readItem = apiFuncs[1];
const updateItem = apiFuncs[2];
const removeItem = apiFuncs[3];

console.log(createItem('hi'));
console.log(createItem('wow'));
console.log(readItem());
console.log(updateItem(1, 'inside'));
console.log(updateItem(2, 'whatever'));
console.log(readItem());
console.log(removeItem(2));
// apiFuncs = [ create ]
// apiFuncs[0] = create

// create('testing')


// console.log(apiFuncs[0]('testing'));
// console.log(apiFuncs[0]('testing'));
// console.log(apiFuncs[0]('testing'));
// console.log(apiFuncs(4));
// console.log(apiFuncs('how long is this'));

// Part two: add`read`