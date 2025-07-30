# @penzack/ui

A minimal white-label UI component library for Penzack trading platform.

##  Installation

```bash
npm install @penzack/ui
```

## 🚀 Quick Start

```tsx
import { Button, MetricCard } from '@penzack/ui';

function TradingDashboard() {
  return (
    <div>
      <MetricCard
        title="Total Profit"
        value="$232,928,423.34"
        variant="success"
        trend={{ value: 12.5, direction: 'up' }}
      />
      
      <Button variant="primary">
        Execute Trade
      </Button>
    </div>
  );
}
```

## 🧱 Components

- ✅ **Button** - Primary, secondary, outline variants
- ✅ **Input** - Form inputs with validation  
- ✅ **MetricCard** - Financial metrics display

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev

# Run tests
npm test

# Build package
npm run build
```

## 📚 Documentation

```bash
npm run dev  # Opens Storybook at http://localhost:6006
```

## 🎨 Theming

```css
:root {
  --pz-color-primary: #your-brand-color;
  --pz-color-background: #111827;
  --pz-color-surface: #1F2937;
}
```

Built for trading platforms. Simple, fast, reliable.
