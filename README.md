# ng4-textbox-autosize
An autosizing directive for textarea elements in Angular 4+ applications

## Installation:

```bash
npm install ng4-textbox-autosize
```

Add declaration to @NgModule:

```typescript
import {AutosizeDirective} from 'ng4-textbox-autosize';

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
<textarea autosize [minHeight]="60">Textarea content blah blah</textarea>
```
A maximum height:
```
<textarea autosize [maxHeight]="120">Textarea content blah blah</textarea>
```
Or both:
```
<textarea autosize [minHeight]="60" [maxHeight]="120">Textarea content blah blah</textarea>
```

## Author

[James Hyde](https://github.com/plinkpaste)

## Licence

This project is licenced under the MIT licence. See the [LICENSE](LICENSE) file for more info.
