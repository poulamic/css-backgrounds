let blocks = document.querySelectorAll(".block");

[...blocks].forEach((block,i)=>{
  let content = document.createElement("div");
  
  let copyButton = document.createElement("button");
  copyButton.innerHTML = "Click here";
  content.append(copyButton);
  
  const mainContent = document.createElement("div");  
  const newContent = document.createTextNode("Hi there and greetings!" + i); 
  mainContent.append(newContent);
  content.append(mainContent);
  
  copyButton.addEventListener("click", function(){    
    var range = document.createRange();
                    range.selectNode(copyButton.nextElementSibling);
                    window.getSelection().removeAllRanges(); 
                    window.getSelection().addRange(range); 
                    document.execCommand("copy");
                    window.getSelection().removeAllRanges();
  })
  
  content.classList.add('content');
  block.appendChild(content); 
  
  
  let button = document.createElement("button");
  button.classList.add('toggleButton');
  button.setAttribute('aria-label', 'expand');
  button.addEventListener("click", (e) => {
    button.parentNode.classList.toggle("expand");
    document.getElementsByTagName("body")[0].classList.toggle("scrollHidden");
    //getStyle(button.nextElementSibling);
    button.previousElementSibling.classList.toggle("show");
  })
  block.append(button)
})

let buttons = document.querySelectorAll(".toggleButton");


  