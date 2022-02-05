(() => {
    const refss = {
      openModalBtn2: document.querySelector('[data-footermodal-open]'),
      closeModalBtn2: document.querySelector('[data-footermodal-close]'),
      modal2: document.querySelector('[data-footermodal]'),
      modald2: document.querySelector('[data-locationd]'),
    };
  
    refss.openModalBtn2.addEventListener('click', toggleModal2);
    refss.closeModalBtn2.addEventListener('click', toggleModal2);
  
    function toggleModal2() {
      refss.modal2.classList.toggle('is-hidden');
      refss.modald2.classList.toggle('scroll');
      let musik = document.querySelector('.muzon')
      musik.volume = 0.2;
      musik.play();
    }
  })();