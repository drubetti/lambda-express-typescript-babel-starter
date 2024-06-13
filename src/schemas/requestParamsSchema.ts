import { Joi, Segments } from 'celebrate';

export interface ExampleParamsSchema {
	id: number;
}

export const exampleParamsSchema = Joi.object<ExampleParamsSchema>().keys({
	id: Joi.number(),
});

export default {
	[Segments.PARAMS]: exampleParamsSchema,
};
