// const card = document.querySelectorAll(".memory_card")
// const btn =document.querySelector('button')
// let first_card, second_card
// let has_flip = false
// let lock = false
// // const card_arr = Array.prototype.slice.call(card)

// // var image = Image.Load("./img/004.png")

// let data = [ 
// // {alt: "妙蛙種子"}
// {alt: "妙蛙種子", src: "./img/001.png"},
// {alt: "妙蛙種子", src: "./img/001.png"},
// {alt: "小火龍", src: "./img/004.png"},
// {alt: "小火龍", src: "./img/004.png"},
// {alt: "傑尼龜", src: "./img/007.png"},
// {alt: "傑尼龜", src: "./img/007.png"},
// {alt: "皮卡丘", src: "./img/024.png"},
// {alt: "皮卡丘", src: "./img/024.png"},
// {alt: "胖丁", src: "./img/039.png"},
// {alt: "胖丁", src: "./img/039.png"},
// {alt: "波克比", src: "./img/175.png"},
// {alt: "波克比", src: "./img/175.png"},
// {alt: "正電拍拍", src: "./img/311.png"},
// {alt: "正電拍拍", src: "./img/311.png"},
// {alt: "波加曼", src: "./img/393.png"},
// {alt: "波加曼", src: "./img/393.png"},
// ]
// // 洗牌

// shuffle(data)

// data.forEach(element => {
//     add_back(element.alt)
// }) 


// btn.addEventListener('click', function(event){
//     add_back(data)
//     console.log(data,alt)
// })

// // 點擊牌(一張)
// for(var i=0; i<card.length; i++){
//     card[i].addEventListener('click', function(event){

//         add_back(data)
//         // if(lock) return // 牌的配對狀態
//         if(event.target.classList[0] == "memory_card") return // 把div的event給處理掉
//         if(first_card !== undefined && second_card !== undefined) return // 防止快速點擊多張牌

//         event.target.classList.add('flip') //front
//         event.target.parentNode.children[0].classList.add('flip') //back 

//             // 避免單張牌選兩次
//             if(!has_flip){
//                 has_flip = true
//                 first_card = event.target.parentNode.children[0]
//                 return
//             }
//             else if(first_card === event.target.parentNode.children[0]) return

//             else
//                 second_card = event.target.parentNode.children[0]

//             card_match()
            
//     })
// }

// function add_back(data){
//     const img = document.createElement('img')

//     img.setAttribute('class', 'back') // 動態修改一個 class 屬性()
//     // img.alt(data)


//     // card.appendChild(img)
//     // img.src(data)
// }


// // 點擊牌(兩張)
// // function card_2(){
// //     if(first_card == undefined && second_card == undefined){
// //          return
// //     }
// //     else if(first_card !== undefined && second_card == undefined){
        
// //         return
// //     }
// //     else 
// //         card_match()
// // }

// // 牌是否相同
// function card_match(){
//     console.log(first_card, second_card)

//     if(first_card.alt === second_card.alt)
//         reset_card()
//     else
//         unflip()    

//     //直接蓋
//     // if(first_card.alt !== second_card.alt){
        
//     //     setTimeout(() => {
//     //         first_card.parentNode.children[1].classList.remove('flip')
//     //         first_card.classList.remove('flip')
//     //         second_card.parentNode.children[1].classList.remove('flip')
//     //         second_card.classList.remove('flip')
//     //     }, "1500")
//     // }
// }

// // 將配對失敗的牌翻回去
// function unflip(){
//     setTimeout(() => {
//         first_card.parentNode.children[1].classList.remove('flip')
//         first_card.classList.remove('flip')
//         second_card.parentNode.children[1].classList.remove('flip')
//         second_card.classList.remove('flip')
//         reset_card()
//     }, "1500")
// }

// // 把前一筆清空
// function reset_card(){
//     has_flip = false
//     first_card = undefined
//     second_card = undefined
//     console.log(first_card, second_card)
// }

// // // 洗牌

// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
// }

const game = document.querySelector('section')
// const card = document.querySelectorAll(".memory_card")
const btn =document.querySelector('button')
let first_card, second_card
let has_flip = false

let data_front = [
{alt: "card", src: "./img/card.png"}  
] 

