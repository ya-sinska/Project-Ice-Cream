(() => {
    const refsf = {
      openModalBtn3: document.querySelector('[data-aboutmodal-open]'),
      closeModalBtn3: document.querySelector('[data-aboutmodal-close]'),
      modal3: document.querySelector('[data-aboutmodal]'),
      modald3: document.querySelector('[data-locationd]'),
    };
  
    refsf.openModalBtn3.addEventListener('click', toggleModal3);
    refsf.closeModalBtn3.addEventListener('click', toggleModal3);
  
    function toggleModal3() {
      refsf.modal3.classList.toggle('is-hidden');
      refsf.modald3.classList.toggle('scroll');
      let musik = document.querySelector('.muzon')
      musik.volume = 0.2;
      musik.play();
    }
  })();