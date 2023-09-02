function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  if (name == "") {
    return alert("fill your name!");
  } else if (email == "") {
    return alert("fill your email!");
  } else if (phone == "") {
    return alert("fill your phone!");
  } else if (subject == "") {
    return alert("fill your subject!");
  } else if (message == "") {
    return alert("fill your message!");
  }

  const emailReceiver = "jerry17hutariputra@gmail.com";

  let kirim = document.createElement("a");
  kirim.href = `mailto:${emailReceiver}?subject=${subject}&body=halo nama saya ${name},\n silahkan hubungi saya dengan nomor : ${phone} atau ke Email: ${email} , dan ${message}`;
  kirim.click();
}
