# Form System Configuration

This directory contains the centralized form configuration system for the DSIGNS website.

## Overview

All form configurations are defined in a type-safe, centralized location, making it easy to:
- Add new form types
- Modify existing forms
- Maintain consistency across the application
- Validate form data

## Files

### `form-configs.ts`
Contains all form configurations and TypeScript interfaces:
- **TypeScript Interfaces**: `FormField`, `FormConfig`, `SuccessMessage`, etc.
- **Form Configurations**: `contactFormConfig`, `seoAuditFormConfig`, `adsAuditFormConfig`, `consultationFormConfig`

### `index.ts`
Public API for the form system with helper functions:
- `getFormConfig(type)` - Get configuration by form type
- `getFormTypes()` - Get all available form types
- `isValidFormType(type)` - Validate a form type
- `getFormRedirectUrl(type)` - Get redirect URL for thank you page
- `getFieldsByColumn(type, column)` - Filter fields by grid column
- `getRequiredFields(type)` - Get all required fields
- `getFieldByName(type, fieldName)` - Find specific field config

## Usage Examples

### Basic Import and Usage

```typescript
import { getFormConfig } from '@/lib/forms';

const config = getFormConfig('contact');
console.log(config.title); // "Get Your Free Quote"
console.log(config.fields); // Array of form fields
```

### Using in Components

```typescript
import { getFormConfig, FormType } from '@/lib/forms';

function MyForm({ type }: { type: FormType }) {
  const config = getFormConfig(type);

  return (
    <form>
      <h2>{config.title}</h2>
      <p>{config.description}</p>

      {config.fields.map(field => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}

      <button type="submit">{config.submitText}</button>
    </form>
  );
}
```

### Validation

```typescript
import { isValidFormType, getFormConfig } from '@/lib/forms';

const formType = searchParams.get('type');

if (isValidFormType(formType)) {
  const config = getFormConfig(formType);
  // Safe to use
}
```

### Getting Required Fields

```typescript
import { getRequiredFields } from '@/lib/forms';

const requiredFields = getRequiredFields('seoAudit');
// Returns: [name, email, phone, website]
```

## Form Types

The system currently supports four form types:

1. **`contact`** - General contact and quote requests
2. **`seoAudit`** - SEO audit requests
3. **`adsAudit`** - Google Ads audit requests
4. **`consultation`** - Free consultation bookings

## Adding a New Form Type

1. Create a new form configuration in `form-configs.ts`:

```typescript
export const newFormConfig: FormConfig = {
  id: 'newForm',
  title: 'New Form Title',
  description: 'Form description',
  submitText: 'Submit',
  submittingText: 'Submitting...',
  redirectType: 'newForm',
  successMessage: {
    title: 'Success!',
    description: 'Thank you message',
  },
  fields: [
    // Add fields here
  ],
};
```

2. Add to the `formConfigs` map:

```typescript
export const formConfigs: Record<string, FormConfig> = {
  // ... existing configs
  newForm: newFormConfig,
};
```

3. Update the `FormType` type:

```typescript
export type FormType = 'contact' | 'seoAudit' | 'adsAudit' | 'consultation' | 'newForm';
```

4. Use it in your components:

```typescript
const config = getFormConfig('newForm');
```

## Field Configuration

Each field supports the following properties:

```typescript
{
  name: string;           // Field name/key
  type: FieldType;        // 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select'
  label: string;          // Display label
  placeholder?: string;   // Placeholder text
  required: boolean;      // Validation requirement
  options?: SelectOption[]; // For select fields
  gridColumn?: GridColumn;  // '1' | '2' | 'full'
  rows?: number;          // For textarea fields
}
```

## Grid Layout

Fields can be positioned in a two-column grid layout:
- `gridColumn: '1'` - First column (left)
- `gridColumn: '2'` - Second column (right)
- `gridColumn: 'full'` - Spans both columns

## Type Safety

All form configurations are fully typed with TypeScript, providing:
- Autocomplete in IDEs
- Compile-time type checking
- IntelliSense support
- Reduced runtime errors

## Best Practices

1. **Always use the helper functions** from `index.ts` rather than directly accessing `formConfigs`
2. **Validate form types** with `isValidFormType()` when accepting user input
3. **Keep field names consistent** across similar form types for easier data processing
4. **Add comprehensive JSDoc comments** when creating new configurations
5. **Test new forms** thoroughly before deploying to production
