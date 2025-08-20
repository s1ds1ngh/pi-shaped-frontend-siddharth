import { describe, it, expect } from 'vitest';
import { parseError, addSlide } from './utils.ts';

describe('parseError', () => {
  it('returns message from embedded JSON error string', () => {
    const input = 'Something went wrong {"error": {"message": "Bad API key"}}';
    expect(parseError(input)).toBe('Bad API key');
  });

  it('falls back to input if JSON not present', () => {
    const input = 'Plain error text';
    expect(parseError(input)).toBe(input);
  });
});

describe('addSlide', () => {
  it('appends a slide with image and rendered caption', async () => {
    const container = document.createElement('div') as HTMLDivElement;
    const image = document.createElement('img');
    image.src = 'data:image/png;base64,AAA=';
    await addSlide(container, 'Hello **world**', image);
    expect(container.children.length).toBe(1);
    const slide = container.children[0] as HTMLDivElement;
    expect(slide.className).toBe('slide');
    const [imgEl, captionEl] = Array.from(slide.children);
    expect((imgEl as HTMLImageElement).src).toContain('data:image/png;base64');
    expect((captionEl as HTMLDivElement).innerHTML.toLowerCase()).toContain('<strong>world</strong>');
  });
});

