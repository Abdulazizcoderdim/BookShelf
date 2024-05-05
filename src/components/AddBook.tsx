import { Input, Button } from '@mui/material';
import React, { useState } from 'react';
import './AddBook.css'

interface Book {
    id: string;
    title: string;
    author: string;
    year: number;
    image: null | string;
}

const AddBookForm = ({ onAddBook}: { onAddBook: (book: Book) => void}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };


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
      image: imagePreview,
      year:  Number(year || new Date().getFullYear()),
    };

    onAddBook(newBook);

    setTitle('');
    setAuthor('');
    setYear('');
    setImagePreview(null);
  };

  return (
    <div className='add-book'>
      <h2 className='add-book__title'>Add New Book</h2>
      <form className='add-book__form' onSubmit={handleSubmit}>
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
        <div >
          <h3>Image:</h3>
          <input className='addbook__img3'  placeholder='Enter image' type="file" accept="image/*" onChange={handleImageChange} />
          {imagePreview && <img src={imagePreview} alt="Book cover" style={{ maxWidth: '100px' }} />}
        </div> 
        <Button className='add-book__button' variant="contained" type="submit">Add Book</Button>
      </form>
    </div>
  );
};

export default AddBookForm;