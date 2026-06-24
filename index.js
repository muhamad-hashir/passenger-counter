let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(saveEl)

let count = 0

function increment() {
    console.log("The button was clicked!")
    count += 1
    countEl.textContent = count
}

function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    countEl.textContent=0        // will work even without it, its used to display value as 0 the code in line 21 makes it zero
    count=0                      // count = 0 so after saving it starts from 0 again
}