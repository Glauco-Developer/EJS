# EJS Template Syntax Guide

This guide serves as an introduction to Embedded JavaScript (EJS) templating syntax. EJS allows you to generate HTML markup with plain JavaScript in Node.js applications. This README explains the basic and advanced EJS syntax with examples.

## Table of Contents

- [Installation](#installation)
- [Basic Syntax](#basic-syntax)
- [Control Structures](#control-structures)
- [Including Files](#including-files)

## Installation

To start using EJS in your project, you need to install it via npm. Run the following command in your project directory:
npm install ejs

## Basic Syntax

### Outputting Variables

- HTML Escaped Output: Outputs the variable with characters like <, >, & replaced with their HTML entities to prevent XSS attacks.
<p>Hello, <%= user.name %>!</p>

- Unescaped Raw HTML Output: Outputs the variable as raw HTML, which is useful for including markup but should be used with caution.
<p><%- rawHtmlContent %></p>

### JavaScript Code Execution

- Executing JavaScript: Allows you to run JavaScript code for loops, conditionals, or calculations without rendering the result.
<%
  const date = new Date();
  let greeting = "Good morning";
  if (date.getHours() > 12) {
    greeting = "Good afternoon";
  }
%>
<p><%= greeting %>, it's <%= date.toLocaleTimeString() %>!</p>

## Control Structures

### Conditionals

- Conditional Statements: Execute different sections of the template based on conditions.
<% if (user.isAdmin) { %>
  <div>You have admin access.</div>
<% } else { %>
  <div>Welcome, guest!</div>
<% } %>

### Loops

- Looping: EJS allows you to loop over arrays or any iterable objects using JavaScript syntax.
<ul>
  <% items.forEach(function(item) { %>
    <li><%= item %></li>
  <% }); %>
</ul>

## Including Files

- Include Statements: Helps you maintain clean code by including snippets from other files.
<%- include('partials/header.ejs') %>
This tag includes the content of header.ejs at this point in the template, allowing for modular templates.

## Conclusion

EJS is a powerful templating engine that integrates seamlessly with JavaScript. It's a great tool for generating dynamic web content by combining plain JavaScript and HTML templates. Use this guide to start integrating EJS into your web projects.
