let animHeader, animFirstQuestionRoad, animSecondQuestionRoad, animThirdQuestionRoad, animFourthQuestionRoad, animFifthQuestionRoad, animSixthQuestionRoad, animSeventhQuestionRoad, animEighthQuestionRoad

let headerAnimation = document.getElementById('headerAnimation');

function firstRoad() {

  if(window.innerWidth < 993) {
    animFirstQuestionRoad = bodymovin.loadAnimation({
      wrapper: firstQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'firstQuestionRoadTriggered',
      //path: '../../src/assets/data/1-movil.json'
      path: "https://www.ecestaticos.com/file/c6d1af332fc646f2c0b63ec794784cc4/1572515226-1-movil.json"

    });

  } else {
    //Header
    animHeader = bodymovin.loadAnimation({
      wrapper: headerAnimation,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'headerAnimationTriggered',
      //path: '../../src/assets/data/header-esc.json'
      path: "https://www.ecestaticos.com/file/5f789058eef87a845bef77b95c28b9d2/1572360268-header-esc.json"
    });

    //First Question
    animFirstQuestionRoad = bodymovin.loadAnimation({
      wrapper: firstQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'firstQuestionRoadTriggered',
      //path: '../../src/assets/data/1-esc.json'
      path: "https://www.ecestaticos.com/file/946d999a8a1a000c07fae8eef8a6ff71/1572360332-1-esc.json"
    });
  }

}

function secondRoad() {

  if(window.innerWidth < 993) {

    animSecondQuestionRoad = bodymovin.loadAnimation({
    wrapper: secondQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'secondQuestionRoadTriggered',
        //path: '../../src/assets/data/2-movil.json'
        path: "https://www.ecestaticos.com/file/a8850a7b589b78f5bc93c789953cd0c5/1572515248-2-movil.json"
  });

    
  } else {

    animSecondQuestionRoad = bodymovin.loadAnimation({
      wrapper: secondQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'secondQuestionRoadTriggered',
      //path: '../../src/assets/data/2-esc.json'
      path: "https://www.ecestaticos.com/file/e5cb21ee408c18e2e8051f92ef066d30/1572360334-2-esc.json"
    });


  }

}

function thirdRoad() {

  if(window.innerWidth < 993) {

    animThirdQuestionRoad = bodymovin.loadAnimation({
    wrapper: thirdQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'thirdQuestionRoadTriggered',
        //path: '../../src/assets/data/3-movil.json'
        path: "https://www.ecestaticos.com/file/69a5776e3373ce5b772363fc8a101141/1572515263-3-movil.json"
  });

    
  } else {

    animThirdQuestionRoad = bodymovin.loadAnimation({
      wrapper: thirdQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'thirdQuestionRoadTriggered',
      //path: '../../src/assets/data/3-esc.json'
      path: "https://www.ecestaticos.com/file/97c975070def6f4baf5035d14e425f60/1572360336-3-esc.json"
    });


  }

}

function fourthRoad() {

  if(window.innerWidth < 993) {

    animFourthQuestionRoad = bodymovin.loadAnimation({
    wrapper: fourthQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'fourthQuestionRoadTriggered',
        //path: '../../src/assets/data/4-movil.json'
        path: "https://www.ecestaticos.com/file/0cee4f916736e5d059acdad78153cf65/1572515274-4-movil.json"
  });

    
  } else {

    animFourthQuestionRoad = bodymovin.loadAnimation({
      wrapper: fourthQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'fourthQuestionRoadTriggered',
      //path: '../../src/assets/data/4-esc.json'
      path: "https://www.ecestaticos.com/file/4d97db5cd191e1d5f99eba314919d901/1572360338-4-esc.json"
    });


  }

}

function fifthRoad() {

  if(window.innerWidth < 993) {

    animFifthQuestionRoad = bodymovin.loadAnimation({
    wrapper: fifthQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'fifthQuestionRoadTriggered',
        //path: '../../src/assets/data/5-movil.json'
        path: "https://www.ecestaticos.com/file/bbad299c75aae7ca7349a806051693d4/1572515284-5-movil.json"
  });

    
  } else {

    animFifthQuestionRoad = bodymovin.loadAnimation({
      wrapper: fifthQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'fifthQuestionRoadTriggered',
      //path: '../../src/assets/data/5-esc.json'
      path: "https://www.ecestaticos.com/file/cf834e2f073dc80007ca630d5e8263db/1572360341-5-esc.json"
    });


  }

}

function sixthRoad() {

  if(window.innerWidth < 993) {

    animSixthQuestionRoad = bodymovin.loadAnimation({
    wrapper: sixthQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'sixthQuestionRoadTriggered',
        //path: '../../src/assets/data/6-movil.json'
        path: "https://www.ecestaticos.com/file/b66fc4a476fd0e8576fd693a7462c197/1572515295-6-movil.json"

  });

    
  } else {

    animSixthQuestionRoad = bodymovin.loadAnimation({
      wrapper: sixthQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'sixthQuestionRoadTriggered',
      //path: '../../src/assets/data/6-esc.json'
      path: "https://www.ecestaticos.com/file/91f3b7a38d3f59f975b61726a7d607f3/1572360344-6-esc.json"
    });


  }

}

function seventhRoad() {

  if(window.innerWidth < 993) {

    animSeventhQuestionRoad = bodymovin.loadAnimation({
    wrapper: seventhQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'seventhQuestionRoadTriggered',
        //path: '../../src/assets/data/7-movil.json'
        path: "https://www.ecestaticos.com/file/22fc1247882eb2b98e7b0a94197e4265/1572515306-7-movil.json"
  });

    
  } else {

    animSeventhQuestionRoad = bodymovin.loadAnimation({
      wrapper: seventhQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'seventhQuestionRoadTriggered',
      //path: '../../src/assets/data/7-esc.json'
      path: "https://www.ecestaticos.com/file/56384aa88e8c9bd1b5646adcceeb33fc/1572515933-7-esc.json"
    });


  }

}

function eighthRoad() {

  if(window.innerWidth < 993) {

    animEighthQuestionRoad = bodymovin.loadAnimation({
    wrapper: eighthQuestionRoad,
    renderer: 'svg',
        loop: false,
        autoplay: false,
        rendererSettings: {
            progressiveLoad:false,
            preserveAspectRatio: 'xMidYMid slice'
        },
        name: 'eighthQuestionRoadTriggered',
        //path: '../../src/assets/data/8-movil.json'
        path: "https://www.ecestaticos.com/file/686a33aa8b5f516a4adf17844e8d8a8d/1572515316-8-movil.json"
  });

    
  } else {

    animEighthQuestionRoad = bodymovin.loadAnimation({
      wrapper: eighthQuestionRoad,
      animType: 'svg',
      loop: false,
      autoplay: false,
      rendererSettings: {
        progressiveLoad:false,
        preserveAspectRatio: 'xMidYMid slice'
      },
      name: 'eighthQuestionRoadTriggered',
      //path: '../../src/assets/data/8-esc.json'
      path: "https://www.ecestaticos.com/file/d855c408fbf52608048994393dfa5afb/1572360348-8-esc.json"
    });

  }

}


export { firstRoad, secondRoad, thirdRoad, fourthRoad, fifthRoad, sixthRoad, seventhRoad, eighthRoad }