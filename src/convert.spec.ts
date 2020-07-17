import { convertCase, convertLength, convertTemperature } from "./convert"

describe("convertCase", () => {
  var cases = ["Camel", "Const", "Kabob", "Pascal", "Snake", "String"]

  var casedText = {
    Camel: "helloWorld",
    Const: "HELLO_WORLD",
    Kabob: "hello-world",
    Pascal: "HelloWorld",
    Snake: "hello_world",
    String: "hello world"
  }

  cases.forEach(inputCase => {
    cases.forEach(outputCase => {
      test(`${inputCase} -> ${outputCase}`, () => {
        expect(convertCase(casedText[inputCase])[`to${outputCase}`]()).toEqual(
          casedText[outputCase]
        )
      })
    })
  })
})

describe("convertLength", () => {
  var units = [
    "Millimeters",
    "Centimeters",
    "Meters",
    "Kilometers",
    "Inches",
    "Feet",
    "Yards",
    "Miles"
  ]

  var twoMiles = {
    Millimeters: 3218687.99,
    Centimeters: 321868.8,
    Meters: 3218.688,
    Kilometers: 3.218688,
    Inches: 126720,
    Feet: 10560,
    Yards: 3520,
    Miles: 2
  }

  units.forEach(inputCase => {
    units.forEach(outputCase => {
      test(`${inputCase} -> ${outputCase}`, () => {
        expect(
          Number(
            convertLength(twoMiles[inputCase])
              [inputCase.toLowerCase()]()
              [`to${outputCase}`]()
              .toFixed(2)
          )
        ).toBeCloseTo(twoMiles[outputCase], 1)
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
