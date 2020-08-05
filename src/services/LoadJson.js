let data = require('./NewsCarouseleData.json');

export function getNewsData() {

    const promise = new Promise((resolve, rejected) => {
        resolve(data);
    });

    return promise;
}