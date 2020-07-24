import { firstRoad, secondRoad, thirdRoad, fourthRoad, fifthRoad, sixthRoad, seventhRoad, eighthRoad } from "./utils/roads";
import { humanize } from "./utils/number-to-word";

let header = document.getElementById(`header`);
let wrapHeader = document.getElementsByClassName(`wrap--header`)[0];
let arrow = document.getElementsByClassName(`arrow`)[0];
let road = document.getElementsByClassName(`road`)[1];
let roads = document.querySelectorAll('.inner__container .road');
let roadsArr = Array.prototype.slice.call(roads);
let firstQuestion = document.getElementById(`firstQuestionRoad`);
let firstValue = firstQuestion.getAttribute(`data-value`) - 1;
let firstInteraction = false;
let displayedFirstRoad = false;
let displayedAllRoads = false; 

let innerContainer = document.getElementsByClassName(`inner__container`)[0];
let initValue = 0;
let initToTranslate;

let containerBg = document.getElementsByClassName(`container-bg`)[0];
let intro;
let question = document.getElementsByClassName(`question`)[0];
let innerArrow = document.querySelectorAll(`.intro__arrow`);

let wrapQuestions = document.getElementsByClassName('wrap--questions')[0];
let initValueQuestions = 0;
let wrapQuestionsCurrent;

let answer = document.getElementsByClassName('wrap--result')[0];
let restartBtn = document.getElementById(`restartBtn`);

let wrapQuestionTotalTranslated;
let scroll;

let robotInfoBtn, robotInfoBubble

let structure;
let structureList = document.querySelectorAll(`.structure`);
let structureListArr = Array.prototype.slice.call(structureList);
let structuresShowedArr = [];

let containerList = document.querySelectorAll(`.container`);
let containerListArr = Array.prototype.slice.call(containerList);

let returnToInitBtn = document.getElementById(`returnToInitBtn`);
let returnToInitBtnClicked = false;
let currentRoad;

let barPeppers = document.getElementsByClassName(`meter-container`)[0];
let peppersArr = [];
let pepperImg, currentPepper, peppersIconsArr;
let peppersIcons = document.getElementsByClassName("pepper");
let pepper = "https://www.ecestaticos.com/file/b89622e4c6d1b276ee294e0622ee2ddc/1571049235-pepper-cabeza-gris.png";

let resultImg = document.getElementsByClassName('result')[0];
let result, resultNumber;

let shareArr = Array.prototype.slice.call(document.getElementsByClassName(`share__icon`));

let valuesArr = [];

let innerScroll = false;

let roadsFnArr = [secondRoad, thirdRoad, fourthRoad, fifthRoad, sixthRoad, seventhRoad, eighthRoad]

let structureArr = [`https://www.ecestaticos.com/file/1cb4455b2ea8fdf5fdea325391146aa1/1591872874-1-plantas-eolicas.svg`,
                    `https://www.ecestaticos.com/file/bf2e6e1461bde60d928477388a5af865/1591872877-2-paneles-solares.svg`,
                    `https://www.ecestaticos.com/file/38cc56788195232e8e3ca36eef9a6bd2/1591872880-3-hidraulica.svg`,
                    `https://www.ecestaticos.com/file/b35170a7ead3f73cec340b624a398471/1591872887-4-geotermica.svg`,
                    `https://www.ecestaticos.com/file/af2073eff15ddd507391a2d3ca4310d3/1591872889-5-gas-natural-renovable.svg`,
                    `https://www.ecestaticos.com/file/0457249f8da49287631783f78273d5a2/1591872891-6-mareomotriz.svg`,
                    `https://www.ecestaticos.com/file/35099c35a02f595ce130e3e6c22f918b/1591872901-7-futuro.svg`];

