
import type { ModuleOptions, ModuleHooks } from './module'


declare module '@nuxt/schema' {
  interface NuxtConfig { ['content']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['content']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig { ['content']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['content']?: ModuleOptions }
  interface NuxtHooks extends ModuleHooks {}
}


export type { ModuleHooks, ModuleOptions, MountOptions, default } from './module'
