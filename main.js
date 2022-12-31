var text = document.querySelector('.text');
var cols = document.querySelector('.cols');
var rows = document.querySelector('.rows');
var hidden1 = document.querySelector('.hidden1');

function textarea() {
      if (text.value!=""){
        document.querySelector('.result').value = `<form><textarea cols="${cols.value}" onclick="select()" readonly="" rows="${rows.value}">${text.value}</textarea></form>`
        hidden1.classList.add('active');
      }
        else {
          alert('Enter Your Text');
       }
    }

let textareaCopy = document.querySelector('.result');
function Clipboardtext(){
  if(textareaCopy.value != ""){
    const textarea = document.createElement('textarea');
    const resultE = textareaCopy.value;
  if (!textareaCopy) { return; }
    textarea.value = resultE;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('👇👇👇Text Copied to Clipboard👇👇👇\n'+textareaCopy.value);
  }
  else {
  alert('Enter Your Text');
  }
}