let titleSectionArr = [`https://www.ecestaticos.com/file/031c05c6da0e1d395b002747cc1a509f/1570463238-energiasrenovables.svg`,
                    `https://www.ecestaticos.com/file/f5892bbe5ff81f788edcb094ae9aa7b7/1571038916-energiaeolica.svg`,
                    `https://www.ecestaticos.com/file/0c154c0ad6e52e268d3ce46be8ef5965/1571039203-energiasolar.svg`,
                    `https://www.ecestaticos.com/file/c5b53d17cac3f73fa58635ad26f276f0/1571059370-energiahidraulica.svg`,
                    `https://www.ecestaticos.com/file/95a06e8e9471f77ec929699f0a6f8855/1571059561-energiageotermica.svg`,
                    `https://www.ecestaticos.com/file/feb2e8cc832101b94074234033921383/1573130653-gasnaturalrenovable-1.svg`,
                    `https://www.ecestaticos.com/file/536b77c8be4e829419f13e7f568f9012/1571060098-energiamareomotriz.svg`,
                    `https://www.ecestaticos.com/file/9ca70e5ec75abf47c0536e844de2a74c/1571060147-elfuturo.svg`];


let correctArrMobile = [`https://www.ecestaticos.com/file/244291a34918b1fe72a28da75845985a/1572537348-esoes.svg`,
                      `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                      `https://www.ecestaticos.com/file/9c55222073d8f26f1c2600cb6f6de16f/1572182278-tusiquesabes.svg`,
                      `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                      `https://www.ecestaticos.com/file/b3ac9e8e1f209d5a313eb04fb1b46b57/1572182424-yalosabias.svg`,
                      `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                      `https://www.ecestaticos.com/file/4bcc22a51737af5d683d2afa6407de32/1572182676-comolosabias_.svg`,
                      `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`];


let wrongArrMobile = [`https://www.ecestaticos.com/file/d86a03dab62eb87fdc40cb1fffbfa726/1572181889-casi.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/67f6d6c88cca90d572f9aee4dbae7220/1572182276-creoqueno.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/ee557cbdc79393a3a44dc06b2821eac0/1572182412-error.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/b62fe4a2459079ceabce17269abfaaf3/1572182672-estaeradificil.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`];

let correctArrDesktop = [`https://www.ecestaticos.com/file/244291a34918b1fe72a28da75845985a/1572537348-esoes.svg`,
                        `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                        `https://www.ecestaticos.com/file/c612872dac66579a99bcf1e4d0d7791d/1572295123-tusiquesabes-2.svg`,
                        `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                        `https://www.ecestaticos.com/file/cd6512e9afb10acd87670231d4b07098/1572254142-yalosabias-1.svg`,
                        `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`,
                        `https://www.ecestaticos.com/file/4277bbc12fa0b6d0189eabd17cb514af/1572254613-comolosabias_-1.svg`,
                        `https://www.ecestaticos.com/file/f474cf6e024e5f891295414cd38fc897/1572182129-muybien.svg`];

let wrongArrDesktop = [`https://www.ecestaticos.com/file/37141af04d0865b61c0bd04427fc8850/1572250801-casi-1.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/1b4259a96b54993ae91d96dc97162eaa/1572252887-creoqueno-1.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/e9c8644fe3226e57aa32bc4250c5ac5e/1572254219-error-1.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`,
                      `https://www.ecestaticos.com/file/f57826761d4a58ea3167511fac0b6355/1572255367-estaeradificil-1.svg`,
                      `https://www.ecestaticos.com/file/d95111ec77a93292badb7aba7544b4b1/1572182131-ups.svg`];


let finishResultArrMobile = [`https://www.ecestaticos.com/file/b914a950dca1ab696bed564b676257d5/1571233661-cero.svg`,
                            `https://www.ecestaticos.com/file/f54cba8ec9e22c72268df3158cd38111/1571233988-one-mobile.svg`,
                            `https://www.ecestaticos.com/file/c9d97a38b2f32ca5c31741806d175964/1571238235-two-mobile.svg`,
                            `https://www.ecestaticos.com/file/d4a1bc62325f71260c4433b034041433/1571238360-three-mobile.svg`,
                            `https://www.ecestaticos.com/file/fe418120663083c6468e16223439e105/1571238425-four-mobile.svg`,
                            `https://www.ecestaticos.com/file/0b1e04a794fe65b505a779caafb9a338/1571238493-five-mobile.svg`,
                            `https://www.ecestaticos.com/file/c382ff750e919881c761259cc74f9694/1571238564-six-mobile.svg`,
                            `https://www.ecestaticos.com/file/9c3bedd8168bb5b7c18c0574c2351ec9/1571238626-seven-mobile.svg`,
                            `https://www.ecestaticos.com/file/fcd389cb8cdead9070f21c38a45601ea/1571238698-eight-mobile.svg`];

