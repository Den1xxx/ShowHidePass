# What is it?

Little hack that allows spying password entering.
jQuery required (see examples in index.html)

## Summary

Adds to the field of type "password" label "Show."


## Usage

	$().ShowHidePass(selector,text,reverse);
**selector** - jQuery selector; **text** - label text; **reverse** - boolean, switch type="password" field to type="text".

	
###Default usage

	$().ShowHidePass('#pass1');


###Replace default text

	$().ShowHidePass('#pass2','Show characters');


###Reverse function

	$().ShowHidePass('#pass3','Hide characters',true);	

See this examples in index.html with yuor browser.
