let TeamOneScore = 0
let TeamTwoScore = 0


function team1() {
    TeamOneScore += 1
    console.log(TeamOneScore)
    drawCode()
}

function team1More() {
    TeamOneScore += 3
    console.log(TeamOneScore)
    drawCode()
}

function team2() {
    TeamTwoScore += 1
    console.log(TeamTwoScore)
    drawCode()
}

function team2More() {
    TeamTwoScore += 3
    console.log(TeamTwoScore)
    drawCode()
}

function drawCode() {
    let codeElm1 = document.getElementById('TeamOneNum')
    codeElm1.innerText = TeamOneScore
    let codeElm2 = document.getElementById('TeamTwoNum')
    codeElm2.innerText = TeamTwoScore
}

function clearCode() {
    TeamOneScore = 0
    TeamTwoScore = 0
    drawCode()
}