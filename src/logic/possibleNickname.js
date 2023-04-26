import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
  languages,
} from "unique-names-generator";

function RandomNickname() {
  const nicknamesArray = [
    uniqueNamesGenerator({ dictionaries: [adjectives, animals] }),
    uniqueNamesGenerator({ dictionaries: [adjectives, colors] }),
    uniqueNamesGenerator({ dictionaries: [adjectives, names] }),
    uniqueNamesGenerator({ dictionaries: [colors, names] }),
    uniqueNamesGenerator({ dictionaries: [colors, animals] }),
    uniqueNamesGenerator({ dictionaries: [colors, languages] }),
    uniqueNamesGenerator({ dictionaries: [languages, colors] }),
  ];

  return nicknamesArray[Math.trunc(Math.random() * nicknamesArray.length)];
}

export default RandomNickname;
