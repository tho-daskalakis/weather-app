function convertDegreesToDirection(degrees: number): string {
  // Reference: http://snowfence.umn.edu/Components/winddirectionanddegrees.htm
  const rotation = 22.5; // A sixteenth of a circle

  if (360 - rotation < degrees) {
    return 'North';
  } else if (360 - 3 * rotation < degrees) {
    return 'NorthWest';
  } else if (360 - 5 * rotation < degrees) {
    return 'West';
  } else if (360 - 7 * rotation < degrees) {
    return 'SouthWest';
  } else if (360 - 9 * rotation < degrees) {
    return 'South';
  } else if (360 - 11 * rotation < degrees) {
    return 'SouthEast';
  } else if (360 - 13 * rotation < degrees) {
    return 'East';
  } else if (360 - 15 * rotation < degrees) {
    return 'NorthEast';
  } else {
    // Degrees < 22.5
    return 'North';
  }
}

export { convertDegreesToDirection };
