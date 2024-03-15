let color = ""
let scheme = ""
let url = ""
document.getElementById('get-color').addEventListener('click', getColor)
function getColor(){
    color = document.getElementById('select-color').value
    scheme = document.getElementById('color-schemes').value
    url = `

    https://www.thecolorapi.com/scheme?hex=${color.slice(1)}&mode=${scheme}&count=5
`
    
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('color-box').innerHTML = `

            <div 
                class="color" 
                style="background-color:${data.colors[0].hex.value};">
            </div>
            <div 
                class="color" 
                style="background-color:${data.colors[1].hex.value};">
            </div>

            <div 
                class="color" 
                style="background-color:${data.colors[2].hex.value};">
            </div>
            <div 
                class="color" 
                style="background-color:${data.colors[3].hex.value};">
            </div>
            <div 
            class="color" 
            style="background-color:${data.colors[4].hex.value};">
        </div>

            <div class="hex">${data.colors[0].hex.value}</div>
            <div class="hex">${data.colors[1].hex.value}</div>
            <div class="hex">${data.colors[2].hex.value}</div>
            <div class="hex">${data.colors[3].hex.value}</div>
            <div class="hex">${data.colors[4].hex.value}</div>
        ` 
        })
}


