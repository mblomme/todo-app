let rootNode = document.querySelector('#root')
let message = (text:String) => rootNode.innerHTML = `<h3>${text}</h3>`;
message('Test');
