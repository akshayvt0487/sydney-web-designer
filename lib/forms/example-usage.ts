/**
 * Form System Usage Examples
 *
 * This file demonstrates how to use the form configuration system.
 * These examples can be referenced when implementing form components.
 *
 * @module lib/forms/example-usage
 */

import {
  getFormConfig,
  getFormTypes,
  isValidFormType,
  getFormRedirectUrl,
  getFieldsByColumn,
  getRequiredFields,
  getFieldByName,
  type FormType,
  type FormConfig,
} from './index';

// ============================================================================
// Example 1: Basic Form Configuration Retrieval
// ============================================================================

function example1_basicUsage() {
  // Get a specific form configuration
  const contactConfig = getFormConfig('contact');

  console.log('Form Title:', contactConfig.title);
  console.log('Form Description:', contactConfig.description);
  console.log('Number of Fields:', contactConfig.fields.length);
  console.log('Submit Button Text:', contactConfig.submitText);
}

// ============================================================================
// Example 2: Dynamic Form Rendering
// ============================================================================

function example2_dynamicRendering(formType: FormType) {
  const config = getFormConfig(formType);

  // Render form based on configuration
  return {
    title: config.title,
    description: config.description,
    fields: config.fields.map(field => ({
      name: field.name,
      type: field.type,
      label: field.label,
      placeholder: field.placeholder,
      required: field.required,
      options: field.options,
    })),
    submitText: config.submitText,
  };
}

// ============================================================================
// Example 3: Form Type Validation
// ============================================================================

function example3_typeValidation(userInput: string) {
  // Validate user input before using it
  if (isValidFormType(userInput)) {
    const config = getFormConfig(userInput);
    console.log('Valid form type:', userInput);
    return config;
  } else {
    console.error('Invalid form type:', userInput);
    throw new Error(`Form type "${userInput}" does not exist`);
  }
}

// ============================================================================
// Example 4: Getting All Form Types
// ============================================================================

function example4_getAllTypes() {
  const allTypes = getFormTypes();

  console.log('Available form types:', allTypes);
  // Output: ['contact', 'seoAudit', 'adsAudit', 'consultation']

  // Use in a dropdown or navigation
  return allTypes.map(type => ({
    value: type,
    label: getFormConfig(type).title,
  }));
}

// ============================================================================
// Example 5: Form Submission Redirect
// ============================================================================

function example5_getRedirectUrl(formType: FormType) {
  const redirectUrl = getFormRedirectUrl(formType);

  console.log('Redirect URL:', redirectUrl);
  // Example output: "/thank-you?type=seoAudit"

  // Use with router after successful submission
  // router.push(redirectUrl);

  return redirectUrl;
}

// ============================================================================
// Example 6: Column-Based Layout
// ============================================================================

function example6_columnLayout(formType: FormType) {
  // Get fields for two-column layout
  const leftColumnFields = getFieldsByColumn(formType, '1');
  const rightColumnFields = getFieldsByColumn(formType, '2');
  const fullWidthFields = getFieldsByColumn(formType, 'full');

  return {
    leftColumn: leftColumnFields,
    rightColumn: rightColumnFields,
    fullWidth: fullWidthFields,
  };
}

// ============================================================================
// Example 7: Required Field Validation
// ============================================================================

function example7_requiredFields(formType: FormType) {
  const requiredFields = getRequiredFields(formType);

  console.log('Required fields:', requiredFields.map(f => f.name));

  // Use for form validation
  return requiredFields.map(field => field.name);
}

// ============================================================================
// Example 8: Field-Specific Configuration
// ============================================================================

function example8_specificField(formType: FormType, fieldName: string) {
  const field = getFieldByName(formType, fieldName);

  if (field) {
    console.log('Field configuration:', {
      name: field.name,
      type: field.type,
      required: field.required,
      label: field.label,
    });

    // Check if field has options (for select fields)
    if (field.type === 'select' && field.options) {
      console.log('Select options:', field.options);
    }

    return field;
  } else {
    console.warn(`Field "${fieldName}" not found in form "${formType}"`);
    return null;
  }
}

// ============================================================================
// Example 9: Complete Form Component Pattern
// ============================================================================

interface FormComponentProps {
  type: FormType;
  onSubmit: (data: Record<string, string>) => void;
}

function example9_formComponent({ type, onSubmit }: FormComponentProps) {
  const config = getFormConfig(type);

  // This demonstrates the structure, not actual React code
  const formStructure = {
    header: {
      title: config.title,
      description: config.description,
    },
    body: {
      fields: config.fields.map(field => ({
        key: field.name,
        component: field.type,
        props: {
          name: field.name,
          type: field.type,
          label: field.label,
          placeholder: field.placeholder,
          required: field.required,
          options: field.options,
          rows: field.rows,
        },
        layout: {
          gridColumn: field.gridColumn || 'auto',
        },
      })),
    },
    footer: {
      submitButton: {
        text: config.submitText,
        loadingText: config.submittingText,
      },
    },
    success: {
      title: config.successMessage.title,
      description: config.successMessage.description,
    },
  };

  return formStructure;
}

// ============================================================================
// Example 10: Form Data Processing
// ============================================================================

function example10_processFormData(
  formType: FormType,
  formData: Record<string, string>
) {
  const config = getFormConfig(formType);
  const requiredFields = getRequiredFields(formType);

  // Validate required fields
  const missingFields = requiredFields
    .filter(field => !formData[field.name] || formData[field.name].trim() === '')
    .map(field => field.name);

  if (missingFields.length > 0) {
    return {
      valid: false,
      errors: `Missing required fields: ${missingFields.join(', ')}`,
    };
  }

  // Process the data
  const processedData = {
    type: formType,
    ...formData,
    submittedAt: new Date().toISOString(),
    status: 'new',
  };

  return {
    valid: true,
    data: processedData,
    redirectUrl: getFormRedirectUrl(formType),
  };
}

// ============================================================================
// Example 11: Iterating Through All Forms
// ============================================================================

function example11_iterateAllForms() {
  const allTypes = getFormTypes();

  const formSummary = allTypes.map(type => {
    const config = getFormConfig(type);
    const requiredCount = getRequiredFields(type).length;

    return {
      type,
      title: config.title,
      description: config.description,
      totalFields: config.fields.length,
      requiredFields: requiredCount,
      redirectUrl: getFormRedirectUrl(type),
    };
  });

  console.table(formSummary);
  return formSummary;
}

// ============================================================================
// Example 12: Custom Field Filtering
// ============================================================================

function example12_customFieldFilter(formType: FormType) {
  const config = getFormConfig(formType);

  // Get all email fields
  const emailFields = config.fields.filter(f => f.type === 'email');

  // Get all select fields
  const selectFields = config.fields.filter(f => f.type === 'select');

  // Get all optional fields
  const optionalFields = config.fields.filter(f => !f.required);

  return {
    emailFields,
    selectFields,
    optionalFields,
  };
}

// Export examples for reference
export {
  example1_basicUsage,
  example2_dynamicRendering,
  example3_typeValidation,
  example4_getAllTypes,
  example5_getRedirectUrl,
  example6_columnLayout,
  example7_requiredFields,
  example8_specificField,
  example9_formComponent,
  example10_processFormData,
  example11_iterateAllForms,
  example12_customFieldFilter,
};
