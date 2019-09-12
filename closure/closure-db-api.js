const init = () => {
    let db = [];

    const create = (element) => {
        db.push(element);
        return db.length;
    }
    return create;
}

console.log(init()());