import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name, mobileMenuOpen, navigation, logout, todoForm, create, todos, deleteTodo } from './Todo.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'Bars3Icon', typeof __VLS_localComponents, "Bars3Icon", "Bars3Icon", "Bars3Icon"> &
__VLS_WithComponent<'Dialog', typeof __VLS_localComponents, "Dialog", "Dialog", "Dialog"> &
__VLS_WithComponent<'DialogPanel', typeof __VLS_localComponents, "DialogPanel", "DialogPanel", "DialogPanel"> &
__VLS_WithComponent<'XMarkIcon', typeof __VLS_localComponents, "XMarkIcon", "XMarkIcon", "XMarkIcon">;
__VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div; __VLS_intrinsicElements.div;
__VLS_intrinsicElements.header; __VLS_intrinsicElements.header;
__VLS_intrinsicElements.nav; __VLS_intrinsicElements.nav;
__VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a; __VLS_intrinsicElements.a;
__VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span; __VLS_intrinsicElements.span;
__VLS_intrinsicElements.img; __VLS_intrinsicElements.img;
__VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button; __VLS_intrinsicElements.button;
__VLS_components.Bars3Icon;
// @ts-ignore
[Bars3Icon,];
__VLS_components.Dialog; __VLS_components.Dialog;
// @ts-ignore
[Dialog, Dialog,];
__VLS_components.DialogPanel; __VLS_components.DialogPanel;
// @ts-ignore
[DialogPanel, DialogPanel,];
__VLS_components.XMarkIcon;
// @ts-ignore
[XMarkIcon,];
__VLS_intrinsicElements.h2; __VLS_intrinsicElements.h2;
__VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p; __VLS_intrinsicElements.p;
__VLS_intrinsicElements.label; __VLS_intrinsicElements.label;
__VLS_intrinsicElements.input;
__VLS_intrinsicElements.ul; __VLS_intrinsicElements.ul;
__VLS_intrinsicElements.li; __VLS_intrinsicElements.li;
__VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg; __VLS_intrinsicElements.svg;
__VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path; __VLS_intrinsicElements.path;
{
const __VLS_0 = __VLS_intrinsicElements["div"];
const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
const __VLS_2 = __VLS_1({ ...{}, class: ("bg-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, class: ("bg-white"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
{
const __VLS_5 = __VLS_intrinsicElements["header"];
const __VLS_6 = __VLS_elementAsFunctionalComponent(__VLS_5);
const __VLS_7 = __VLS_6({ ...{}, class: ("absolute inset-x-0 top-0 z-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, class: ("absolute inset-x-0 top-0 z-50"), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
{
const __VLS_10 = __VLS_intrinsicElements["nav"];
const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
const __VLS_12 = __VLS_11({ ...{}, class: ("flex items-center justify-between p-6 lg:px-8"), "aria-label": ("Global"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-between p-6 lg:px-8"), "aria-label": ("Global"), });
const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
{
const __VLS_15 = __VLS_intrinsicElements["div"];
const __VLS_16 = __VLS_elementAsFunctionalComponent(__VLS_15);
const __VLS_17 = __VLS_16({ ...{}, class: ("flex lg:flex-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>) => void)({ ...{}, class: ("flex lg:flex-1"), });
const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
{
const __VLS_20 = __VLS_intrinsicElements["a"];
const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
const __VLS_22 = __VLS_21({ ...{}, href: ("#"), class: ("-m-1.5 p-1.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-1.5 p-1.5"), });
const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
{
const __VLS_25 = __VLS_intrinsicElements["span"];
const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
const __VLS_27 = __VLS_26({ ...{}, class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_26));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>) => void)({ ...{}, class: ("sr-only"), });
const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
(__VLS_28.slots!).default;
}
{
const __VLS_30 = __VLS_intrinsicElements["img"];
const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
const __VLS_32 = __VLS_31({ ...{}, class: ("h-8 w-auto"), src: ("https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>) => void)({ ...{}, class: ("h-8 w-auto"), src: ("https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"), alt: (""), });
const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
}
(__VLS_23.slots!).default;
}
(__VLS_18.slots!).default;
}
{
const __VLS_35 = __VLS_intrinsicElements["div"];
const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
const __VLS_37 = __VLS_36({ ...{}, class: ("flex lg:hidden"), }, ...__VLS_functionalComponentArgsRest(__VLS_36));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>) => void)({ ...{}, class: ("flex lg:hidden"), });
const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
{
const __VLS_40 = __VLS_intrinsicElements["button"];
const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
const __VLS_42 = __VLS_41({ ...{ onClick: {} as any, }, type: ("button"), class: ("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"), });
const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
let __VLS_45 = { 'click': __VLS_pickEvent(__VLS_44['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_41, typeof __VLS_42>).onClick) };
__VLS_45 = {
click: $event => {
__VLS_ctx.mobileMenuOpen = true;
// @ts-ignore
[mobileMenuOpen,];
}
};
{
const __VLS_46 = __VLS_intrinsicElements["span"];
const __VLS_47 = __VLS_elementAsFunctionalComponent(__VLS_46);
const __VLS_48 = __VLS_47({ ...{}, class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_46, typeof __VLS_48> & Record<string, unknown>) => void)({ ...{}, class: ("sr-only"), });
const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48)!;
let __VLS_50!: __VLS_NormalizeEmits<typeof __VLS_49.emit>;
(__VLS_49.slots!).default;
}
{
const __VLS_51 = ({} as 'Bars3Icon' extends keyof typeof __VLS_ctx ? { 'Bars3Icon': typeof __VLS_ctx.Bars3Icon; } : typeof __VLS_resolvedLocalAndGlobalComponents).Bars3Icon;
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), }));
({} as { Bars3Icon: typeof __VLS_51; }).Bars3Icon;
const __VLS_53 = __VLS_52({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_52));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_51, typeof __VLS_53> & Record<string, unknown>) => void)({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), });
const __VLS_54 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53)!;
let __VLS_55!: __VLS_NormalizeEmits<typeof __VLS_54.emit>;
}
(__VLS_43.slots!).default;
}
(__VLS_38.slots!).default;
}
{
const __VLS_56 = __VLS_intrinsicElements["div"];
const __VLS_57 = __VLS_elementAsFunctionalComponent(__VLS_56);
const __VLS_58 = __VLS_57({ ...{}, class: ("hidden lg:flex lg:gap-x-12"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_56, typeof __VLS_58> & Record<string, unknown>) => void)({ ...{}, class: ("hidden lg:flex lg:gap-x-12"), });
const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58)!;
let __VLS_60!: __VLS_NormalizeEmits<typeof __VLS_59.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigation)!)) {
{
const __VLS_61 = __VLS_intrinsicElements["a"];
const __VLS_62 = __VLS_elementAsFunctionalComponent(__VLS_61);
const __VLS_63 = __VLS_62({ ...{}, key: ((item.name)), href: ((item.href)), class: ("text-sm font-semibold leading-6 text-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_61, typeof __VLS_63> & Record<string, unknown>) => void)({ ...{}, key: ((item.name)), href: ((item.href)), class: ("text-sm font-semibold leading-6 text-gray-900"), });
const __VLS_64 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63)!;
let __VLS_65!: __VLS_NormalizeEmits<typeof __VLS_64.emit>;
(item.name);
(__VLS_64.slots!).default;
}
// @ts-ignore
[navigation,];
}
(__VLS_59.slots!).default;
}
{
const __VLS_66 = __VLS_intrinsicElements["div"];
const __VLS_67 = __VLS_elementAsFunctionalComponent(__VLS_66);
const __VLS_68 = __VLS_67({ ...{}, class: ("hidden lg:flex lg:flex-1 lg:justify-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_66, typeof __VLS_68> & Record<string, unknown>) => void)({ ...{}, class: ("hidden lg:flex lg:flex-1 lg:justify-end"), });
const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68)!;
let __VLS_70!: __VLS_NormalizeEmits<typeof __VLS_69.emit>;
{
const __VLS_71 = __VLS_intrinsicElements["a"];
const __VLS_72 = __VLS_elementAsFunctionalComponent(__VLS_71);
const __VLS_73 = __VLS_72({ ...{ onClick: {} as any, }, href: ("#"), class: ("text-sm font-semibold leading-6 text-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_71, typeof __VLS_73> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("#"), class: ("text-sm font-semibold leading-6 text-gray-900"), });
const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73)!;
let __VLS_75!: __VLS_NormalizeEmits<typeof __VLS_74.emit>;
let __VLS_76 = { 'click': __VLS_pickEvent(__VLS_75['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_72, typeof __VLS_73>).onClick) };
__VLS_76 = { click: (__VLS_ctx.logout) };
{
const __VLS_77 = __VLS_intrinsicElements["span"];
const __VLS_78 = __VLS_elementAsFunctionalComponent(__VLS_77);
const __VLS_79 = __VLS_78({ ...{}, "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_78));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_77, typeof __VLS_79> & Record<string, unknown>) => void)({ ...{}, "aria-hidden": ("true"), });
const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_77, __VLS_79)!;
let __VLS_81!: __VLS_NormalizeEmits<typeof __VLS_80.emit>;
(__VLS_80.slots!).default;
}
(__VLS_74.slots!).default;
}
(__VLS_69.slots!).default;
}
(__VLS_13.slots!).default;
}
{
const __VLS_82 = ({} as 'Dialog' extends keyof typeof __VLS_ctx ? { 'Dialog': typeof __VLS_ctx.Dialog; } : typeof __VLS_resolvedLocalAndGlobalComponents).Dialog;
const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({ ...{ onClose: {} as any, }, as: ("div"), class: ("lg:hidden"), open: ((__VLS_ctx.mobileMenuOpen)), }));
({} as { Dialog: typeof __VLS_82; }).Dialog;
({} as { Dialog: typeof __VLS_82; }).Dialog;
const __VLS_84 = __VLS_83({ ...{ onClose: {} as any, }, as: ("div"), class: ("lg:hidden"), open: ((__VLS_ctx.mobileMenuOpen)), }, ...__VLS_functionalComponentArgsRest(__VLS_83));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_82, typeof __VLS_84> & Record<string, unknown>) => void)({ ...{ onClose: {} as any, }, as: ("div"), class: ("lg:hidden"), open: ((__VLS_ctx.mobileMenuOpen)), });
const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84)!;
let __VLS_86!: __VLS_NormalizeEmits<typeof __VLS_85.emit>;
let __VLS_87 = { 'close': __VLS_pickEvent(__VLS_86['close'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_83, typeof __VLS_84>).onClose) };
__VLS_87 = {
close: $event => {
__VLS_ctx.mobileMenuOpen = false;
// @ts-ignore
[logout, mobileMenuOpen, mobileMenuOpen, mobileMenuOpen, mobileMenuOpen,];
}
};
{
const __VLS_88 = __VLS_intrinsicElements["div"];
const __VLS_89 = __VLS_elementAsFunctionalComponent(__VLS_88);
const __VLS_90 = __VLS_89({ ...{}, class: ("fixed inset-0 z-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_89));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_88, typeof __VLS_90> & Record<string, unknown>) => void)({ ...{}, class: ("fixed inset-0 z-50"), });
const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90)!;
let __VLS_92!: __VLS_NormalizeEmits<typeof __VLS_91.emit>;
}
{
const __VLS_93 = ({} as 'DialogPanel' extends keyof typeof __VLS_ctx ? { 'DialogPanel': typeof __VLS_ctx.DialogPanel; } : typeof __VLS_resolvedLocalAndGlobalComponents).DialogPanel;
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ ...{}, class: ("fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"), }));
({} as { DialogPanel: typeof __VLS_93; }).DialogPanel;
({} as { DialogPanel: typeof __VLS_93; }).DialogPanel;
const __VLS_95 = __VLS_94({ ...{}, class: ("fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_93, typeof __VLS_95> & Record<string, unknown>) => void)({ ...{}, class: ("fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"), });
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
let __VLS_97!: __VLS_NormalizeEmits<typeof __VLS_96.emit>;
{
const __VLS_98 = __VLS_intrinsicElements["div"];
const __VLS_99 = __VLS_elementAsFunctionalComponent(__VLS_98);
const __VLS_100 = __VLS_99({ ...{}, class: ("flex items-center justify-between"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_98, typeof __VLS_100> & Record<string, unknown>) => void)({ ...{}, class: ("flex items-center justify-between"), });
const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100)!;
let __VLS_102!: __VLS_NormalizeEmits<typeof __VLS_101.emit>;
{
const __VLS_103 = __VLS_intrinsicElements["a"];
const __VLS_104 = __VLS_elementAsFunctionalComponent(__VLS_103);
const __VLS_105 = __VLS_104({ ...{}, href: ("#"), class: ("-m-1.5 p-1.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_104));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_103, typeof __VLS_105> & Record<string, unknown>) => void)({ ...{}, href: ("#"), class: ("-m-1.5 p-1.5"), });
const __VLS_106 = __VLS_pickFunctionalComponentCtx(__VLS_103, __VLS_105)!;
let __VLS_107!: __VLS_NormalizeEmits<typeof __VLS_106.emit>;
{
const __VLS_108 = __VLS_intrinsicElements["span"];
const __VLS_109 = __VLS_elementAsFunctionalComponent(__VLS_108);
const __VLS_110 = __VLS_109({ ...{}, class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_109));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_108, typeof __VLS_110> & Record<string, unknown>) => void)({ ...{}, class: ("sr-only"), });
const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110)!;
let __VLS_112!: __VLS_NormalizeEmits<typeof __VLS_111.emit>;
(__VLS_111.slots!).default;
}
{
const __VLS_113 = __VLS_intrinsicElements["img"];
const __VLS_114 = __VLS_elementAsFunctionalComponent(__VLS_113);
const __VLS_115 = __VLS_114({ ...{}, class: ("h-8 w-auto"), src: ("https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_114));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_113, typeof __VLS_115> & Record<string, unknown>) => void)({ ...{}, class: ("h-8 w-auto"), src: ("https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"), alt: (""), });
const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_113, __VLS_115)!;
let __VLS_117!: __VLS_NormalizeEmits<typeof __VLS_116.emit>;
}
(__VLS_106.slots!).default;
}
{
const __VLS_118 = __VLS_intrinsicElements["button"];
const __VLS_119 = __VLS_elementAsFunctionalComponent(__VLS_118);
const __VLS_120 = __VLS_119({ ...{ onClick: {} as any, }, type: ("button"), class: ("-m-2.5 rounded-md p-2.5 text-gray-700"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_118, typeof __VLS_120> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("-m-2.5 rounded-md p-2.5 text-gray-700"), });
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
let __VLS_122!: __VLS_NormalizeEmits<typeof __VLS_121.emit>;
let __VLS_123 = { 'click': __VLS_pickEvent(__VLS_122['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_119, typeof __VLS_120>).onClick) };
__VLS_123 = {
click: $event => {
__VLS_ctx.mobileMenuOpen = false;
// @ts-ignore
[mobileMenuOpen,];
}
};
{
const __VLS_124 = __VLS_intrinsicElements["span"];
const __VLS_125 = __VLS_elementAsFunctionalComponent(__VLS_124);
const __VLS_126 = __VLS_125({ ...{}, class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_124, typeof __VLS_126> & Record<string, unknown>) => void)({ ...{}, class: ("sr-only"), });
const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126)!;
let __VLS_128!: __VLS_NormalizeEmits<typeof __VLS_127.emit>;
(__VLS_127.slots!).default;
}
{
const __VLS_129 = ({} as 'XMarkIcon' extends keyof typeof __VLS_ctx ? { 'XMarkIcon': typeof __VLS_ctx.XMarkIcon; } : typeof __VLS_resolvedLocalAndGlobalComponents).XMarkIcon;
const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), }));
({} as { XMarkIcon: typeof __VLS_129; }).XMarkIcon;
const __VLS_131 = __VLS_130({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_130));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_129, typeof __VLS_131> & Record<string, unknown>) => void)({ ...{}, class: ("h-6 w-6"), "aria-hidden": ("true"), });
const __VLS_132 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131)!;
let __VLS_133!: __VLS_NormalizeEmits<typeof __VLS_132.emit>;
}
(__VLS_121.slots!).default;
}
(__VLS_101.slots!).default;
}
{
const __VLS_134 = __VLS_intrinsicElements["div"];
const __VLS_135 = __VLS_elementAsFunctionalComponent(__VLS_134);
const __VLS_136 = __VLS_135({ ...{}, class: ("mt-6 flow-root"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_134, typeof __VLS_136> & Record<string, unknown>) => void)({ ...{}, class: ("mt-6 flow-root"), });
const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136)!;
let __VLS_138!: __VLS_NormalizeEmits<typeof __VLS_137.emit>;
{
const __VLS_139 = __VLS_intrinsicElements["div"];
const __VLS_140 = __VLS_elementAsFunctionalComponent(__VLS_139);
const __VLS_141 = __VLS_140({ ...{}, class: ("-my-6 divide-y divide-gray-500/10"), }, ...__VLS_functionalComponentArgsRest(__VLS_140));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_139, typeof __VLS_141> & Record<string, unknown>) => void)({ ...{}, class: ("-my-6 divide-y divide-gray-500/10"), });
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
let __VLS_143!: __VLS_NormalizeEmits<typeof __VLS_142.emit>;
{
const __VLS_144 = __VLS_intrinsicElements["div"];
const __VLS_145 = __VLS_elementAsFunctionalComponent(__VLS_144);
const __VLS_146 = __VLS_145({ ...{}, class: ("space-y-2 py-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_145));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_144, typeof __VLS_146> & Record<string, unknown>) => void)({ ...{}, class: ("space-y-2 py-6"), });
const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_144, __VLS_146)!;
let __VLS_148!: __VLS_NormalizeEmits<typeof __VLS_147.emit>;
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.navigation)!)) {
{
const __VLS_149 = __VLS_intrinsicElements["a"];
const __VLS_150 = __VLS_elementAsFunctionalComponent(__VLS_149);
const __VLS_151 = __VLS_150({ ...{}, key: ((item.name)), href: ((item.href)), class: ("-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_150));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_149, typeof __VLS_151> & Record<string, unknown>) => void)({ ...{}, key: ((item.name)), href: ((item.href)), class: ("-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"), });
const __VLS_152 = __VLS_pickFunctionalComponentCtx(__VLS_149, __VLS_151)!;
let __VLS_153!: __VLS_NormalizeEmits<typeof __VLS_152.emit>;
(
item.name);
(__VLS_152.slots!).default;
}
// @ts-ignore
[navigation,];
}
(__VLS_147.slots!).default;
}
{
const __VLS_154 = __VLS_intrinsicElements["div"];
const __VLS_155 = __VLS_elementAsFunctionalComponent(__VLS_154);
const __VLS_156 = __VLS_155({ ...{}, class: ("py-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_154, typeof __VLS_156> & Record<string, unknown>) => void)({ ...{}, class: ("py-6"), });
const __VLS_157 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156)!;
let __VLS_158!: __VLS_NormalizeEmits<typeof __VLS_157.emit>;
{
const __VLS_159 = __VLS_intrinsicElements["a"];
const __VLS_160 = __VLS_elementAsFunctionalComponent(__VLS_159);
const __VLS_161 = __VLS_160({ ...{ onClick: {} as any, }, href: ("#"), class: ("-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"), }, ...__VLS_functionalComponentArgsRest(__VLS_160));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_159, typeof __VLS_161> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, href: ("#"), class: ("-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"), });
const __VLS_162 = __VLS_pickFunctionalComponentCtx(__VLS_159, __VLS_161)!;
let __VLS_163!: __VLS_NormalizeEmits<typeof __VLS_162.emit>;
let __VLS_164 = { 'click': __VLS_pickEvent(__VLS_163['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_160, typeof __VLS_161>).onClick) };
__VLS_164 = { click: (__VLS_ctx.logout) };
(__VLS_162.slots!).default;
}
(__VLS_157.slots!).default;
}
(__VLS_142.slots!).default;
}
(__VLS_137.slots!).default;
}
(__VLS_96.slots!).default;
}
(__VLS_85.slots!).default;
}
(__VLS_8.slots!).default;
}
{
const __VLS_165 = __VLS_intrinsicElements["div"];
const __VLS_166 = __VLS_elementAsFunctionalComponent(__VLS_165);
const __VLS_167 = __VLS_166({ ...{}, class: ("relative isolate px-6 pt-14 lg:px-8 mt-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_166));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_165, typeof __VLS_167> & Record<string, unknown>) => void)({ ...{}, class: ("relative isolate px-6 pt-14 lg:px-8 mt-4"), });
const __VLS_168 = __VLS_pickFunctionalComponentCtx(__VLS_165, __VLS_167)!;
let __VLS_169!: __VLS_NormalizeEmits<typeof __VLS_168.emit>;
{
const __VLS_170 = __VLS_intrinsicElements["div"];
const __VLS_171 = __VLS_elementAsFunctionalComponent(__VLS_170);
const __VLS_172 = __VLS_171({ ...{}, class: ("relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"), }, ...__VLS_functionalComponentArgsRest(__VLS_171));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_170, typeof __VLS_172> & Record<string, unknown>) => void)({ ...{}, class: ("relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"), });
const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_170, __VLS_172)!;
let __VLS_174!: __VLS_NormalizeEmits<typeof __VLS_173.emit>;
{
const __VLS_175 = __VLS_intrinsicElements["div"];
const __VLS_176 = __VLS_elementAsFunctionalComponent(__VLS_175);
const __VLS_177 = __VLS_176({ ...{}, class: ("mx-auto max-w-7xl px-6 lg:px-8"), }, ...__VLS_functionalComponentArgsRest(__VLS_176));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_175, typeof __VLS_177> & Record<string, unknown>) => void)({ ...{}, class: ("mx-auto max-w-7xl px-6 lg:px-8"), });
const __VLS_178 = __VLS_pickFunctionalComponentCtx(__VLS_175, __VLS_177)!;
let __VLS_179!: __VLS_NormalizeEmits<typeof __VLS_178.emit>;
{
const __VLS_180 = __VLS_intrinsicElements["div"];
const __VLS_181 = __VLS_elementAsFunctionalComponent(__VLS_180);
const __VLS_182 = __VLS_181({ ...{}, class: ("mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"), }, ...__VLS_functionalComponentArgsRest(__VLS_181));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_180, typeof __VLS_182> & Record<string, unknown>) => void)({ ...{}, class: ("mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2"), });
const __VLS_183 = __VLS_pickFunctionalComponentCtx(__VLS_180, __VLS_182)!;
let __VLS_184!: __VLS_NormalizeEmits<typeof __VLS_183.emit>;
{
const __VLS_185 = __VLS_intrinsicElements["div"];
const __VLS_186 = __VLS_elementAsFunctionalComponent(__VLS_185);
const __VLS_187 = __VLS_186({ ...{}, class: ("max-w-xl lg:max-w-lg"), }, ...__VLS_functionalComponentArgsRest(__VLS_186));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_185, typeof __VLS_187> & Record<string, unknown>) => void)({ ...{}, class: ("max-w-xl lg:max-w-lg"), });
const __VLS_188 = __VLS_pickFunctionalComponentCtx(__VLS_185, __VLS_187)!;
let __VLS_189!: __VLS_NormalizeEmits<typeof __VLS_188.emit>;
{
const __VLS_190 = __VLS_intrinsicElements["h2"];
const __VLS_191 = __VLS_elementAsFunctionalComponent(__VLS_190);
const __VLS_192 = __VLS_191({ ...{}, class: ("text-3xl font-bold tracking-tight text-white sm:text-4xl"), }, ...__VLS_functionalComponentArgsRest(__VLS_191));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_190, typeof __VLS_192> & Record<string, unknown>) => void)({ ...{}, class: ("text-3xl font-bold tracking-tight text-white sm:text-4xl"), });
const __VLS_193 = __VLS_pickFunctionalComponentCtx(__VLS_190, __VLS_192)!;
let __VLS_194!: __VLS_NormalizeEmits<typeof __VLS_193.emit>;
(__VLS_193.slots!).default;
}
{
const __VLS_195 = __VLS_intrinsicElements["p"];
const __VLS_196 = __VLS_elementAsFunctionalComponent(__VLS_195);
const __VLS_197 = __VLS_196({ ...{}, class: ("mt-4 text-lg leading-8 text-gray-300"), }, ...__VLS_functionalComponentArgsRest(__VLS_196));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_195, typeof __VLS_197> & Record<string, unknown>) => void)({ ...{}, class: ("mt-4 text-lg leading-8 text-gray-300"), });
const __VLS_198 = __VLS_pickFunctionalComponentCtx(__VLS_195, __VLS_197)!;
let __VLS_199!: __VLS_NormalizeEmits<typeof __VLS_198.emit>;
(__VLS_198.slots!).default;
}
{
const __VLS_200 = __VLS_intrinsicElements["div"];
const __VLS_201 = __VLS_elementAsFunctionalComponent(__VLS_200);
const __VLS_202 = __VLS_201({ ...{}, class: ("mt-6 flex max-w-md gap-x-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_201));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_200, typeof __VLS_202> & Record<string, unknown>) => void)({ ...{}, class: ("mt-6 flex max-w-md gap-x-4"), });
const __VLS_203 = __VLS_pickFunctionalComponentCtx(__VLS_200, __VLS_202)!;
let __VLS_204!: __VLS_NormalizeEmits<typeof __VLS_203.emit>;
{
const __VLS_205 = __VLS_intrinsicElements["label"];
const __VLS_206 = __VLS_elementAsFunctionalComponent(__VLS_205);
const __VLS_207 = __VLS_206({ ...{}, for: ("todo"), class: ("sr-only"), }, ...__VLS_functionalComponentArgsRest(__VLS_206));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_205, typeof __VLS_207> & Record<string, unknown>) => void)({ ...{}, for: ("todo"), class: ("sr-only"), });
const __VLS_208 = __VLS_pickFunctionalComponentCtx(__VLS_205, __VLS_207)!;
let __VLS_209!: __VLS_NormalizeEmits<typeof __VLS_208.emit>;
(__VLS_208.slots!).default;
}
{
const __VLS_210 = __VLS_intrinsicElements["input"];
const __VLS_211 = __VLS_elementAsFunctionalComponent(__VLS_210);
const __VLS_212 = __VLS_211({ ...{}, id: ("todo"), name: ("todo"), type: ("text"), autocomplete: ("todo"), required: (""), value: ((__VLS_ctx.todoForm.name)), class: ("min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"), placeholder: ("Enter a name"), }, ...__VLS_functionalComponentArgsRest(__VLS_211));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_210, typeof __VLS_212> & Record<string, unknown>) => void)({ ...{}, id: ("todo"), name: ("todo"), type: ("text"), autocomplete: ("todo"), required: (""), value: ((__VLS_ctx.todoForm.name)), class: ("min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"), placeholder: ("Enter a name"), });
const __VLS_213 = __VLS_pickFunctionalComponentCtx(__VLS_210, __VLS_212)!;
let __VLS_214!: __VLS_NormalizeEmits<typeof __VLS_213.emit>;
}
{
const __VLS_215 = __VLS_intrinsicElements["button"];
const __VLS_216 = __VLS_elementAsFunctionalComponent(__VLS_215);
const __VLS_217 = __VLS_216({ ...{ onClick: {} as any, }, type: ("button"), class: ("flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_216));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_215, typeof __VLS_217> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, type: ("button"), class: ("flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"), });
const __VLS_218 = __VLS_pickFunctionalComponentCtx(__VLS_215, __VLS_217)!;
let __VLS_219!: __VLS_NormalizeEmits<typeof __VLS_218.emit>;
let __VLS_220 = { 'click': __VLS_pickEvent(__VLS_219['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_216, typeof __VLS_217>).onClick) };
__VLS_220 = { click: (__VLS_ctx.create) };
(__VLS_218.slots!).default;
}
(__VLS_203.slots!).default;
}
(__VLS_188.slots!).default;
}
{
const __VLS_221 = __VLS_intrinsicElements["ul"];
const __VLS_222 = __VLS_elementAsFunctionalComponent(__VLS_221);
const __VLS_223 = __VLS_222({ ...{}, role: ("list"), class: ("divide-y divide-gray-100"), }, ...__VLS_functionalComponentArgsRest(__VLS_222));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_221, typeof __VLS_223> & Record<string, unknown>) => void)({ ...{}, role: ("list"), class: ("divide-y divide-gray-100"), });
const __VLS_224 = __VLS_pickFunctionalComponentCtx(__VLS_221, __VLS_223)!;
let __VLS_225!: __VLS_NormalizeEmits<typeof __VLS_224.emit>;
for (const [todo] of __VLS_getVForSourceType((__VLS_ctx.todos)!)) {
{
const __VLS_226 = __VLS_intrinsicElements["li"];
const __VLS_227 = __VLS_elementAsFunctionalComponent(__VLS_226);
const __VLS_228 = __VLS_227({ ...{}, key: ((todo.id)), class: ("flex justify-between gap-x-6 py-5"), }, ...__VLS_functionalComponentArgsRest(__VLS_227));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_226, typeof __VLS_228> & Record<string, unknown>) => void)({ ...{}, key: ((todo.id)), class: ("flex justify-between gap-x-6 py-5"), });
const __VLS_229 = __VLS_pickFunctionalComponentCtx(__VLS_226, __VLS_228)!;
let __VLS_230!: __VLS_NormalizeEmits<typeof __VLS_229.emit>;
{
const __VLS_231 = __VLS_intrinsicElements["div"];
const __VLS_232 = __VLS_elementAsFunctionalComponent(__VLS_231);
const __VLS_233 = __VLS_232({ ...{}, class: ("flex min-w-0 gap-x-4"), }, ...__VLS_functionalComponentArgsRest(__VLS_232));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_231, typeof __VLS_233> & Record<string, unknown>) => void)({ ...{}, class: ("flex min-w-0 gap-x-4"), });
const __VLS_234 = __VLS_pickFunctionalComponentCtx(__VLS_231, __VLS_233)!;
let __VLS_235!: __VLS_NormalizeEmits<typeof __VLS_234.emit>;
{
const __VLS_236 = __VLS_intrinsicElements["span"];
const __VLS_237 = __VLS_elementAsFunctionalComponent(__VLS_236);
const __VLS_238 = __VLS_237({ ...{}, class: ("h-12 w-12 flex rounded-full bg-gray-50 justify-center items-center"), }, ...__VLS_functionalComponentArgsRest(__VLS_237));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_236, typeof __VLS_238> & Record<string, unknown>) => void)({ ...{}, class: ("h-12 w-12 flex rounded-full bg-gray-50 justify-center items-center"), });
const __VLS_239 = __VLS_pickFunctionalComponentCtx(__VLS_236, __VLS_238)!;
let __VLS_240!: __VLS_NormalizeEmits<typeof __VLS_239.emit>;
{
const __VLS_241 = __VLS_intrinsicElements["svg"];
const __VLS_242 = __VLS_elementAsFunctionalComponent(__VLS_241);
const __VLS_243 = __VLS_242({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), class: ("w-6 h-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_242));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_241, typeof __VLS_243> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), "stroke-width": ("1.5"), stroke: ("currentColor"), class: ("w-6 h-6"), });
const __VLS_244 = __VLS_pickFunctionalComponentCtx(__VLS_241, __VLS_243)!;
let __VLS_245!: __VLS_NormalizeEmits<typeof __VLS_244.emit>;
{
const __VLS_246 = __VLS_intrinsicElements["path"];
const __VLS_247 = __VLS_elementAsFunctionalComponent(__VLS_246);
const __VLS_248 = __VLS_247({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"), }, ...__VLS_functionalComponentArgsRest(__VLS_247));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_246, typeof __VLS_248> & Record<string, unknown>) => void)({ ...{}, "stroke-linecap": ("round"), "stroke-linejoin": ("round"), d: ("M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"), });
const __VLS_249 = __VLS_pickFunctionalComponentCtx(__VLS_246, __VLS_248)!;
let __VLS_250!: __VLS_NormalizeEmits<typeof __VLS_249.emit>;
}
(__VLS_244.slots!).default;
}
(__VLS_239.slots!).default;
}
{
const __VLS_251 = __VLS_intrinsicElements["div"];
const __VLS_252 = __VLS_elementAsFunctionalComponent(__VLS_251);
const __VLS_253 = __VLS_252({ ...{}, class: ("min-w-0 flex-auto"), }, ...__VLS_functionalComponentArgsRest(__VLS_252));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_251, typeof __VLS_253> & Record<string, unknown>) => void)({ ...{}, class: ("min-w-0 flex-auto"), });
const __VLS_254 = __VLS_pickFunctionalComponentCtx(__VLS_251, __VLS_253)!;
let __VLS_255!: __VLS_NormalizeEmits<typeof __VLS_254.emit>;
{
const __VLS_256 = __VLS_intrinsicElements["p"];
const __VLS_257 = __VLS_elementAsFunctionalComponent(__VLS_256);
const __VLS_258 = __VLS_257({ ...{}, class: ("text-sm font-semibold leading-6 text-white"), }, ...__VLS_functionalComponentArgsRest(__VLS_257));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_256, typeof __VLS_258> & Record<string, unknown>) => void)({ ...{}, class: ("text-sm font-semibold leading-6 text-white"), });
const __VLS_259 = __VLS_pickFunctionalComponentCtx(__VLS_256, __VLS_258)!;
let __VLS_260!: __VLS_NormalizeEmits<typeof __VLS_259.emit>;
(todo.name);
(__VLS_259.slots!).default;
}
{
const __VLS_261 = __VLS_intrinsicElements["p"];
const __VLS_262 = __VLS_elementAsFunctionalComponent(__VLS_261);
const __VLS_263 = __VLS_262({ ...{}, class: ("mt-1 truncate text-xs leading-5 text-white-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_262));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_261, typeof __VLS_263> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 truncate text-xs leading-5 text-white-500"), });
const __VLS_264 = __VLS_pickFunctionalComponentCtx(__VLS_261, __VLS_263)!;
let __VLS_265!: __VLS_NormalizeEmits<typeof __VLS_264.emit>;
(todo.description);
(__VLS_264.slots!).default;
}
(__VLS_254.slots!).default;
}
(__VLS_234.slots!).default;
}
{
const __VLS_266 = __VLS_intrinsicElements["div"];
const __VLS_267 = __VLS_elementAsFunctionalComponent(__VLS_266);
const __VLS_268 = __VLS_267({ ...{}, class: ("hidden shrink-0 sm:flex sm:flex-col sm:items-end"), }, ...__VLS_functionalComponentArgsRest(__VLS_267));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_266, typeof __VLS_268> & Record<string, unknown>) => void)({ ...{}, class: ("hidden shrink-0 sm:flex sm:flex-col sm:items-end"), });
const __VLS_269 = __VLS_pickFunctionalComponentCtx(__VLS_266, __VLS_268)!;
let __VLS_270!: __VLS_NormalizeEmits<typeof __VLS_269.emit>;
{
const __VLS_271 = __VLS_intrinsicElements["p"];
const __VLS_272 = __VLS_elementAsFunctionalComponent(__VLS_271);
const __VLS_273 = __VLS_272({ ...{}, class: ("text-sm leading-6 text-gray-900"), }, ...__VLS_functionalComponentArgsRest(__VLS_272));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_271, typeof __VLS_273> & Record<string, unknown>) => void)({ ...{}, class: ("text-sm leading-6 text-gray-900"), });
const __VLS_274 = __VLS_pickFunctionalComponentCtx(__VLS_271, __VLS_273)!;
let __VLS_275!: __VLS_NormalizeEmits<typeof __VLS_274.emit>;
(todo.role);
(__VLS_274.slots!).default;
}
{
const __VLS_276 = __VLS_intrinsicElements["p"];
const __VLS_277 = __VLS_elementAsFunctionalComponent(__VLS_276);
const __VLS_278 = __VLS_277({ ...{}, class: ("mt-1 text-xs leading-5 text-gray-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_277));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_276, typeof __VLS_278> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 text-xs leading-5 text-gray-500"), });
const __VLS_279 = __VLS_pickFunctionalComponentCtx(__VLS_276, __VLS_278)!;
let __VLS_280!: __VLS_NormalizeEmits<typeof __VLS_279.emit>;
(todo.formatted_created_at);
(__VLS_279.slots!).default;
}
{
const __VLS_281 = __VLS_intrinsicElements["div"];
const __VLS_282 = __VLS_elementAsFunctionalComponent(__VLS_281);
const __VLS_283 = __VLS_282({ ...{}, class: ("mt-1 flex items-center gap-x-1.5"), }, ...__VLS_functionalComponentArgsRest(__VLS_282));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_281, typeof __VLS_283> & Record<string, unknown>) => void)({ ...{}, class: ("mt-1 flex items-center gap-x-1.5"), });
const __VLS_284 = __VLS_pickFunctionalComponentCtx(__VLS_281, __VLS_283)!;
let __VLS_285!: __VLS_NormalizeEmits<typeof __VLS_284.emit>;
{
const __VLS_286 = __VLS_intrinsicElements["div"];
const __VLS_287 = __VLS_elementAsFunctionalComponent(__VLS_286);
const __VLS_288 = __VLS_287({ ...{}, class: ("flex-none rounded-full bg-emerald-500/20 p-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_287));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_286, typeof __VLS_288> & Record<string, unknown>) => void)({ ...{}, class: ("flex-none rounded-full bg-emerald-500/20 p-1"), });
const __VLS_289 = __VLS_pickFunctionalComponentCtx(__VLS_286, __VLS_288)!;
let __VLS_290!: __VLS_NormalizeEmits<typeof __VLS_289.emit>;
{
const __VLS_291 = __VLS_intrinsicElements["svg"];
const __VLS_292 = __VLS_elementAsFunctionalComponent(__VLS_291);
const __VLS_293 = __VLS_292({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 24 24"), fill: ("currentColor"), class: ("w-6 h-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_292));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_291, typeof __VLS_293> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 24 24"), fill: ("currentColor"), class: ("w-6 h-6"), });
const __VLS_294 = __VLS_pickFunctionalComponentCtx(__VLS_291, __VLS_293)!;
let __VLS_295!: __VLS_NormalizeEmits<typeof __VLS_294.emit>;
{
const __VLS_296 = __VLS_intrinsicElements["path"];
const __VLS_297 = __VLS_elementAsFunctionalComponent(__VLS_296);
const __VLS_298 = __VLS_297({ ...{}, d: ("M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"), }, ...__VLS_functionalComponentArgsRest(__VLS_297));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_296, typeof __VLS_298> & Record<string, unknown>) => void)({ ...{}, d: ("M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"), });
const __VLS_299 = __VLS_pickFunctionalComponentCtx(__VLS_296, __VLS_298)!;
let __VLS_300!: __VLS_NormalizeEmits<typeof __VLS_299.emit>;
}
{
const __VLS_301 = __VLS_intrinsicElements["path"];
const __VLS_302 = __VLS_elementAsFunctionalComponent(__VLS_301);
const __VLS_303 = __VLS_302({ ...{}, d: ("M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"), }, ...__VLS_functionalComponentArgsRest(__VLS_302));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_301, typeof __VLS_303> & Record<string, unknown>) => void)({ ...{}, d: ("M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"), });
const __VLS_304 = __VLS_pickFunctionalComponentCtx(__VLS_301, __VLS_303)!;
let __VLS_305!: __VLS_NormalizeEmits<typeof __VLS_304.emit>;
}
(__VLS_294.slots!).default;
}
(__VLS_289.slots!).default;
}
{
const __VLS_306 = __VLS_intrinsicElements["span"];
const __VLS_307 = __VLS_elementAsFunctionalComponent(__VLS_306);
const __VLS_308 = __VLS_307({ ...{ onClick: {} as any, }, class: ("text-xs leading-5 text-red-500"), }, ...__VLS_functionalComponentArgsRest(__VLS_307));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_306, typeof __VLS_308> & Record<string, unknown>) => void)({ ...{ onClick: {} as any, }, class: ("text-xs leading-5 text-red-500"), });
const __VLS_309 = __VLS_pickFunctionalComponentCtx(__VLS_306, __VLS_308)!;
let __VLS_310!: __VLS_NormalizeEmits<typeof __VLS_309.emit>;
let __VLS_311 = { 'click': __VLS_pickEvent(__VLS_310['click'], ({} as __VLS_FunctionalComponentProps<typeof __VLS_307, typeof __VLS_308>).onClick) };
__VLS_311 = {
click: $event => {
__VLS_ctx.deleteTodo(todo.id);
// @ts-ignore
[logout, todoForm, todoForm, create, todos, deleteTodo,];
}
};
{
const __VLS_312 = __VLS_intrinsicElements["svg"];
const __VLS_313 = __VLS_elementAsFunctionalComponent(__VLS_312);
const __VLS_314 = __VLS_313({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 24 24"), fill: ("currentColor"), class: ("w-6 h-6"), }, ...__VLS_functionalComponentArgsRest(__VLS_313));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_312, typeof __VLS_314> & Record<string, unknown>) => void)({ ...{}, xmlns: ("http://www.w3.org/2000/svg"), viewBox: ("0 0 24 24"), fill: ("currentColor"), class: ("w-6 h-6"), });
const __VLS_315 = __VLS_pickFunctionalComponentCtx(__VLS_312, __VLS_314)!;
let __VLS_316!: __VLS_NormalizeEmits<typeof __VLS_315.emit>;
{
const __VLS_317 = __VLS_intrinsicElements["path"];
const __VLS_318 = __VLS_elementAsFunctionalComponent(__VLS_317);
const __VLS_319 = __VLS_318({ ...{}, "fill-rule": ("evenodd"), d: ("M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"), "clip-rule": ("evenodd"), }, ...__VLS_functionalComponentArgsRest(__VLS_318));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_317, typeof __VLS_319> & Record<string, unknown>) => void)({ ...{}, "fill-rule": ("evenodd"), d: ("M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"), "clip-rule": ("evenodd"), });
const __VLS_320 = __VLS_pickFunctionalComponentCtx(__VLS_317, __VLS_319)!;
let __VLS_321!: __VLS_NormalizeEmits<typeof __VLS_320.emit>;
}
(__VLS_315.slots!).default;
}
(__VLS_309.slots!).default;
}
(__VLS_284.slots!).default;
}
(__VLS_269.slots!).default;
}
(__VLS_229.slots!).default;
}
}
(__VLS_224.slots!).default;
}
(__VLS_183.slots!).default;
}
(__VLS_178.slots!).default;
}
{
const __VLS_322 = __VLS_intrinsicElements["div"];
const __VLS_323 = __VLS_elementAsFunctionalComponent(__VLS_322);
const __VLS_324 = __VLS_323({ ...{}, class: ("absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"), "aria-hidden": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_323));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_322, typeof __VLS_324> & Record<string, unknown>) => void)({ ...{}, class: ("absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"), "aria-hidden": ("true"), });
const __VLS_325 = __VLS_pickFunctionalComponentCtx(__VLS_322, __VLS_324)!;
let __VLS_326!: __VLS_NormalizeEmits<typeof __VLS_325.emit>;
{
const __VLS_327 = __VLS_intrinsicElements["div"];
const __VLS_328 = __VLS_elementAsFunctionalComponent(__VLS_327);
const __VLS_329 = __VLS_328({ ...{}, class: ("aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"), style: ({}), }, ...__VLS_functionalComponentArgsRest(__VLS_328));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_327, typeof __VLS_329> & Record<string, unknown>) => void)({ ...{}, class: ("aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"), style: ({}), });
const __VLS_330 = __VLS_pickFunctionalComponentCtx(__VLS_327, __VLS_329)!;
let __VLS_331!: __VLS_NormalizeEmits<typeof __VLS_330.emit>;
}
(__VLS_325.slots!).default;
}
(__VLS_173.slots!).default;
}
(__VLS_168.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["absolute"];
__VLS_styleScopedClasses["inset-x-0"];
__VLS_styleScopedClasses["top-0"];
__VLS_styleScopedClasses["z-50"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-between"];
__VLS_styleScopedClasses["p-6"];
__VLS_styleScopedClasses["lg:px-8"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["lg:flex-1"];
__VLS_styleScopedClasses["-m-1.5"];
__VLS_styleScopedClasses["p-1.5"];
__VLS_styleScopedClasses["sr-only"];
__VLS_styleScopedClasses["h-8"];
__VLS_styleScopedClasses["w-auto"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["lg:hidden"];
__VLS_styleScopedClasses["-m-2.5"];
__VLS_styleScopedClasses["inline-flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["rounded-md"];
__VLS_styleScopedClasses["p-2.5"];
__VLS_styleScopedClasses["text-gray-700"];
__VLS_styleScopedClasses["sr-only"];
__VLS_styleScopedClasses["h-6"];
__VLS_styleScopedClasses["w-6"];
__VLS_styleScopedClasses["hidden"];
__VLS_styleScopedClasses["lg:flex"];
__VLS_styleScopedClasses["lg:gap-x-12"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["leading-6"];
__VLS_styleScopedClasses["text-gray-900"];
__VLS_styleScopedClasses["hidden"];
__VLS_styleScopedClasses["lg:flex"];
__VLS_styleScopedClasses["lg:flex-1"];
__VLS_styleScopedClasses["lg:justify-end"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["leading-6"];
__VLS_styleScopedClasses["text-gray-900"];
__VLS_styleScopedClasses["lg:hidden"];
__VLS_styleScopedClasses["fixed"];
__VLS_styleScopedClasses["inset-0"];
__VLS_styleScopedClasses["z-50"];
__VLS_styleScopedClasses["fixed"];
__VLS_styleScopedClasses["inset-y-0"];
__VLS_styleScopedClasses["right-0"];
__VLS_styleScopedClasses["z-50"];
__VLS_styleScopedClasses["w-full"];
__VLS_styleScopedClasses["overflow-y-auto"];
__VLS_styleScopedClasses["bg-white"];
__VLS_styleScopedClasses["px-6"];
__VLS_styleScopedClasses["py-6"];
__VLS_styleScopedClasses["sm:max-w-sm"];
__VLS_styleScopedClasses["sm:ring-1"];
__VLS_styleScopedClasses["sm:ring-gray-900/10"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["justify-between"];
__VLS_styleScopedClasses["-m-1.5"];
__VLS_styleScopedClasses["p-1.5"];
__VLS_styleScopedClasses["sr-only"];
__VLS_styleScopedClasses["h-8"];
__VLS_styleScopedClasses["w-auto"];
__VLS_styleScopedClasses["-m-2.5"];
__VLS_styleScopedClasses["rounded-md"];
__VLS_styleScopedClasses["p-2.5"];
__VLS_styleScopedClasses["text-gray-700"];
__VLS_styleScopedClasses["sr-only"];
__VLS_styleScopedClasses["h-6"];
__VLS_styleScopedClasses["w-6"];
__VLS_styleScopedClasses["mt-6"];
__VLS_styleScopedClasses["flow-root"];
__VLS_styleScopedClasses["-my-6"];
__VLS_styleScopedClasses["divide-y"];
__VLS_styleScopedClasses["divide-gray-500/10"];
__VLS_styleScopedClasses["space-y-2"];
__VLS_styleScopedClasses["py-6"];
__VLS_styleScopedClasses["-mx-3"];
__VLS_styleScopedClasses["block"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["px-3"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["leading-7"];
__VLS_styleScopedClasses["text-gray-900"];
__VLS_styleScopedClasses["hover:bg-gray-50"];
__VLS_styleScopedClasses["py-6"];
__VLS_styleScopedClasses["-mx-3"];
__VLS_styleScopedClasses["block"];
__VLS_styleScopedClasses["rounded-lg"];
__VLS_styleScopedClasses["px-3"];
__VLS_styleScopedClasses["py-2.5"];
__VLS_styleScopedClasses["text-base"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["leading-7"];
__VLS_styleScopedClasses["text-gray-900"];
__VLS_styleScopedClasses["hover:bg-gray-50"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["isolate"];
__VLS_styleScopedClasses["px-6"];
__VLS_styleScopedClasses["pt-14"];
__VLS_styleScopedClasses["lg:px-8"];
__VLS_styleScopedClasses["mt-4"];
__VLS_styleScopedClasses["relative"];
__VLS_styleScopedClasses["isolate"];
__VLS_styleScopedClasses["overflow-hidden"];
__VLS_styleScopedClasses["bg-gray-900"];
__VLS_styleScopedClasses["py-16"];
__VLS_styleScopedClasses["sm:py-24"];
__VLS_styleScopedClasses["lg:py-32"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["max-w-7xl"];
__VLS_styleScopedClasses["px-6"];
__VLS_styleScopedClasses["lg:px-8"];
__VLS_styleScopedClasses["mx-auto"];
__VLS_styleScopedClasses["grid"];
__VLS_styleScopedClasses["max-w-2xl"];
__VLS_styleScopedClasses["grid-cols-1"];
__VLS_styleScopedClasses["gap-x-8"];
__VLS_styleScopedClasses["gap-y-16"];
__VLS_styleScopedClasses["lg:max-w-none"];
__VLS_styleScopedClasses["lg:grid-cols-2"];
__VLS_styleScopedClasses["max-w-xl"];
__VLS_styleScopedClasses["lg:max-w-lg"];
__VLS_styleScopedClasses["text-3xl"];
__VLS_styleScopedClasses["font-bold"];
__VLS_styleScopedClasses["tracking-tight"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["sm:text-4xl"];
__VLS_styleScopedClasses["mt-4"];
__VLS_styleScopedClasses["text-lg"];
__VLS_styleScopedClasses["leading-8"];
__VLS_styleScopedClasses["text-gray-300"];
__VLS_styleScopedClasses["mt-6"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["max-w-md"];
__VLS_styleScopedClasses["gap-x-4"];
__VLS_styleScopedClasses["sr-only"];
__VLS_styleScopedClasses["min-w-0"];
__VLS_styleScopedClasses["flex-auto"];
__VLS_styleScopedClasses["rounded-md"];
__VLS_styleScopedClasses["border-0"];
__VLS_styleScopedClasses["bg-white/5"];
__VLS_styleScopedClasses["px-3.5"];
__VLS_styleScopedClasses["py-2"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["shadow-sm"];
__VLS_styleScopedClasses["ring-1"];
__VLS_styleScopedClasses["ring-inset"];
__VLS_styleScopedClasses["ring-white/10"];
__VLS_styleScopedClasses["focus:ring-2"];
__VLS_styleScopedClasses["focus:ring-inset"];
__VLS_styleScopedClasses["focus:ring-indigo-500"];
__VLS_styleScopedClasses["sm:text-sm"];
__VLS_styleScopedClasses["sm:leading-6"];
__VLS_styleScopedClasses["flex-none"];
__VLS_styleScopedClasses["rounded-md"];
__VLS_styleScopedClasses["bg-indigo-500"];
__VLS_styleScopedClasses["px-3.5"];
__VLS_styleScopedClasses["py-2.5"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["shadow-sm"];
__VLS_styleScopedClasses["hover:bg-indigo-400"];
__VLS_styleScopedClasses["focus-visible:outline"];
__VLS_styleScopedClasses["focus-visible:outline-2"];
__VLS_styleScopedClasses["focus-visible:outline-offset-2"];
__VLS_styleScopedClasses["focus-visible:outline-indigo-500"];
__VLS_styleScopedClasses["divide-y"];
__VLS_styleScopedClasses["divide-gray-100"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["justify-between"];
__VLS_styleScopedClasses["gap-x-6"];
__VLS_styleScopedClasses["py-5"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["min-w-0"];
__VLS_styleScopedClasses["gap-x-4"];
__VLS_styleScopedClasses["h-12"];
__VLS_styleScopedClasses["w-12"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["rounded-full"];
__VLS_styleScopedClasses["bg-gray-50"];
__VLS_styleScopedClasses["justify-center"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["w-6"];
__VLS_styleScopedClasses["h-6"];
__VLS_styleScopedClasses["min-w-0"];
__VLS_styleScopedClasses["flex-auto"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["font-semibold"];
__VLS_styleScopedClasses["leading-6"];
__VLS_styleScopedClasses["text-white"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["truncate"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["leading-5"];
__VLS_styleScopedClasses["text-white-500"];
__VLS_styleScopedClasses["hidden"];
__VLS_styleScopedClasses["shrink-0"];
__VLS_styleScopedClasses["sm:flex"];
__VLS_styleScopedClasses["sm:flex-col"];
__VLS_styleScopedClasses["sm:items-end"];
__VLS_styleScopedClasses["text-sm"];
__VLS_styleScopedClasses["leading-6"];
__VLS_styleScopedClasses["text-gray-900"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["leading-5"];
__VLS_styleScopedClasses["text-gray-500"];
__VLS_styleScopedClasses["mt-1"];
__VLS_styleScopedClasses["flex"];
__VLS_styleScopedClasses["items-center"];
__VLS_styleScopedClasses["gap-x-1.5"];
__VLS_styleScopedClasses["flex-none"];
__VLS_styleScopedClasses["rounded-full"];
__VLS_styleScopedClasses["bg-emerald-500/20"];
__VLS_styleScopedClasses["p-1"];
__VLS_styleScopedClasses["w-6"];
__VLS_styleScopedClasses["h-6"];
__VLS_styleScopedClasses["text-xs"];
__VLS_styleScopedClasses["leading-5"];
__VLS_styleScopedClasses["text-red-500"];
__VLS_styleScopedClasses["w-6"];
__VLS_styleScopedClasses["h-6"];
__VLS_styleScopedClasses["absolute"];
__VLS_styleScopedClasses["left-1/2"];
__VLS_styleScopedClasses["top-0"];
__VLS_styleScopedClasses["-z-10"];
__VLS_styleScopedClasses["-translate-x-1/2"];
__VLS_styleScopedClasses["blur-3xl"];
__VLS_styleScopedClasses["xl:-top-6"];
__VLS_styleScopedClasses["aspect-[1155/678]"];
__VLS_styleScopedClasses["w-[72.1875rem]"];
__VLS_styleScopedClasses["bg-gradient-to-tr"];
__VLS_styleScopedClasses["from-[#ff80b5]"];
__VLS_styleScopedClasses["to-[#9089fc]"];
__VLS_styleScopedClasses["opacity-30"];
}
var __VLS_slots!: {};
return __VLS_slots;
}
