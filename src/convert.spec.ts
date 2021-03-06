import {
  convertCase,
  convertLength,
  convertTemperature,
  convertTime
} from "./convert"

describe("convertCase", () => {
  const cases = ["Camel", "Const", "Kabob", "Pascal", "Snake", "String"]

  const casedText = {
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
  const units = [
    "Millimeters",
    "Centimeters",
    "Meters",
    "Kilometers",
    "Inches",
    "Feet",
    "Yards",
    "Miles"
  ]

  const twoMiles = {
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

  test("applies appropriate float", () => {
    expect(
      convertLength(2)
        .miles()
        .toKilometers({ float: 2 })
    ).toEqual(3.22)
    expect(
      convertLength(2)
        .miles()
        .toMeters({ float: 1 })
    ).toEqual(3218.7)
    expect(
      convertLength(2)
        .miles()
        .toMeters({ float: 0 })
    ).toEqual(3219)
  })
})

describe("convertTemperature", () => {
  test("Celsius -> Fahrenheit", () => {
    expect(convertTemperature(0).celsiusToFahrenheit()).toEqual(32)
  })

  test("Fahrenheit -> Celsius", () => {
    expect(convertTemperature(32).fahrenheitToCelsius()).toEqual(0)
  })

  test("applies appropriate float", () => {
    expect(convertTemperature(28).fahrenheitToCelsius({ float: 2 })).toEqual(
      -2.22
    )
    expect(convertTemperature(38).celsiusToFahrenheit({ float: 1 })).toEqual(
      100.4
    )
  })
})

describe("convertTime", () => {
  const units = ["Seconds", "Minutes", "Hours", "Days", "Weeks", "Years"]
  const oneYear = {
    Seconds: 31536000,
    Minutes: 525600,
    Hours: 8760,
    Days: 365,
    Weeks: 52.142857142857146,
    Years: 1
  }

  units.forEach(inputCase => {
    units.forEach(outputCase => {
      test(`${inputCase} -> ${outputCase}`, () => {
        expect(
          Number(
            convertTime(oneYear[inputCase])
              [inputCase.toLowerCase()]()
              [`to${outputCase}`]()
              .toFixed(2)
          )
        ).toBeCloseTo(oneYear[outputCase], 1)
      })
    })
  })
})
