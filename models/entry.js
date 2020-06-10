const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'entry.json'
);

const getEntryFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Entry {
    constructor(title, imageUrl, entry) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.entry = entry;
    }

    save() {
        this.id = Math.random().toString();
        getEntryFromFile(entries => {
            entries.push(this);
            fs.writeFile(p, JSON.stringify(entries), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getEntryFromFile(cb);
    }

    static findById(id, cb) {
        getEntryFromFile(entries => {
            const entry = entries.find(e => e.id === id);
            cb(entry);
        });
    }
};