let finishResultArrDesktop = [`https://www.ecestaticos.com/file/b914a950dca1ab696bed564b676257d5/1571233661-cero.svg`,
                            `https://www.ecestaticos.com/file/751fe42f9b1b317bdb37846f7800d8cd/1571238264-one-desktop.svg`,
                            `https://www.ecestaticos.com/file/a4fac4eae57b323eb024566d30582514/1571238238-two-desktop.svg`,
                            `https://www.ecestaticos.com/file/4d309c05c198576640c98b1d5a8d6839/1571238362-three-desktop.svg`,
                            `https://www.ecestaticos.com/file/caf7ba91a5f3d334a423b44d5aa5d570/1571238427-four-desktop.svg`,
                            `https://www.ecestaticos.com/file/3d6a0a9440cd659ff625a89f501a03b5/1571238498-five-desktop.svg`,
                            `https://www.ecestaticos.com/file/bdcaa484fcf72e619668f4dbef894e9a/1571238566-six-desktop.svg`,
                            `https://www.ecestaticos.com/file/0905a08373546bf7d3bb180a66fa155b/1571238629-seven-desktop.svg`,
                            `https://www.ecestaticos.com/file/294fe8fc1ed6c30bb2d8d426e6147599/1571238701-eight-desktop.svg`];

//******* INIT PROJECT
firstRoad();
calcTotalQuestions();

window.onload = function() {
  triggerAnimHeader();
  hideChargeLayout();
}

arrow.addEventListener(`click`, triggerFirstRoad);
window.addEventListener(`resize`, calcWindowHeight);
window.addEventListener(`wheel`, triggerFirstRoad);
window.document.addEventListener('keyup', function(e) {
  if(e.keyCode === 40 || e.which === 40) {
    triggerFirstRoad();
  }
});

if(isDevice()) {
  window.addEventListener(`touchend`, triggerFirstRoad);
}

//*******

// QUESTION BUTTONS
let btnQuestion = document.querySelectorAll(`.btn-question`);
let btnQuestionArr = Array.prototype.slice.call(btnQuestion);
for( var i = 0; i < btnQuestionArr.length; i++) {

  btnQuestion[i].addEventListener('click', function() {

    console.log(`ey ` + this.textContent )

    let parent = this.parentElement.parentElement.parentElement.parentElement;
    let roadContainer = parent.parentElement;
    
    if(!isDevice()) {
      setTimeout(function(){
        parent.querySelector('.intro-position').classList.add('hidden');
        parent.querySelector('.question-position').classList.add('hidden');
        parent.querySelector('.answer-position').classList.add('visible');
      }, 200)
    } else {
        parent.querySelector('.intro-position').classList.add('hidden');
        parent.querySelector('.question-position').classList.add('hidden');
        parent.querySelector('.answer-position').classList.add('visible');
    }

    if(isDevice()) {
      parent.classList.add('no-scroll');
    }

    //Array for reinit structures to visible
    if(parent.parentElement.getAttribute(`id`) != "firstQuestionRoad") {
      structuresShowedArr.push(parent.querySelector('.structure.hidden'));
    }

    //Display Answer
    let roadValue = parseInt(roadContainer.getAttribute('data-value'));
    let answerText = parent.querySelector(`.answer-robot__text`);
    let robotAnswer = parent.querySelector(`.answer-robot__container`)
    let questionValue = this.getAttribute(`data-value`);

    displayAnswerFromQuestion(questionValue, roadValue, answerText);
    displayRobotAnswer(questionValue, robotAnswer);
    if(!isDevice()) {
      setTimeout(function() {
        toggleRobotInfo(robotAnswer)
      }, 1000);
    }

    //Upload result in meter
    currentPepper = peppersIcons[roadValue - 1];
    uploadPepperResult(currentPepper, questionValue);

    //keep values from questions
    valuesArr.push(questionValue)

  });

}


// ANSWER BUTTONS
let btn = document.querySelectorAll('.btn');
let btnArr = Array.prototype.slice.call(btn);

