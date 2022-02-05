import './sass/main.scss';



(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-location-open]'),
      closeModalBtn: document.querySelector('[data-location-close]'),
      modal: document.querySelector('[data-location]'),
      modald: document.querySelector('[data-locationd]'),
      
      
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modald.classList.toggle('scroll');
      let musik = document.querySelector('.muzon')
      musik.volume = 0.2;
      musik.play();
    }
  })();

// *********************************************


  