import { render, screen } from '@testing-library/react'
import Header from '../component/Header'

describe("The header works ok", () => {

  test("The header is an H1 and has specific text", () => {
    render(<Header />)

    const headerTitle = screen.getByRole("heading", { level: 1, "name": /workout timer/i })

    expect(headerTitle).toBeInTheDocument()
  })

})