import React from 'react'
import { cleanup, render } from 'react-testing-library'
import 'jest-dom/extend-expect'
import Provider from '../src'

afterEach(cleanup)

describe('Provider', () => {
  it('should render children', () => {
    const { container } = render(<Provider>Hello</Provider>)
    expect(container).toHaveTextContent('Hello')
  })

  it('should render each positional prop', () => {
    const { getByText } = render(
      <Provider
        topLeft={() => <div>topLeft</div>}
        top={() => <div>top</div>}
        topRight={() => <div>topRight</div>}
        right={() => <div>right</div>}
        bottomRight={() => <div>bottomRight</div>}
        bottom={() => <div>bottom</div>}
        bottomLeft={() => <div>bottomLeft</div>}
        left={() => <div>left</div>}
      />
    )

    expect(getByText('topLeft')).toBeVisible()
    expect(getByText('top')).toBeVisible()
    expect(getByText('topRight')).toBeVisible()
    expect(getByText('right')).toBeVisible()
    expect(getByText('bottomRight')).toBeVisible()
    expect(getByText('bottom')).toBeVisible()
    expect(getByText('bottomLeft')).toBeVisible()
    expect(getByText('left')).toBeVisible()
  })
})
