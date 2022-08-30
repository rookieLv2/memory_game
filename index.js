const game = document.querySelector(".memory_game")
const card = document.querySelectorAll(".memory_card")
const front = document.querySelectorAll(".front")

let first_card 
let second_card 

// 點擊牌(一張)
for(var i=0; i<card.length; i++){
    card[i].addEventListener('click', function(event){
        let x = event.target
        if(x.classList[0] == "memory_card") return // 把div的event給處理掉
        // console.log(x) 

        x.style.transform = 'rotateY(180deg)' //front
        x.parentNode.children[0].style.transform = 'rotateY(0deg)' //back
        card_2(x.parentNode.children[0]) 
    })
}

// 點擊牌(兩張)
function card_2(card_pokemon){
    if(first_card==undefined && second_card==undefined){
         first_card = card_pokemon
         
    }
    else if(second_card==undefined){
        second_card = card_pokemon
        card_check(first_card, second_card)
        
    }
    
}
// method牌是否相同
function card_check(first_card, second_card){
    console.log(first_card.parentNode.children[1], second_card)

    // 直接翻回來
    if(first_card.alt !== second_card.alt){
        
        setTimeout((first_card, second_card,) => {
            console.log(first_card, second_card)
            // first_card.parentNode.children[1].style.transform = 'rotateY(0deg)'
            // first_card.style.transform = 'rotateY(180deg)'
            // second_card.parentNode.children[1].style.transform = 'rotateY(0deg)'
            // second_card.style.transform = 'rotateY(180deg)'
          }, "2000")
        
    }
    
    first_card = undefined
    second_card = undefined

    
    // chech alt
}
    






// 洗牌

