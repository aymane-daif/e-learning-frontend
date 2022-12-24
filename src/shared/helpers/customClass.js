function fromLevelToColor(level) {
  switch (level) {
    case 'BEGINNER':
      return 'light-success';
    case 'INTERMEDIATE':
      return 'info';
    case 'EXPERT':
      return 'light-danger';
    default:
      return 'light-success';
  }
}
function fromPriceToColor(price) {
  switch (price) {
    case 'FREE':
      return 'light-success';
    case 'PREMIUM':
      return 'light-warning';
    default:
      return 'light-warning';
  }
}
export { fromLevelToColor, fromPriceToColor };
