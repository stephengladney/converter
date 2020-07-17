# :left_right_arrow: convert.ts

This is library I created in order to perform common conversions. If you'd like to add a conversion method, feel free to reach out to become a contributor.

## Helpful tips

- All methods that return numerical values can accept `{decimals: n}` as a parameter in the last method of the chain, where n is the number of decimals places.<br><br>
  _Example:_

```typescript
convertLength(2)
  .miles()
  .toKilometers() // 3.218688

convertLength(2)
  .miles()
  .toKilometers({ decimals: 2 }) // 3.22

convertLength(2)
  .miles()
  .toKilometers({ decimals: 0 }) // 3
```

## Methods

### `convertCase`

String from one casing to another.

<details open>
<summary>Supported cases</summary>
- camel
- const
- kabob
- pascal
- snake
- string
</details>
<br><br>
_Example:_

```typescript
convertCase("helloWorld").toPascal() // "HelloWorld"
```

### `convertTemperature`

Temperature from/to Celsius/Fahrenheit<br><br>
_Example:_

```typescript
convertTemperature(100).celsiusToFahrenheit() // 212
convertTemperature(32).fahrenheitToCelsius() // 0
```

### `convertLength`

Length from one unit to another (metric or imperial)<br><br>
_Example:_

```typescript
convertLength(2)
  .miles()
  .toKilometers() // 3.218688
```
