import React from 'react';
import { UserType } from '../types/typedef';

/**
 * @description This is a card item component with an information about person.
 */

/**
 * @typedef OuterProps
 * @property {UserType} user
 *
*/

/** @param {OuterProps} user */
const Cards = ({ user }) => {
  if (!user) return <div>Загрузка ...</div>;

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content-info">
          <img src={user.picture.medium} alt="avatar" />
          <h4 className="title">{Object.values(user.name).slice(1).join(' ')}</h4>
        </div>
        <span>{user.email}</span>
      </div>
    </div>
  );
};

export default Cards;
