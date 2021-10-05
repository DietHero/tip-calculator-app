var numberOfPeople = document.querySelector('.people__input')
var bill = document.querySelector('.bill__input')
var tip5 = document.querySelector('.tip__button--5')
var tip10 = document.querySelector('.tip__button--10')
var tip15 = document.querySelector('.tip__button--15')
var tip25 = document.querySelector('.tip__button--25')
var tip50 = document.querySelector('.tip__button--50')
var tipCustom = document.querySelector('.tip__input')
var tipPerson = document.querySelector('.amount__result')
var totalPerson = document.querySelector('.total__result')
var reset = document.querySelector('.reset__button')


tip5.addEventListener(
    'click',
    function result5Function() {
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var resultTip5 = (Number(billValue) * 0.05) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(resultTip5) 
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }

)

tip10.addEventListener(
    'click',
    function result10Function() {
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var resultTip10 = (Number(billValue) * 0.10) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(resultTip10)
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }
)

tip15.addEventListener(
    'click',
    function result15Function() {
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var resultTip15 = (Number(billValue) * 0.15) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(resultTip15)
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }
)

tip25.addEventListener(
    'click',
    function result25Function() {
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var resultTip25 = (Number(billValue) * 0.25) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(resultTip25)
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }
)
tip50.addEventListener(
    'click',
    function result50Function() {
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var resultTip50 = (Number(billValue) * 0.50) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(resultTip50)
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }
)


tipCustom.addEventListener(
    'input',
    function (event) {
        var input = event.target
        var value = input.value
        var billValue = bill.value
        var peopleValue = numberOfPeople.value
        var result = (Number(billValue) * (Number(value)*0.01)) / Number(peopleValue)
        var total = Number(billValue) / Number(peopleValue)
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(result)
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + ' ' + Math.round(total)
    }
)

reset.addEventListener(
    'click',
    function(){
        numberOfPeople.value = ''
        bill.value = ''
        tipCustom.value = ''
        tipPerson.innerHTML = '<i class="fas fa-dollar-sign">' + '0.00'
        totalPerson.innerHTML = '<i class="fas fa-dollar-sign">' + '0.00'

    }
)
