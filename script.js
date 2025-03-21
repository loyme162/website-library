document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "Introduction to Programming", author: "John Doe", link: "#" },
        { title: "Web Development Basics", author: "Jane Smith", link: "#" },
        { title: "Data Science 101", author: "Emily Johnson", link: "#" }
    ];

    const bookList = document.getElementById("book-list");

    books.forEach(book => {
        let bookItem = document.createElement("div");
        bookItem.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p><a href="${book.link}">Read</a>`;
        bookList.appendChild(bookItem);
    });
});
