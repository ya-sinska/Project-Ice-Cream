(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-mainmodal-open]'),
      openModalBtn2: document.querySelector('.buttonchic'),
      closeModalBtn: document.querySelector('[data-mainmodal-close]'),
      modal: document.querySelector('[data-mainmodal]'),
      modald: document.querySelector('[data-locationd]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleMainmodal);
    refs.openModalBtn2.addEventListener('click', toggleMainmodal);
    refs.closeModalBtn.addEventListener('click', toggleMainmodal);
  
    function toggleMainmodal() {
      refs.modal.classList.toggle('is-hidden');
      refs.modald.classList.toggle('scroll');
      let musik = document.querySelector('.muzon')
      musik.volume = 0.2;
      musik.play();
    }
  })();