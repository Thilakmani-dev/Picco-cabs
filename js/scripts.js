document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  function radioValue() {
    var ele = document.querySelectorAll(".form-check-input");

    for (i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        var selectedWay = ele[i].value;
        return selectedWay;
      }
    }
  }

  let way = radioValue();
  let name = document.getElementById("name").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let number = document.getElementById("phno").value;
  console.log(name, from, to, date, number, way);

  sendEmail(name, from, to, date, number, way);
}

function sendEmail(name, from, to, date, number, way) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "pradeepmsblogspot@gmail.com",
    Subject: `${name} Sent you a message`,
    Body: `Name : ${name} <br/> Phone Number : ${number} <br/>  From : ${from}  <br/>  To : ${to} <br/>  Date : ${date} <br/>  Way : ${way} `,
  }).then(() => alert("Booked Successfully"));
}

document
  .getElementById("contact-form2")
  .addEventListener("submit", submitForm2);

function submitForm2(e) {
  e.preventDefault();

  let secname = document.getElementById("secname").value;
  let secfrom = document.getElementById("secfrom").value;
  let secpackage = document.getElementById("secpackage").value;
  let secnumber = document.getElementById("secphno").value;
  console.log(secname, secfrom, secnumber, secpackage);

  sendEmail2(secname, secfrom, secnumber, secpackage);
}

function sendEmail2(name, from, number, package) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pradeepmsblogspot@gmail.com",
    Password: "ibxdnieqkadegcua",
    From: "pradeepmsblogspot@gmail.com",
    To: "pradeepmsblogspot@gmail.com",
    Subject: `${name} Sent you a message`,
    Body: `Name : ${name} <br/>  From : ${from}  <br/>Phone Number : ${number} <br/>  Package : ${package} `,
  }).then(() => alert("Booked Successfully"));
}
