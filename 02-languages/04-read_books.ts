interface BooksDetails {
  title: String,
  isRead: Boolean
};

const books : BooksDetails []= [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
  ];

function isBookRead (obj : any, titleToSearch : String) : Boolean {
  const book = obj.find(word => word.title == titleToSearch && word.isRead )
  return Boolean(book);
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false