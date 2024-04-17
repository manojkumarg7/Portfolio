// window.addEventListener("scroll", reveal);

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealPoint = 150;
//     if (revealtop < windowHeight - revealPoint) {
//       reveals[i].classList.add(".active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("jhi");
  Email.send({
    Host: "smtp.gmail.com",
    Username: "manojkumar14g@gmail.com",
    Password: "password",
    To: "manojkumar14g@gmail.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
