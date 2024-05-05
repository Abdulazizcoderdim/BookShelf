import React, { useState, useEffect } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Container, Input } from "@mui/material";
import AddBookForm from "../components/AddBook";

interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  deleteBook?: React.ReactNode
}

const BooksShelf = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [editingBookId, setEditingBookId] = useState<string | null>(null);
    const [editedBook, setEditedBook] = useState<Book | null>(null);
  
    useEffect(() => {
      const storedBooks = JSON.parse(localStorage.getItem('books') || '[]') as Book[];
      setBooks(storedBooks);
    }, []);
  
    const handleAddBook = (newBook: Book) => {
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      localStorage.setItem('books', JSON.stringify(updatedBooks));
    };
  
    const handleEditBook = (id: string) => {
      const bookToEdit = books.find(book => book.id === id);
      if (bookToEdit) {
        setEditingBookId(id);
        setEditedBook({ ...bookToEdit });
      }
    };
  
    const handleSaveEdit = () => {
      if (editedBook) {
        const updatedBooks = books.map(book =>
          book.id === editedBook.id ? { ...editedBook } : book
        );
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
        setEditingBookId(null);
        setEditedBook(null);
      }
    };
  
    const handleCancelEdit = () => {
      setEditingBookId(null);
      setEditedBook(null);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (editedBook) {
        setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
      }
    };
  
    const handleDeleteBook =(id: string) => {
      const updateBook = books.filter((book) => book.id !== id);
      setBooks(updateBook);
      localStorage.setItem('books', JSON.stringify(updateBook));
    }



  return (
    <Container>
      <AddBookForm onAddBook={handleAddBook} />
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {editingBookId === book.id ? (
              <div>
                <Input
                  type="text"
                  name="title"
                  value={editedBook?.title}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="author"
                  value={editedBook?.author}
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  name="year"
                  value={editedBook?.year}
                  onChange={handleInputChange}
                />
                <Button variant="contained" onClick={handleSaveEdit}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </div>
            ) : (
              <div>
                {book.title} by {book.author}
                <Button
                  variant="outlined"
                  onClick={() => handleEditBook(book.id)}
                >
                  <Edit />
                </Button>
                <Button
                  variant="outlined"
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  onClick={() => handleDeleteBook(book.id)}
                >
                  <Delete />
                </Button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default BooksShelf;