const PROCESS_COLORS = [
    '#fde68a', '#bef264', '#f9a8d4', '#99f6e4', '#6ee7b7', '#fdba74', '#fef08a', '#fca5a5', '#e5e7eb', '#bae6fd',
];

export const getProcessColor = (index) => {
  return PROCESS_COLORS[index % PROCESS_COLORS.length];
};