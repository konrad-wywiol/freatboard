import { Note, findNextNote } from './note';

export const generateChords = (scale: Note[]) => scale.map((s) => createChord(scale, s));

const createChord = (scale: Note[], startPoint: Note) => {
  return [
    findNextNote(scale, startPoint, 0),
    findNextNote(scale, startPoint, 2),
    findNextNote(scale, startPoint, 4),
    findNextNote(scale, startPoint, 6),
  ];
};
