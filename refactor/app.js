let Koa = require('koa');
let app = new Koa();

let router = require('koa-route');
const { execSync } = require('child_process');
const { writeToFile, readFromFile } = require('./lib/fileEdit');


var db = {
    nicolas: { 'name': 'nicolas', 'url': 'https://fr.wikipedia.org/wiki/Nicolas_Cage', 'kind': ['humain', 'actor'] },
    poulet: { 'name': 'poulet', 'url': 'https://fr.wikipedia.org/wiki/Poulet', 'kind': ['basic_food', 'prestigious_animal'] },
    dinde: { 'name': 'dinde', 'url': 'https://fr.wikipedia.org/wiki/Dinde', 'kind': ['basic_food','prestigious_animal'] },
    steak: { 'name': 'steak',  url: 'https://fr.wikipedia.org/wiki/Steak', 'kind': ['basic_food'] },
    malcom: { 'name': 'malcom',  url: 'https://fr.wikipedia.org/wiki/Malcolm_X', 'kind': ['humain'] },
    simon: { 'name': 'simon', url: 'https://fr.wikipedia.org/wiki/Simon_Sinek', 'kind': ['speaker', 'humain'] },
};

var scrap = {
    list: function(ctx, list) {
        var names = Object.keys(db);
        var jsonnames =[];
        for (i = 0; i < names.length;i++) {
            jsonnames[i] = db[names[i]];
        } 
        ctx.body = jsonnames
    }
};
    
app.use(router.get('/getList', scrap.list));
app.use(router.get('/showName/:name', function(ctx, name) {
        const scrap = db[name];
        ctx.body = scrap.name + ' url is ' + scrap.url;
}));


app.use(router.get('/scrap_and_get_into_file/:name', function (ctx, name) {
    switch (name) {
        case 'nicolas':
            execSync('echo "" > nicolas.txt');
            writeToFile('nicolas.txt', db[name].url);
            readFromFile('nicolas.txt')
                .then(function (stream) {
                    ctx.body = `output is: ${stream}`;
                });
            break;
        case 'poulet':
            execSync('echo "" > poulet.txt');
            writeToFile('poulet.txt', db[name].url);
            readFromFile('poulet.txt')
            .then(function (stream) {
                ctx.body = `output is: ${stream}`;
            });
            break;
        case 'dinde':
            execSync('echo "" > dinde.txt');
            writeToFile('dinde.txt', db[name].url);
            readFromFile('dinde.txt')
            .then(function (stream) {
                ctx.body = `output is: ${stream}`;
            });
            break;
        case 'simon':
            execSync('echo "" > simon.txt');
            writeToFile('simon.txt', db[name].url);
            readFromFile('simon.txt')
            .then(function (stream) {
                ctx.body = `output is: ${stream}`;
            });
            break;
    }
    
}));

app.use(router.get('/kind_regroup/:kind', function (ctx, kind) {
    var obj = Object.values(db);
    var kinds =[];
        for (i = 0; i < obj.length;i++) {
            for (j = 0; j < obj[i].kind.length; j++) {
                if (obj[i].kind[j] == kind) {
                    kinds[i+j] = obj[i].name;
                }
            }
        }
    ctx.body = kinds
}));

app.listen(3000);