for( var i = 0; i < btnArr.length; i++) {

  btn[i].addEventListener('click', function(){

    let parent = this.parentElement.parentElement.parentElement.parentElement;
    let parentValue = parseInt(parent.getAttribute('data-value'));
    let currentSibling;


    if(parentValue < roadsArr.length) {

      containerBg.classList.remove(`visible`);
      parent.querySelector('.container.visible').classList.remove(`visible`);

      // Upload current values
      currentSibling = roadsArr[parentValue];
      parent.classList.remove('current-road');
      currentSibling.classList.add('current-road');

      // Display structure to visible
      structure = currentSibling.querySelector('.structure');
      structure.style.height = "auto";

      // Translate roads
      wrapQuestionsCurrent = parent.clientHeight + initValueQuestions;
      wrapQuestions.style.transform = `translateY(-${wrapQuestionsCurrent}px`;
      initValueQuestions = wrapQuestionsCurrent;

      //Translate containerBg
      setTimeout(function(){
        containerBg.style.transform = `translateY(${wrapQuestionsCurrent}px)`;
        structure.style.transform = `translateY(${wrapQuestionsCurrent}px)`;
      }, 500);
      
      // Trigger Animation
      let currentSiblingId = currentSibling.getAttribute(`id`);
      setTimeout( function(){
        bodymovin.play(`${currentSiblingId}Triggered`);
      }, 1000);

      // Disabled returnBtn
      returnToInitBtn.classList.add('unclicked');

      showContainer(currentSibling);
      displayTitleSection(currentSibling);

      

    } else {
      showTotalResults();
      parent.querySelector('.step.answer-position.visible').classList.remove('visible');

    }

    // Display roads
    if( returnToInitBtnClicked == false ) {
      // normal way
      if(displayedAllRoads == false) {
        if(parentValue <= roadsFnArr.length - 1) {
          roadsFnArr[parentValue]();
        }

        if(parentValue <= structureArr.length) {
          // Display structure 
          structure.src = structureArr[parentValue - 1];
        }

      }
    } else {
      // returnBtn clicked
      if(displayedAllRoads == false) {
        if(parentValue >= currentRoad) {
          roadsFnArr[parentValue]();
          
          // Display structure 
          structure.src = structureArr[parentValue - 1];
        }


      }
    }
    
  });
}

//******* RESTART GAME BUTTONS
restartBtn.addEventListener(`click`, () => {
  displayedAllRoads = true;
  answer.classList.remove(`visible`);
  restartGame();
  if(!isDevice()) {
    restartStructures();
  }
  
});

returnToInitBtn.addEventListener(`click`, () => {
  currentRoad = document.getElementsByClassName('road current-road')[0].getAttribute('data-value');
  returnToInitBtn.classList.remove(`visible`);
  returnToInitBtnClicked = true;
  restartGame();

  if(!isDevice()) {
    if(currentRoad > 1) {
      restartStructures();
    }
  }
  
});



//******* FUNCTIONS' GAME
const calcWindowHeight = function() {return road.clientHeight};
function isMobile() {return window.innerWidth < 768;}
function isDevice() {return window.innerWidth < 993;}

function triggerAnimHeader() {
  if(!isDevice()) {
    setTimeout(function(){
      bodymovin.play('headerAnimationTriggered');
    }, 3000)    
  }
}



function triggerFirstRoad() {
   if(firstInteraction == false) {
      header.classList.add(`hidden`);
      firstQuestion.classList.add(`current-road`);

      translateQuestions();

      setTimeout( function(){
        bodymovin.play(`firstQuestionRoadTriggered`);
      }, 1000);
      showContainer(firstQuestion);
      displayTitleSection(firstQuestion);

      
      if(!isDevice()) {
        setTimeout(function(){
          returnToInitBtn.classList.add(`visible`);
          barPeppers.classList.add(`visible`);
        }, 3000);
      } else {
        setTimeout(function(){
          returnToInitBtn.classList.add(`visible`);
          barPeppers.classList.add(`visible`);
        }, 4000);
      }
      
    }
    firstInteraction = true;   
    
    if(displayedFirstRoad == false) {
      displayContentMeter();
      textReinitBtn();
      roadsFnArr[firstValue]();
    }

    displayedFirstRoad = true;
}

