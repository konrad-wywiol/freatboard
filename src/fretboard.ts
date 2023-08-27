import { Note, chromaticScale, findNextNote } from './note';

export const generateFretboard = (tuning: Note[]) =>
  tuning.map((t) => Array.from({ length: 25 }).map((_, i) => findNextNote(chromaticScale, t, i)));
