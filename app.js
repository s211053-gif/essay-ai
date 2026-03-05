const defaultItems = ["內容","結構","文辭","創意","錯字"]

const scoreItems = document.getElementById("scoreItems")

defaultItems.forEach(addItem)

function addItem(name){

const div=document.createElement("div")
div.className="score-item"

div.innerHTML=`
<label>${name}</label>
<input type="range" min="0" max="10" value="5">
`

scoreItems.appendChild(div)

}

document.getElementById("addItem").onclick=()=>{

const name=prompt("評分項目")

if(name)addItem(name)

}

document.getElementById("aiScore").onclick=()=>{

const scores=[]

document.querySelectorAll(".score-item input").forEach(i=>{
scores.push(Number(i.value))
})

generateRadar(scores)

generateComment(scores)

}

function generateRadar(scores){

const ctx=document.getElementById("radarChart")

new Chart(ctx,{
type:"radar",
data:{
labels:[...document.querySelectorAll(".score-item label")].map(l=>l.innerText),
datasets:[{
label:"Score",
data:scores
}]
}
})

}

function generateComment(scores){

const avg=scores.reduce((a,b)=>a+b)/scores.length

let comment=""

if(avg>8)comment="作文表現優秀，內容完整且具邏輯。"

else if(avg>6)comment="整體表現良好，但仍有進步空間。"

else comment="建議加強結構與內容發展。"

document.getElementById("comment").innerText=comment

document.getElementById("suggestion").innerText="建議增加細節描寫與段落連貫。"

}
