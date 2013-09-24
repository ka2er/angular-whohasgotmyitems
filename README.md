angular-whohasgotmyitems
========================

Angularjs application to track item I have shared

Configuration
-------------

MongoLab :

Application must be configured with a mongolab backend.

You must have a mongolab account.
Log-in into mongolab, then create a database named : "whohasgomyitems".


Edit app.js and fill in you API key.

!!! Warning : your API key will be publicily readable on your server so you must protect access !!!


OAuth :

Create a project in the Google APIs Console. In the "API Access" tab of the console, create an OAuth 2.0 client ID. When prompted, set the following settings:

Application Type: Web application.
Site or Hostname: The location at which you'll host these files.
Edit authorized redirect URIs and JavaScript origins to match where you will be hosting your site. For example, let's say you're planning to host your site at https://example.com/. In that case, you might upload the angular-oauth code to https://example.com/angular-oauth/. You would then set your client ID settings accordingly:

Authorized Redirect URIs: https://example.com/angular-oauth/oauth2callback.html
Authorized JavaScript Origins: https://example.com


Testing, running, deploying...
------------------------------

As the project has been initialized with Grunt, you can use tradionnal commands : server, build.
