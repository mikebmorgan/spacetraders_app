function abbreviateNumber(numberString) {
  // Convert the string to a number
  let number = parseFloat(numberString);
  
  // Calculate the magnitude of the number
  let magnitude = Math.floor(Math.log10(number) / 3);
  
  // Determine the abbreviation suffix and format the number accordingly
  let formattedNumber;
  switch (magnitude) {
    case 0:
      formattedNumber = (number / 1000).toFixed(1) + 'K';
      break;
    case 1:
      formattedNumber = (number / 1000000).toFixed(1) + 'M';
      break;
    case 2:
      formattedNumber = (number / 1000000000).toFixed(1) + 'B';
      break;
    case 3:
      formattedNumber = (number / 1000000000000).toFixed(1) + 'T';
      break;
    case 4:
      formattedNumber = (number / 1000000000000000).toFixed(1) + 'Q';
      break;
    default:
      formattedNumber = '?';
      break;
  }
  
  return formattedNumber;
}

export { abbreviateNumber };