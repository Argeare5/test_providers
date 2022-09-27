import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

type EnvKeys = 'GOV_CORE_RPC';

export function getEnvOrFail(name: EnvKeys): string {
  const value = publicRuntimeConfig[name];
  if (!value) {
    throw new Error(`${name} was not set in env`);
  }
  return value;
}
