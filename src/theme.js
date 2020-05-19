const COLORS = {
    primary: '#1B9CFC',
    secondary: '#F8EFBA',
    inactive: '#CAD3C8',
    danger: '#FF5757',
    green: '#55E6C1',
    yellow: '#FFB225',
    blue: '#3B3B98',
    orange: '#F97F51',
    teal: '#9AECDB',
    pink: '#FD7272',
    purple: '#82589F',
    black: '#2C3A47',
    menuItemSelected: '#EEEEEE',
    background: '#F5F5F5',
    cardTitleBorderBottom: '#ECECEC',
    cardBorderBottom: '#CCCCCC',
    white: '#FFFFFF',
  };
  
  const VARIANTS = {
    success: COLORS.green,
    danger: COLORS.danger,
    warning: COLORS.yellow,
  };
  
  // used to grab variants out of styled components mainly
  const variant = v => VARIANTS[v];
  
  export default {
    colors: COLORS,
    variant,
    variants: VARIANTS,
    breakpoints: {
      xxs: '544px',
      xs: '768px',
      sm: '1088px',
      md: '1216px',
      lg: '1408px',
    },
  };