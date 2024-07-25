# Strategy

This document highlights the strategy for frontend web management.

## React + Next.js

Because React purportedly performs poorly in SEO situations, there will be two applications - a Next.js app that is used only for displaying SEO content, and a React app that serves as the web application core.

The Next.js app will be responsible just for displaying individual pieces of content, and for allowing donations. Any other interaction with the site will redirect to the main React application.

The only downside of this approach is that a user who is already logged in but visits this page from a search engine result would not be able to immediately like content.

We could have a link that says "login to save" and use a url parameter in the main react app to check and see if a login parameter is set to true or false. - If it's set to true, we would initiate the login flow, including checking whether or not the user was already authenticated, or prompting them with a log-in popup.
