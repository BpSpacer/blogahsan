import { type SchemaTypeDefinition } from 'sanity'
import courses from './courses'
import apps from './apps'
import shopify from './shopify'
import wordpress from './wordpress'
import softwares from './softwares'
import { post } from './post'
import { comment } from './comment'
import { tag } from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [courses, apps, shopify, wordpress, softwares, post, comment, tag],
}
