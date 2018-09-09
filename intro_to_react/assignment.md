#### Questions

> In your own words, explain React's Virtual DOM. What gives React its fast performance?

A: The virtual DOM is a representation of what the view "should" look like at any given moment.  Once an event triggers a change, first React changes the virtual DOM to what it "should" look like.  Then, React compares the actual DOM with the virtual DOM and calculates only what updates it needs to make.  Then React makes those updates.  React is fast because it only needs to update individual components on the page and not everything.

> In your own words, describe React's core concept of uni-directional data flow. Draw diagrams to illustrate. Discuss the answer with your mentor in your next session.

A: Unidirectional data works like this.  There's a component UI.  The user/browser triggers an event.  React sends that event to
the component.  The component code tells react what changes to make to the virtual DOM based on that event.  React updates the virtual DOM to what it should be.  React calculates the Diff between the current DOM (representation of the current UI) and the virtual DOM (what it should be but is not yet).  React reconciles the diffs by updating the actual DOM.  React renders the new DOM.  The flow goes one way, never the other direction.  