function translateQuestions() {
  initToTranslate = initValue + road.clientHeight;
  if(!isDevice()) {
    wrapHeader.style.transform = `translateY(-${initToTranslate}px)`;
    innerContainer.style.transform = `translateY(-${initToTranslate}px)`;
  } else {
    wrapHeader.style.transform = `translateY(-${header.clientHeight}px)`;
    innerContainer.style.transform = `translateY(-${header.clientHeight}px)`;
  }

}

function showContainer(el) {
  if(el.className === 'road current-road') {
    let container = el.querySelector('.container');
    let currentIntro = el.querySelector('.intro');
    let currentQuestion = el.querySelector('.question');
    let currentRobot = el.querySelector('.robot__container');

    innerScroll = true;
    displayRobotQuestion(currentRobot);


    //Container visible
    if(!isDevice()) {

      setTimeout( function(){
        container.classList.add(`visible`);
        toggleRobotInfo(el);
        if(el.getAttribute(`id`) != `firstQuestionRoad`) {
          // Enabled returnBtn
          returnToInitBtn.classList.remove('unclicked');
          containerBg.classList.add(`visible`);
        }
      }, 3000);
    } else {
      setTimeout(function(){
        // Enabled returnBtn
          returnToInitBtn.classList.remove('unclicked');
        container.classList.add(`visible`);
        containerBg.classList.add(`visible`);
        toggleRobotInfo(el);
      }, 5000);
    }


    //Get value from wrapQuestions for Inner Scroll
    if(el.getAttribute(`id`) != `firstQuestionRoad`) {
      valueWrapQuestions();
      
    } else {
      wrapQuestionTotalTranslated = 0;
    }

    //INNER SCROLL
    if(innerScroll == true) {

      if(!isDevice()) {

      //SCROLL EVENT FOR DESKTOP
      el.addEventListener(`wheel`, function(){

        scroll = (el.offsetTop - el.offsetTop) + (container.scrollTop - wrapQuestionTotalTranslated);
        let reference = currentIntro.offsetTop + currentIntro.clientHeight;

        // Show & hide intro & question
        if(scroll >= reference) {
          currentIntro.classList.add('hidden');
          currentQuestion.classList.add('visible');
        } else {
          currentIntro.classList.remove('hidden');
          currentQuestion.classList.remove('visible');
        }


        // Show & hide bg in desktop & structure
        if(el.getAttribute(`id`) == `firstQuestionRoad`) {
          if(!isDevice()) {
            if(scroll >= reference) {
              containerBg.classList.add(`visible`);
            } else {
              containerBg.classList.remove(`visible`);
            }
          }
        } else {
          if(!isDevice()) {
            if(scroll >= reference) {
              structure.classList.add(`hidden`);
            } else {
              structure.classList.remove(`hidden`);
            }
          }
        }
      });

      } else {
        //TOUCH EVENT FOR DEVICE

        el.addEventListener(`touchmove`, function() {
          scroll = (el.offsetTop - el.offsetTop) + (container.scrollTop - wrapQuestionTotalTranslated);
          let reference = currentIntro.offsetTop + currentIntro.clientHeight;

          // Show & hide intro & question
          if(scroll >= reference) {
            currentIntro.classList.add('hidden');
            currentQuestion.classList.add('visible');
          } else {
            currentIntro.classList.remove('hidden');
            currentQuestion.classList.remove('visible');
          }
          // Show & hide bg in desktop
          if(!isDevice()) {
            if(scroll >= reference) {
              containerBg.classList.add(`visible`);
            } else {
              containerBg.classList.remove(`visible`);
            }
          }
        });
      }
      
    }// END OF INNER SCROLL

  }
}


function toggleRobotInfo(el) {

  robotInfoBtn = el.querySelector(`.info`);
  robotInfoBubble = el.querySelector(`.bubble`);

  robotInfoBtn.addEventListener(`click`, () => {
    robotInfoBtn.classList.toggle(`info-close`);
    robotInfoBubble.classList.toggle(`visible`);
  });
}


