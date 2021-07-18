
// Select all pre and code tags and add copy-code-button
document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';

    

    var pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains('highlight')) {
        var highlight = pre.parentNode;
        highlight.parentNode.insertBefore(button, highlight);
    } else {
        pre.parentNode.insertBefore(button, pre);
    }
});

const codeBlocks = document.querySelectorAll('.highlighter-rouge');
const copyCodeButtons = document.querySelectorAll('.copy-code-button');
console.log(copyCodeButtons.innerText);
copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;
  copyCodeButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(code);
    copyCodeButton.classList.add('copied');

    setTimeout(() => {
      copyCodeButton.classList.remove('copied');
    }, 2000);
  });
});