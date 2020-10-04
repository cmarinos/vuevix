<!--
-- This component can only be used as an element. The following attributes can be used to customize it:
-- 1) textType: Define the type of the text input. Valid values are 'text', 'password'. Default value is 'text'.
-- 2) maxlength: Define the max accepted length of the input. Default value is 155.
-- 3) minlength: Define the minimum accepted length of the input filed.
-- 4) placeholder: The placeholder text that will appear inside of the input when it is empty.
-- 5) isDisabled: If set to true, this attribute disables the input field.
-- 6) size: Define the size (width) of the input. You can also add sized classes from css frameworks like e.g. Bulma
-- 7) customClass: a string of classes that will be added inside the class attribute to the input field.
-->

<template>
    <div class="control">
        <input
                class="input"
                :class="customClass"
                :type="textType"
                :placeholder="placeholder"
                :disabled="isDisabled"
                :maxlength="maxlength"
                :minlength="minlength"
                v-model="value"
        >
    </div>
</template>

<script>
    export default {
        name: 'vx-input',
        props: {
            textType: {
                type: String,
                default: 'text'
            },
            modelValue: {
                type: String,
            },
            customClass: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: [Number, String],
            minlength: [Number, String],
            isDisabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
            }
        },
        methods: {

        },
        computed: {
            value: {
                get() {
                    return this.modelValue
                },
                set(value) {
                    this.$emit('input', value)
                }
            }
        }
    }
</script>

<style></style>
