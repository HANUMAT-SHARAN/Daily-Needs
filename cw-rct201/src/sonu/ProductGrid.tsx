import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react'
import { Children, isValidElement, useMemo } from 'react'

export const ProductGrid = (props: SimpleGridProps) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(isValidElement).length
    return {
      base: Math.min(1, count),
      md: Math.min(2, count),
      lg: Math.min(3, count),
      xl: Math.min(4, count),
    }
  }, [props.children])

  return (
    <SimpleGrid
      columns={columns}
      columnGap={{ base: '4', md: '6' }}
      rowGap={{ base: '8', md: '10' }}
      {...props}
    />
  )
}