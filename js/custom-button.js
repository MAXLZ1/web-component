class CustomButton1 extends HTMLElement{
  constructor() {
    super()

    // 创建一个shadow root
    const shadow = this.attachShadow({mode: 'open'})

    const button = document.createElement('button')
    button.setAttribute('class', 'custom-button')

    const text = this.getAttribute('text')
    button.textContent = text

    const style = document.createElement('style')
    style.textContent = `
      :host .custom-button{
        border: none;
        cursor: pointer;
        background: hsla(130, 70%, 50%, 1);
        color: #ffffff;
        line-height: 30px;
        border-radius: 5px;
        outline:none;
      }
    `

    shadow.appendChild(style)
    shadow.appendChild(button)
  }

}

class CustomButton2 extends HTMLElement{
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'open'})
    const template = document.querySelector('#button-template')
    const text = this.getAttribute('text')
    const append = template.content.cloneNode(true)
    append.children[1].innerHTML = text
    shadow.appendChild(append)
  }
}

class CustomButton3 extends HTMLElement{
  constructor() {
    super()
    const template = document.querySelector('#button-template').content
    this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true))
  }
}

class CustomButton extends HTMLButtonElement{
  constructor () {
    super()
    this.style = `
    border: none;
        cursor: pointer;
        background: hsla(130, 70%, 50%, 1);
        color: #ffffff;
        line-height: 30px;
        border-radius: 5px;
        outline:none;
    `
  }
}

customElements.define('custom-button', CustomButton, {extends: 'button'})
customElements.define('custom-button1', CustomButton1)
customElements.define('custom-button2', CustomButton2)
customElements.define('custom-button3', CustomButton3)