export interface Theme {
  colors: {
    // Primary brand colors
    primary: string;
    primaryHover: string;
    secondary: string;
    
    // Background colors (dark theme)
    background: string;
    surface: string;
    surfaceHover: string;
    
    // Text colors
    text: string;
    textSecondary: string;
    textMuted: string;
    
    // Border colors
    border: string;
    borderHover: string;
    
    // Status colors
    success: string;
    warning: string;
    error: string;
    info: string;
    
    // Alpha variants for overlays
    successAlpha: string;
    warningAlpha: string;
    errorAlpha: string;
    primaryAlpha: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    fontWeight: {
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
}

export const tradingTheme: Theme = {
  colors: {
    primary: '#3B82F6',
    primaryHover: '#2563EB',
    secondary: '#6B7280',
    
    // Dark backgrounds like the dashboard
    background: '#111827',
    surface: '#1F2937',
    surfaceHover: '#2D3748',
    
    // Text colors for dark theme
    text: '#F9FAFB',
    textSecondary: '#9CA3AF',
    textMuted: '#6B7280',
    
    // Borders
    border: '#374151',
    borderHover: '#4B5563',
    
    // Status colors
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // Alpha variants
    successAlpha: 'rgba(16, 185, 129, 0.1)',
    warningAlpha: 'rgba(245, 158, 11, 0.1)',
    errorAlpha: 'rgba(239, 68, 68, 0.1)',
    primaryAlpha: 'rgba(59, 130, 246, 0.1)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.2)',
  },
};

// Keep the default theme for light mode
export const defaultTheme: Theme = {
  ...tradingTheme,
  colors: {
    ...tradingTheme.colors,
    background: '#FFFFFF',
    surface: '#F9FAFB',
    surfaceHover: '#F3F4F6',
    text: '#111827',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    border: '#E5E7EB',
    borderHover: '#D1D5DB',
  },
};
