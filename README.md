# react-edges

Let me be up front. This is a simple component anyone could write, but I didn't want to write it twice.

This component allows you to easily add markup around the _edges_ of the viewport. My use case? I needed a component that would allow me to add my [Twitter handle](https://twitter.com/kyleshevlin) to each of my slides in an [mdx-deck](https://github.com/jxnblk/mdx-deck) presentation. You can create a custom `Provider` component to an mdx-deck theme, and this worked perfectly.

## Installation

```bash
npm install react-edges
```

## Usage

`Edges` has eight render props, one for each corner and side, that each expose whatever props are passed through. Thus, you have access to anything the parent component provided `Edges`

For example, in a mdx-deck, a Provider component is given the length of the slides and the current index. We can display something like a Twitter handle in one corner, and use these passed through props to create a slide counter in another. Like so:

```javascript
import Edges from 'react-edges'

const Provider = props => (
  <Edges
    {...props}
    bottomLeft={({ index, length }) => (
      <div>{`${index + 1} of ${length}`}</div>
    )}
    bottomRight={() => <a href="https://twitter.com/kyleshevlin">@kyleshevlin</a>}
  >
)
```

## Props

The following props are all associated with the screen position they represent:

- `topLeft`
- `top`
- `topRight`
- `right`
- `bottomRight`
- `bottom`
- `bottomLeft`
- `left`

Each one is a render prop, receiving any props passed to Edges that are not one of these positional props, or the `margin` prop discussed below.

- `margin`: Defaults to `1em` - Represents the distance from the edge of the deck to the edge of the surrounding box for that position.

## License

MIT. See LICENSE.md file.
