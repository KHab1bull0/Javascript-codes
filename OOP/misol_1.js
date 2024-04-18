

class BookList{
    constructor(){
        this.books = []
        this.favoriteBook = ''
    }

    addBook(title, author){
        this.books.push({title, author})
    }

    setFavoriteBook(title){
        this.favoriteBook = title
    }

    getBookList(){
        for(let i = 0; i < this.books.length; i++){
            console.log(`Kitob nomi: ${this.books[i].title}   Muallif: ${this.books[i].author}`)
        }
    }

    getFavoriteBook(){
        console.log(this.favoriteBook)
    }
}

let booklist = new BookList()

booklist.setFavoriteBook('focus')
console.log(booklist.favoriteBook)

booklist.addBook('Bolalik', 'Tohir Malik')
booklist.addBook('seriq dev', 'Hudoyberdi')
booklist.addBook('iymon', 'muhammad sodiq')

booklist.getBookList()
booklist.getFavoriteBook()