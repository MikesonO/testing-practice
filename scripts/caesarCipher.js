// Accepts a string and shift amunt and returns it with each character “shifted” by amount given.

export const caesarCipher = (str, shift) => {
  let cipher = "";
  let alphabet = /^[a-zA-Z]*$/

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(alphabet)) {
      const code = str.charCodeAt(i);
      // Uppercase letters
      if (code >= 65 && code <= 90) {
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    cipher += char;
  }

  return cipher;
}

