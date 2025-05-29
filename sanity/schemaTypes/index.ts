import { type SchemaTypeDefinition } from 'sanity'
import courses from './courses'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courses],
}
