function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getFirstNPrimes(n) {
  const primes = [];
  let number = 2;
  while (primes.length < n) {
    if (isPrime(number)) {
      primes.push(number);
    }
    number++;
  }
  return primes;
}

function generateHTML(primesList) {
  const ul = document.getElementById("primeList");
  ul.innerHTML = ""; // Limpar a lista antes de adicionar os novos números primos
  primesList.forEach(prime => {
    const li = document.createElement("li");
    li.textContent = prime;
    ul.appendChild(li);
  });
}

function checkPrime() {
  const inputNumber = parseInt(document.getElementById("numberInput").value);
  if (isNaN(inputNumber)) {
    alert("Por favor, insira um número válido!");
    return;
  }

  const isInputPrime = isPrime(inputNumber);
  if (isInputPrime) {
    alert(`${inputNumber} é um número primo!`);
  } else {
    
    alert(`${inputNumber} não é um número primo.`);
  }

  const firstTenPrimes = getFirstNPrimes(10);
  generateHTML(firstTenPrimes);
}