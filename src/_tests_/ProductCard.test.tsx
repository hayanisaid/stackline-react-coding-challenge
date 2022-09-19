import React from 'react'
import {render, screen} from '@testing-library/react'
import ProductCard from '../components/ProductCard'

const mockData = {
  title: 'Shark Ninja',
  image: 'https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg',
  subtitle: 'Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System',
  brand: 'Nutribullet',
  tags: ['Pantry', 'Obsolete', 'Blender', 'Lightning Deal']
}
test(' Expect ProductCard to render Correctly ', () => {
  render(<ProductCard details={mockData} />)
  // expect(screen.getAllByRole('img')).to(mockData.subtitle)
  // expect(screen.findByText(/Shark Ninja/i)).toBeInTheDocument()
  //   expect(screen.getByAltText(/`${mockData.subtitle}`/i)).toBeVisible()
})
