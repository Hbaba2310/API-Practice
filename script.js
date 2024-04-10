const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

async function getQuote() {
  try {
    const res = await fetch("https://quotable.io/random");
    const data = await res.json();
    quote.textContent = data.content;
    author.textContent = data.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

/* Use of Promise.all() and Promise.any():
We can't use Promise.all() or Promise.any() in this scenario as we're only fetching a single quote. They are typically used when you have multiple asynchronous tasks to perform concurrently.

A function that uses web-workers:
Since web workers are typically used for heavy computations or tasks that don't block the main thread, and we're not performing such tasks here, it's not necessary to use a web worker in this scenario.
*/
