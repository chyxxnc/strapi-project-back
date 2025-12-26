/**
 * form controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::form.form', ({strapi}) => ({
    async getSchema(ctx) {
        try {
            const model = strapi.getModel('api::form.form');
            const fields = model.attributes;

            // 전체 컬럼 출력
            console.log(model);

            const filteredFields = Object.fromEntries(
                // 시스템 필드 제거 (콘텐츠 필드만 보이도록)
                Object.entries(fields).filter(([key]) => !['createdAt', 'updatedAt', 'publishedAt', 'createdBy', 'updatedBy', 'locale', 'localizations'].includes(key))
            );

            ctx.body = {fields: filteredFields};
        } catch (error) {
            console.log(error);
        }
    },
}));
