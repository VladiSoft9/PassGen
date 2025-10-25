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

const strengthLevels = [
    { width: '0%', text: '' },
    { width: '25%', text: 'Weak' }, 
    { width: '50%', text: 'Moderate' },
    { width: '75%', text: 'Strong' },
    { width: '100%', text: 'Very Strong' }
]

function updateStrengthBar() {
    let strength = 0
    if (uppercaseCheckbox.checked) strength++   
    if (lowercaseCheckbox.checked) strength++
    if (numbersCheckbox.checked) strength++
    if (symbolsCheckbox.checked) strength++
    if (passwordLength.value >= 12) strength++

    const level = strengthLevels[strength]
    strengthBar.style.width = level.width
    strengthText.textContent = level.text
}
uppercaseCheckbox.addEventListener('change', updateStrengthBar)
lowercaseCheckbox.addEventListener('change', updateStrengthBar)
numbersCheckbox.addEventListener('change', updateStrengthBar)
symbolsCheckbox.addEventListener('change', updateStrengthBar)
passwordLength.addEventListener('change', updateStrengthBar)

generateBtn.addEventListener('click', generatePassword)

function generatePassword(){

    passwordOutput.value = ''

    const allChars = 
        (uppercaseCheckbox.checked ? UPPERCASE_CHARS : '') +
        (lowercaseCheckbox.checked ? LOWERCASE_CHARS : '') +
        (numbersCheckbox.checked ? NUMBER_CHARS : '') +
        (symbolsCheckbox.checked ? SYMBOL_CHARS : '')  

    if (allChars.length === 0) {
        passwordOutput.value = ''
        strengthBar.style.width = '0%'
        strengthText.textContent = ''
        alert('Please select at least one character type!')
        return
    }

    for (let i = 0; i < lengthValue.textContent; i++) {
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

copyBtn.addEventListener('click', e => {
    if (passwordOutput.value === '') {
        alert('No data to copy! Please generate a password first.')
        return
    }
    navigator.clipboard.writeText(passwordOutput.value)
    alert('Password copied to clipboard!')
})

passwordLength.addEventListener('change', e => {
    lengthValue.textContent = passwordLength.value
})