import { useEffect, useState } from 'react';
import { BookProps } from './BookProps';
import './style.css';

const Book = (props: BookProps) => {
  const { closeDelay, openDelay, textPageLeft, textPageRight } = props;

  const [openStyle, setOpenStyle] = useState<string>('');

  useEffect(() => {
    const delay = openStyle === '' ? openDelay : closeDelay;

    const openInterval = setInterval(() => {
      openStyle === '' ? setOpenStyle('open') : setOpenStyle('');
    }, delay);

    return () => {
      clearInterval(openInterval);
    };
  }, [openStyle, openDelay, closeDelay]);

  return (
    <>
      <div className={`book ${openStyle}`}>
        <div className='back'></div>
        <div className='pages page6'>
          <p>{textPageRight}</p>
        </div>
        <div className='pages page5'>
          <p>{textPageLeft}</p>
        </div>
        <div className='pages page4'></div>
        <div className='pages page3'></div>
        <div className='pages page2'></div>
        <div className='pages page1'></div>
        <div className='front'>
          <h1 className=' title'>Error</h1>
        </div>
      </div>
    </>
  );
};

export default Book;
