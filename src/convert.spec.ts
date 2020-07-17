import { convertCase, convertTemperature } from "./convert"

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
        expect(
          convertCase(casedText[inputCase])
            [`from${inputCase}`]()
            [`to${outputCase}`]()
        ).toEqual(casedText[outputCase])
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
