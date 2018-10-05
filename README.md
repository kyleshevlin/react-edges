# mdx-deck-edges

This is a Provider component that will enable you to put UI elements easily around the edges of your mdx-deck deck.

```jsx
<Provider
  bottomRight={() => <a href="https://twitter.com/kyleshevlin">@kyleshevlin</a>}
/>
```

### Props

The following props are all associated with the screen position they represent:

- `topLeft`
- `top`
- `topRight`
- `right`
- `bottomRight`
- `bottom`
- `bottomLeft`
- `left`

Each one is a render prop, receiving the props passed through from the mdx-deck Provider to this one.

| Prop   | Type     | Description                                                    |
| ------ | -------- | -------------------------------------------------------------- |
| index  | `Number` | The current slide index                                        |
| length | `Number` | The number of slides in the deck                               |
| mode   | `String` | The current mode (one of 'NORMAL', 'PRESENTER', or 'OVERVIEW') |
| notes  | `Object` | Custom speaker notes for all slides                            |
| step   | `Number` | The current visible step in an Appear component                |

There are additional props:

- `margin`: Defaults to `1em` - Represents the distance from the edge of the deck to the edge of the surrounding box for that position.
