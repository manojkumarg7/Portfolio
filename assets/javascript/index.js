let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log("jhi");
  Email.send({
    Host: "smtp.gmail.com",
    Username: "manojkumar64p@gmail.com",
    Password: "password",
    To: "manojkumar64p@gmail.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
});
