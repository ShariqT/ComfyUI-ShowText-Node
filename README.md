# ShowMeText

A simple ComfyUI custom node that takes a string input and displays it in a read-only text box within the node interface.

## Overview

ShowMeText provides a clean, easy way to visualize text data within your ComfyUI workflows. Whether you're debugging prompts, reviewing generated text, or simply need to display string values, this node offers a convenient text display right inside your workflow.

## Features

- Simple string input that displays in a text box
- Read-only display for safe text viewing
- Multi-line text support
- Clean, modern UI using Vue.js
- Multi-language support via vue-i18n

## Installation

### Method 1: ComfyUI Manager (Recommended)

1. Open ComfyUI Manager in your ComfyUI interface
2. Click "Install Custom Nodes"
3. Search for "ShowMeText"
4. Click Install

### Method 2: ComfyUI Registry

Install via the ComfyUI Registry (if available).

### Method 3: Manual Installation

1. Navigate to your ComfyUI custom nodes directory:
   ```bash
   cd ComfyUI/custom_nodes/
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/ShariqT/showmetext
   ```

3. Navigate to the project directory:
   ```bash
   cd showmetext
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

5. Build the frontend:
   ```bash
   npm run build
   ```

6. Restart ComfyUI or refresh the browser to load the node.

## Requirements

- ComfyUI with Frontend version **1.24.4** or higher
- Node.js and npm (for manual installation)

## Usage

### Adding the Node

1. Right-click in the ComfyUI canvas
2. Navigate to **text > Show Me Text**
3. Click to add the node to your workflow

### Node Inputs

| Input | Type | Description |
|-------|------|-------------|
| `text_input` | STRING | The text string to display in the text box. Supports multi-line text. |

### Node Outputs

| Output | Type | Description |
|--------|------|-------------|
| `text` | STRING | The same text that was input, passed through for use in downstream nodes. |

### Example Workflow

```
[Text Prompt] ──> [Show Text Node] ──> [Other Nodes]
                      │
                      └──> Displays text in text box
```

1. Connect any node that outputs a string (like a Text Prompt node) to the `text_input` of the Show Text node
2. The text will automatically display in the node's text box
3. The text is also passed through to the output for use in other nodes

## Development

If you want to modify this node:

1. Make your changes to the source files
2. Rebuild the project:
   ```bash
   npm run build
   ```
3. Refresh ComfyUI to see your changes

### Project Structure

- `ComfyUIFEExampleVueBasic.py` - Python backend for the node
- `src/components/VueExampleComponent.vue` - Vue frontend component
- `src/main.ts` - Main entry point for the frontend
- `locales/` - Translation files

## Contributing

Contributions are welcome! If you have ideas for improvements or have found bugs, feel free to:

- Open an issue
- Submit a pull request with proposed changes

## License

[GNU General Public License v3](LICENSE)

## Author

- **Shariq Torres** - shariq.torres@gmail.com