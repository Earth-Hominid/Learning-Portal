Strapi is an open-source, headless, customizable Content Management System. It was chosen to build a custom RESTful API to handle routing and authentication.

"return a token (JWT token), which will be used to make further requests. JWT token contains user information and expiry which get validated for each request.

For authorization, Strapi has the Roles & Permissions plugin, which allows complete protection of your API by ACL strategy. ACL strategy manages the permissions between the groups of users. Each time an API request is sent, it checks if an Authorization header is present and grabs the JWT token which contains the user ID and verifies if the user making the request has access to the resource."
