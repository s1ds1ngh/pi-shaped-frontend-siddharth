export interface Flashcard {
  term: string;
  definition: string;
}

export function parseFlashcards(responseText: string): Flashcard[] {
  return responseText
    .split('\n')
    .map((line) => {
      const parts = line.split(':');
      if (parts.length >= 2 && parts[0].trim()) {
        const term = parts[0].trim();
        const definition = parts.slice(1).join(':').trim();
        if (definition) {
          return { term, definition };
        }
      }
      return null;
    })
    .filter((card): card is Flashcard => card !== null);
}

