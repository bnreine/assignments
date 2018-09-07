#### Notes:

# Angular vs. React


Benefits of...

React: This is a library and so provides additional utility to our code.  When we need specific functionality, we can use prebuilt functions in this library instead of coding them ourselves, thereby simplifying our code. React code performs faster than Angular.  The unidirectional component based architecture allows developers to better handle separation of the components.  Event handling and logic are much cleaner.

Angular: This is a framework and therefore gives your code structure and leads.  It also reduces the amount of code you need to write.  Angular code is easier to maintain and reuse.  Angular has a bidirectional MVC architecture.




Angular 1: custom componestnts, but bidrectional flow, so not good state/view managament, updates are not deterministic due to async

Angular 2: updates to have uniderectional flow and transactional state.  But has more built in components than react.
Typescript useful but huge overhead and annoying.  If you make mistakes on ng2 templates (html), the run fails and you do'nt know why.  Difficult to deal with.  Can use whatever data managament layer it wants (uni/bi directional data flow).  Higher learning curve and needs a lot of long winded code (boiler plate code) to accomplish small tasks.  More tools out of the box (good or bad) for getting website up and running.  Uses typescript. RxJS: good when you have lots of websockets with continuous flow of data.  OTherwise not.  Flexibly handles async requests.  ANgular CLI: easy to set up new projects.  Ionic 2: create hybrid (web/mobile) apps.  INcludes some material design (Css) components.  @ngrx/store: like redux for state management.

Learnign first time: Need to learn more new concepts than with react.  Need to learn typescript. Framework is rich in topics.  Basic to advanced.  Basic is easy to learn but then more complex as you go.  Higher barrier for entry for newbie.  Errors more difficult to understand.



React: JSX (JS object for html elements) easier to learn than ng2 templates.  JSX compiles to JS at runtime.  Catches errors at compile time, before runtime, good!!  But, some quirks in JSX, doesn't exactly line up 1:1 with html.  Can use whatever data managament layer it wants (uni/bi directional data flow). Simpler, less boiler plate code.  More minimalist in tools it has aout of the box.  More liberating.  Just need to add additional libraries needed.  Need to make choice.  JSX Can write XML (like html) directly in JS code.  Catches errors immediately, instead of at run runtime.  Flow is like typescript, but is optional.  Better.  Redux: state management.  JSX/flow: error checking in realtime, not runtime.  Redux: separates diff concerns, so better structured flow of project.  Create React App: for getting an app up and running quick, just like Angular CLI.  React Native: can make truly mobile (native) apps.  (better than ionic which can only make hybrids).  Material UI (css framework): more components and more mature than angular's.  Next.js: server side rendering of JS apps. MobX: like redux, but much much simpler for small apps.

Learning first time: JSX relatively easy but awkward at first (html like).  React router complex.  Redux.  But need to find correct
libraries.  However, easy to get started in react and error messages are easy to understand.  Hardests part is finding right libraries.


Redux---> manages state in unidirectional way, separates state from view so there's no updating asyncs
  Flux: unidirectional flow and transactional state






Summary:

React---> Faster, can use uni/bi directional flow/transactioanl state, lower learning curve and more minimalist, JSX easier to learn than angular2 templates. catches errors at compile time, not at run time.  Flow is more flexible than typescript (on/off).  React native, can make truly mobile apps.  Material UI (css framework components) more mature and more components than angular's.  Can do server side rendering with Next.js.  Can choose between redux or mobX depending on app complexity.  Quicker dev learning curve and error messages easier to understand than in JS.



Angular--> More built in components, can choose bi/uni directional/transactional state, more tools out of the box to get website up and running.  Good when you have continuous flow of data using RxJS.  Can make hybrid mobile/web apps with ionic




ASk these questions to figure out which is better for your project:


How big is the project?
How long is it going to be maintained for?
Is all of the functionality clearly defined in advance or are you expected to be flexible?
If all of the features are already defined, what capabilities do you need?
Are the domain model and business logic complex?
What platforms are you targeting? Web, mobile, desktop?
Do you need server-side rendering? Is SEO important?
Will you be handling a lot of real-time event streams?
How big is your team?
How experienced are your developers and what is their background?
Are there any ready-made component libraries that you would like to use?  
