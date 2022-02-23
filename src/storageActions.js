export const allStorage = () => {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
}

export const getLogedInUser = () => {
    return JSON.parse(localStorage.getItem('logedInUser'))
}
export const signUpUser = (firstName, lastName, email, password) => {
    console.log('unutar local storage sign up', firstName, lastName, email, password)
    localStorage.setItem('logedInUser', JSON.stringify({
        email, password
    }))
    localStorage.setItem(`user${numOfLogedInUsers()}`, JSON.stringify({
        firstName, lastName, email, password
    }))
}

export const numOfLogedInUsers = () => {
    return localStorage.length
}

export const logInUser = (email, password) => {
    localStorage.setItem('logedInUser', JSON.stringify({
        email, password
    }))
}