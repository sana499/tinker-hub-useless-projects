const insults = {
  1: [
    "You're as sharp as a marble.",
    "I'd agree with you, but then we'd both be wrong.",
    "You have the charm of a wet sock."
  ],
  2: [
    "Your brain is like the Bermuda Triangle – ideas go in and are never seen again!",
    "You're as useful as a screen door on a submarine.",
    "If ignorance is bliss, you must be the happiest person alive!"
  ],
  3: [
    "You're the reason shampoo has instructions.",
    "If I threw a stick, you'd leave, right?",
    "You’re about as bright as a burned-out light bulb."
  ]
};

// Array of images for display
const images = [
  'https://placekitten.com/200/200',
  'https://placebear.com/200/200',
  'https://picsum.photos/200/200',
  'https://baconmockup.com/200/200',
  'https://loremflickr.com/200/200/face'
];



function generateInsult(level) {
  // Display elements
const insultElement = document.getElementById("insult");
const imageContainer = document.getElementById("imageContainer");
const characterContainer = document.getElementById("characterContainer");
  console.log('callede');
  
  // Select a random insult from the level chosen
  const randomInsult = insults[level][Math.floor(Math.random() * insults[level].length)];
  if(insultElement){
    insultElement.innerHTML = randomInsult;
  }
  

  // Select a random image and apply to imageContainer
  const randomImage = images[Math.floor(Math.random() * images.length)];
  imageContainer.style.backgroundImage = `url(${randomImage})`;
  imageContainer.style.transform = 'scale(1.1)';
  setTimeout(() => {
    imageContainer.style.transform = 'scale(1)';
  }, 300);
}


document.addEventListener("DOMContentLoaded", function () {
  // Array of insults organized by levels
 
  function createStars() {
    const starContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      const size = Math.random() * 3 + 2;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starContainer.appendChild(star);
    }
  }

  createStars();
});
