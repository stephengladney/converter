import { convertCase, ConvertCaseFormats, convertTemperature } from "./convert"

var caseTypes: ConvertCaseFormats[] = [
  "camel",
  "const",
  "kabob",
  "pascal",
  "snake",
  "string"
]
var casedText = {
  camel: "helloWorld",
  const: "HELLO_WORLD",
  kabob: "hello-world",
  pascal: "HelloWorld",
  snake: "hello_world",
  string: "hello world"
}

describe("convertCase", () => {
  caseTypes.forEach(caseType1 => {
    caseTypes.forEach(caseType2 => {
      test(`${caseType1} -> ${caseType2}`, () => {
        expect(
          convertCase(casedText[caseType1])
            .from(caseType1)
            .to(caseType2)
        ).toEqual(casedText[caseType2])
        // })
      })
    })
  })
})

describe("convertTemperature", () => {
  it("converts Celsius to Fahrenheit", () => {
    expect(convertTemperature(0).celsiusToFahrenheit()).toEqual(32)
    expect(convertTemperature(32).fahrenheitToCelsius()).toEqual(0)
  })
})
