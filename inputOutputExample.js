export function ErrorSummary({ errors, fieldOrder, show }: ErrorSummaryProps) {
  const activeErrors = fieldOrder.filter((name) => errors[name]);

  if (!show || activeErrors.length === 0) {
    return null;
  }
