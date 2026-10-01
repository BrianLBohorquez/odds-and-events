const bank = [];
const odds = [];
const evens = [];

function addNumber(n) {
  bank.push(n);
  render();
}

function sortOne() {
  if (bank.length === 0) {
    return;
  }
  const n = bank.shift();
  if (n % 2 === 0) {
    evens.push(n);
  } else {
    odds.push(n);
  }
  render();
}

function sortAll() {
  while (bank.length > 0) {
    sortOne();
  }
}

function NumberItem(n) {
  const $number = document.createElement("span");
  $number.textContent = n;
  return $number;
}

function NumberBank(label, numbers) {
  const $bank = document.createElement("section");
  $bank.innerHTML = `
    <h2>${label}</h2>
    <div></div>
  `;
  const $numbers = numbers.map(NumberItem);
  $bank.querySelector("div").replaceChildren(...$numbers);
  return $bank;
}

function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add a number
      <input name="number" type="number" />
    </label>
    <button>Add number</button>
    <button type="button" id="sortOne">Sort 1</button>
    <button type="button" id="sortAll">Sort All</button>
  `;

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData($form);
    const number = Number(data.get("number"));
    addNumber(number);
  });

  $form.querySelector("#sortOne").addEventListener("click", () => {
    sortOne();
  });

  $form.querySelector("#sortAll").addEventListener("click", () => {
    sortAll();
  });

  return $form;
}
