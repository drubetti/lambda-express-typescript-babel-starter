import { Joi, Segments } from 'celebrate';

export interface ExampleBodySchema {
	someBooleanValue?: boolean;
	someNumberValue?: number;
	someStringValue?: string;
}

export const exampleBodySchema = Joi.object<ExampleBodySchema>().keys({
	someBooleanValue: Joi.boolean(),
	someNumberValue: Joi.number(),
	someStringValue: Joi.string().allow(''),
});

export default {
	[Segments.BODY]: exampleBodySchema,
};
