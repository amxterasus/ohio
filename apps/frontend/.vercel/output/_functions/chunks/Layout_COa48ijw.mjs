import {
  c as createComponent,
  b as createAstro,
  m as maybeRenderHead,
  h as addAttribute,
  r as renderComponent,
  a as renderTemplate,
  i as renderSlot,
  j as renderHead,
} from './astro/server_ZzAh1HeT.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Sun, Moon } from 'lucide-react';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
/* empty css                            */

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button';
  return /* @__PURE__ */ jsx(Comp, {
    'data-slot': 'button',
    className: cn(buttonVariants({ variant, size, className })),
    ...props,
  });
}

function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { 'data-slot': 'dropdown-menu', ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Trigger, { 'data-slot': 'dropdown-menu-trigger', ...props });
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, {
    children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.Content, {
      'data-slot': 'dropdown-menu-content',
      sideOffset,
      className: cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
        className
      ),
      ...props,
    }),
  });
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Item, {
    'data-slot': 'dropdown-menu-item',
    'data-inset': inset,
    'data-variant': variant,
    className: cn(
      "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
      className
    ),
    ...props,
  });
}

function ModeToggle() {
  const [theme, setThemeState] = React.useState('theme-light');
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setThemeState(isDarkMode ? 'dark' : 'theme-light');
  }, []);
  React.useEffect(() => {
    const isDark =
      theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [theme]);
  return /* @__PURE__ */ jsxs(DropdownMenu, {
    children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs(Button, {
          variant: 'ghost',
          size: 'icon',
          children: [
            /* @__PURE__ */ jsx(Sun, {
              className: 'h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90',
            }),
            /* @__PURE__ */ jsx(Moon, {
              className: 'absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0',
            }),
            /* @__PURE__ */ jsx('span', { className: 'sr-only', children: 'Toggle theme' }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, {
        align: 'end',
        children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState('theme-light'), children: 'Light' }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState('dark'), children: 'Dark' }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState('system'), children: 'System' }),
        ],
      }),
    ],
  });
}

const $$Astro$1 = createAstro();
const $$Header = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
    Astro2.self = $$Header;
    const isActive = Astro2.url.pathname;
    return renderTemplate`${maybeRenderHead()}<header class="flex flex-col top-0 z-30 sticky bg-background backdrop-blur-md"> <nav class="md:grid grid-cols-12 md:border-b top-0 flex items-center justify-between"> <a href="" title="Ohio" class="md:border-r md:px-5 px-2.5 py-4 md:col-span-2 shrink-0 md:w-[268px] lg:w-[286px] text-ohio">ohio</a> <div class="md:col-span-10 flex items-center justify-end relative"> <ul class="md:flex items-center divide-x w-max hidden shrink-0"> <li class="relative group"> <a class="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-muted-foreground" href="/">_index</a> <div${addAttribute(
      cn(
        'absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500',
        'group-hover:opacity-100 group-hover:w-full',
        isActive === '/' ? 'opacity-100 w-full' : 'w-0'
      ),
      'class'
    )}></div> </li> <li class="relative group"> <a class="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-muted-foreground" href="/guilds">guilds</a> <div${addAttribute(
      cn(
        'absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500',
        'group-hover:opacity-100 group-hover:w-full',
        isActive === '/guilds' ? 'opacity-100 w-full' : 'w-0'
      ),
      'class'
    )}></div> </li> <li class="relative group"> <a class="w-full h-full block py-4 px-5 transition-colors group-hover:text-foreground text-muted-foreground" href="/joins">joins</a> <div${addAttribute(
      cn(
        'absolute bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500',
        'group-hover:opacity-100 group-hover:w-full',
        isActive === '/joins' ? 'opacity-100 w-full' : 'w-0'
      ),
      'class'
    )}></div> </li> <li class="relative group bg-muted/20"> <div class="w-full h-full block py-2.5 px-5 transition-colors group-hover:text-foreground text-muted-foreground"> ${renderComponent($$result, 'ModeToggle', ModeToggle, { 'client:load': true, 'client:component-hydration': 'load', 'client:component-path': '@/components/ui/ModeToggle', 'client:component-export': 'ModeToggle' })} </div> </li> </ul> </div> </nav> </header>`;
  },
  '/home/amxte/projects/ohio/apps/frontend/src/components/layout/Header.astro',
  void 0
);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, 'raw', { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Layout;
    const { title } = Astro2.props;
    return renderTemplate(
      _a ||
        (_a = __template([
          '<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"',
          '><title>ohio ',
          ' ;;</title>',
          '</head> <body class="overflow-y-auto scrollbar-hidden"> ',
          ' ',
          ` <div class="hidden absolute top-0 left-5 w-px h-[calc(100%_+_30px)] bg-border pointer-events-none lg:block lg:left-16 xl:left-16"></div> <div class="hidden absolute top-0 right-5 w-px h-[calc(100%_+_30px)] bg-border pointer-events-none lg:block lg:right-14 xl:right-14"></div> <script>
  const getThemePreference = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const isDark = getThemePreference() === 'dark';
  document.documentElement.classList[isDark ? 'add' : 'remove']('dark');

  if (typeof localStorage !== 'undefined') {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }
<\/script></body></html>`,
        ])),
      addAttribute(Astro2.generator, 'content'),
      title,
      renderHead(),
      renderComponent($$result, 'Header', $$Header, {}),
      renderSlot($$result, $$slots['default'])
    );
  },
  '/home/amxte/projects/ohio/apps/frontend/src/layouts/Layout.astro',
  void 0
);

export { $$Layout as $, Button as B, cn as c };
