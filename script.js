let $ = document
let counterStarter1 = $.getElementById('counter-starter-1')
let counterStarter2 = $.getElementById('counter-starter-2')
let counterStarter3 = $.getElementById('counter-starter-3')

let counterStarterInner1 = '0'
let counterStarterInner2 = '0'
let counterStarterInner3 = '0'

let counterMainStarter1 = setInterval(function() {
    counterStarterInner1 = counterStarterInner1.toString()
    counterStarter1.innerHTML = ""
    counterStarter1.innerHTML = counterStarterInner1
    if (counterStarterInner1 == 1554) {
        clearInterval(counterMainStarter1)
    }
    counterStarterInner1++
}, 0.001)

let counterMainStarter2 = setInterval(function() {
    counterStarterInner2 = counterStarterInner2.toString()
    counterStarter2.innerHTML = ""
    counterStarter2.innerHTML = counterStarterInner2
    if (counterStarterInner2 == 714) {
        clearInterval(counterMainStarter2)
    }
    counterStarterInner2++

}, 0.0001)

let counterMainStarter3 = setInterval(function() {
    counterStarterInner3 = counterStarterInner3.toString()
    counterStarter3.innerHTML = ""
    counterStarter3.innerHTML = counterStarterInner3
    if (counterStarterInner3 == 1714) {
        clearInterval(counterMainStarter3)
    }
    counterStarterInner3++
}, 0.0001)