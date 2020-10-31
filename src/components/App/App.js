import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import FormValidator from '../../utils/formValidator';
import { popupWithForm } from '../../utils/utils';

function App() {
  const [isPopupWithFormOpened, setIsPopupWithFormOpened] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);  //менять значения для проверки работы авторизованного пользователя
  const [successRegistr, setSuccessRegistr] = React.useState(true);

  function handleLinkToLogin() {
    setSuccessRegistr(false);
  }

  function handleLoginPopup() {
    setIsPopupWithFormOpened(true);
  }

  function clearErrors() {
    if (!successRegistr) {
      const popupWithForm = document.querySelector('#popupWithForm');
      const inputErrorList = Array.from(popupWithForm.querySelectorAll('.popup__input-error'));
      const inputList = Array.from(popupWithForm.querySelectorAll('.popup__input'));
      const submitError = popupWithForm.querySelector('.popup__submit-error');
      const buttonSubmit = popupWithForm.querySelector('.popup__submit');

      inputErrorList.forEach((inputError) => inputError.classList.remove('popup__input-error_visible'));
      inputList.forEach((input) => {
        input.classList.remove('popup__input_type_error');
        input.value = '';
      });
      submitError.classList.remove('popup__submit-error_visible');
      buttonSubmit.classList.remove('popup__submit_disabled');
    }
  }

  function closeAllPopups() {
    setIsPopupWithFormOpened(false);
    setTimeout(() => clearErrors(), 500); //задержка чтобы мы не видели смену стилей
  }

  React.useEffect(() => {
    const formProfileValidation = new FormValidator(popupWithForm, document.querySelector('#popupWithForm'));
    formProfileValidation.enableValidation();
  }, []);

  return (
    <>
      <Switch>
        <Route path="/saved-news">
          <Header 
            isSavedNews={true}
            handleLoginPopup={handleLoginPopup}
            loggedIn={loggedIn}
            isPopupOpened={isPopupWithFormOpened} 
          />
          <SavedNews isSavedNews={true} />
        </Route>
        <Route path="/">
          <Header 
            handleLoginPopup={handleLoginPopup} 
            loggedIn={loggedIn} 
            isPopupOpened={isPopupWithFormOpened} 
          />
          <Main />
          <PopupWithForm 
            isOpen={isPopupWithFormOpened}
            onClose={closeAllPopups}
            success={successRegistr}
            linkToLogin={handleLinkToLogin}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
