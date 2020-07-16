export function convertTemperature(temp: number) {
  const celsiusToFahrenheit = () => (temp / 5) * 9 + 32
  const fahrenheitToCelsius = () => ((temp - 32) * 5) / 9
  return {
    celsiusToFahrenheit,
    fahrenheitToCelsius
  }
}

export type ConvertCaseFormats =
  | "const"
  | "snake"
  | "kabob"
  | "camel"
  | "pascal"
  | "string"

export function convertCase(str: string) {
  return {
    from: (formatIn: ConvertCaseFormats) => {
      let wordArray = []
      switch (formatIn) {
        case "const":
        case "snake":
          wordArray = String(str).split("_")
          break
        case "kabob":
          wordArray = String(str).split("-")
          break
        case "camel":
        case "pascal":
          const wordStartIndexes = formatIn === "camel" ? [0] : []
          str
            .split("")
            .forEach((letter, i) =>
              letter === letter.toUpperCase() ? wordStartIndexes.push(i) : null
            )
          wordStartIndexes.forEach((index, i) => {
            const endOfWord = wordStartIndexes[i + 1]
            wordArray.push(str.substring(index, endOfWord).toLowerCase())
          })
          break
        default:
          wordArray = String(str).split(" ")
      }
      return {
        to: (formatOut: ConvertCaseFormats) => {
          switch (formatOut) {
            case "const":
              return wordArray.join("_").toUpperCase()
            case "snake":
              return wordArray.join("_").toLowerCase()
            case "kabob":
              return wordArray.join("-").toLowerCase()
            case "pascal":
            case "camel":
              return wordArray
                .map((word, i) => {
                  return i === 0 && formatOut === "camel"
                    ? word.toLowerCase()
                    : word.substr(0, 1).toUpperCase() +
                        word.substr(1).toLowerCase()
                })
                .join("")
            default:
              return wordArray.join(" ").toLowerCase()
          }
        }
      }
    }
  }
}
