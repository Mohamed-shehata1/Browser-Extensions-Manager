export const selectOptions = ['all', 'active', 'inactive'] as const;

export type SelectOption = typeof selectOptions[number];