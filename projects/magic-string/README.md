Angular Magic String Component
The Angular Magic String Component is a reusable Angular component that allows you to highlight text within a given content by marking matching substrings. It can be used to dynamically apply a custom style to specific text within a container.

Installation
You can install this component using npm:

bash
Copy code
npm install @your-package-scope/angular-magic-string
Usage
Import the MagicStringComponent into your Angular module:

typescript
Copy code
import { MagicStringComponent } from '@your-package-scope/angular-magic-string';
Add the MagicStringComponent to the declarations array in your module:

typescript
Copy code
@NgModule({
  declarations: [
    // ...
    MagicStringComponent,
  ],
  // ...
})
export class YourModule { }
Use the < ak-magic-string> element in your component's template to apply the magic string component:

html
Copy code
< ak-magic-string >
  < div class="text">
    This is some text that you can mark using the Magic String Component.
  </ div>
</ ak-magic-string >
The component will automatically mark the matching substrings when you enter text into the input field and press Enter.

Styling
You can customize the styling of the marked text by modifying the CSS class named .mark. In the component's styles, you can adjust the background color or any other CSS properties as desired:

css
Copy code
.mark {
  background-color: yellow;
  /* Add any other styles here */
}
Example
Here's a simple example of how the Magic String Component can be used within an Angular template:

html
Copy code
< ak-magic-string>
  < div class="text">
    This is an example of how you can highlight specific words using the Magic String Component.
  </ div>
</ ak-magic-string >
In this example, if you enter a word in the input field and press Enter, the matching words within the text will be highlighted with a yellow background.
