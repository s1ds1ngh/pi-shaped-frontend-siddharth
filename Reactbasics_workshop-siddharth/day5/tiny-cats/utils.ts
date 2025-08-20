import { marked } from 'marked';

export function parseError(errorText: string): string {
  const regex = /{"error":(.*)}/gm;
  const match = regex.exec(errorText);
  try {
    const errorJson = match && match[1] ? match[1] : '';
    const parsed = JSON.parse(errorJson);
    return parsed.message ?? errorText;
  } catch (_e) {
    return errorText;
  }
}

export async function addSlide(
  container: HTMLDivElement,
  text: string,
  image: HTMLImageElement,
): Promise<void> {
  const slide = document.createElement('div');
  slide.className = 'slide';
  const caption = document.createElement('div') as HTMLDivElement;
  caption.innerHTML = await marked.parse(text);
  slide.append(image);
  slide.append(caption);
  container.append(slide);
}

