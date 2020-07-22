<template>
    <div class="realtime">
        <Dashboard
            ref="dashboard"
            :style="dashobardPositionStyle"
        />
    </div>
</template>

<script lang="ts">
import Dashboard from "@/components/Dashboard.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import { debounce } from "lodash";
@Component({
    components: { Dashboard }
})
export default class Realtime extends Vue {
    dashobardPositionStyle = {} as any;

    mounted() {
        const { resize } = this.makeItResponsive(
            this.$refs.dashboard as HTMLElement
        );
        resize();
    }

    makeItResponsive(target: HTMLElement) {
        let self = this;
        const dashboard = (this.$refs.dashboard as Vue).$el as HTMLElement;

        const debounceResizeFn = debounce(resizeHandle, 500);
        window.addEventListener("resize", debounceResizeFn.bind(this));

        triggerResize();

        setTimeout(() => (this.dashobardPositionStyle.opacity = 1));
        this.dashobardPositionStyle.display = "block";

        function triggerResize(w?: number, h?: number) {
            resizeHandle(({ target: window } as unknown) as Event, w, h);
        }

        function resizeHandle(
            e?: Event,
            setWidth?: number,
            setHeight?: number
        ) {
            if (e && e.target instanceof Window) {
                const { innerWidth: w, innerHeight: h } = e.target;
                scalePages(dashboard, w, h);
            }
        }

        function scalePages(
            target: HTMLElement,
            maxWidth: number,
            maxHeight: number,
            setWidth?: number,
            setHeight?: number
        ) {
            const panelHeight = 40;
            const { width: targetWidth, height: targetHeight } = getPageSize(
                target
            );
            const scaleX = maxWidth / (setWidth || targetWidth);
            const scaleY = maxHeight / (setHeight || targetHeight);
            const scale = scaleX > scaleY ? scaleY : scaleX;

            const centerX = targetWidth / 2;
            const left =
                ((setWidth || targetWidth) * scale - targetWidth) / 2 +
                (maxWidth - (setWidth || targetWidth) * scale) / 2;

            const top = (maxHeight - targetHeight) / 2;

            const obj = {
                transform: "scale(" + scale + ")",
                left: left + "px",
                top: top + "px",
                width: target.offsetWidth + "px",
                height: target.offsetHeight + "px"
            };

            if (setWidth) {
                obj.width = setWidth + "px";
            }
            if (setHeight) {
                obj.height = setHeight + "px";
            }
            self.dashobardPositionStyle = obj;
        }

        function getPageSize(target: HTMLElement) {
            return {
                width: target.offsetWidth,
                height: target.offsetHeight
            };
        }

        return {
            resize: triggerResize
        };
    }
}
</script>

<style lang="stylus" scoped>
.realtime {
    width: 100vw;
    height: 100vh;
}
</style>
