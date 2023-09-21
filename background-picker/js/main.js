document.getElementById('rain').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue


function partyPurple () {
  document.querySelector('body').style.background = ('rgba(237, 181, 78, 1)')
  document.querySelector('body').style.color = ('white')
}

function partyGreen () {
  document.querySelector('body').style.background = ('rgba(0,253,81,1)')
  document.querySelector('body').style.color = ('white')
}

function partyBlue () {
  document.querySelector('body').style.background = ('rgba(0,254,255,1)')
  document.querySelector('body').style.color = ('white')
}