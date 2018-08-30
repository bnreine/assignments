#### Questions

>Help! Customers are not getting their products from the following assembly line.
>Based on this output, how would you figure out what the problem is? Identify the line(s) that are broken

A: Follow linearly through each station in the code.  The outputs track in the same way.  The
loadOnTruck console.log's are not showing, but the ones directly preceding are.  That means the error is
somewhere in the loadOnTruck function.  This is not a runtime error, but rather a conceptual error that
was not intended.  The person who wrote the code forgot to invoke the function with '()'.


>Another assembly line is broken!
>Narrow it down! What line(s) are broken? Submit the answer.

A: The output strings for the packaging station contain "undefined".  That means the error is somewhere in the
packaging station.  In this case, the call to the packaging station does not have the shippingType argument it needs
and therefore is undefined within the station.
