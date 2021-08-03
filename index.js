const main = document.querySelector("main")
const voicesSelect = document.getElementById("voices")
const textarea = document.getElementById("text")
const readBtn = document.getElementById("read")
const toggleBtn = document.getElementById("toggle")
const closeBtn = document.getElementById("close")


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
main.appendChild(box)
}


data.forEach(createBox)
