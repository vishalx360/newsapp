// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#hero {\n  position: relative;\n  height: 55vh;\n}\n\n#hero::after {\n  position: absolute;\n  content: \"/a\";\n  height: 100%;\n  z-index: 2;\n  width: 100%;\n  top: 0;\n  left: 0;\n  background: linear-gradient(\n    to bottom,\n    rgba(2, 0, 36, 0) 0%,\n    rgba(0, 0, 0, 0.8) 100%\n  );\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}