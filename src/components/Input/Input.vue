<template>
    <div class="control">
        <input
                class="input"
                :class="customClass"
                :type="type"
                :placeholder="placeholder"
                v-model="value"
        >
    </div>
</template>

<script>
    export default {
        name: 'vx-input',
        props: {
            type: {
                type: String,
                default: 'text'
            },
            modelValue: [Number, String],
            customClass: {
                type: String,
                default: ''
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: Number
            },
            minlength: {
                type: Number
            },
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

<style>


</style>
