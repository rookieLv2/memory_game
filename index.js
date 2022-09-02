
const card = document.querySelectorAll(".memory_card")


let first_card, second_card
let has_flip = false
let lock = false

// 點擊牌(一張)
for(var i=0; i<card.length; i++){
    card[i].addEventListener('click', function(event){
        // if(lock) return // 牌的配對狀態
        if(event.target.classList[0] == "memory_card") return // 把div的event給處理掉

        event.target.classList.add('flip') //front
        event.target.parentNode.children[0].classList.add('flip') //back 

        // 避免單張牌選兩次
        if(!has_flip){
            has_flip = true
            first_card = event.target.parentNode.children[0]
            return
        }

        second_card = event.target.parentNode.children[0]

        card_match()

        // 用class 的方式
        // x.classList.add('flip') //front
        // x.parentNode.children[0].classList.add('flip') //back

        // card_2(x.parentNode.children[0]) 
    })
}

// 點擊牌(兩張)
// function card_2(card_pokemon){
//     if(first_card==undefined && second_card==undefined){
//          first_card = card_pokemon 
//     }
//     else if(first_card!==undefined && second_card==undefined){
//         second_card = card_pokemon
//         card_match()
//     }
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
    [has_flip, lock] = [false, false]
    [first_card, second_card] = [null, null]
}

// // 洗牌

