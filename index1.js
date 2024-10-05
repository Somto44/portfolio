
let timer = document.getElementById("time1")
let timer2 = document.getElementById("time12")
let timer12 = document.getElementById("time2")
let time22 = document.getElementById("time22")
let time3 = document.getElementById("time3")
let time33 = document.getElementById("time33")
//let strtimer = timer.toString()
let start1 = document.getElementById("start1")
let firstside = "24"
let secondside = "60"
let numss = Number(secondside)
let numfs = Number(firstside)
let pauseit = document.getElementById("pause")
let play = document.getElementById("play")
let count
let reducefs 
let resetnum
let pomdo = document.getElementById("pomodro")
let shortB = document.getElementById("break1")
let firstside2 = "4"
let secondside2 = "60"
let numss2 = Number(secondside2)
let numfs2 = Number(firstside2)
let count2
let pauseit2 = document.getElementById("pause2")
let play2 = document.getElementById("play2")
let reduce2 
let resetnum2
let firstside3 = "9"
let secondside3 = "60"
let numss3 = Number(secondside3)
let numfs3 = Number(firstside3)
let pauseit3 = document.getElementById("pause3")
let play3 = document.getElementById("play3")
let count3
let reduce3
let resetnum3
function tick() {
      play.style.display = "none"
      pauseit.style.display = "block"
      count = setInterval(() => {
        //console.log(numss -= 1)
         numss -= 1
        timer.innerHTML = `: ${numss}`
        //if(numss < 1) {
          //clearInterval(count)
          
          
      //}
      if(numss < 10) {
        timer.innerHTML = `: 0${numss}`
      }
       
      },1000)
       reducefs = setInterval(() => {
        numfs -= 1
      console.log(numfs)
      timer2.innerHTML = ` ${numfs}`
      if(numfs == 0) {
        clearInterval(reducefs)
      }
       },60000)

       resetnum = setInterval(() => {
        //if(numss < 0) {
         // numss = 59
          
      //}
         numss = 60
         if(numss < -1) {
            clearInterval(resetnum)
            numss = 0
         }
       },60000)
  
      //if(numss == 0 && numfs == 0) {
        //clearInterval(count)
        //clearInterval(reducefs)
      //}
    
      
  
}



function pause() {
  play.style.display = "block"
  pauseit.style.display = "none"
  console.log("hey")
  play.style.top = "-320px"
  play.style.left = "328px"
  clearInterval(count)
  clearInterval(reducefs)
  clearInterval(resetnum)
}

function pause2() {
  play2.style.display = "block"
  pauseit2.style.display = "none"
  play2.style.top = "-320px"
  play2.style.left = "328px"
  clearInterval(count2)
  clearInterval(reduce2)
  clearInterval(resetnum2)
}

function playit() {
  play.style.display = "none"
  pauseit.style.display = "block"
  let start = tick()
  start
  console.log("Testing")
  
}

function shortbk() {
  pomdo.style.textDecoration = "none"
  shortB.style.textDecoration = "underline"


}

//function pom() {
  //timer.style.display = "block"
  //pomdo.style.textDecoration = "underline"
  //shortB.style.textDecoration = "none"
  //timer2.style.display = "block"
//}

function tick2() {
  play2.style.display = "none"
  pauseit2.style.display = "block"

  count2 = setInterval(() => {
    numss2 -= 1
    time22.innerHTML = `: ${numss2}`

    if(numss2 < 10) {
      time22.innerHTML = `: 0${numss2}`
    }
  },1000)

  reduce2 = setInterval(() => {
    numfs2 -= 1
  console.log(numfs2)
  timer12.innerHTML = ` ${numfs2}`
  if(numfs2 == 0) {
    clearInterval(reduce2)
  }
   },60000)

   resetnum2 = setInterval(() => {
    //if(numss < 0) {
     // numss = 59
      
  //}
     numss2 = 60
     if(numss2 < -1) {
        clearInterval(resetnum)
        numss2 = 0
     }

     
   },60000)
   if(numfs2 < 1) {
    clearInterval(resetnum2)
   }
  
}

function playit2() {
  play2.style.display = "none"
  pauseit2.style.display = "block"
  let start2 = tick2()
  start2
  console.log("Testing")
}

function tick3() {
  play3.style.display = "none"
  pauseit3.style.display = "block"

  count3 = setInterval(() => {
    numss3 -= 1
    time33.innerHTML = `: ${numss3}`

    if(numss3 < 10) {
      time33.innerHTML = `: 0${numss3}`
    }
  },1000)

  reduce3 = setInterval(() => {
    numfs3 -= 1
  console.log(numfs3)
  time3.innerHTML = ` ${numfs3}`
  if(numfs3 == 0) {
    clearInterval(reduce3)
  }
   },60000)

   resetnum3 = setInterval(() => {
    //if(numss < 0) {
     // numss = 59
      
  //}
     numss3 = 60
     if(numss3 < -1) {
        clearInterval(resetnum3)
        numss3 = 0
     }
   },60000)



}

function pause3() {
  play3.style.display = "block"
  pauseit3.style.display = "none"
  console.log("hey")
  play3.style.top = "-320px"
  play3.style.left = "328px"
  clearInterval(count3)
  clearInterval(reduce3)
  clearInterval(resetnum3)
}

function playit3() {
  play3.style.display = "none"
  pauseit3.style.display = "block"
  let start3 = tick3()
  start3
  console.log("Testing")
  
}


