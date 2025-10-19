// Password Generator JavaScript
// Global constants and variables

const passwordOutput = document.getElementById('password-output')
const passwordLength = document.getElementById('password-length')
const lengthValue = document.getElementById('length-value')
const uppercaseCheckbox = document.getElementById('uppercase')
const lowercaseCheckbox = document.getElementById('lowercase')
const numbersCheckbox = document.getElementById('numbers')
const symbolsCheckbox = document.getElementById('symbols')
const generateBtn = document.getElementById('generate-btn')
const copyBtn = document.getElementById('copy-btn')
const refreshBtn = document.getElementById('refresh-btn')
const strengthBar = document.querySelector('.strength-bar')
const strengthText = document.getElementById('strength-text')

const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz'
const NUMBER_CHARS = '0123456789'
const SYMBOL_CHARS = '!@#$%^&*()_+[]{}|;:,.<>?'

generateBtn.addEventListener('click', generatePassword)

function generatePassword(){

    for (let i = 0; i < lengthValue.textContent; i++) {
        const allChars = 
            (uppercaseCheckbox.checked ? UPPERCASE_CHARS : '') +
            (lowercaseCheckbox.checked ? LOWERCASE_CHARS : '') +
            (numbersCheckbox.checked ? NUMBER_CHARS : '') +
            (symbolsCheckbox.checked ? SYMBOL_CHARS : '')   
        if (allChars.length === 0) {
            passwordOutput.value = ''
            strengthBar.style.width = '0%'
            strengthText.textContent = ''
            return
        }
        const randomIndex = Math.floor(Math.random() * allChars.length)
        passwordOutput.value += allChars[randomIndex]
    }
}


refreshBtn.addEventListener('click', e => {
    passwordOutput.value = ''
    passwordLength.value = 12
    lengthValue.textContent = passwordLength.value
    uppercaseCheckbox.checked = true
    lowercaseCheckbox.checked = true
    numbersCheckbox.checked = true
    symbolsCheckbox.checked = false
})

passwordLength.addEventListener('change', e => {
    lengthValue.textContent = passwordLength.value
})