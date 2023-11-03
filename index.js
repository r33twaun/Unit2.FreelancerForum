const freelancers = [
    { name: "Alice", price: 30, occupation: "Writer" },
    { name: "Bob", price: 50, occupation: "Teacher" },
    { name: "Carol", price: 70, occupation: "Programmer" },
    
  ];

//create body in document
const body=document.body

//create section element for everything
const section0=document.createElement(`section`)

//create section element for border box
const section1=document.createElement(`section`)

//create section element for h1, p, h2
const section2=document.createElement(`section`)

//create section element for unordered list
const section3=document.createElement(`section`)

//create section element for unordered list items
const section4=document.createElement(`section`)


//create element h1 Freelance Forum
const freeTit=document.createElement(`h1`)

//create element paragraph `The average starting price is $[].`
const avPr=document.createElement(`p`)

//create element h2 for Available Freelancers
const avaFree=document.createElement(`h2`)

//create h3 for `name` `occupation` `starting price`
const nameTit=document.createElement(`h3`)
const occTit=document.createElement(`h3`)
const startPrice=document.createElement(`h3`)

//create unordered list for `name` `occupation` `starting price`
const nameUi=document.createElement(`ul`)
const occupUi=document.createElement(`ul`)
const priceUi=document.createElement(`ul`)

//create list item x9
const li1=document.createElement(`li`)
const li2=document.createElement(`li`)
const li3=document.createElement(`li`)
const li4=document.createElement(`li`)
const li5=document.createElement(`li`)
const li6=document.createElement(`li`)
const li7=document.createElement(`li`)
const li8=document.createElement(`li`)
const li9=document.createElement(`li`)

//create h1.textcontent
freeTit.textContent=`Freelance Forum`

//create paragraph.textContent
avPr.textContent=`The average starting price is $40`

//create h2.textContent
avaFree.textContent=`Available Freelancers`

//create h3.textContent
nameTit.textContent=`Name`
occTit.textContent=`Occupation`
startPrice.textContent=`Starting price`


//create name.textContent list items
li1.textContent=`Alice`
li2.textContent=`Bob`
li3.textContent=`Carol`

//create occupation.textContent list items
li4.textContent=`Writer`
li5.textContent=`Teacher`
li6.textContent=`Programmer`

//create price.textContent list items
li7.textContent=`$30`
li8.textContent=`$50`
li9.textContent=`$70`

//appendChild section 0 into the body
body.appendChild(section0)
section0.setAttribute(`style`, `display: flex;
justify-content: center;
align-items: center;
justify-items: center;
min-height: 100vh;
width: 100%;`)

//appendChild section 1 into section 0 and style
section0.appendChild(section1)
section1.setAttribute(`style`, `backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px); border: solid; text-align: center; align-items: center; 
justify-content: center; width: 800px; height: 800px; border-radius: 60px;
font-family:Verdana, Geneva, Tahoma, sans-serif`)


//appendChild section 2 into section 1 and style
section1.appendChild(section2)
section2.setAttribute(`style`, `justify-items: center; 
align-items: center; justify-content: center; margin-top: -100px; height: 30%;
color: white`)

//appendChild section 3 into section 1 and style
section1.appendChild(section3)
section3.setAttribute(`style`, `display: flex; 
align-items: center; justify-content: space-around; height: 30%;
margin-top:150px; font-size: 35px; color: white;  `)

//appendChild section 4 into section 1 and style
section1.appendChild(section4)
section4.setAttribute(`style`, `display: flex; 
align-items: center; justify-content: space-between; font-size: 35px; 
margin-left: 20px; margin-right: 140px; margin-top: -30px; color: white`)

//appendChild h1, p, h2 into section 2 and style
section2.appendChild(freeTit)
freeTit.setAttribute(`style`, `font-size: 80px;`)
section2.appendChild(avPr)
avPr.setAttribute(`style`, `font-size: 45px; margin-top: -50px`)
section2.appendChild(avaFree)
avaFree.setAttribute(`style`, `font-size: 70px`)


//appendChild h3 into section 3
section3.appendChild(nameTit)
section3.appendChild(occTit)
section3.appendChild(startPrice)

//appendChild unordered list into section 4
section4.appendChild(nameUi)
section4.appendChild(occupUi)
section4.appendChild(priceUi)

//appendChild list item names into unordered list name
nameUi.appendChild(li1)
nameUi.appendChild(li2)
nameUi.appendChild(li3)

//appendChild list item occupations into unordered list occupation
occupUi.appendChild(li4)
occupUi.appendChild(li5)
occupUi.appendChild(li6)

//appendChild list item prices into unordered list price
priceUi.appendChild(li7)
priceUi.appendChild(li8)
priceUi.appendChild(li9)

//create background image
document.body.style.backgroundImage= `url(giphy.gif)`
// document.body.style.background=`style`, `background: no-repeat; background-size: cover; background-position: center;`
window.alert(`The average price is $40!`)

// const targetFrame = window.top.frames[1]
// const windowMessageButton = document.querySelector("#window-message")
// windowMessageButton.addEventListener("click", () => {
//     targetFrame.postMessage("The average price is $40", targetOrigin);
//   });