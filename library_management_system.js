class Book {
        #isbn
    constructor (title, author, isbn, available = true) {
        this.title = title;
        this.author = author;
        this.#isbn = isbn;
        this.available = available;
    }

    get isbn(){
        return this.#isbn
    }

    borrowBook () {
        if (this.available) {
            console.log('the book is available')
           return this.available = false;
        }

        console.log ('this book is not available')
    }

    returnBook () {
        console.log ('the book as been returned and is now available')
       return this.available = true;
       
    }
}


class Library {

    
    constructor (book = []) {
       this.books = book
    }

    addBook(book) {
        
         this.books.push(book);
         console.log(`book ${book.title} was added to the library`);
         
       
    }

    removeBook(isbn) {
        
        const removedTheBookWithISBN = this.books.filter((book)=> book.isbn !== isbn);
            console.log(`book with isbn ${isbn} removed`)
            //console.log(removedTheBookWithISBN)
            return this.books = removedTheBookWithISBN;
        
    
         

    } 

    findBookByTitle(title) {
        	const book = this.books.find((book) => book.title.toLowerCase() === title.toLowerCase());

            // first check if the book exist
            if (book && book !== undefined || null) {
                        console.log(book)
                        return console.log(`The book titled ${title} was found`)
                
            } else { console.log(`The book titled ${title} can not be found`)};
    
  }


}


class DigitalLibrary extends Library {
            constructor(books) {
                    super(books)
            }
    
        downloadBook(isbn) {
            const book = this.books.find((book) => book.isbn === isbn);
                // first check if the book exist
            if (book && book !== undefined || null) { 
                // if it exist, check for it availability
                if (book.available) {
                console.log(`Downloading "${book.title}"...`);
             } else  {
                console.log(`The book "${book.title}" is currently not available for download.`);
             } }
             else {
                console.log(`Book with ISBN ${isbn} not found.`);
             }

        } }



















// test cases

const book1 = new Book('The Great', 'Scott gerald', '12345');
const book2 = new Book('arne slot', 'George', '67890');
 book1.borrowBook();
 book1.returnBook()
 const library = new Library()
 library.addBook(book1);
 library.addBook(book2);
 book1.borrowBook();
 console.log(library.books);
 book1.borrowBook();
 book1.returnBook()
 library.removeBook('67890');
 console.log(library.books);
 library.findBookByTitle('the great');
 library.findBookByTitle('arne slot');
 const digitalLibrary = new DigitalLibrary();
 digitalLibrary.addBook(book1);
 digitalLibrary.addBook(book2);
 digitalLibrary.downloadBook('12345');
 digitalLibrary.removeBook('67890')
 digitalLibrary.downloadBook('67890');
 console.log(digitalLibrary.books)
 digitalLibrary.addBook(book2);
 digitalLibrary.downloadBook('67891');
 console.log(digitalLibrary.books);
 console.log(library.books)









