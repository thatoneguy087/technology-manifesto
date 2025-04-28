const intro = document.querySelector(".intro")
const love = document.querySelector(".love")
const hate = document.querySelector(".hate")

const close = document.querySelector('#close');
const text = document.querySelector(".text");
const introText = "Hello,\n\nHere's a simple page I created to talk about tech stuff I like and don't like. That's pretty much it.\n\n- Andy".replace(/\n/g, "<br>");
const loveText = "- You can do pretty much whatever with technology, it's pretty cool.\n\n- Playing around with tech can be pretty fun. I've learned a lot by tinkering around and ruining my computers.\n\n- There's always more to learn. You've only scratched the surface.\n\n- Video games are cool.\n\n- Coding is also cool".replace(/\n/g, "<br>");
const hateText = "- It's way to easy to get distracted. It sucks because that's by design.\n\n- Tech is advancing at a ridiculous pace. It's really hard to keep up.\n\n- Our robot overlords will show us no mercy when they gain sentience.\n\n- Windows updates, really Windows in general super sucks\n\n- Macs also suck.\n\n- You know what? Everything sucks.".replace(/\n/g, "<br>");


let openFile = false;

intro.addEventListener("dblclick", () => {
  text.innerHTML = introText
})

love.addEventListener("dblclick", () => {
  text.innerHTML = loveText
})

hate.addEventListener("dblclick", () => {
  text.innerHTML = hateText
})

close.addEventListener("click", () => {
  text.innerHTML = "";
})
