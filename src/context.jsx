import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { AppContext } from './contextApp';

const URL = 'https://openlibrary.org/search.json?title=';

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('the lost world');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState('');

  const fetchBooks = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(`${URL}${searchTerm}`);
      const data = await response.json();
      const { docs } = data;

      //----------//
      if (docs) {
        const newBook = docs.slice(0, 20).map(singleBook => {
          const { key, author_name, cover_i, edition_count, first_publish_year, title } =
            singleBook;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setBooks(newBook);
        if (newBook.length > 1) {
          setResultTitle('Your Search Result');
        } else {
          setResultTitle('No Search Result Found!');
        }
      } else {
        setBooks([]);
        setResultTitle('No Search Result Found!');
      }

      setLoading(false);
      //-----------//
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks]);

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

AppProvider.propTypes = {
  children: PropTypes.object,
};
