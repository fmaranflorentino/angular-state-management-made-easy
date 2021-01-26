import { Provider, InjectionToken } from "@angular/core";

export const root = new InjectionToken<string>('entrypoint');

export function moduleWithConfig(config: any): Provider[] {
  const providers: Provider[] = [];

  if (config?.root) {
    providers.push({
      provide: root,
      useValue: config.root,
    });
  }

  return providers;
}
