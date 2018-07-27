# ng-textbox-autosize
An autosizing directive for textarea elements in Angular 4+ applications

## Installation:

```bash
npm install ng-textbox-autosize
```

Add declaration to @NgModule:

```typescript
import {AutosizeDirective} from 'ng-textbox-autosize';

...

@NgModule({
  declarations: [
    AutosizeDirective
  ]
})
```

Use directly inside your HTML templates by adding the word 'autosize' to any textarea.

```
<textarea autosize>Textarea content blah blah</textarea>
```

## Options

Set either a minimum height:

```
<textarea autosize [minHeight]="60">Hello, this is an example of Autosize in Angular2 with a Min Height.</textarea>
```
A maximum height:
```
<textarea autosize [maxHeight]="120">Hello, this is an example of Autosize in Angular2 with a Max Height.</textarea>
```
Or both:
```
<textarea autosize [minHeight]="60" [maxHeight]="120">Hello, this is an example of Autosize in Angular2 with a Max Height.</textarea>
```

## Author

[James Hyde](https://github.com/plinkpaste)

## Licence

This project is licenced under the MIT licence. See the [LICENSE](LICENSE) file for more info.
