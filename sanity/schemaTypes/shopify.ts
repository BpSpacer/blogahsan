export default {
  name: 'shopify',
  type: 'document',
  title: 'Shopify',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
    },
    {
      name: 'actionLink',
      type: 'object',
      title: 'Action Link',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button Text (e.g. Download, ReadMore, ClickMe)',
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },
    {
      name: 'type',
      type: 'string',
      title: 'Shopify Type',
      options: {
        list: ['FREE', 'PAID'],
        layout: 'radio',
      },
    },
    {
      name: 'worth',
      type: 'number',
      title: 'Course Worth (in USD)',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};
