function remove(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    }
}

// Usage example:
let document = {
    title: "Example Document",
    content: "This is the content of the document.",
    author: "Author Name"
};

remove(document, 'author');
console.log(document); // { title: "Example Document", content: "This is the content of the document." }
