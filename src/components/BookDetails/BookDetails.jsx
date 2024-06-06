import './BookDetails.css';
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import { FaArrowLeft } from 'react-icons/fa';

const URL = 'https://openlibrary.org/works/';
const BookDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);

  useEffect(() => {
    setLoading(true);
    const getBookDetails = async () => {
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          console.log(data);
          const { title, description, covers, subject_places, subjects, subject_times } =
            data;

          const newBookDetails = {
            title: title,
            description: description ? description.value : 'No description found!',
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
            subject_places: subject_places
              ? subject_places.join(', ')
              : 'No subject places found!',
            subject_times: subject_times
              ? subject_times.join(', ')
              : 'No subject time found!',
            subjects: subjects ? subjects.join(', ') : 'No subjectes are found!',
          };
          setBook(newBookDetails);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    getBookDetails();
  }, [id]);
  if (loading) return <Loading />;

  return (
    <section className='book-details'>
      <div className='container'>
        <button
          type='button'
          className='flex justify-center back-btn'
          onClick={() => navigate('/book')}>
          <FaArrowLeft size={22} />
          <span className='fs-18 fw-6'>Go back</span>
        </button>

        <div className='book_details_content grid'>
          <div className='book_details_img'>
            <img src={book?.cover_img} alt='Cover image' />
          </div>
          <div className='book_details_info'>
            <div className='book_details_item title'>
              <span className='fw-6 fs-24'>{book?.title}</span>
            </div>
            <div className='book_details_item description'>
              <span className='fw-6'>Description:&nbsp;</span>
              <span>{book?.description}</span>
            </div>
            <div className='book_details_item'>
              <span className='fw-6'>Subject Places:&nbsp;</span>
              <span className='text-italic'>{book?.subject_places}</span>
            </div>
            <div className='book_details_item'>
              <span className='fw-6'>Subject Times:&nbsp;</span>
              <span className='text-italic'>{book?.subject_times}</span>
            </div>
            <div className='book_details_item'>
              <span className='fw-6'>Subjects:&nbsp;</span>
              <span className='text-italic'>{book?.subjects}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
