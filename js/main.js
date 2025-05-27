document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const message = "Bunga Lily of the Valley untukmu, Maysilla 🌸";
  let i = 0;

  function typeWriter() {
    if (i < message.length) {
      title.innerHTML += message.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
