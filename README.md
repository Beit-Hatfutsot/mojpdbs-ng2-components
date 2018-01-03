# mojp-ng2-components

This library contains a set of Angular 2 components and assets for building all
MOJP applications with a common look and feel.


## Quickstart

```
yarn install
yarn start
```

If you want to test your changes with some external project:

`npm run install-into <path_to_another_ng2-app>`

This will install the current code into the other project.

Pay attention that if you make changes to mojp-ng2-components you should run the above code again.

TypeScript and Less sources are available in `src` folder, precompiled sources
and stylesheets are in `lib` folder. All necessary assets (images, fonts, etc.) 
are available in `assets` folder.

### Adding styles and assets

Include all stylesheets from `lib/styles` into your HTML page (preferred) 
or add them as `styleUrls` to your component. Also, do not forget to put 
`assets` folder in some place accessible with browser (actual place depends on
location of stylesheets).

If you want to customize stylesheets, or use predefined variables, you can find 
the Less sources in the `sources/styles` folder. Just `@import` files that you 
need and do everything you want with it. 

### Using library components

In your application, import and provide library's module:
```javascript
import { MojpCommonModule } from 'mojp-ng2-components';

@NgModule({
  imports: [
    MojpCommonModule,
    // other imports
  ],
  // other declarations
})
class AppModule {
} 
``` 

Then wrap all your application with `<mojp-container>`:
```javascript
@Component({
  ...
  template: `
    <mojp-container>
      Hello, World!
    </mojp-container>
  `
  ...
})
class AppComponent {  
}
```

The `<mojp-container>` component also has two optional parameters:
- `showHeader` (defaults to `True`) - show/hide default header, and
- `showFooter` (defaults to `True`) - show/hide default footer.

Example:
```html
<mojp-container [showHeader]="false" [showFooter]="false">
  Your template here
</mojp-container>
```
