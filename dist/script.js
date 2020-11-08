let blocks = document.querySelectorAll(".block");

let getStyle = (el) => {
  let computedStyle = getComputedStyle(el.parentNode);
  let backgroundImage = computedStyle.backgroundImage.replace(
      /,(?=( linear| radial))/g,
      ",\n"
    ),
    backgroundSize = computedStyle.backgroundSize,
    backgroundPosition = computedStyle.backgroundPosition,
    backgroundColor = computedStyle.backgroundColor;

  let style = document.createElement("div");
  style.innerHTML = `<div>                    
                      <code>background-image: ${backgroundImage}; </code>
                      <code>background-size: ${backgroundSize}; </code>
                      <code>background-position: ${backgroundPosition}; </code>
                      <code>background-color: ${backgroundColor}; </code>                    
                  </div>`;

  el.previousElementSibling.appendChild(style);
}


[...blocks].forEach((block,i)=>{  
  let content = document.createElement("div");
  
  let copyButton = document.createElement("button");
  copyButton.innerHTML = "Copy Code";  
  copyButton.setAttribute('title', 'Copy Code');
  content.append(copyButton);
  

  
  copyButton.addEventListener("click", function(){    
    var range = document.createRange();
                    range.selectNode(copyButton.nextElementSibling);
                    window.getSelection().removeAllRanges(); 
                    window.getSelection().addRange(range); 
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();

    copyButton.innerHTML = "Copied!";                 
  })
  
  content.classList.add('content');
  block.appendChild(content); 
  
  
  let button = document.createElement("button");
  button.classList.add('toggleButton');
  button.setAttribute('title', 'Show Code');
  button.setAttribute('aria-label', 'expand');
  button.addEventListener("click", (e) => {
    button.parentNode.classList.toggle("expand");
    if(button.getAttribute('title')=='Show Code'){
      button.setAttribute('title', 'Close');
    }else{
      button.setAttribute('title', 'Show Code');
    }
    document.getElementsByTagName("body")[0].classList.toggle("scrollHidden");
    getStyle(button);
    button.previousElementSibling.classList.toggle("show");
  })
  block.append(button)
})

let buttons = document.querySelectorAll(".toggleButton");