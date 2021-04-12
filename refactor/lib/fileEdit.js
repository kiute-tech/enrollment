const fs = require('fs');
const request = require('request');

module.exports.writeToFile = function (fileName, url) {
    return new Promise(function (resolve, reject) {
    return request(url, (error, response, body) =>
        response.statusCode !== 200 ? reject(error) :
            fs.writeFile(fileName, body, (err) => {
                if (err) { reject(err) };
            })
        )
    });
};


module.exports.readFromFile = function (fileName) {
    return new Promise((resolve, reject) =>
    fs.readFile(fileName, 'utf-8', (err, content) =>
        err === null ? resolve(content) : reject(err))
    );
}
