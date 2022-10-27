console.log("************** DELIVERABLE 04 *********************");
interface library  {
    title:string;
    isRead:boolean;
};

function isBookRead(books:library[], titleToSearch:string) : boolean{
    // Implementation here
    return books.filter(book => book.title === titleToSearch && book.isRead).length > 0;
}

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false