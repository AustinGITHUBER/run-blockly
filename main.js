'use strict'
document.querySelector('div').remove()
let div = document.createElement('div')
div.id = 'blocklyDiv'
div.style.position = 'absolute'
div.style.top = '0px'
div.style.left = '0px'
div.style.width = `${1e308}px`
div.style.height = `4991px`
let toolbox = {
    "kind": "flyoutToolbox",
    "contents": Object.keys(Blockly.Blocks).map(type => ({
        "kind": "block",
        type
    }))
}
document.body.append(div)
window['workspace'] = Blockly.inject(div, {toolbox})
let button = document.createElement('button')
button.style.position = 'fixed'
button.style.bottom = '0px'
button.style.right = '0px'
button.innerText = 'Run'
console.log('The javascript code will be printed in the console every time you run the project.')
button.onclick = () => {
    let code = Blockly.JavaScript.workspaceToCode(workspace)
    console.log(code)
    Function(code)()
}
document.body.append(button)