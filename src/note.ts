export type Note = 'A' | 'A#' | 'B' | 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#';

export const chromaticScale: Note[] = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

export const findNextNote = (scale: Note[], startNote: Note, scaleInterval: number) => {
  if (scale.length < 1) {
    throw 'Scale is empty';
  }
  const result = scale.indexOf(startNote);

  if (result === -1) {
    throw `Cannot find ${startNote} in ${scale}`;
  }

  return scale[(result + scaleInterval) % scale.length];
};
