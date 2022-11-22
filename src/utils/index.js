export const convertToLetterGrade = (score) => {
  if (score === 4) {
    return 'A'
  } else if (score === 3) {
    return 'B'
  } else if (score === 2) {
    return 'C'
  } else if (score === 1) {
    return 'D'
  } else if (score === 0) {
    return 'F'
  }
}
