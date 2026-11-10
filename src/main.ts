import { app } from "../../../scripts/app.js";
import { ComfyApp } from '@comfyorg/comfyui-frontend-types'

import { addWidget, ComponentWidgetImpl } from "../../../scripts/domWidget.js";

import VueExampleComponent from "@/components/VueExampleComponent.vue";

const comfyApp: ComfyApp = app;

comfyApp.registerExtension({
    name: 'show-text',
    getCustomWidgets(app) {
        return {
            CUSTOM_TEXT_DISPLAY(node) {
                // Add custom vue component here

                const inputSpec = {
                    name: 'text_display',
                    type: 'show-text',
                }

                const widget = new ComponentWidgetImpl({
                    node,
                    name: inputSpec.name,
                    component: VueExampleComponent,
                    inputSpec,
                    options: {}
                })

                addWidget(node, widget)

                return {widget}
            }
        }
    },
    nodeCreated(node) {
        if (node.constructor.comfyClass !== 'show-text') return

        const [oldWidth, oldHeight] = node.size

        node.setSize([Math.max(oldWidth, 350), Math.max(oldHeight, 400)])
    }
});