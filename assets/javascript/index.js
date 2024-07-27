// let btn = document.getElementById("btn");
// console.log(btn);
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   // console.log("jhi");
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "manojkumar64p@gmail.com",
//     Password: "password",
//     To: "manojkumar64p@gmail.com",
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// });
$(document).ready(function () {
  $(".skill_container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,

    prevArrow:
      '<span class="prev_arrow">  <i class="fa-solid fa-square-caret-left"></i></span>',

    nextArrow:
      '<span class="next_arrow">  <i class="fa-solid fa-square-caret-right"></i></span>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
