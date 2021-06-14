# pmlWrite plugin

These commands are an experiment in configuring NotePlan as an environment for technical writing. NotePlan provides a bit of structure , but not too much, and the chance to add your own.)
The technical writing uses the [`The physics markup language`](https://slowthinkingphysics.net/framingPhysics/FMpml.html) (pml).
Maybe you’ll use the commands directly, but more likely the ideas and rather simple JavaScript will provide starters for further exploration .
I got interested because you can extend the syntax colouring in NotePlan rather simply, so these experiments work best with a customised theme.

The writing environment is based on markdown, but has a number of additional semantic elements, attuned to writing physics education materials for pre-university students, A script renders the text into html, so the end target for the text is html.

The writing environment evolved from use of TEX, MarkDown & MathJax. Currently in use for content blocks on Spark.IOP.org and everywhere on https://slowthinkingphysics.net/, but it was the core technology at SupportingPhysicsTeaching.net (RIP) for about 5 years. Apart from the text, there is a rendering script, and supporting css.

## the commands .. finally

A suite to insert the primitives. Nothing too clever here ( could be done in WordBoard on iPadOS for example), but the naming of the commands, together with the descriptors, and the way the command bar narrows down the possible commands as you type, give a branching view into the choices and so what can be said.

(This is works wherever NotePlan does: the curse of developing languages is maintaining the cunning shortcuts: version of the physics markup language have existed on Atom, on BBEdit, on Nova, and in the browser (via ACE)).

/pmw : Enter pml headers & styling
/pms : Enter pml speech bubbles
/pmg ; Enter pml gaps (spacing)
/pmt : Enter pml technical terms
/pmr : Enter pml relationship
/pmi : Enter pml graphic or link
/pmy : Enter pml symbols

One command to wrap a selection, choosing what you wrap it with.
/pmwrap : wrapping selections for pml

One review command. This marks any chosen phrase for review.(maybe an errant author has written “voltage in” consistently, and you want to check the entire text.
/pmrev : Mark selected phrase for review in pml
An unreview command, that strips all the review markup.
/pmunrev : Clear review marks in pml

Three navigation commands, to jump to structured headers which play significant roles in documents written in pml.
/pmjsh : Jump to StepHeader in pml
/pmjth : Jump to ThinkHeader in pml
/pmjig : Jump to InsertGraphic(PID) in pml

## To follow

An implementation of critic markup, which I use to comment on the text.
A bit more on how I use Mark forteview.
More error trapping and reporting.

# hat-tips

To @Eduard for NotePlan itself, & particularly for Editor.insertTextAtCursor and Editor.replaceSelectionWithText. To @jgclark for all the clever bits of the code that hunts through headers.
