let description = document.querySelector(".description")

let value = document.querySelector(".value")

let income_button = document.querySelector(".income_button")

let income_result = document.querySelector(".income_result")

let expense_button = document.querySelector(".expense_button")

let expense_result = document.querySelector(".expense_result")

let total_earned = document.querySelector(".total_earned")

let result = { description: description.value, value: value.value }



income_button.addEventListener('click', () => {
    // result = { description: description.value, value: value.value }
    // localStorage.setItem('income', JSON.stringify(result));
    const new_income_div = document.createElement('div')
    new_income_div.classList.add('new_income_div')
    const id = generateRandomId()
    new_income_div.id = id
    new_income_div.innerHTML = description.value
    income_result.appendChild(new_income_div)

    let total = 

    total_earned.innerHTML = `€ ${value.value}`
})

expense_button.addEventListener('click', () => {
    // result = { description: description.value, value: -value.value }
    // localStorage.setItem('expenses', JSON.stringify(result));
})

function getItemFromLS() {
    const result_content = JSON.parse(localStorage.getItem('income'));
    income_result.innerHTML = result_content.value
}

function generateRandomId() {
    return Math.floor(Math.random() * 10000);
}
