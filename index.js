const main = document.querySelector("main")
const voicesSelect = document.getElementById("voices")
const textarea = document.getElementById("text")
const readBtn = document.getElementById("read")
const toggleBtn = document.getElementById("toggle")
const closeBtn = document.getElementById("close")
const textBox  = document.getElementById("text-box")


const data = [
  {
    image: './assets/drink.jpg',
    text: "I'm thirsty",
  },
  {
    image: './assets/food.jpg',
    text: "I'm Hungry"
  },
  {
    image: './assets/tired.jpg',
    text: "I'm Tired"
  },
  {
    image: './assets/hurt.jpg',
    text: "I'm Hurt"
  },
  {
    image: './assets/happy.jpg',
    text: "I'm Happy"
  },
  {
    image: './assets/angry.jpg',
    text: "I'm Angry"
  },
  {
    image: './assets/sad.jpg',
    text: "I'm Sad"
  },
  {
    image: './assets/scared.jpg',
    text: "I'm Scared"
  },
  {
    image: './assets/outside.jpg',
    text: 'I Want To Go Outside'
  },
  {
    image: './assets/home.jpg',
    text: 'I Want To Go Home'
  },
  {
    image: './assets/school.jpg',
    text: 'I Want To Go To School'
  },
  {
    image: './assets/grandma.jpg',
    text: 'I Want To Go To Grandmas'
  }
]


// Create speech boxes
const createBox = item => {
const box = document.createElement("div")
const { image, text } = item

box.classList.add("box")
box.innerHTML = `
<img src="${image}" alt="${text}" />
<p class="info">${text}</p>
`
box.addEventListener("click", ()=> {
  setTextMessage(text)
  speakText()

  // Add active effect
  box.classList.add("active")
  setTimeout(()=> box.classList.remove("active"),999)
})
main.appendChild(box)
}

// Init speech synth
const message = new SpeechSynthesisUtterance()


data.forEach(createBox)

// Store voices
let voices = []

const getVoices = () => {
  voices = speechSynthesis.getVoices()
  voices.forEach(voice => {
    const option = document.createElement("option")
    option.value = voice.name
    option.innerText = `${voice.name} ${voice.lang}`
    voicesSelect.appendChild(option)
  })
}
getVoices()

// Set text
const setTextMessage = (text) => {
  message.text = text
}

// Speak Text
const speakText = () => {
  speechSynthesis.speak(message)
}

// Set Voice
const setVoice = (e) => {
  message.voice = voices.find(voice => voice.name === e.target.value)
}

// Voices changed
speechSynthesis.addEventListener("voiceschanged", getVoices)

// Toggle text box
toggleBtn.addEventListener("click", ()=> {
  textBox.classList.toggle("show")
})

// Close Button
closeBtn.addEventListener("click", ()=> {
  textBox.classList.remove("show")
})

// Change voice
voicesSelect.addEventListener("change", setVoice)

// Read text button
readBtn.addEventListener("click", ()=> {
  setTextMessage(textarea.value)
  speakText()
})
