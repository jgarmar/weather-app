export const parseDate = (date?: string) => {
  if (!date) {
    return null;
  }
  const parsedDate = new Date(date);
  return parsedDate.toLocaleDateString('en-GB', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
};
