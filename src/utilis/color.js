const PROCESS_COLORS = [
 '#BFDBFE', // Light Blue
'#A7F3D0', // Light Green
'#FDE68A', // Light Amber
'#DDD6FE', // Light Purple
'#FBCFE8', // Light Pink
'#A5F3FC', // Light Cyan
'#FED7AA', // Light Orange
'#C7D2FE', // Light Indigo

];

export const getProcessColor = (index) => {
  return PROCESS_COLORS[index % PROCESS_COLORS.length];
};