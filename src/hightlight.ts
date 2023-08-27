import { Note } from './note';

export const generateHighlight = (fretboard: Note[][], chord: Note[]) =>
  fretboard.map((string) => string.map((note) => chord.indexOf(note)));
