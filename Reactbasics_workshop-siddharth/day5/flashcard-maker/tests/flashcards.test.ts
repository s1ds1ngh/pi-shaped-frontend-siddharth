import { describe, it, expect } from 'vitest';
import { parseFlashcards } from '../flashcards.ts';

describe('parseFlashcards', () => {
  it('parses simple term: definition lines', () => {
    const input = 'Hello: Hola\nGoodbye: Adiós';
    const cards = parseFlashcards(input);
    expect(cards).toEqual([
      { term: 'Hello', definition: 'Hola' },
      { term: 'Goodbye', definition: 'Adiós' },
    ]);
  });

  it('joins extra colons into the definition', () => {
    const input = 'HTTP: HyperText Transfer Protocol: widely used';
    const cards = parseFlashcards(input);
    expect(cards).toEqual([
      { term: 'HTTP', definition: 'HyperText Transfer Protocol: widely used' },
    ]);
  });

  it('ignores invalid and empty lines', () => {
    const input = 'NoColonHere\n: Missing term\nTerm:    \nValid: Ok';
    const cards = parseFlashcards(input);
    expect(cards).toEqual([
      { term: 'Valid', definition: 'Ok' },
    ]);
  });
});

