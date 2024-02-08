import { product } from "../../db/sanity/schemas/product-schema"
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
