
function fetchJSONData() {
    fetch("./options.json")
    .then((res) => {
        if (!res.ok) {
            throw new Error
            (`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) =>
        console.log(data))
    .catch((error) =>
        console.error("Unable to fetch data:", error));
}
let awesome = fetchJSONData();


function load() 
{
    console.log(awesome)
    let s = document.getElementById("basePreview")
    let ls = document.getElementById("PreviewA")
    let __factor = document.getElementById("factor1")
    s.remove()
    let listTemplate = __factor.cloneNode(true)

    __factor.remove()
    function makeOption(factor,id) {
        let clone = s.cloneNode(true)
        // console.log(clone.childNodes[1].childNodes[3].textContent)
        clone.childNodes[1].childNodes[3].textContent = id
        factor.childNodes[7].appendChild(clone)
        
        // console.log("OPTIEN MADE")
    }
    function makeList(id,desc) { //1,3
        let newList = listTemplate.cloneNode(true);
        newList.id = id
        console.log(newList.childNodes)
        newList.childNodes[1].textContent = id
        newList.childNodes[3].textContent = desc
        return document.body.appendChild(newList);
    }
    let n = makeList("apple","radda radda");
    makeOption(n,"a")

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