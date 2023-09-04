
# Angular Magic String Component

The **Angular Magic String Component** is a reusable Angular component that enables you to highlight specific text within a given content by marking matching substrings. It provides a convenient way to dynamically apply custom styles to designated text portions within a container.

## Description

This component serves various use cases, such as enhancing search results highlighting or adding keyword tagging functionality to your user interface.

## Installation

You can install this component using npm:

```bash
npm i ak-magic-string
```

### Peer Dependencies

Ensure that you have the following peer dependencies installed in your project:

- `@angular/core`: ^x.x.x
- (Any other required dependencies)

## Usage

1. **Import the `MagicStringComponent` into your Angular module:**

   ```typescript
   import { MagicStringComponent } from '@your-package-scope/angular-magic-string';
   ```

2. **Add the `MagicStringComponent` to the `declarations` array in your module:**

   ```typescript
   @NgModule({
     declarations: [
       // ...
       MagicStringComponent,
     ],
     // ...
   })
   export class YourModule { }
   ```

3. **Utilize the `<ak-magic-string>` element in your component's template to apply the magic string component:**

   ```html
   <ak-magic-string>
     <div class="text">
       This is some text that you can mark using the Magic String Component.
     </div>
   </ak-magic-string>
   ```

4. **Custom Styling:**

   You can customize the styling of the marked text by modifying the CSS class named `.mark`. Within the component's styles, adjust the background color or any other desired CSS properties:

   ```css
   .mark {
     background-color: yellow;
     /* Add any other styles here */
   }
   ```

### Example

Here's a straightforward example illustrating how the Magic String Component can be employed within an Angular template:

```html
<ak-magic-string>
  <div class="text">
    This is an example of how you can highlight specific words using the Magic String Component.
  </div>
</ak-magic-string>
```

In this example, when you enter a word in the input field and press Enter, the component will highlight the matching words within the text with a yellow background.



## Keywords

Angular, Component, Magic String, Highlight, Styling, UI, Customization
```
