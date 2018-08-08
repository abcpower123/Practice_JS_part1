//define class

//book class
class Book{
	constructor(title, genre,author) {
    this.title = title;
    this.genre = genre;
    this.author=author;
    this.isRead=false;
    this.readDate=null;
  }
  
}
//BookList class
class BookList{
	
	constructor() {
    	
    		this.arrayOfBook=[];
    		this.bookRead=0;
    		this.bookUnRead=0;

    		this.lastBook=null;
    		this.currentBook=null;
    		this.nextBook=this.arrayOfBook[0];
  }

  addBook(book){
  	//check book
  	if (book instanceof Book==false) {
  		console.log("Can not add an non-book object to list!");
  		return;
  	}
  	//add book to list
  	this.arrayOfBook.push(book);

  	if (this.arrayOfBook.length===1) {this.currentBook=this.arrayOfBook[0];}

  	if (this.nextBook==null) 
  		this.findNextBook();
  	
 }
finishCurrentBook(){
	if (this.currentBook !==null) {
		this.currentBook.isRead=true;
		this.currentBook.readDate= new Date(Date.now());
		this.lastBook=this.currentBook;
		if (this.nextBook!= null) {
		this.currentBook=this.nextBook;	
		}
		else {
			this.findNextBook();
			this.currentBook=this.nextBook;	
		}
		
		this.findNextBook();
	}
	
}

//find a non-read book
findNextBook(){
		let flag=true;
		for(const book of this.arrayOfBook){
			if(book.isRead==false&&book!=this.currentBook){
				this.nextBook=book;
				flag=false;
				break;
			}
		}
		if(flag){
			this.nextBook=null;
			
		}
}
//some method for test
printBook(book){
	if(book!= null)
	console.log(book);
}
printAllBook(){
	console.log("------------------");
	for(const book of this.arrayOfBook){
		this.printBook(book);
	}
	console.log("------------------");
}
}
//create instance and testting
const book1=new Book('Book 1','Novel','Name 1');
const book2=new Book('Book 2','Manga','Name 2');
const book3=new Book('Book 3','Dictionary','Name 3');

const bookList=new BookList();
bookList.addBook(book1);
bookList.addBook(book2);
bookList.addBook(book3);
console.log("No book is read:");
bookList.printAllBook(); 

console.log("Finish book1 and book2:");
bookList.finishCurrentBook();
bookList.finishCurrentBook();
bookList.printAllBook();

console.log("Finish book3:");
bookList.finishCurrentBook();
bookList.printAllBook();
