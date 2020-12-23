const generateReadableCreationDate = () => {
  const date = new Date();
  const dateNumbers = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  const dateArray = date.toString().split(" ");
  const convertedMonth = dateNumbers[dateArray[1]];
  return `${dateArray[2]}-${convertedMonth}-${dateArray[3]}`;
};

module.exports = { generateReadableCreationDate };