function displayTitleSection(el) {
  if(el.className === 'road current-road') {
    let idValue = el.getAttribute(`data-value`);
    let imgTitleSection = el.querySelector('.intro-title');
    imgTitleSection.src = titleSectionArr[idValue - 1];
  }  
}

function displayRobotQuestion(el) {

  el.innerHTML = `<div class="info info-close"></div>
                  <div class="bubble visible"><p>¡Hola! Soy Pepe, el robot de Naturgy experto en energías renovables</p></div>
                  <div class="robot"></div>`
}

function displayAnswerFromQuestion(value, number, img) {

  let n = number - 1;

  if(value == `true`) {

    if(isDevice()) {
      img.src = correctArrMobile[n];
    } else {
      img.src = correctArrDesktop[n];
    }

  } else {

    if(isDevice()) {
      img.src = wrongArrMobile[n];
    } else {
      img.src = wrongArrDesktop[n];
    }

  }

}

function displayRobotAnswer(value, el){

  if (value == `true`) {
    if(isDevice()) {
      el.innerHTML = `<div class="robot robot-correct"></div>`
    } else {
      el.innerHTML = `<div class="info"></div>
                    <div class="bubble"><p>¡Hola! Soy Pepe, el robot de Naturgy experto en energías renovables</p></div>
                    <div class="robot robot-correct"></div>`
    }
  } else {
    if(isDevice()) {
      el.innerHTML = `<div class="robot robot-wrong"></div>`
    } else {
      el.innerHTML = `<div class="info"></div>
                    <div class="bubble"><p>¡Hola! Soy Pepe, el robot de Naturgy experto en energías renovables</p></div>
                    <div class="robot robot-wrong"></div>`
    }
  }

}




function toggleRobotAnswer(el) {
  let robotInfoAnswer = el.querySelector(`.bubble`)
}


function textReinitBtn() {

  let textBtn = document.getElementsByClassName(`btn-return__text`)[0];

  if(isDevice()) {
    textBtn.textContent = "Inicio";
  } else {
    textBtn.textContent = "Volver a empezar";
  }

}

function showTotalResults() {
  answer.classList.add(`visible`);
  barPeppers.classList.remove(`visible`);
  returnToInitBtn.classList.remove(`visible`);
  displayResult();
  setRRSSLinks();
}


function displayResult() {
    result = valuesArr.filter(isTrue);
    resultNumber = result.length;

    if(!isMobile()) {
      resultImg.src = finishResultArrDesktop[resultNumber]
    } else {
      resultImg.src = finishResultArrMobile[resultNumber]
    }

    let resultWord = humanize(resultNumber);
    resultImg.alt = `¡Has acertado ${resultWord} de ocho!`;

    let resultForSharing = resultImg.alt

    for(var i = 0;i < shareArr.length;i++) {
      shareArr[i].setAttribute("data-text", resultForSharing);
    }
    
}

function isTrue(value) {
  if(value == "true") {
    return value
  }
  
}


function restartGame() {

  //SHOW CHARGE LAYOUT
  document.getElementsByClassName(`charge`)[0].classList.add(`visible`);

  //RESTART VALUES
  initValue = 0;
  initValueQuestions = 0;
  result = 0;
  resultNumber = 0;
  valuesArr = [];

  //RESTART ROADS AND CONTAINER POSITIONS
  wrapHeader.style.transform = `translateY(${initValueQuestions}px)`;
  innerContainer.style.transform = `translateY(${initValueQuestions}px)`;
  wrapQuestions.style.transform = `translateY(${initValueQuestions}px`;
  containerBg.style.transform = `translateY(${initValueQuestions}px)`;

  //RESTART STYLES
  header.classList.remove(`hidden`);
  barPeppers.classList.remove(`visible`)
  containerBg.classList.remove(`visible`);
  document.getElementsByClassName(`road current-road`)[0].classList.remove(`current-road`);

  reinitInnerContainers();
  restartInnerScrollsPosition();

  firstInteraction = false;

  //RESTART METER
  peppersIconsArr = Array.prototype.slice.call(peppersIcons)
  for(var i = 0;i < peppersIconsArr.length;i++) {
    peppersIconsArr[i].src = `https://www.ecestaticos.com/file/b89622e4c6d1b276ee294e0622ee2ddc/1571049235-pepper-cabeza-gris.png`;
  }
  
  //RESTART ROADS ANIMATIONS
  bodymovin.goToAndStop(0);

  triggerAnimHeader();

  hideChargeLayout();
}

