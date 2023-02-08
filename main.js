'use strict'
document.querySelector('div').remove()
window['div'] = document.createElement('div')
div.style.position = 'absolute'
div.style.top = '0px'
div.style.left = '0px'
div.style.width = `${1e308}px`
div.style.height = `1089px`
document.body.append(div)
window['toolbox'] = {
    "kind": "categoryToolbox",
    "contents": Object.entries(Blockly.libraryBlocks).slice(0, 9).map(([name, {blocks}]) => ({
        "kind": "category",
        name,
        "contents": Object.keys(blocks).map(type => ({
            "kind": "block",
            type
        }))
    }))
}
window['workspace'] = Blockly.inject(div, {toolbox})
window['toolboxObject'] = workspace.getToolbox()
window['button'] = document.createElement('button')
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
button.style.cursor = 'pointer'
document.body.append(button)
