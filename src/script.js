$(document).ready(() => {
    const slickOptions = {
        autoplay: true,
        dots:false,
        prevArrow:'<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
        nextArrow:'<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
        };
    $('.slider').slick(slickOptions);

    $('.footer__form-button').on('click', () => {
        const email = $('#email').val();
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'ranayke2009@gmail.com',
        From : email,
        Subject : "Please, add me to your newsletter!",
        Body : "Hello",
        }).then(
          message => alert(message)
        );
    });
  });
