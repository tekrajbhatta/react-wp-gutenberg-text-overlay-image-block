# Text Overlay Image Block - WordPress Gutenberg Block

A custom WordPress Gutenberg block that allows you to add an image with a positionable text overlay. The text box can be positioned anywhere on top of the image using the block's inspector controls.

## Features

- Upload or select image from Media Library
- Rich text editor for content
- Precise positioning controls for the text box:
  - Top position
  - Right position
  - Bottom position
  - Left position
- Responsive design
- Full-width image display
- Easy to customize and extend

## Installation

Clone the repository to your WordPress plugins directory:

```bash
cd wp-content/plugins/
git clone https://github.com/tekrajbhatta/react-wp-gutenberg-text-overlay-image-block.git
```

Navigate to the plugin directory:

```bash
cd react-wp-gutenberg-text-overlay-image-block
```

Install dependencies:

```bash
npm install
```

Build the block:

```bash
npm run build
```

Activate the plugin in the WordPress admin panel.

## Usage

1. Create or edit a post/page in WordPress.
2. Add a new block and search for "Text Overlay Image."
3. Upload or select an image from the Media Library.
4. Add your text content in the text box.
5. Use the sidebar inspector controls to position the text box:
   - Enter values (in pixels) for any side you want to position from.
   - Leave fields empty for sides you don't want to position from.
   - Use negative values to position inward from the edges.

## Development

1. Clone the repository and install dependencies as described above.
2. Start the development server:
   
   ```bash
   npm start
   ```
3. Make your changes to the block.
4. Build the production version:
 
   ```bash
   npm start
   ```

## Requirements

- WordPress 6.0 or higher
- Node.js and npm
- PHP 7.4 or higher

## Dependencies

- `@wordpress/blocks`
- `@wordpress/block-editor`
- `@wordpress/components`
- `@wordpress/i18n`

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the GPL-2.0-or-later - see the LICENSE file for details.

## Author

Tek Raj Bhatta

## Support

If you have any questions or run into issues, please open an issue on GitHub.
