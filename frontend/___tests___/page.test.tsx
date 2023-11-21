/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Hero from "../app/components/hero-main"

describe('Home', () => {
  it('Renders all headers', () => {
    render(<Hero />)

    const allHeadings = screen.getAllByRole('heading')
    expect(allHeadings.length).toBeGreaterThan(4);
    
  })
})