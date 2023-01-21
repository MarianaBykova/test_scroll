import React, { useEffect, useState } from 'react';
import { UserType } from '../types/typedef';
import Cards from './Cards';
/**
 * @description The Page component with cards of user's information
*/

/**
 * @constant {number} apiLimit limit of users that API has
*/
const apiLimit = 20000;

const MainPage = () => {
  /**
   * @typedef {UserType} users object to be used as a blueprint to extract user details
 */
  const [users, setUsers] = useState([]);
  /** @type {useState<number>} */
  const [currentPage, setCurrentPage] = useState(1);
  /** @type {useState<boolean>} */
  const [loading, setLoading] = useState(true);

  /**
   * trottle is a function that calls another function, "skipping" some calls at regular intervals.
   * @param {{requestCallback}} callback - The callback function (scrollHandler)
   * @param {{number}} delay - The time how often the callback function will be called
  */
  const trottle = (callback, delay) => {
    let timer = null;

    return function perform(...args) {
      if (timer) return;
      timer = setTimeout(() => {
        callback(args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    };
  };

  /**
    * scrollHandler is a function that determine scroll position.
    * If we scrolled to the end of html document we change state setLoading to true
    * Then we accessing API
  */
  const scrollHandler = () => {
    /**
     * @constant {number} screenHeight is a height of screen
    */
    const screenHeight = window.innerHeight;
    /**
     * @constant {number} documentHeight is a height of the body of the document
    */
    const documentHeight = document.body.offsetHeight;
    /**
     * @constant {number} currentPosition the number of pixels that user has scrolled
    */
    const currentPosition = window.scrollY;
    const availableHeight = documentHeight - screenHeight;

    if (currentPosition > availableHeight && users.length < apiLimit) setLoading(true);
  };

  /**
    * Here in useEffect we control scroll position
  */
  useEffect(() => {
    document.addEventListener('scroll', trottle(scrollHandler, 100));

    return () => removeEventListener('scroll', trottle(scrollHandler, 100));
  }, []);

  /**
    * Here in useEffect we get the data from API and set it to users state
  */
  useEffect(() => {
    if (loading) {
      fetch(`https://randomuser.me/api/?page=${currentPage}&results=10`)
        .then((response) => response.json())
        .then((data) => {
          setUsers((prev) => [...prev, ...data.results]);
          setCurrentPage((prev) => prev + 1);
        })
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return (
    <main className="main-page">
      <section className="main-page__cards">
        {
          users.map((obj) => <Cards key={obj.email} user={obj} />)
        }
      </section>
    </main>
  );
};

export default MainPage;
