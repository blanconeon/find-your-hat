export function ErrorSummary({ errors, fieldOrder, show }: ErrorSummaryProps) {
  const activeErrors = fieldOrder.filter((name) => errors[name]);

  if (!show || activeErrors.length === 0) {
    return null;
  }

  return (
    <div
      role="alert"
      className="rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive"
    >
      <p className="font-semibold mb-2">
        {activeErrors.length} {activeErrors.length === 1 ? 'error' : 'errors'} found
      </p>
      <ul className="list-disc list-inside space-y-1">
        {activeErrors.map((name) => (
          <li key={name}>
            <a
              href={`#${name}`}

              interface ErrorSummaryProps {
  errors: Record<string, string>;
  fieldOrder: readonly string[];
  show: boolean;
}