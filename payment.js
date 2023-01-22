let giftext = document.getElementById("gifttext")

let promoCodeCancel = document.getElementById("promocancel")

let promocodeinput= document.getElementById("promocodeinpdiv")
let promogift= document.getElementById("promogift")

let billingAddress = document.getElementById("billingaddresscheck")

let billinfDetails= document.getElementById("billingDetails")

let salesAssistchechbox = document.getElementById("salesAssistchechbox")

let slaesassistqueryHead= document.getElementById("slaesassistquery")

let salespersonSelect= document.getElementById("salesperson")


let salecassistCancel= document.getElementById("salesassistCancel")



giftext.addEventListener("click",()=>{
    giftext.classList.add("displaynone")
    promocodeinput.classList.remove("displaynone")
    promoCodeCancel.classList.remove("displaynone")
    console.log("clicked")
})
promoCodeCancel.addEventListener("click",()=>{
    promoCodeCancel.checked===false
    giftext.classList.remove("displaynone")
    promocodeinput.classList.add("displaynone")
    promoCodeCancel.classList.add("displaynone")
})
billingAddress.addEventListener("change",()=>{
    if(billingAddress.checked ===true){
        billinfDetails.classList.add("displaynone")
        
    }
})

salesAssistchechbox.addEventListener("change",()=>{
    if(salesAssistchechbox.checked===true){
        salesAssistchechbox.classList.add("displaynone")
        slaesassistqueryHead.classList.add("displaynone");
        salespersonSelect.classList.remove("salesperson");
        salecassistCancel.classList.remove("displaynone")
    }
})

salecassistCancel.addEventListener("click",()=>{
    salecassistCancel.checked=false
    salesAssistchechbox.classList.remove("displaynone")
    slaesassistqueryHead.classList.remove("displaynone");
    salespersonSelect.classList.add("salesperson");
    salecassistCancel.classList.add("displaynone")
})

let sam = JSON.parse(localStorage.getItem("buy")) || []

let dl=document.getElementById("payment_Parent")
let delivery_item_Details= document.getElementById("delivery_item_Details")

fetchdata(sam)

function fetchdata(data) {
    let cartdata = data.map(item => {
        return {
            image: item.image,
            name: item.name,
            price: item.price,
            
        }
    })
    pudhe(cartdata)
}
function pudhe(cartdata) {
    let pl = `
    ${cartdata.map(item => render(item.image, item.name, item.price )).join("")}
    
`
    dl.innerHTML = pl;
 let sl=`   
 ${cartdata.map(item => deiveryOption(item.image, item.name, item.price )).join("")}
 `
    
    delivery_item_Details.innerHTML=sl;
}



function render(image, name, price){
    let cart=`

    <div class="productcontnet">  
    <div class="prdtimgdiv imgWidth "><img src=${image} alt="" class="imgWidth"></div>
    <div class="imgWidth">   
        <h2 id="productdetails" class="font16">${name}</h2>
        <span id="quantity">Qty:1</span>
    </div>
    <div class="imgWidth">   
        <span id="price" class="">₹${price}</span>
    </div>
    </div>
    
    `
    return cart
}

function deiveryOption(image, name, price){
    let cart=`<div class="productcontnet">  
    <div class="prdtimgdiv "><img src=${image} alt="" class="imgWidth"></div>
    <div class="">   
        <h2 id="productdetails_deliveryoption" class="font16">${name}</h2>
        <span id="quantity_deliveryoption">Qty:1</span>
    </div>
    <div class="">   
        <span id="price">₹${price}</span>
    </div>
 </div> `
 return cart
}
let sum=0;
for(let i=0;i<sam.length;i++){
    sum+=sam[i].price
}
console.log(sum)
let subtotal= document.getElementById("vishal_span")
subtotal.innerText="₹"+sum;

let totalBill= document.getElementById("totalBill")
totalBill.innerText="₹"+sum;

let billsummarySec= document.getElementById("billTotla");
billsummarySec.innerText="₹"+sum;

let bill_total_orderSumamary =document.getElementById("bill_total_orderSumamary");
bill_total_orderSumamary.innerText="₹"+sum;

let orderButton = document.getElementById("orderButton")


orderButton.addEventListener("click",()=>{
    alert("Order Sucesss Please continue Shopping")
    //window.location.assign("/productpage.html")
})