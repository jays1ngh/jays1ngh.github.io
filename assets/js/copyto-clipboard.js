// Select all pre and code tags
const codeBlocks = document.querySelectorAll('pre > code');

// Add buttons before pre and code tags
codeBlocks.forEach(function (codeBlock) {
    var button = document.createElement('button');
    button.className = 'copy-code-button';
    button.type = 'button';
    // Pre code block
    var pre = codeBlock.parentNode;
    // Highlight Div
    var highlightDiv = pre.parentNode;
    
    if (highlightDiv.classList.contains('highlight')) {
        // add button before highlight Div if present
        highlightDiv.parentNode.insertBefore(button, highlightDiv);
    } else {
        // add copy code button before pre tags
        pre.parentNode.insertBefore(button, pre);
    }
});

// 
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

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