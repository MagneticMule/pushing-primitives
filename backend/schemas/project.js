export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Photographs',
      name: 'photographs',
      type: 'array',
      of: [{
        title: 'Photograph',
        type: 'reference',
        to: [{ type: 'post' }]
      }]
    }
  ],
}