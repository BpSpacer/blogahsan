// movie.ts
export default {
  name: 'movie',
  type: 'document',
  title: 'Movie',
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
          title: 'Button Text (e.g. Download, Watch Now)',
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      title: 'IMDb Rating',
      validation: (Rule: import('sanity').Rule) => Rule.min(0).max(10),
    },
    {
      name: 'audioLanguages',
      type: 'array',
      title: 'Audio Languages',
      of: [{ type: 'string' }],
      options: {
        list: ['HINDI', 'ENGLISH'],
        layout: 'tags',
      },
    },
    {
      name: 'genre',
      type: 'array',
      title: 'Genre',
      of: [{ type: 'string' }],
      options: {
        list: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi', 'Thriller', 'Animation'],
        layout: 'tags',
      },
    },
    {
      name: 'quality',
      type: 'string',
      title: 'Video Quality',
      options: {
        list: ['480p', '720p', '1080p', '4K'],
        layout: 'dropdown',
      },
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration (e.g. 2h 10m)',
    },
    {
      name: 'releaseYear',
      type: 'number',
      title: 'Release Year',
    },
    {
      name: 'trailerUrl',
      type: 'url',
      title: 'Trailer URL (YouTube or others)',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
};
