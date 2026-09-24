let notes = [12, 5, 19, 3, 27, 8, 14, 1];

function ordre() {
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes.length; j++) {
      if (notes[i] < notes[j]) {
        let temp = notes[i];
        notes[i] = notes[j];
        notes[j] = temp;
      }
    }
  }
  return notes;
}
console.log(ordre());
