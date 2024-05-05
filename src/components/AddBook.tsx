import { Input, Button } from '@mui/material';
import React, { useState } from 'react';

interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
}

const AddBookForm = ({ onAddBook }: { onAddBook: (book: Book) => void}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) {
      alert('Please! Enter all information!!!');
      return;
    }

    const newBook: Book = {
      id: Math.random().toString(36).substr(2, 9), // Generate unique ID
      title,
      author,
      year:  Number(year || new Date().getFullYear()),
    };

    onAddBook(newBook);

    setTitle('');
    setAuthor('');
    setYear('');
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Title:</h3>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <h3>Author:</h3>
          <Input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <h3>Published:</h3>
          <Input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </div>
        
        <Button variant="contained" type="submit">Add Book</Button>
      </form>
    </div>
  );
};

export default AddBookForm;