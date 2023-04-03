# AI Garden

NOTE: This is a proof of concept! The usefulness or user friendliness of this interface and feature set has not been tested in any meaningful way.

## Introduction

AI Garden is a node based visual programming tool, with the specific intention of connecting the inputs and outputs of LLMs (Large Language Models), such as those in the GPT and DALLE families. The Garden additionally allows for a module based organization and io scheme, enabling these specially crafted groups of prompts to be re-used and threaded together in order to create more complex operations out of multiple LLM calls.

This tool is unfinished, unstable, and in general disarray as it's the result of intense real time exploration into what a tool like this might look like. There are some interesting modules that have resulted from my experimentation in the realm of connecting LLMs with APIs, integrating them with speech to text/text to speech, feeding the output of text generation models into image generation models, and at the most complex end of the spectrum a rudimentary AI assistant.

With all that being said, I hope you enjoy your stay!

![image](https://user-images.githubusercontent.com/46331884/229419292-1afd5954-436e-43c1-ba26-a78862b55912.png)

![image](https://user-images.githubusercontent.com/46331884/229419845-2b6190ce-27d2-491e-93ea-1ce08ff2b859.png)

## Concept

## Future Features

During development, I've sprinkled in a path toward adding user sign ups, authentication, persistent storage of user modules, and the ability to fork/reuse modules of others. THIS IS NOT IMPLEMENTED FULLY! As of now you'll always be "logged in" as me, with any changes you make to modules not persisting across sessions.

## A Big Thanks

This project leverages a heavily modified version of the rete.js package, which makes all of the node "stuff" work. I found the package to have most if what was needed, though there was some heavy reworking of the internals to allow for tasks and signals to flow in a way that was necessary for a tool like this.

## License



MIT. Do whatever you want.





# Strand? Fiber? Thread?

Creating and Connecting Neural Modules

Repository for AI Garden

// IDEA: Bot that changes personalities to accomplish various tasks (helps with context limits!) [personality+purpose]

// IDEA: Tool to save 'context windows', analyze them, load them, and piece them together easily. Clips of text as building blocks

// TODO: Ti input nodes to be callable via a REST HTTP request

// TODO: Utilities for creating nicer user interfaces

// IDEA: Teach an AI UX Design to allow it to optimize things based on individual user descriptions

// TODO: Use methods in prototype chains to automatically generate all base rete nodes for things like Arrays and Strings!

// TODO: Fix onend in 1538.300048828125 seconds. in TextToSpeech Component

// TODO: Energy levels in assistant AI prompt

// TODO: MAKE EVAL SAFER IN CODE NODE
// TODO: re-order Inputs and Outputs based on y positions
// TODO: Add visual data-frame type controls that can be used on a DataFrame Node

## NODE TYPES

// TODO: OCR node
// TODO: Emotional classification
// TODO: Grammar correction
// TODO: Speech recognition
// TODO: Splitting music into tracks (Demucs)
// TODO: GLIDE Inpaint
// TODO: Knowledge graphs?
// TODO: Pipeline Visualizer?
// TODO: Keyphrase extraction
// TODO: ClipnCrop

## GENERAL

// TODO: Save modules to local storage
// TODO: Make context menu more organized and easier to use
// TODO: Add ability to check if a module has properly configured inputs and outputs (can be used as a module in a graph)
// TODO: Fix error with module inputs/outputs updating when things are updated near them in a graph

## USER CUSTOMIZATION

// TODO: Node for requesting and storing specific user data for tuning graphs (Maybe split into two, one for requesting and one for accessing?) (Might be bestter as an even more abstract implementation giving direct access to local storage: how use-case specific do we want to be?)
// TODO: Node for

## PROMPTS/GRAPHS

// TODO: Prompt for distilling the description of a person/user based on lists of entries in different categories (interests, hobbies, job/career/positions, ethnicity/upbringing, music, religion, activity levels/types, books, shows, movies, etc)

## SOCIAL

// TODO: Graph sharing page

## LONG TERM

TODO: Tie nodes/graphs/modules to individual user accounts. Allow people to treat graphs similar to github repos (ability to star, contribute, fork, etc). d

---

// TODONE: Convert proxy.js to use module style imports
// TODONE: Organize modules into folders
// TODONE: Make TextToSpeech node send signal after speaking is done
// TODONE: Output more data from SpeechToText Node (text, confidence level, etc)
// TODONE: http request node
// TODONE: JSON parser/extraction node
// TODONE: Text2Speech stops working across browser randomly
// TODONE: Add module functionality to rete graph execution
