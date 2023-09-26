function toggleMode() {
  const html = document.documentElement; // Correct the typo "ducument" to "document"

  /*if (html.classList.contains("light")) {
    html.classList.remove('light');
  } else {
    html.classList.add('light');
  }
}*/
html.classList.toggle('light')
}




