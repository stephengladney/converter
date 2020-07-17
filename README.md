# Helpful Tips

- All methods that return numerical values can accept `{decimals: n}` in the last method of the chain, where n is the number of decimals places

# Methods

**convertCase** - convert a string from one casing to another<br>
_Supported cases: camel, const, kabob, pascal, snake, string_

```typescript
convertCase("helloWorld").toPascal() // "HelloWorld"
```

**convertTemperature** - convert a temperature from/to Celsius/Fahrenheit

```typescript
convertTemperature(100).celsiusToFahrenheit() // 212
convertTemperature(32).fahrenheitToCelsius() // 0
```

**convertLength** - convert a length from one unit to another (metric or imperial)

```typescript
convertLength(2)
  .miles()
  .toKilometers() // 3.218688

convertLength(2)
  .miles()
  .toKilometers({ decimals: 2 }) // 3.22
```
