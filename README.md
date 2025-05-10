# @xjectro/react

`@xjectro/react` is a modern, customizable UI component library for React and Next.js applications.

## Features
- Accessible and themeable UI components
- Full TypeScript support
- Tailwind CSS and PostCSS compatible
- Easy installation and usage

## Installation
```bash
npm install @xjectro/react
# or
yarn add @xjectro/react
```

## Usage
```tsx
import { Button } from '@xjectro/react';

export default function App() {
  return (
    <div>
      <Button onClick={() => alert('Hello!')}>Click Me</Button>
    </div>
  );
}
```

## Components
- Accordion
- Alert
- AlertDialog
- AspectRatio
- Aurora
- Avatar
- Badge
- Balatro
- Breadcrumb
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- Container
- ContextMenu
- Dialog
- Drawer
- DropdownMenu
- Footer
- Form
- HoverCard
- Icons
- Input
- InputOtp
- Label
- List
- Loaders
- LoadingIndicator
- Menubar
- Navbar
- NavigationMenu
- Pagination
- Player
- Popover
- Progress
- RadioGroup
- Resizable
- ScrollArea
- SearchInput
- Select
- SelectableList
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner
- Squares
- Steppers
- Switch
- Table
- Tabs
- Text
- Textarea
- Toggle
- ToggleGroup
- Tooltip

## Peer Dependencies
- React >=18.0.0
- React-DOM >=18.0.0

## Configuration
Components work seamlessly with Tailwind CSS and PostCSS. Ensure you have `tailwind.config.js` and `postcss.config.mjs` configured in your project root.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/new-component`
3. Commit your changes: `git commit -m 'Add new component'`
4. Push to the branch: `git push origin feature/new-component`
5. Open a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
