import Vue from 'vue';

interface CustomElement extends HTMLElement {
    clickOutsideEvent: (event: MouseEvent) => any;
}

Vue.directive('click-outside', {
    bind(element, binding, vnode) {
        const el = element as CustomElement;

        el.clickOutsideEvent = function (event: MouseEvent) {
            // here I check that click was outside the el and his children
            if (!(el === event.target || el.contains(event.target as Node))) {
                // and if it did, call method provided in attribute value
                binding.value.call(vnode.context, event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el: any) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    },
});
