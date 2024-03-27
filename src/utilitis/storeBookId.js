const getStoredBooksId = ()=>{
    const storedBooksIds=localStorage.getItem('booksIds');
    if(storedBooksIds){
        return JSON.parse(storedBooksIds);
    }
    return [];
}


const saveBooksIds=(id)=>{
    const storedBooksId =getStoredBooksId();
    const exists = storedBooksId.find(bookId => bookId === id);
    if(!exists){
        storedBooksId.push(id);
        localStorage.setItem('booksIds',JSON.stringify(storedBooksId))
    }
}

export {getStoredBooksId,saveBooksIds}