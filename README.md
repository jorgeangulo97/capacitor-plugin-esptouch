# capacitor-plugin-esptouch

ESP32 plugin for ios

## Install

```bash
npm install capacitor-plugin-esptouch
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`openMap(...)`](#openmap)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

--------------------


### openMap(...)

```typescript
openMap(options: OpenMapOptions) => any
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openmapoptions">OpenMapOptions</a></code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### OpenMapOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`latitude`**  | <code>number</code> |
| **`longitude`** | <code>number</code> |

</docgen-api>
