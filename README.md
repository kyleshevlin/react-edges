# mdx-deck-edges

This is a Provider component that will enable you to put UI elements easily around the edges of your mdx-deck deck.

```jsx
<Provider
  bottomRight={<a href="https://twitter.com/kyleshevlin">@kyleshevlin</a>}
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

There are additional props:

- `margin`: Defaults to `1em` - Represents the distance from the edge of the deck to the edge of the surrounding box for that position.
