const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
];

export function addUser(user) {
    if (!validateUser(user)) {
        throw new Error("Invalid user object");
    }
    users.push(user);
}

export function getUsers() {
    return users;
}

function validateUser(user) {
    if (user?.name && user?.age && !isNaN(user.age)) {
        if (typeof user.name !== 'string' || typeof user.age !== 'number') {
            return false;
        }
        if (user.age < 0) {
            return false;
        }
        return true;
    }
    return false;
}