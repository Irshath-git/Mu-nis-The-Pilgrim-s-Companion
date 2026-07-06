/** Supported interface languages. */
export type Lang = 'en' | 'ar'

/** Every user-visible string on the site is authored in both languages. */
export interface Bilingual {
  en: string
  ar: string
}

/** Maturity of a Mu'nis capability — honesty labels used across the site. */
export type MaturityLevel = 'prototype' | 'pilot' | 'future'