let data_back = [ 
{alt: "妙蛙種子", src: "./img/001.png"},
{alt: "妙蛙種子", src: "./img/001.png"},
{alt: "小火龍", src: "./img/004.png"},
{alt: "小火龍", src: "./img/004.png"},
{alt: "傑尼龜", src: "./img/007.png"},
{alt: "傑尼龜", src: "./img/007.png"},
{alt: "皮卡丘", src: "./img/024.png"},
{alt: "皮卡丘", src: "./img/024.png"},
{alt: "胖丁", src: "./img/039.png"},
{alt: "胖丁", src: "./img/039.png"},
{alt: "波克比", src: "./img/175.png"},
{alt: "波克比", src: "./img/175.png"},
{alt: "正電拍拍", src: "./img/311.png"},
{alt: "正電拍拍", src: "./img/311.png"},
{alt: "波加曼", src: "./img/393.png"},
{alt: "波加曼", src: "./img/393.png"},
]


// btn.addEventListener('click', function(event){
//     add_memory_card(data_back)
//     console.log(data_back)
// })

// 點擊牌(一張)

// const card = document.querySelectorAll(".memory_card")




// for(var i=0; i<card.length; i++){
//     card[i].addEventListener('click', function(event){

//         // add_back(data)
//         // if(lock) return // 牌的配對狀態
//         if(event.target.classList[0] == "memory_card") return // 把div的event給處理掉
//         if(first_card !== undefined && second_card !== undefined) return // 防止快速點擊多張牌

//         event.target.classList.add('flip') //front
//         event.target.parentNode.children[0].classList.add('flip') //back 

//             // 避免單張牌選兩次
//             if(!has_flip){
//                 has_flip = true
//                 first_card = event.target.parentNode.children[0]
//                 return
//             }
//             else if(first_card === event.target.parentNode.children[0]) return

//             else
//                 second_card = event.target.parentNode.children[0]

//             card_match()
            
//     })
// }


shuffle(data_back)
// console.log(data_back)

// 洗牌
window.addEventListener('load', function(event){
    data_back.forEach(element => {
        add_memory_card(element.alt, element.src)
    }) 
    
    // 點擊牌(一張)
    const card = document.querySelectorAll(".memory_card")
    console.log(card)


    for(var i=0; i<card.length; i++){
        card[i].addEventListener('click', function(event){
            card_click(event)
        })
    }

    
})

// 點擊牌(一張)
// const card = document.querySelectorAll(".memory_card")
// console.log(card)


// for(var i=0; i<card.length; i++){
//     card[i].addEventListener('click', function(event){
//         card_click(event)
//     })
// }





function card_click(event){
    console.log(event.target.parentNode.children[1])
    if(event.target.classList[0] == "memory_card") return // 把div的event給處理掉
    if(first_card !== undefined && second_card !== undefined) return // 防止快速點擊多張牌

    event.target.classList.add('flip') //front
    event.target.parentNode.children[0].classList.add('flip') //back 

    // 避免單張牌選兩次
    if(!has_flip){
        has_flip = true
        first_card = event.target.parentNode.children[0]
        return
    }
    else if(first_card === event.target.parentNode.children[0]) return

    else
        second_card = event.target.parentNode.children[0]

    card_match()
}



// 新增洗過的牌
function add_memory_card(alt, src){

    const card = document.createElement('div')
    const front = document.createElement('img')
    const back = document.createElement('img')

    back.alt = alt
    back.src = src
    front.src = data_front[0].src

    card.setAttribute('class', 'memory_card') // 動態修改一個 class 屬性()
    front.setAttribute('class', 'front')
    back.setAttribute('class', 'back')
    
    card.appendChild(back)
    card.appendChild(front)
    game.appendChild(card)

}



// 點擊牌(兩張)
// function card_2(){
//     if(first_card == undefined && second_card == undefined){
//          return
//     }
//     else if(first_card !== undefined && second_card == undefined){
        
//         return
//     }
//     else 
//         card_match()
// }

// 牌是否相同
function card_match(){
    console.log(first_card, second_card)

    if(first_card.alt === second_card.alt)
        reset_card()
    else
        unflip()    

    //直接蓋
    // if(first_card.alt !== second_card.alt){
        
    //     setTimeout(() => {
    //         first_card.parentNode.children[1].classList.remove('flip')
    //         first_card.classList.remove('flip')
    //         second_card.parentNode.children[1].classList.remove('flip')
    //         second_card.classList.remove('flip')
    //     }, "1500")
    // }
}

// 將配對失敗的牌翻回去
function unflip(){
    setTimeout(() => {
        first_card.parentNode.children[1].classList.remove('flip')
        first_card.classList.remove('flip')
        second_card.parentNode.children[1].classList.remove('flip')
        second_card.classList.remove('flip')
        reset_card()
    }, "1500")
}

// 把前一筆清空
function reset_card(){
    has_flip = false
    first_card = undefined
    second_card = undefined
    console.log(first_card, second_card)
}

// // 洗牌

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}