function valueWrapQuestions() {
    let wrapQuestionTotalTranslated = wrapQuestions.style.transform.match(/(\d+)/)[0];
    return wrapQuestionTotalTranslated
}

function restartStructures() {

  for(var i = 0; i < structuresShowedArr.length;i++) {
      structuresShowedArr[i].classList.remove(`hidden`);
    }

  // Height=0 in order to keep scrollable inner sections
  for(var i = 0; i < structureListArr.length;i++) {
    structureListArr[i].style.height = 0;
  }

}

function restartInnerScrollsPosition() {

  for(var i = 0; i < containerListArr.length;i++) {
    containerListArr[i].scrollTop = 0;
  }

}

function reinitInnerContainers() {
  let allContainers = document.querySelectorAll(`.container`);
  let allIntrosContainers = document.querySelectorAll(`.intro-position`);
  let allIntros = document.querySelectorAll(`.intro`);
  let allQuestionsContainers = document.querySelectorAll(`.question-position`);
  let allQuestions = document.querySelectorAll(`.question`);
  let allAnswers = document.querySelectorAll(`.answer-position`);

  for (var i = 0; i < allContainers.length; i++) {
    allContainers[i].classList.remove(`visible`);
    if(isDevice()) {
      allContainers[i].classList.remove('no-scroll');
    }
  }

  for (var i = 0; i < allIntrosContainers.length; i++) {
    allIntrosContainers[i].classList.remove(`hidden`);
  }

  for (var i = 0; i < allIntros.length; i++) {
    allIntros[i].classList.remove(`hidden`);
  }

  for (var i = 0; i < allQuestionsContainers.length; i++) {
    allQuestionsContainers[i].classList.remove(`hidden`);
  }

  for (var i = 0; i < allQuestions.length; i++) {
    allQuestions[i].classList.remove(`visible`);
  }

  for (var i = 0; i < allAnswers.length; i++) {
    allAnswers[i].classList.remove(`visible`);
  }

}

function hideChargeLayout() {

  setTimeout(function(){
    document.getElementsByClassName(`charge`)[0].classList.remove(`visible`);
  }, 1500); 

}


// Functions to display peppers according number of questions
function calcTotalQuestions() {

    for(var i = 0; i < roadsArr.length;i++){
      peppersArr.push(pepper)[i];
    }
    return peppersArr
}

function displayContentMeter() {

  for(var i = 0; i < peppersArr.length;i++){
    barPeppers.innerHTML += createPepper(peppersArr[i]);
  }

}

function createPepper(n) {

  pepperImg = `<img src="${n}" width="30" height="30" alt="pepper" class="pepper">`;
  return pepperImg

}

//Function to upload result in peppers
function uploadPepperResult(n, value){

  if(value === 'true') {
    n.src = `https://www.ecestaticos.com/file/ae29da4355d9dd99cd4e1131361064da/1571050853-pepper-cabeza-verde.png`;
  } else {
    console.log(value)
    n.src = `https://www.ecestaticos.com/file/3f4b9de939521688c02d788e44f015a3/1571050920-pepper-cabeza-rojo.png`;
  }

}


function setRRSSLinks() {
    var urlPage = window.location.href;

    //Facebook
    var shareFB = document.getElementById("shareFB")
    var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage
    shareFB.setAttribute("href",fbHref)

    //Twitter
    var shareTW = document.getElementById("shareTW")
    var twText = shareTW.getAttribute("data-text")
    var twHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+twText+"&original_referer="+urlPage
    shareTW.setAttribute("href",twHref)

    //Linkedin
    var shareLK = document.getElementById("shareLK")
    var lkText = shareLK.getAttribute("data-text")
    var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source="
    shareLK.setAttribute("href",lkHref)

    //WhatsApp
    var shareWA = document.getElementById("shareWA")
    var waText = shareWA.getAttribute("data-text")
    var waHref = "https://api.whatsapp.com/send?text="+waText+" "+urlPage
    shareWA.setAttribute("href",waHref)
}