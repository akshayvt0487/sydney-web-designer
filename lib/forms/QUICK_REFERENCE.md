# Form System Quick Reference

## Import

```typescript
import { getFormConfig, type FormType } from '@/lib/forms';
```

## Get Form Config

```typescript
const config = getFormConfig('contact');
// or: 'seoAudit' | 'adsAudit' | 'consultation'
```

## Form Config Structure

```typescript
{
  id: string;              // 'contact', 'seoAudit', etc.
  title: string;           // Form title
  description: string;     // Form description
  submitText: string;      // Button text
  submittingText: string;  // Loading text
  redirectType: string;    // For thank you page
  successMessage: {
    title: string;
    description: string;
  },
  fields: FormField[];     // Array of field configs
}
```

## Field Structure

```typescript
{
  name: string;           // Field key
  type: FieldType;        // 'text' | 'email' | 'tel' | 'url' | 'textarea' | 'select'
  label: string;          // Display label
  placeholder?: string;   // Input placeholder
  required: boolean;      // Validation
  options?: Array<{       // For select fields
    value: string;
    label: string;
  }>;
  gridColumn?: '1' | '2' | 'full';  // Layout
  rows?: number;          // For textarea
}
```

## Helper Functions

```typescript
// Get config
getFormConfig(type: FormType): FormConfig

// Get all types
getFormTypes(): FormType[]

// Validate type
isValidFormType(type: string): type is FormType

// Get redirect URL
getFormRedirectUrl(type: FormType): string

// Get fields by column
getFieldsByColumn(type: FormType, column: '1' | '2' | 'full')

// Get required fields
getRequiredFields(type: FormType)

// Get specific field
getFieldByName(type: FormType, fieldName: string)
```

## Common Patterns

### Basic Usage
```typescript
const config = getFormConfig('contact');
console.log(config.title);  // "Get Your Free Quote"
```

### Validate Type
```typescript
if (isValidFormType(userInput)) {
  const config = getFormConfig(userInput);
}
```

### Get Redirect
```typescript
const url = getFormRedirectUrl('seoAudit');
router.push(url);  // "/thank-you?type=seoAudit"
```

### Render Fields
```typescript
config.fields.map(field => (
  <input
    key={field.name}
    type={field.type}
    name={field.name}
    placeholder={field.placeholder}
    required={field.required}
  />
))
```

### Layout by Column
```typescript
const left = getFieldsByColumn('contact', '1');
const right = getFieldsByColumn('contact', '2');
const full = getFieldsByColumn('contact', 'full');
```

## Form Types

| Type | Title | Website Field |
|------|-------|---------------|
| `contact` | Get Your Free Quote | Optional |
| `seoAudit` | Get Your Free SEO Audit | Required |
| `adsAudit` | Get Your Free Google Ads Audit | Required |
| `consultation` | Book Your Free Consultation | Not present |

## Common Fields

All forms have:
- `name` (text, required)
- `email` (email, required)
- `phone` (tel, required)
- `message` (textarea, optional)

Form-specific:
- `contact`: `website` (optional), `projectType` (select)
- `seoAudit`: `website` (required), `seoGoal` (select)
- `adsAudit`: `website` (required), `adSpend` (select)
- `consultation`: `service` (select)

## Adding New Form

1. Create config in `form-configs.ts`:
```typescript
export const newFormConfig: FormConfig = {
  id: 'newForm',
  title: 'Title',
  description: 'Description',
  submitText: 'Submit',
  submittingText: 'Submitting...',
  redirectType: 'newForm',
  successMessage: { title: '...', description: '...' },
  fields: [/* fields */],
};
```

2. Add to map:
```typescript
export const formConfigs = {
  // ...
  newForm: newFormConfig,
};
```

3. Update type:
```typescript
export type FormType = '...' | 'newForm';
```

## Files

- **form-configs.ts** - Configuration definitions
- **index.ts** - Public API and helpers
- **README.md** - Full documentation
- **example-usage.ts** - Code examples
- **QUICK_REFERENCE.md** - This file
