import * as dotenv from 'dotenv';
import Joi from 'joi';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object().keys({
    NODE_ENV: Joi.string()
        .valid('production', 'development', 'test')
        .required(),
    PORT: Joi.string().required().default(5000),
    CORS_ORIGIN: Joi.string().required().default('*'),
});

const { value, error } = envVarsSchema
    .prefs({ errors: { label: 'key' } })
    .validate(process.env, { abortEarly: false, stripUnknown: true });

if (error) {
    throw new Error(
        `Environment validation error: \n${error.details
            .map(detail => detail.message)
            .join('\n')}`,
    );
}

export const env = {
    nodeEnv: value.NODE_ENV,
    server: {
        port: value.PORT as number,
    },
    cors: {
        origin: value.CORS_ORIGIN as string,
    },
};
