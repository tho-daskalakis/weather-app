function convertDegreesToDirection(degrees: number): string {
  // Reference: http://snowfence.umn.edu/Components/winddirectionanddegrees.htm
  const rotation = 22.5; // A sixteenth of a circle

  if (360 - rotation < degrees) {
    return 'N';
  } else if (360 - 3 * rotation < degrees) {
    return 'NW';
  } else if (360 - 5 * rotation < degrees) {
    return 'W';
  } else if (360 - 7 * rotation < degrees) {
    return 'SW';
  } else if (360 - 9 * rotation < degrees) {
    return 'S';
  } else if (360 - 11 * rotation < degrees) {
    return 'SE';
  } else if (360 - 13 * rotation < degrees) {
    return 'E';
  } else if (360 - 15 * rotation < degrees) {
    return 'NE';
  } else {
    // Degrees < 22.5
    return 'N';
  }
}

export { convertDegreesToDirection };
