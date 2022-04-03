let cardArray = [ 
    { name: "bonbon", img: "bonbon.png", }, 
    { name: "bonbon", img: "bonbon.png", },
    { name: "derpy", img: "derpy.png", },
    { name: "derpy", img: "derpy.png", }, 
    { name: "doctor", img: "doctor.png", },
    { name: "doctor", img: "doctor.png", }, 
    { name: "lyra", img: "lyra.png", },
    { name: "lyra", img: "lyra.png", },
    { name: "octavia", img: "octavia.png", },
    { name: "octavia", img: "octavia.png", },
    { name: "vinyl", img: "vinyl.png", },
    { name: "vinyl", img: "vinyl.png", }, 
    ]; 
    
    //define variables and get DOM element
    
    let grid = document.querySelector(".grid"); 
    let scoreBoard = document.querySelector(".scoreBoard"); 
    let popup = document.querySelector(".popup"); 
    let playAgain = document.querySelector(".playAgain"); 
    let clickBoard = document.querySelector(".clickBoard"); 
    let imgs; 
    let cardsId = []; 
    let cardsSelected = []; 
    let cardsWon = 0; 
    let clicks = 0;

    document.addEventListener("DOMContentLoaded", function () {
        //define functions 
        
        createBoard(grid, cardArray); 
        arrangeCard();
        playAgain.addEventListener("click", next_level); 
        
        //add a click function for images 
        
        imgs = document.querySelectorAll("img");
        Array.from(imgs).forEach(img => 
        img.addEventListener("click", flipCard)
        ) 
        });

        //createBoard function

function createBoard(grid, array) { 
    popup.style.display = "none"; 
    array.forEach((arr, index) => { 
    let img = document.createElement("img"); 
    img.setAttribute("src", "blank.png");
    img.setAttribute("data-id", index); 
    grid.appendChild(img); 
    })
    }
    
    // arrangeCard function
    
    function arrangeCard() { 
    cardArray.sort(() => 0.5 - Math.random())
    }
    
    // flip Card function
    
    function flipCard() { 
    let selected = this.dataset.id;
    cardsSelected.push(cardArray[selected].name); 
    cardsId.push(selected); 
    this.classList.add("flip"); 
    this.setAttribute("src", cardArray[selected].img); 
    if (cardsId.length === 2) { 
    setTimeout(checkForMatch, 500);
    } 
    }

    // checkForMatch function

function checkForMatch() { 
    let imgs = document.querySelectorAll("img"); 
    let firstCard = cardsId[0];
    let secondCard = cardsId[1];
    if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) { 
    alert("you have found a match"); 
    cardsWon += 1; 
    scoreBoard.innerHTML = cardsWon; 
    setTimeout(checkWon,500) 
    } else { 
    imgs[firstCard].setAttribute("src", "blank.png");
    imgs[secondCard].setAttribute("src", "blank.png"); alert("wrong, please try again"); imgs[firstCard].classList.remove("flip"); imgs[secondCard].classList.remove("flip"); 
    } 
    cardsSelected = []; 
    cardsId = []; 
    clicks += 1; 
    clickBoard.innerHTML = clicks; 
    }
    
    function checkWon() {
    if (cardsWon == cardArray.length / 2) {
    alert("You won") 
    setTimeout(()=> popup.style.display = "flex" ,300); 
    }
    }

    // The next level function

function next_level() { 
   window.location = "level4.html";
    }