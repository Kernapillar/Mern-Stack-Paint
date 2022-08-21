# Mern-Stack-Paint

![mern_stack_paint](https://user-images.githubusercontent.com/103587019/185811997-36dd8d74-7496-4c33-9e8b-fb2d0310cd08.jpg)

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
   * Canvas data is converted to base64 data string, then converted a blob, then uploaded to amazon S3 webservice for external storage
   * the URL is saved as as a string in the post for later retreival and re-use if collaboration is desired
   * upon re-use, it is reconverted to base64 string, and imported into canvas to be drawn over

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
* Like posts and follow threads
