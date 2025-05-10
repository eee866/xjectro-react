import * as React$1 from 'react';
import React__default, { ReactNode } from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { Command as Command$1 } from 'cmdk';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { Drawer as Drawer$1 } from 'vaul';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { OTPInput } from 'input-otp';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { MediaPlayerProps } from '@vidstack/react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as ResizablePrimitive from 'react-resizable-panels';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { LinkProps } from 'next/link';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { ToasterProps } from 'sonner';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPicker } from 'react-day-picker';
import * as RechartsPrimitive from 'recharts';
import { ClassValue } from 'clsx';

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Root>): React$1.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Trigger>): React$1.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Portal>): React$1.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Overlay>): React$1.JSX.Element;
declare function AlertDialogContent({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Content>): React$1.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Title>): React$1.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Description>): React$1.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Action>): React$1.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Cancel>): React$1.JSX.Element;

declare function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>): React$1.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): React$1.JSX.Element;
declare function CollapsibleTrigger({ children, className, ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>): React$1.JSX.Element;
declare function CollapsibleContent({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): React$1.JSX.Element;
declare function DialogPortal({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Portal>): React$1.JSX.Element;
declare function DialogClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): React$1.JSX.Element;
declare function DialogOverlay({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Overlay>): React$1.JSX.Element;
declare function DialogContent({ className, children, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content>): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;

declare function Command({ className, ...props }: React$1.ComponentProps<typeof Command$1>): React$1.JSX.Element;
declare function CommandDialog({ title, description, children, ...props }: React$1.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
}): React$1.JSX.Element;
declare function CommandInput({ className, ...props }: React$1.ComponentProps<typeof Command$1.Input>): React$1.JSX.Element;
declare function CommandList({ className, ...props }: React$1.ComponentProps<typeof Command$1.List>): React$1.JSX.Element;
declare function CommandEmpty({ ...props }: React$1.ComponentProps<typeof Command$1.Empty>): React$1.JSX.Element;
declare function CommandGroup({ className, ...props }: React$1.ComponentProps<typeof Command$1.Group>): React$1.JSX.Element;
declare function CommandSeparator({ className, ...props }: React$1.ComponentProps<typeof Command$1.Separator>): React$1.JSX.Element;
declare function CommandItem({ className, ...props }: React$1.ComponentProps<typeof Command$1.Item>): React$1.JSX.Element;
declare function CommandShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function ContextMenu({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Root>): React$1.JSX.Element;
declare function ContextMenuTrigger({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function ContextMenuGroup({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Group>): React$1.JSX.Element;
declare function ContextMenuPortal({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Portal>): React$1.JSX.Element;
declare function ContextMenuSub({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Sub>): React$1.JSX.Element;
declare function ContextMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>): React$1.JSX.Element;
declare function ContextMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.SubContent>): React$1.JSX.Element;
declare function ContextMenuContent({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Content>): React$1.JSX.Element;
declare function ContextMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "primary" | "danger";
}): React$1.JSX.Element;
declare function ContextMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function ContextMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.RadioItem>): React$1.JSX.Element;
declare function ContextMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function ContextMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof ContextMenuPrimitive.Separator>): React$1.JSX.Element;
declare function ContextMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;

declare function Drawer({ ...props }: React$1.ComponentProps<typeof Drawer$1.Root>): React$1.JSX.Element;
declare function DrawerTrigger({ ...props }: React$1.ComponentProps<typeof Drawer$1.Trigger>): React$1.JSX.Element;
declare function DrawerPortal({ ...props }: React$1.ComponentProps<typeof Drawer$1.Portal>): React$1.JSX.Element;
declare function DrawerClose({ ...props }: React$1.ComponentProps<typeof Drawer$1.Close>): React$1.JSX.Element;
declare function DrawerOverlay({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Overlay>): React$1.JSX.Element;
declare function DrawerContent({ className, children, ...props }: React$1.ComponentProps<typeof Drawer$1.Content>): React$1.JSX.Element;
declare function DrawerHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DrawerTitle({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Title>): React$1.JSX.Element;
declare function DrawerDescription({ className, ...props }: React$1.ComponentProps<typeof Drawer$1.Description>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "primary" | "danger";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): React$1.JSX.Element;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => React$1.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare function FormItem({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FormLabel({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): React$1.JSX.Element;
declare function FormControl({ ...props }: React$1.ComponentProps<typeof Slot>): React$1.JSX.Element;
declare function FormDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FormMessage({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element | null;

declare function HoverCard({ ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Root>): React$1.JSX.Element;
declare function HoverCardTrigger({ ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Trigger>): React$1.JSX.Element;
declare function HoverCardContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof HoverCardPrimitive.Content>): React$1.JSX.Element;

declare function CheckIcon(props: React__default.SVGProps<SVGSVGElement>): React__default.JSX.Element;
declare function PenIcon(props: React__default.SVGProps<SVGSVGElement>): React__default.JSX.Element;
declare function LogoIcon(props: React__default.SVGProps<SVGSVGElement>): React__default.JSX.Element;

declare const inputVariants: (props?: ({
    size?: "sm" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type InputVariants = VariantProps<typeof inputVariants>;
declare function Input({ className, type, ref, size, ...props }: React$1.ComponentProps<"input"> & InputVariants): React$1.JSX.Element;

declare function InputOTP({ className, containerClassName, ...props }: React$1.ComponentProps<typeof OTPInput> & {
    containerClassName?: string;
}): React$1.JSX.Element;
declare function InputOTPGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function InputOTPSlot({ index, className, ...props }: React$1.ComponentProps<"div"> & {
    index: number;
}): React$1.JSX.Element;
declare function InputOTPSeparator({ ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): React$1.JSX.Element;

type Breakpoint = "default" | "sm" | "md" | "lg" | "xl" | "2xl";

type ResponsiveObject<T> = Partial<Record<Breakpoint, T>>;

type ResponsiveValue<T> = T | ResponsiveObject<T>;

declare const listVariants: (props?: ({
    layout?: "grid" | "auto" | null | undefined;
    direction?: "horizontal" | "vertical" | null | undefined;
    align?: "center" | "end" | "start" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | null | undefined;
    spacing?: "none" | "normal" | "tight" | "loose" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ListVariants = VariantProps<typeof listVariants>;
interface ListProps<T> extends React__default.HTMLAttributes<HTMLDivElement>, ListVariants {
    items: T[];
    renderItem: (item: T, index: number) => React__default.ReactNode;
    columns?: ResponsiveValue<number>;
    keyExtractor?: (item: T, index: number) => string | number;
    as?: React__default.ElementType;
}
declare function List<T>({ items, renderItem, layout, justify, align, spacing, direction, columns, className, keyExtractor, as: Component, ...props }: ListProps<T>): React__default.JSX.Element | React__default.JSX.Element[];

declare function Menubar({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Root>): React$1.JSX.Element;
declare function MenubarMenu({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Menu>): React$1.JSX.Element;
declare function MenubarGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Group>): React$1.JSX.Element;
declare function MenubarPortal({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Portal>): React$1.JSX.Element;
declare function MenubarRadioGroup({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioGroup>): React$1.JSX.Element;
declare function MenubarTrigger({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Trigger>): React$1.JSX.Element;
declare function MenubarContent({ className, align, alignOffset, sideOffset, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Content>): React$1.JSX.Element;
declare function MenubarItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
    variant?: "primary" | "danger";
}): React$1.JSX.Element;
declare function MenubarCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function MenubarRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.RadioItem>): React$1.JSX.Element;
declare function MenubarLabel({ className, inset, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSeparator({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Separator>): React$1.JSX.Element;
declare function MenubarShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function MenubarSub({ ...props }: React$1.ComponentProps<typeof MenubarPrimitive.Sub>): React$1.JSX.Element;
declare function MenubarSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function MenubarSubContent({ className, ...props }: React$1.ComponentProps<typeof MenubarPrimitive.SubContent>): React$1.JSX.Element;

declare const DEFAULT_NAVBAR_HEIGHT = 66;
declare const FLOATING_MARGIN = 8;
declare const navbarVariants: (props?: ({
    position?: "default" | "sticky" | "static" | null | undefined;
    layout?: "default" | "floating" | "centered" | null | undefined;
    shape?: "square" | "soft" | "pill" | null | undefined;
    border?: "default" | "none" | "x" | "y" | "bottom" | "top" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type NavbarVariants = VariantProps<typeof navbarVariants>;
interface NavbarProps extends NavbarVariants, React__default.ComponentProps<"nav"> {
    shouldHideOnScroll?: boolean;
    isBackground?: boolean;
}
/**
 * Responsive and configurable navigation bar.
 *
 * @param position - Navbar positioning: fixed, static, or sticky.
 * @param layout - Navbar width/layout mode: full-width, floating, or centered.
 * @param shape - Corner shape: soft, pill, or square.
 * @param border - Border placement: default, top, bottom, x, y, or none.
 * @param shadow - Shadow intensity: none, sm, md, or lg.
 * @param shouldHideOnScroll - Hides navbar on scroll when true.
 * @param isBackground - Applies semi-transparent background on scroll.
 * @param className - Additional custom classes.
 */
declare function Navbar({ position, layout, shape, border, shadow, shouldHideOnScroll, isBackground, className, children, ...props }: NavbarProps): React__default.JSX.Element;
interface NavbarContentProps extends React__default.ComponentProps<"ul"> {
    justify?: "start" | "center" | "end";
}
/**
 * Container for Navbar items with flexible justification.
 *
 * @param justify - Content alignment: start, center, or end.
 */
declare function NavbarContent({ justify, className, ...props }: NavbarContentProps): React__default.JSX.Element;
/**
 * Individual navbar item wrapper.
 */
declare function NavbarItem({ className, ...props }: React__default.ComponentProps<"li">): React__default.JSX.Element;

declare function NavigationMenu({ className, children, viewport, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
    viewport?: boolean;
}): React$1.JSX.Element;
declare function NavigationMenuList({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.List>): React$1.JSX.Element;
declare function NavigationMenuItem({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Item>): React$1.JSX.Element;
declare const navigationMenuTriggerStyle: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
declare function NavigationMenuTrigger({ className, children, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function NavigationMenuContent({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Content>): React$1.JSX.Element;
declare function NavigationMenuViewport({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Viewport>): React$1.JSX.Element;
declare function NavigationMenuLink({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Link>): React$1.JSX.Element;
declare function NavigationMenuIndicator({ className, ...props }: React$1.ComponentProps<typeof NavigationMenuPrimitive.Indicator>): React$1.JSX.Element;
declare function NavigationMenuListItem({ className, title, children, icon, ...props }: React$1.ComponentProps<"a"> & {
    icon: React$1.ReactNode;
}): React$1.JSX.Element;

interface AutoPaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}
declare function AutoPagination({ totalPages, currentPage, onPageChange, }: AutoPaginationProps): React$1.JSX.Element | null;

declare function VideoPlayer({ poster, title, ...props }: Omit<MediaPlayerProps, "children">): React$1.JSX.Element;
declare function CloudPlayer({ src }: {
    src: string;
}): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Trigger>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Content>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Anchor>): React$1.JSX.Element;

declare function Progress({ className, value, ...props }: React$1.ComponentProps<typeof ProgressPrimitive.Root>): React$1.JSX.Element;

declare function RadioGroup({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Root>): React$1.JSX.Element;
declare function RadioGroupItem({ className, ...props }: React$1.ComponentProps<typeof RadioGroupPrimitive.Item>): React$1.JSX.Element;

declare function ResizablePanelGroup({ className, ...props }: React$1.ComponentProps<typeof ResizablePrimitive.PanelGroup>): React$1.JSX.Element;
declare function ResizablePanel({ ...props }: React$1.ComponentProps<typeof ResizablePrimitive.Panel>): React$1.JSX.Element;
declare function ResizableHandle({ withHandle, className, ...props }: React$1.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
}): React$1.JSX.Element;

declare function ScrollArea({ className, children, orientation, ...props }: React$1.ComponentProps<typeof ScrollAreaPrimitive.Root> & Pick<React$1.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>, "orientation">): React$1.JSX.Element;
declare function ScrollBar({ className, orientation, ...props }: React$1.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>): React$1.JSX.Element;

declare const searchInputVariants: (props?: ({
    size?: "sm" | "md" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SearchInputVariants = VariantProps<typeof searchInputVariants>;
declare function SearchInput({ className, size, onSearch, ...props }: React$1.ComponentProps<"input"> & SearchInputVariants & {
    onSearch: (query: string) => void;
}): React$1.JSX.Element;

declare const buttonVariants: (props?: ({
    variant?: "primary" | "danger" | "outline" | "surface" | "ghost" | "link" | "subtle" | null | undefined;
    size?: "sm" | "md" | "lg" | "icon" | null | undefined;
    shape?: "circle" | "square" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonVariants = VariantProps<typeof buttonVariants>;
declare const Button: React$1.ForwardRefExoticComponent<Omit<React$1.ClassAttributes<HTMLButtonElement> & React$1.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {
    asChild?: boolean;
}, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): React$1.JSX.Element;
declare function SelectGroup({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Group>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: ButtonVariants["size"];
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): React$1.JSX.Element;
declare function SelectLabel({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Label>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): React$1.JSX.Element;
declare function SelectSeparator({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Separator>): React$1.JSX.Element;
declare function SelectScrollUpButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollUpButton>): React$1.JSX.Element;
declare function SelectScrollDownButton({ className, ...props }: React$1.ComponentProps<typeof SelectPrimitive.ScrollDownButton>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): React$1.JSX.Element;

declare const sheetContentVariants: (props?: ({
    color?: "primary" | "surface" | null | undefined;
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SheetContentVariants = VariantProps<typeof sheetContentVariants>;
declare function Sheet({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): React$1.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): React$1.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Close>): React$1.JSX.Element;
declare function SheetContent({ className, children, side, color, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & SheetContentVariants): React$1.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;
declare function SheetItem({ className, ...props }: LinkProps & {
    className?: string;
}): React$1.JSX.Element;
declare const sheetSectionVariants: (props?: ({
    spacing?: "none" | "normal" | "tight" | "loose" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SheetSectionVariants = VariantProps<typeof sheetSectionVariants>;
declare function SheetSection({ className, spacing, ...props }: React$1.ComponentProps<"div"> & SheetSectionVariants): React$1.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Provider>): React$1.JSX.Element;
declare function Tooltip({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Root>): React$1.JSX.Element;
declare function TooltipTrigger({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Trigger>): React$1.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Content>): React$1.JSX.Element;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): React$1.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): React$1.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof Button>): React$1.JSX.Element;
declare function SidebarRail({ className, ...props }: React$1.ComponentProps<"button">): React$1.JSX.Element;
declare function SidebarInset({ className, children, ...props }: React$1.ComponentProps<"main">): React$1.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): React$1.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): React$1.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<"div"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): React$1.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "primary" | "outline" | null | undefined;
    size?: "primary" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SidebarMenuButtonVariants = VariantProps<typeof sidebarMenuButtonVariants>;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & SidebarMenuButtonVariants): React$1.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<"div"> & {
    showIcon?: boolean;
}): React$1.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<"ul">): React$1.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): React$1.JSX.Element;

declare const skeletonVariants: (props?: ({
    shape?: "circle" | "square" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SkeletonVariants = VariantProps<typeof skeletonVariants>;
declare function Skeleton({ className, shape, ...props }: React.ComponentProps<"div"> & SkeletonVariants): React$1.JSX.Element;
declare function PlayerSkeleton(): React$1.JSX.Element;

declare function Slider({ className, defaultValue, value, min, max, ...props }: React$1.ComponentProps<typeof SliderPrimitive.Root>): React$1.JSX.Element;

declare const Toaster: ({ ...props }: ToasterProps) => React$1.JSX.Element;

type CanvasStrokeStyle = string | CanvasGradient | CanvasPattern;
interface SquaresProps {
    direction?: "diagonal" | "up" | "right" | "down" | "left";
    speed?: number;
    borderColor?: CanvasStrokeStyle;
    squareSize?: number;
    hoverFillColor?: CanvasStrokeStyle;
}
declare function Squares({ direction, speed, squareSize, }: SquaresProps): React__default.JSX.Element;

interface StepperProps extends Omit<React__default.HTMLAttributes<HTMLDivElement>, "onChange"> {
    children: React__default.ReactNode;
    className?: string;
    defaultValue?: number;
    onChange?: (step: number) => void;
    onComplate?: () => void;
}
declare function Steppers({ children, defaultValue, className, onChange, onComplate, ...props }: StepperProps): React__default.JSX.Element;
declare function StepItem({ children }: {
    children: ReactNode;
}): React__default.JSX.Element;

declare function Switch({ className, ...props }: React$1.ComponentProps<typeof SwitchPrimitive.Root>): React$1.JSX.Element;

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({ className, ...props }: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({ className, ...props }: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({ className, ...props }: React$1.ComponentProps<"caption">): React$1.JSX.Element;

declare function Tabs({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Root>): React$1.JSX.Element;
declare function TabsList({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.List>): React$1.JSX.Element;
declare function TabsTrigger({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Trigger>): React$1.JSX.Element;
declare function TabsContent({ className, ...props }: React$1.ComponentProps<typeof TabsPrimitive.Content>): React$1.JSX.Element;

declare const textVariants: (props?: ({
    variant?: "shiny" | null | undefined;
    color?: "primary" | "foreground" | "muted" | null | undefined;
    align?: "center" | "end" | "start" | null | undefined;
    size?: "sm" | "md" | "lg" | "base" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | null | undefined;
    lineClamp?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | null | undefined;
    leading?: 0 | "snug" | null | undefined;
    weight?: "bold" | "black" | "medium" | "normal" | "thin" | "light" | "semibold" | "extrabold" | null | undefined;
    break?: "words" | "all" | "normal" | "keep" | null | undefined;
    underline?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type TextVariants = VariantProps<typeof textVariants>;
type TextProps = React$1.ComponentProps<React$1.ElementType> & TextVariants & {
    asChild?: boolean;
    as?: React$1.ElementType;
    underline?: boolean;
};
declare const Text: React$1.MemoExoticComponent<React$1.ForwardRefExoticComponent<Omit<any, "ref"> & React$1.RefAttributes<HTMLElement>>>;

declare const textareaVariants: (props?: ({
    size?: "sm" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type TextareaVariants = VariantProps<typeof textareaVariants>;
declare function Textarea({ className, size, onChange, defaultValue, ...props }: Omit<React$1.ComponentProps<"textarea">, "defaultValue"> & {
    defaultValue?: string;
} & TextareaVariants): React$1.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "primary" | "outline" | null | undefined;
    size?: "primary" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ToggleVariants = VariantProps<typeof toggleVariants>;
declare function Toggle({ className, variant, size, ...props }: React$1.ComponentProps<typeof TogglePrimitive.Root> & ToggleVariants): React$1.JSX.Element;

declare function ToggleGroup({ className, variant, size, children, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleVariants): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Item> & ToggleVariants): React$1.JSX.Element;

declare function Accordion({ ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Root>): React$1.JSX.Element;

declare const alertVariants: (props?: ({
    variant?: "ghost" | "solid" | null | undefined;
    color?: "default" | "primary" | "danger" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type AlertVariants = VariantProps<typeof alertVariants>;
declare function Alert({ className, color, variant, ...props }: React$1.ComponentProps<"div"> & AlertVariants): React$1.JSX.Element;
declare function AlertTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function AlertDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
}
declare function Aurora(props: AuroraProps): React$1.JSX.Element;

declare function Avatar({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Root>): React$1.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Image>): React$1.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Fallback>): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    color?: "primary" | "surface" | null | undefined;
    size?: "sm" | "md" | "lg" | "base" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type BadgeVariants = VariantProps<typeof badgeVariants>;
declare function Badge({ className, color, size, asChild, ...props }: React$1.ComponentProps<"span"> & BadgeVariants & {
    asChild?: boolean;
}): React$1.JSX.Element;

interface BalatroProps {
    spinRotation?: number;
    spinSpeed?: number;
    offset?: [number, number];
    color1?: string;
    color2?: string;
    color3?: string;
    contrast?: number;
    lighting?: number;
    spinAmount?: number;
    pixelFilter?: number;
    spinEase?: number;
    rotate?: boolean;
    mouseInteraction?: boolean;
}
declare function Balatro({ spinRotation, spinSpeed, offset, color1, color2, color3, contrast, lighting, spinAmount, pixelFilter, spinEase, rotate, mouseInteraction, }: BalatroProps): React$1.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const cardHeaderVariants: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
type CardHeaderVariants = VariantProps<typeof cardHeaderVariants>;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div"> & CardHeaderVariants): React$1.JSX.Element;
declare function CardTitle(props: TextProps): React$1.JSX.Element;
declare function CardDescription(props: TextProps): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const cardContentVariants: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
type CardContentVariants = VariantProps<typeof cardContentVariants>;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div"> & CardContentVariants): React$1.JSX.Element;
declare const cardFooterVariants: (props?: class_variance_authority_dist_types.ClassProp | undefined) => string;
type CardFooterVariants = VariantProps<typeof cardFooterVariants>;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div"> & CardFooterVariants): React$1.JSX.Element;

declare function Calendar({ className, classNames, showOutsideDays, ...props }: React$1.ComponentProps<typeof DayPicker>): React$1.JSX.Element;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
declare function ChartContainer({ id, className, children, config, ...props }: React$1.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}): React$1.JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React$1.ComponentProps<typeof RechartsPrimitive.Tooltip> & React$1.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}): React$1.JSX.Element | null;
declare const ChartLegend: typeof RechartsPrimitive.Legend;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React$1.ComponentProps<"div"> & Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
    hideIcon?: boolean;
    nameKey?: string;
}): React$1.JSX.Element | null;

declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type SpinnerVariants = VariantProps<typeof spinnerVariants>;
declare function Spinner({ size, className, ...props }: React__default.ComponentProps<"div"> & SpinnerVariants): React__default.JSX.Element;

declare const footerVariants: (props?: ({
    color?: "primary" | "danger" | "surface" | null | undefined;
    columns?: 1 | 2 | 3 | 4 | null | undefined;
    variant?: "default" | "outlined" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type FooterVariants = VariantProps<typeof footerVariants>;
type FooterBaseProps = {
    "data-color"?: FooterVariants["color"];
};
declare function Footer({ color, columns, variant, className, children, ...props }: React__default.ComponentProps<"footer"> & FooterVariants): React__default.JSX.Element;
declare const footerSectionVariants: (props?: ({
    align?: "center" | "end" | "start" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type FooterSectionVariants = VariantProps<typeof footerSectionVariants>;
declare function FooterSection({ align, className, ...props }: React__default.ComponentProps<"div"> & FooterSectionVariants & FooterBaseProps): React__default.JSX.Element;
declare function FooterItem({ className, ...props }: React__default.ComponentProps<"div"> & FooterBaseProps): React__default.JSX.Element;
declare function FooterBrand({ className, ...props }: React__default.ComponentProps<"div"> & FooterBaseProps): React__default.JSX.Element;
declare function FooterSeparator(props: React__default.ComponentProps<"hr"> & FooterBaseProps): React__default.JSX.Element;

declare const containerVariants: (props?: ({
    name?: "main" | "outlined" | null | undefined;
    direction?: "horizontal" | "vertical" | null | undefined;
    align?: "center" | "end" | "start" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | "around" | null | undefined;
    spacing?: "none" | "normal" | "tight" | "loose" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ContainerVariants = VariantProps<typeof containerVariants>;
interface ContainerProps extends React__default.HTMLAttributes<HTMLDivElement>, ContainerVariants {
    as?: React__default.ElementType;
}
declare function Container({ justify, align, spacing, direction, className, as: Component, name, ...props }: ContainerProps): React__default.JSX.Element;

declare function LoadingIndicator(): React__default.JSX.Element;

interface SelectableListProps<T> {
    items: T[];
    placeholder?: string;
    emtyText?: string;
    onChange?: (items: T[], action: "add" | "remove") => void;
    onAdd?: (item: T) => void;
    onRemove?: (item: T) => void;
    getItemLabel?: (item: T) => React$1.ReactNode;
    getItemValue?: (item: T) => string;
    initialSelectedItems?: T[];
}
/**
 * A reusable SelectableList component for managing item selection from a list.
 *
 * @template T - The data type of each item in the list.
 *
 * @param {Object} props - Component props
 * @param {T[]} props.items - The full list of selectable items.
 * @param {T[]} [props.initialSelectedItems] - Items that should be initially selected when the component mounts.
 * @param {(selectedItems: T[], action: "add" | "remove") => void} [props.onChange] - Callback triggered when the selection changes.
 * @param {(item: T) => void} [props.onAdd] - Called when an item is added to the selection.
 * @param {(item: T) => void} [props.onRemove] - Called when an item is removed from the selection.
 * @param {(item: T) => React.ReactNode} [props.getItemLabel] - Function to return the display label for an item.
 * @param {(item: T) => string} [props.getItemValue] - Function to return a unique identifier for an item (used for tracking).
 * @param {string} [props.placeholder] - Placeholder text shown when no items are selected.
 * @param {string} [props.emtyText] - Text to show when the search yields no results.
 */
declare function SelectableList<T>({ placeholder, items, onChange, onAdd, onRemove, getItemLabel, getItemValue, emtyText, initialSelectedItems, }: SelectableListProps<T>): React$1.JSX.Element;

declare function useIsMobile(): boolean;

declare function useRelativeTime(date: Date): string;

type IndicatorState = {
    isLoading: boolean;
    progress: number;
};
declare function useLoadingIndicator(): IndicatorState;

declare function isResponsiveObject<T>(value: ResponsiveValue<T>): value is ResponsiveObject<T>;

declare function cn(...inputs: ClassValue[]): string;

type InjectPropsToChildrenOptions = {
    components: React__default.ElementType[];
    props: Record<string, unknown>;
};
declare function injectPropsToChildren(children: React__default.ReactNode, options: InjectPropsToChildrenOptions): React__default.ReactNode;

export { Accordion, Alert, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertTitle, AspectRatio, Aurora, AutoPagination, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeVariants, Balatro, Button, type ButtonVariants, Calendar, Card, CardAction, CardContent, type CardContentVariants, CardDescription, CardFooter, type CardFooterVariants, CardHeader, type CardHeaderVariants, CardTitle, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip, ChartTooltipContent, CheckIcon, CloudPlayer, Collapsible, CollapsibleContent, CollapsibleTrigger, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, Container, type ContainerProps, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuPortal, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, DEFAULT_NAVBAR_HEIGHT, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, FLOATING_MARGIN, Footer, FooterBrand, FooterItem, FooterSection, type FooterSectionVariants, FooterSeparator, type FooterVariants, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type InputVariants, Label, List, type ListProps, LoadingIndicator, LogoIcon, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, Navbar, NavbarContent, NavbarItem, type NavbarVariants, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuListItem, NavigationMenuTrigger, NavigationMenuViewport, PenIcon, PlayerSkeleton, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, Progress, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, ScrollArea, ScrollBar, SearchInput, type SearchInputVariants, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, SelectableList, type SelectableListProps, Separator, Sheet, SheetClose, SheetContent, type SheetContentVariants, SheetDescription, SheetFooter, SheetHeader, SheetItem, SheetSection, SheetTitle, SheetTrigger, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, type SidebarMenuButtonVariants, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Skeleton, type SkeletonVariants, Slider, Spinner, type SpinnerVariants, Squares, StepItem, Steppers, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Text, type TextProps, type TextVariants, Textarea, type TextareaVariants, Toaster, Toggle, ToggleGroup, ToggleGroupItem, type ToggleVariants, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, VideoPlayer, badgeVariants, buttonVariants, cn, footerSectionVariants, footerVariants, injectPropsToChildren, inputVariants, isResponsiveObject, navigationMenuTriggerStyle, searchInputVariants, sheetContentVariants, spinnerVariants, textVariants, toggleVariants, useFormField, useIsMobile, useLoadingIndicator, useRelativeTime, useSidebar };
