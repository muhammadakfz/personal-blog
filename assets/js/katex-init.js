// Optional: central place to define KaTeX auto-render configuration and macros
(function(){
  if (typeof renderMathInElement !== 'function') return;
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true }
    ],
    throwOnError: false,
    macros: {
      // Example custom macros
      // '\\R': '\\mathbb{R}',
      // '\\vect': ['{\\mathbf{#1}}', 1]
    }
  });
})();
