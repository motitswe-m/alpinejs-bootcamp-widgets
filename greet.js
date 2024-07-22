function greet(name, language) {
  const greetings = {
    English: `Hello, `,
    Spanish: `Hola, `,
    French: `Bonjour, `,
  };
  return greetings[language] + name;
}

console.log(greet("Masego", "English")); // Hello, Masego!
console.log(greet("Masego", "Spanish")); // Hola, Masego!
console.log(greet("Masego", "French")); // Bonjour, Masego!
