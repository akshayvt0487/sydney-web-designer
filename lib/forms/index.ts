/**
 * Form System - Public API
 *
 * This module exports the form configuration system and provides
 * helper functions for accessing form configs throughout the application.
 *
 * @module lib/forms
 */

// Export all types
export type {
  FieldType,
  GridColumn,
  SelectOption,
  FormField,
  SuccessMessage,
  FormConfig,
  FormType,
} from './form-configs';

// Export individual form configs
export {
  contactFormConfig,
  seoAuditFormConfig,
  adsAuditFormConfig,
  consultationFormConfig,
  formConfigs,
} from './form-configs';

import { formConfigs, FormType, FormConfig } from './form-configs';

/**
 * Get a form configuration by its type
 *
 * @param type - The form type identifier
 * @returns The form configuration object
 * @throws Error if the form type is not found
 *
 * @example
 * ```typescript
 * const config = getFormConfig('contact');
 * console.log(config.title); // "Get Your Free Quote"
 * ```
 */
export function getFormConfig(type: FormType): FormConfig {
  const config = formConfigs[type];

  if (!config) {
    throw new Error(`Form configuration not found for type: ${type}`);
  }

  return config;
}

/**
 * Get all available form types
 *
 * @returns Array of form type identifiers
 *
 * @example
 * ```typescript
 * const types = getFormTypes();
 * console.log(types); // ['contact', 'seoAudit', 'adsAudit', 'consultation']
 * ```
 */
export function getFormTypes(): FormType[] {
  return Object.keys(formConfigs) as FormType[];
}

/**
 * Check if a form type exists
 *
 * @param type - The form type to check
 * @returns True if the form type exists
 *
 * @example
 * ```typescript
 * if (isValidFormType('contact')) {
 *   // Safe to use 'contact' form type
 * }
 * ```
 */
export function isValidFormType(type: string): type is FormType {
  return type in formConfigs;
}

/**
 * Get the redirect URL for a form type
 *
 * @param type - The form type identifier
 * @returns The redirect URL for the thank you page
 *
 * @example
 * ```typescript
 * const url = getFormRedirectUrl('seoAudit');
 * console.log(url); // "/thank-you?type=seoAudit"
 * ```
 */
export function getFormRedirectUrl(type: FormType): string {
  const config = getFormConfig(type);
  return `/thank-you?type=${config.redirectType}`;
}

/**
 * Get fields for a specific grid column
 *
 * Useful for rendering form layouts with specific column arrangements
 *
 * @param type - The form type identifier
 * @param column - The grid column to filter by
 * @returns Array of fields in the specified column
 *
 * @example
 * ```typescript
 * const leftFields = getFieldsByColumn('contact', '1');
 * const rightFields = getFieldsByColumn('contact', '2');
 * const fullWidthFields = getFieldsByColumn('contact', 'full');
 * ```
 */
export function getFieldsByColumn(type: FormType, column: '1' | '2' | 'full') {
  const config = getFormConfig(type);
  return config.fields.filter(field => field.gridColumn === column);
}

/**
 * Get all required fields for a form type
 *
 * @param type - The form type identifier
 * @returns Array of required fields
 *
 * @example
 * ```typescript
 * const requiredFields = getRequiredFields('seoAudit');
 * // Returns fields where required === true
 * ```
 */
export function getRequiredFields(type: FormType) {
  const config = getFormConfig(type);
  return config.fields.filter(field => field.required);
}

/**
 * Get field configuration by name
 *
 * @param type - The form type identifier
 * @param fieldName - The field name to find
 * @returns The field configuration or undefined if not found
 *
 * @example
 * ```typescript
 * const emailField = getFieldByName('contact', 'email');
 * if (emailField) {
 *   console.log(emailField.type); // "email"
 * }
 * ```
 */
export function getFieldByName(type: FormType, fieldName: string) {
  const config = getFormConfig(type);
  return config.fields.find(field => field.name === fieldName);
}
