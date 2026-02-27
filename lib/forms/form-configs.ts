/**
 * Form Configuration System
 *
 * This module defines all form configurations used throughout the application.
 * Each form type (contact, SEO audit, Ads audit, consultation) has a structured
 * configuration that includes fields, validation rules, and success messages.
 *
 * @module lib/forms/form-configs
 */

/**
 * Supported field types for form inputs
 */
export type FieldType = 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select';

/**
 * Grid column span for field layout
 * - '1': First column in a two-column grid
 * - '2': Second column in a two-column grid
 * - 'full': Spans both columns
 */
export type GridColumn = '1' | '2' | 'full';

/**
 * Select option for dropdown fields
 */
export interface SelectOption {
  value: string;
  label: string;
}

/**
 * Individual form field configuration
 */
export interface FormField {
  /** Unique field name used as the key in form data */
  name: string;

  /** Input type for the field */
  type: FieldType;

  /** Display label for the field */
  label: string;

  /** Placeholder text shown in the input */
  placeholder?: string;

  /** Whether the field is required for form submission */
  required: boolean;

  /** Options for select/dropdown fields */
  options?: SelectOption[];

  /** Grid column position for layout (defaults to auto) */
  gridColumn?: GridColumn;

  /** Number of rows for textarea fields */
  rows?: number;
}

/**
 * Success message configuration shown after form submission
 */
export interface SuccessMessage {
  /** Main success heading */
  title: string;

  /** Detailed success description */
  description: string;
}

/**
 * Complete form configuration
 */
export interface FormConfig {
  /** Unique identifier for the form type */
  id: string;

  /** Main form title displayed in the header */
  title: string;

  /** Description text explaining the form's purpose */
  description: string;

  /** Array of field configurations */
  fields: FormField[];

  /** Text for the submit button */
  submitText: string;

  /** Text shown while form is submitting */
  submittingText: string;

  /** Success message configuration */
  successMessage: SuccessMessage;

  /** Redirect type for thank you page routing */
  redirectType: string;
}

/**
 * Contact form configuration
 * Used for general inquiries and project quotes
 */
