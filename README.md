#   Product catalogue with Json Server

####  !Important: Initially, this project was thought to connect with Redis service but since Angular is frontend isn't possible to do

###     Compile Tailwind
1. Run command `npx tailwindcss init`, this creates a **tailwind.config.js**. 
2. Open **tailwind.config.js** and fill **content** attribute with `./src/**/*.{html,ts,scss}`, here you are telling Angular it must watch every __.html__, __.scss__, __.ts__ file in `src` or where your templates are, you can add as folders you have your templates in.
3. Add this code on your main `styles.scss` or main styles file:
~~~css
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
4. Run the project with `ng server` or `npm start`
5. If you haven't use any tailwind class on any template file, Angular will show you this warning:
~~~shell
warn - No utility classes were detected in your source files. If this is unexpected, double-check the 'content' option in your Tailwind CSS configuration.
~~~
Just use any class to solve it

###     Used Tailwind templates

1. For products and catalogue: [Product list](https://tailwindui.com/components/ecommerce/components/product-lists)

###     @fortawesome/angular-fontawesome
This is a font awesome component for Angular. To install angular-fontawesome I used `ng add @fortawesome/angular-fontawesome@0.15` this command install font awesome version 5. `npm i --save @fortawesome/free-solid-svg-icons`

Once you installed the component you
can import fontawesome in any **individual standalone** component or app.component.ts 
~~~ts
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule], // alternatively, individual components can be imported
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCoffee = faCoffee;
}
~~~
Then, you can add icon component in `.html` component file `<fa-icon [icon]="faSearch"></fa-icon>`


###     Angular Standalone Components

You can create standalone components projects which don't need NgModules like app.module.ts to import dependencies. For example you can directly import
FormsModule into standalone component imports attribute and inmediately use Template-driven forms or ReactiveForms, the code example below shows you how:

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
~~~ts
@Component({
  selector: 'app-product-search-bar',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './product-search-bar.component.html',
  styleUrl: './product-search-bar.component.scss'
})
~~~

When you try to import some dependency which isn't a `standalone=true` component you will need a NgModule to import it as declaration, so you will get back
to NgModule application approach:
~~~ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Add FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
~~~
