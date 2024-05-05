import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    image: string | null;
    deleteBook?: React.ReactNode;
}

const AllBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    // Retrieve books from localStorage on component mount
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div style={{marginTop: "20px", display: 'flex', flexDirection: 'column', gap: '20px'}}>
      <h1>Bookshelf</h1>
      <div className="bookShelf__books">
          {books.map((book) => (
            <div key={book.id} className="bookShelf__book">
                <div className="bookShelf__book1">
                  <div className="bookShelf__img_div">
                  {book.image && <img src={book.image} className="bookShelf__img" alt="Book cover"  />}
                  </div>
                  <div className="bookShelf__book__text">
                    <h2><span style={{fontWeight: 700, fontFamily: "cursive"}}>Title: </span>{book.title}</h2>
                    <h2><span style={{fontWeight: 700, fontFamily: "cursive"}}>Author: </span> {book.author}</h2>
                    <h2><span style={{fontWeight: 700, fontFamily: "cursive"}}>Published: </span>{book.year}</h2>
                  </div>
                </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default AllBooks;
