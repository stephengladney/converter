export function convertTemperature(temp: number) {
  const celsiusToFahrenheit = () => (temp / 5) * 9 + 32
  const fahrenheitToCelsius = () => ((temp - 32) * 5) / 9
  return {
    celsiusToFahrenheit,
    fahrenheitToCelsius
  }
}

export function measurement(n: number) {}

export type ConvertCaseFormats =
  | "const"
  | "snake"
  | "kabob"
  | "camel"
  | "pascal"
  | "string"

/**```typescript
 *"const" | "snake" | "kabob" | "camel" | "pascal" | "string"
 *
 *convertCase("helloWorld").from("camel").to("pascal")
 *=> "HelloWorld"
 * ```
 */
export function convertCase(str: string) {
  let wordArray = []
  const outputMethods = {
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

  return {
    fromConst: () => {
      wordArray = String(str).split("_")
      return outputMethods
    },
    fromSnake: () => {
      wordArray = String(str).split("_")
      return outputMethods
    },
    fromKabob: () => {
      wordArray = String(str).split("-")
      return outputMethods
    },
    fromCamel: () => {
      const wordStartIndexes = [0]
      str
        .split("")
        .forEach((letter, i) =>
          letter === letter.toUpperCase() ? wordStartIndexes.push(i) : null
        )
      wordStartIndexes.forEach((index, i) => {
        const endOfWord = wordStartIndexes[i + 1]
        wordArray.push(str.substring(index, endOfWord).toLowerCase())
      })
      return outputMethods
    },
    fromPascal: () => {
      const wordStartIndexes = []
      str
        .split("")
        .forEach((letter, i) =>
          letter === letter.toUpperCase() ? wordStartIndexes.push(i) : null
        )
      wordStartIndexes.forEach((index, i) => {
        const endOfWord = wordStartIndexes[i + 1]
        wordArray.push(str.substring(index, endOfWord).toLowerCase())
      })
      return outputMethods
    },
    fromString: () => {
      wordArray = String(str).split(" ")
      return outputMethods
    }
  }
}