export const contactFormConfig: FormConfig = {
  id: 'contact',
  title: 'Get Your Free Quote',
  description: "Fill out the form below and we'll get back to you within 24 hours with a custom quote for your project.",
  submitText: 'Send Request',
  submittingText: 'Sending...',
  redirectType: 'contact',
  successMessage: {
    title: 'Thank You!',
    description: "We'll get back to you within 24 hours.",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name *',
      placeholder: 'Your full name',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email *',
      placeholder: 'your@email.com',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone *',
      placeholder: '04XX XXX XXX',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'website',
      type: 'url',
      label: 'Website',
      placeholder: 'https://yourwebsite.com.au',
      required: false,
      gridColumn: '2',
    },
    {
      name: 'projectType',
      type: 'select',
      label: 'Project Type',
      required: false,
      gridColumn: 'full',
      options: [
        { value: '', label: 'Select a service' },
        { value: 'web-design', label: 'Web Design' },
        { value: 'seo', label: 'SEO Services' },
        { value: 'google-ads', label: 'Google Ads' },
        { value: 'branding', label: 'Branding' },
        { value: 'social-media', label: 'Social Media Marketing' },
        { value: 'ecommerce', label: 'E-commerce Website' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Tell us about your project...',
      required: false,
      gridColumn: 'full',
      rows: 4,
    },
  ],
};

/**
 * SEO Audit form configuration
 * Used for requesting a comprehensive SEO audit
 */
export const seoAuditFormConfig: FormConfig = {
  id: 'seoAudit',
  title: 'Get Your Free SEO Audit',
  description: 'Get a comprehensive SEO audit of your website and discover opportunities to improve your rankings.',
  submitText: 'Send Request',
  submittingText: 'Sending...',
  redirectType: 'seoAudit',
  successMessage: {
    title: 'Thank You!',
    description: "We'll get back to you within 24 hours.",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name *',
      placeholder: 'Your full name',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email *',
      placeholder: 'your@email.com',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone *',
      placeholder: '04XX XXX XXX',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'website',
      type: 'url',
      label: 'Website URL *',
      placeholder: 'https://yourwebsite.com.au',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'seoGoal',
      type: 'select',
      label: 'Main SEO Goal',
      required: false,
      gridColumn: 'full',
      options: [
        { value: '', label: 'Select your goal' },
        { value: 'more-traffic', label: 'Increase Website Traffic' },
        { value: 'rankings', label: 'Improve Search Rankings' },
        { value: 'local-seo', label: 'Local SEO / Google Maps' },
        { value: 'conversions', label: 'Increase Leads/Sales' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Current SEO Challenges',
      placeholder: 'Describe your current SEO challenges...',
      required: false,
      gridColumn: 'full',
      rows: 4,
    },
  ],
};

/**
 * Google Ads Audit form configuration
 * Used for requesting a Google Ads campaign audit
 */
export const adsAuditFormConfig: FormConfig = {
  id: 'adsAudit',
  title: 'Get Your Free Google Ads Audit',
  description: 'Let us review your Google Ads campaigns and show you how to improve your ROI.',
  submitText: 'Send Request',
  submittingText: 'Sending...',
  redirectType: 'adsAudit',
  successMessage: {
    title: 'Thank You!',
    description: "We'll get back to you within 24 hours.",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name *',
      placeholder: 'Your full name',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email *',
      placeholder: 'your@email.com',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone *',
      placeholder: '04XX XXX XXX',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'website',
      type: 'url',
      label: 'Website URL *',
      placeholder: 'https://yourwebsite.com.au',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'adSpend',
      type: 'select',
      label: 'Current Monthly Ad Spend',
      required: false,
      gridColumn: 'full',
      options: [
        { value: '', label: 'Select range' },
        { value: 'none', label: 'Not running ads yet' },
        { value: '0-1000', label: '$0 - $1,000' },
        { value: '1000-3000', label: '$1,000 - $3,000' },
        { value: '3000-5000', label: '$3,000 - $5,000' },
        { value: '5000+', label: '$5,000+' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Main Ad Goals',
      placeholder: 'Tell us about your project...',
      required: false,
      gridColumn: 'full',
      rows: 4,
    },
  ],
};

/**
 * Consultation form configuration
 * Used for booking free consultations
 */
export const consultationFormConfig: FormConfig = {
  id: 'consultation',
  title: 'Book Your Free Consultation',
  description: 'Schedule a free 30-minute consultation with our experts to discuss your digital marketing goals.',
  submitText: 'Send Request',
  submittingText: 'Sending...',
  redirectType: 'consultation',
  successMessage: {
    title: 'Thank You!',
    description: "We'll get back to you within 24 hours.",
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name *',
      placeholder: 'Your full name',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email *',
      placeholder: 'your@email.com',
      required: true,
      gridColumn: '2',
    },
    {
      name: 'phone',
      type: 'tel',
      label: 'Phone *',
      placeholder: '04XX XXX XXX',
      required: true,
      gridColumn: '1',
    },
    {
      name: 'service',
      type: 'select',
      label: 'Service Interested In',
      required: false,
      gridColumn: 'full',
      options: [
        { value: '', label: 'Select a service' },
        { value: 'web-design', label: 'Web Design' },
        { value: 'seo', label: 'SEO Services' },
        { value: 'google-ads', label: 'Google Ads' },
        { value: 'branding', label: 'Branding' },
        { value: 'social-media', label: 'Social Media Marketing' },
        { value: 'growth-plan', label: 'Monthly Growth Plan' },
        { value: 'other', label: 'Other' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      placeholder: 'Tell us about your project...',
      required: false,
      gridColumn: 'full',
      rows: 4,
    },
  ],
};

/**
 * Map of all form configurations by ID
 */
export const formConfigs: Record<string, FormConfig> = {
  contact: contactFormConfig,
  seoAudit: seoAuditFormConfig,
  adsAudit: adsAuditFormConfig,
  consultation: consultationFormConfig,
};

/**
 * Valid form type identifiers
 */
export type FormType = 'contact' | 'seoAudit' | 'adsAudit' | 'consultation';
