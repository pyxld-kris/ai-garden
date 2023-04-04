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

This project leverages a heavily modified version of the rete.js package, which makes all of the node "stuff" work. I found the package to have most if what was needed, though there was some significant reworking of the internals to allow for tasks and signals to flow in a way that was necessary for a tool like this.

## License



MIT. Do whatever you want.



