# Extensions Manager App

A simple Angular front-end project to manage and display a list of browser extensions.  
This app demonstrates the use of Angular core features, Bootstrap styling, and a JSON Server as a mock back-end.

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp).

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [What I Learned](#what-i-learned)
  - [Angular](#angular)
  - [Bootstrap](#bootstrap)
  - [JSON Server](#json-server)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Features
- Demonstrates key Angular concepts: property binding, event handling, components communication, and signals.
- View a list of extensions fetched from a local JSON file.
- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- Clean UI styled with Bootstrap utility classes.
- View the optimal layout for the interface depending on their device's screen size
- hover and focus states for all interactive elements on the page

---

## Tech Stack
- **Angular** – Front-end framework for building component-based web apps.
- **Bootstrap** – Utility classes for responsive styling.
- **JSON Server** – Simple mock REST API for development.

---

## What I Learned

### Angular
I deepened my understanding of core Angular concepts and how they are applied in real projects:

- **`ngOnInit` Lifecycle Hook**  
  Runs once after component initialization. Perfect for loading initial data or setting up logic.

- **`@Input` Decorator**  
  Enables passing data from a parent component to a child component, supporting reusable, configurable components.

- **`@Output` and `EventEmitter`**  
  Used to send events or data changes from a child back to the parent, making components interactive and decoupled.

- **Property Binding**  
  Dynamically binds component properties to DOM elements, ensuring the UI automatically updates when data changes.

- **Class Binding & `ngClass`**  
  Applies or toggles CSS classes based on component state, enabling dynamic styling and theme handling.

- **Event Binding**  
  Connects DOM events (click, input, etc.) to component methods for user interaction.

- **Services & Dependency Injection**  
  Centralizes reusable logic and state management, promoting cleaner and testable code.

- **`HttpClient`**  
  Simplifies making HTTP requests to fetch or send data, essential for communicating with APIs or mock servers.

- **`Observable`**  
  Provides a robust way to handle asynchronous data streams from APIs, allowing real-time updates.

- **Signals & Computed Signals (Angular v16+)**  
  A new reactive state management approach. Signals track state; computed signals derive new values efficiently, reducing boilerplate.

- **`@for` Syntax**  
  Modern template loop syntax to iterate over lists more concisely compared to `*ngFor`.

### Bootstrap
I practiced using **basic Bootstrap classes** to quickly style elements and create a responsive layout without writing extensive custom CSS.  
Key advantages:
- Rapid UI prototyping.
- Consistent design system.
- Mobile-first responsiveness.

### JSON Server
I used **JSON Server** to mock a back-end API:
- Served data from a local `db.json` file.
- Enabled quick testing of HTTP requests without setting up a real database.
- Perfect for early development stages and demos.

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) and npm installed.
- Angular CLI globally installed:  
  ```bash
  npm install -g @angular/cli
