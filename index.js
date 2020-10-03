var bg = document.getElementById("particles-js")
// console.log(bg)
document.addEventListener("keydown", e => {
  bg.style.backgroundColor = getRandomColor()
  // alert("t'as appuyé sur", e.key)
  var k = e.key
  console.log(k)
  let audio
  switch (k){
    case "m":
      console.log("tu m?")
      break
    case "Enter": 
      bg.style.backgroundColor = "#90EE90"
      break;
    case "ArrowRight": 
      audio = new Audio("Clap1.wav")
      audio.play()
      break
    case "ArrowLeft": 
      audio = new Audio("kick.mp3")
      audio.play()
      break
    case "ArrowUp": 
      audio = new Audio("Kick1.wav")
      audio.play()
      break
    case "ArrowDown": 
      audio = new Audio("kick2.mp3")
      audio.play()
      break
    default:
      bg.style.backgroundColor = "#90EE90"
      console.log("choisis une lettre")
  }
})

const getRandomColor = () => {
  const hexStr  = "0123456789ABCDEF"
  let rnd
  
  let color = "#"
  while (color.length < 7) {
    for (let i = 0; i < 6; i++) {
      rnd = Math.floor(Math.random() * hexStr.length)
      let char = hexStr.slice(rnd, rnd+1)
      color += char
  
    }

  }

  console.log(color)
  return color
}