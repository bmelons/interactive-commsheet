
let awesome = [
    {
        "name": "Stage",
        "desc": "how quickly?",
        "options": [
            {
                "option": "Sketched",
                "price": 8
            },
            {
                "option": "Colored Sketch",
                "price": 12
            },
            {
                "option": "Inked Flats",
                "price": 18
            },
            {
                "option": "Shaded",
                "price": 24
            }
        ]
    }
]


function load() {
    // console.log(awesome)
    let s = document.getElementById("basePreview")
    let ls = document.getElementById("PreviewA")
    let __factor = document.getElementById("factor1")
    s.remove()
    let listTemplate = __factor.cloneNode(true)

    __factor.remove()
    function makeOption(factor, id, price) {
        let clone = s.cloneNode(true)
        // console.log(clone.childNodes[1].childNodes[3].textContent)
        clone.childNodes[1].childNodes[5].textContent = id;
        clone.childNodes[1].childNodes[7].textContent = "$" + price.toString();
        factor.childNodes[7].appendChild(clone)
        clone.childNodes[3].addEventListener('click', function () {
            let pair = clone.childNodes[1]
            let radio = pair.childNodes[1]
            radio.checked = true
            console.log(pair.childNodes)
        })
        // console.log("OPTIEN MADE")
    }
    function makeList(id, desc) { //1,3
        let newList = listTemplate.cloneNode(true);
        newList.id = id
        // console.log(newList.childNodes)
        newList.childNodes[1].textContent = id
        newList.childNodes[3].textContent = desc
        return document.body.appendChild(newList);
    }
    for (let f = 0; f < awesome.length; f++) {
        let id = awesome[f].name
        let desc = awesome[f].desc
        let contents = awesome[f].options
        let n = makeList(id, desc);
        for (let i = 0; i < contents.length; i++) {
            let current = contents[i]
            makeOption(n, current.option, current.price)
        }
    }

    // for (let i = 1; i<=4; i++) {
    //     let clone = s.cloneNode(true)
    //     ls.appendChild(clone)
    //     console.log(clone.childNodes)
    //     clone.childNodes[3].addEventListener('click',function(){
    //         let pair = clone.childNodes[1]
    //         let radio = pair.childNodes[1]
    //         radio.checked = true
    //         console.log(pair.childNodes)
    //     })
    // }


}

window.onload = load