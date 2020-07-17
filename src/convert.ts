type DecimalPoints = { float: number }

function convertToFloat(val: number, d?: DecimalPoints) {
  return d ? Number(val.toFixed(d.float)) : val
}

export function convertTemperature(temp: number) {
  return {
    celsiusToFahrenheit: (d?: DecimalPoints) =>
      convertToFloat((temp / 5) * 9 + 32, d),
    fahrenheitToCelsius: (d?: DecimalPoints) =>
      convertToFloat(((temp - 32) * 5) / 9, d)
  }
}

export function convertLength(n: number) {
  let inMillimeters: number

  const outputMethods = {
    toCentimeters: (d?: DecimalPoints) => convertToFloat(inMillimeters / 10, d),
    toFeet: (d?: DecimalPoints) =>
      convertToFloat(inMillimeters / (25.4 * 12), d),
    toInches: (d?: DecimalPoints) => convertToFloat(inMillimeters / 25.4, d),
    toKilometers: (d?: DecimalPoints) =>
      convertToFloat(inMillimeters / 1000000, d),
    toMeters: (d?: DecimalPoints) => convertToFloat(inMillimeters / 1000, d),
    toMiles: (d?: DecimalPoints) =>
      convertToFloat(inMillimeters / (25.4 * 12 * 5280), d),
    toMillimeters: (d?: DecimalPoints) => convertToFloat(inMillimeters, d),
    toYards: (d?: DecimalPoints) =>
      convertToFloat(inMillimeters / (25.4 * 12 * 3), d)
  }
  const inputMethods = {
    millimeters: () => {
      inMillimeters = n
      return outputMethods
    },
    centimeters: () => {
      inMillimeters = n * 10
      return outputMethods
    },
    meters: () => {
      inMillimeters = n * 1000
      return outputMethods
    },
    kilometers: () => {
      inMillimeters = n * 1000000
      return outputMethods
    },
    inches: () => {
      inMillimeters = n * 25.4
      return outputMethods
    },
    feet: () => {
      inMillimeters = n * 25.4 * 12
      return outputMethods
    },
    yards: () => {
      inMillimeters = n * 25.4 * 12 * 3
      return outputMethods
    },
    miles: () => {
      inMillimeters = n * 25.4 * 12 * 5280
      return outputMethods
    }
  }
  return inputMethods
}

/**```typescript
 *convertCase("helloWorld").toPascal() // "HelloWorld"
 * ```
 */
export function convertCase(str: string) {
  let wordArray = []
  if (str.includes("_")) wordArray = str.split("_")
  else if (str.includes("-")) wordArray = str.split("-")
  else if (str.includes(" ")) wordArray = str.split(" ")
  else {
    const isLowerCase = str[0] === str[0].toLowerCase()
    const wordStartIndexes = isLowerCase ? [0] : []
    str
      .split("")
      .forEach((letter, i) =>
        letter === letter.toUpperCase() ? wordStartIndexes.push(i) : null
      )
    wordStartIndexes.forEach((index, i) => {
      const endOfWord = wordStartIndexes[i + 1]
      wordArray.push(str.substring(index, endOfWord).toLowerCase())
    })
  }
  return {
    toConst: () => wordArray.join("_").toUpperCase(),
    toKabob: () => wordArray.join("-").toLowerCase(),
    toSnake: () => wordArray.join("_").toLowerCase(),
    toPascal: () =>
      wordArray
        .map(
          (word, i) =>
            word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
        )
        .join(""),
    toCamel: () =>
      wordArray
        .map((word, i) => {
          return i === 0
            ? word.toLowerCase()
            : word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
        })
        .join(""),
    toString: () => wordArray.join(" ").toLowerCase()
  }
}
