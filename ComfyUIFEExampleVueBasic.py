import folder_paths
import nodes

class ComfyUIFEExampleVueBasic:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "text_input": ("STRING", {"multiline": True, "forceInput": True}),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("text",)

    FUNCTION = "run"

    CATEGORY = "text"

    def run(self, text_input):
        # Simply return the input text
        return (text_input,)

NODE_CLASS_MAPPINGS = {
    "show-text": ComfyUIFEExampleVueBasic
}

NODE_DISPLAY_NAME_MAPPINGS = {
    "show-text": "Show Me Text"
}