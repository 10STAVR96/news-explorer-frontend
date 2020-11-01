import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  const { isSavedNews } = props;
  const bookmarkIcon = "bookmark-icon";
  const trashcanIcon = "trashcan-icon";

  return (
    <>
      <li className="card">
        <img className="card__image" src="https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg" alt="картинка" />
        <div className="card__button-content">
          <button className={`card__button ${(isSavedNews) ? trashcanIcon : bookmarkIcon }`} type="button"></button>
          <span className="card__button-message">{(isSavedNews) ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}</span>
        </div>
        <div className="card__text">
          <span className="card__date">2 августа, 2019</span>
          <h3 className="card__title">Национальное достояние – парки</h3>
          <p className="card__paragraph">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
          <a className="card__source" href="*">Лента.ру</a>
        </div>
        {(isSavedNews) ? <span className="card__keyword">Природа</span> : ''}
      </li>
    </>
  );
}

export default NewsCard;