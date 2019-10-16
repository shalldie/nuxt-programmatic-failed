<template>
    <div class="layout-default">
        <nuxt />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from '~/common/decorators';

@Component
export default class LayoutPage extends Vue { }
</script>
