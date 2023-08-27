import { Note } from './note';

export const generateHighlightChord = (fretboard: Note[][], chord: Note[]) =>
  fretboard.map((string) => string.map((note) => chord.indexOf(note)));

export const generateHighlightScale = (fretboard: Note[][], scale: Note[]) =>
  fretboard.map((string) => string.map((note) => (scale.includes(note) ? 1 : -1)));
