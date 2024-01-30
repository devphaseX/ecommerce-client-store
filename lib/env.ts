import { TypeOf, object, string } from 'zod';

const getRequiredEnvFieldMessage = (field: string) =>
  `${field} env field is required`;

const envSchema = object({
  NEXT_PUBLIC_STORE_URL: string({
    required_error: getRequiredEnvFieldMessage('NEXT_STORE_URL'),
  }).nonempty(getRequiredEnvFieldMessage('NEXT_STORE_URL')),
});

const parsedEnv = envSchema.parse(process.env);

type EnvValidateResult = TypeOf<typeof envSchema>;
export type { EnvValidateResult };
export { parsedEnv };
