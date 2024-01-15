// Pig Latin translation function
function translateToPigLatin(inputText) {
  // Check for empty input or single-letter words
  if (inputText.trim() === "" || inputText.split(' ').some(word => word.length === 1)) {
    return "Input cannot be translated because it's empty or contains single-letter words.";
  }

  // Split the input text into words
  const words = inputText.split(' ');

  // Function to translate a single word to Pig Latin
  function translateWord(word) {
    // Define vowels for checking
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the word starts with a vowel
    if (vowels.includes(word[0].toLowerCase())) {
      return word + 'way'; // Append 'way' to the end
    } else {
      // Check if the word starts with two consonants
      if (!vowels.includes(word[1].toLowerCase())) {
        return word.slice(2) + word.slice(0, 2) + 'ay'; // Move two consonants to the end
      } else {
        return word.slice(1) + word[0] + 'ay'; // Move one consonant to the end
      }
    }
  }

  // Translate each word and join them back into a phrase
  const translatedWords = words.map(translateWord);
  const translatedPhrase = translatedWords.join(' ');

  return translatedPhrase;
}

// Example usage:
const inputText = prompt("Enter a sentence to translate to Pig Latin:");
const translatedText = translateToPigLatin(inputText);

if (inputText.trim() === "") {
  console.log("Input cannot be translated because it's empty.");
} else {
  console.log("Translated Pig Latin: " + translatedText);
}
