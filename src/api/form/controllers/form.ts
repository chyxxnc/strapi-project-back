/**
 * form controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::form.form', ({strapi}) => ({
    async getSchema(ctx) {
        try {
            const model = strapi.getModel('api::form.form');
            const fields = model.attributes;

            const filteredFields = Object.fromEntries(
                Object.entries(fields).filter(([key]) => ['title', 'memo'].includes(key))
            );

            ctx.body = {fields: filteredFields};
        } catch (error) {
            console.log(error);
        }
    },
}));
