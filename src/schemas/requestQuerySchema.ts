import { Joi, Segments } from 'celebrate';

export interface ExampleQuerySchema {
	someBooleanParam?: boolean;
	someNumberParam?: number;
}

export const exampleQuerySchema = Joi.object<ExampleQuerySchema>().keys({
	someBooleanParam: Joi.boolean(),
	someNumberParam: Joi.number(),
});

export default {
	[Segments.QUERY]: exampleQuerySchema,
};
