import { generateChords } from './chords';
import { generateFretboard } from './fretboard';
import { renderHtml } from './generate';
import { generateHighlightChord, generateHighlightScale } from './hightlight';
import { Note } from './note';

declare global {
  interface Window {
    main(): void;
  }
  interface Document {
    getElementById(id: string): { value: string };
  }
}

export const main = () => {
  const inputScale: Note[] = [
    document.getElementById('chord1').value as Note,
    document.getElementById('chord2').value as Note,
    document.getElementById('chord3').value as Note,
    document.getElementById('chord4').value as Note,
    document.getElementById('chord5').value as Note,
    document.getElementById('chord6').value as Note,
    document.getElementById('chord7').value as Note,
  ];
  const inputFretboard: Note[] = [
    document.getElementById('string6').value as Note,
    document.getElementById('string5').value as Note,
    document.getElementById('string4').value as Note,
    document.getElementById('string3').value as Note,
    document.getElementById('string2').value as Note,
    document.getElementById('string1').value as Note,
  ];
  const chordIndex = Number(document.getElementById('chord-index').value);
  const fretboard = generateFretboard(inputFretboard);

  const highlight =
    chordIndex === -1
      ? generateHighlightScale(fretboard, inputScale)
      : generateHighlightChord(fretboard, generateChords(inputScale)[chordIndex]);

  renderHtml(fretboard, highlight);
};

window.main = main;
