# Mern-Stack-Paint

## Live Link
* Click here to view the project hosted on heroku: https://mern-stack-paint.herokuapp.com/#/

## Description
MernStackPaint is an art sharing website where users can create posts with simple MSPaint-style drawings accompanied by a brief comment about their drawing. From there, other users may respond to the post with a drawing of their own, and may choose to use the parent post's drawing as the starting canvas. The goal of the project is to cultivate a fun, light-hearted way for users to interact and build on what others have already made.

## Key Features
* User Authentication
    * Users can sign up, log in, log out, and can only create and respond to posts when logged in.
* Make posts
    * Posts have a title, a comment, a tag categorizing the post, and a simple drawing attached to them.
* View other user posts
    * Users can see an index of recent posts from other users that they may choose to respond to.
* User profile
    * A user can see an index of their own posts, update and delete individual posts, and view individual posts to see other user responses.
* Search
    * Users can search for posts by their tag or by words contained in the post title.

## Technologies Used
* AWS S3
<img width="488" alt="Screen Shot 2022-07-31 at 5 35 13 PM" src="https://user-images.githubusercontent.com/103595719/182243861-6a269d29-e170-4e32-bcdc-0000145e849a.png">
   * 
* Canvas API

![image](https://user-images.githubusercontent.com/103587019/182245917-4d053b7f-ac3b-4884-b6a1-5f08e3af57a8.png)
code snippet of the canvas drawing menu, rendering the color changing buttons, pen size, and allowing users to clear the canvas and restart. 
   * 
* MongoDB
* Express
* React-Redux
* Node.js

## Future Project Goals
* Create parent/child structure for posts so that replies can be nested under the parent post
* Make tags optional and be able to add more than one
<<<<<<< HEAD
* Like posts and follow threads
=======
* Like posts and follow threads
>>>>>>> 944e594 (Add production ReadMe)
