export default {
  routes: [
    {
      method: 'GET',
      path: '/forms/schema',
      handler: 'api::form.form.getSchema',
      config: {
        auth: false,
      },
    },
  ],
} as const;