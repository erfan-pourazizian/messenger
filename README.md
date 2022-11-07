### [Live Site](https://messenger-ep.netlify.app/)

![Screenshot (73)-min](https://user-images.githubusercontent.com/91010211/200208776-870c6b6a-eae7-4691-b4a4-56ed1fd9ce61.png)


#### This is a React web application repository(messenger)

### Folder Structure
```
:.
|   .gitignore
|   output.doc
|   package-lock.json
|   package.json
|   README.md
|   
+---public
|   |   favicon.ico
|   |   index.html
|   |   normalize.css
|   |   robots.txt
|   |   styles.css
|   |   _redirects
|   |   
|   +---assets
|   |   \---i18n
|   |       \---translations
|   |               en.json
|   |               fa.json
|   |               
|   \---images
|           …
|           
\---src
    |   i18n.js
    |   index.css
    |   index.js
    |   
    +---api
    |       api.js
    |       api_auth.js
    |       api_messages.js
    |       
    +---components
    |   |   App.js
    |   |   
    |   +---Drawer
    |   |       LeftSideDrawer.jsx
    |   |       MessengerDrawer.jsx
    |   |       
    |   +---header
    |   |       Header.jsx
    |   |       ProfileDialog.jsx
    |   |       styles.js
    |   |       
    |   +---layout
    |   |       Layout.jsx
    |   |       styles.js
    |   |       
    |   +---leftSidebar
    |   |       LeftSidebar.jsx
    |   |       Messenger.jsx
    |   |       styles.js
    |   |       
    |   +---rightSidebar
    |   |       RightSidebar.jsx
    |   |       styles.js
    |   |       
    |   \---theme
    |           index.js
    |           
    +---context
    |       LayoutContext.js
    |       MessageContext.js
    |       
    +---fonts
    |       …
    |
    \---pages
        +---404
        |       404.jsx
        |       styles.js
        |       
        +---auth
        |       AuthPage.jsx
        |       SocialmediaSection.jsx
        |       styles.js
        |       
        +---home
        |   |   Home.jsx
        |   |   styles.js
        |   |   
        |   \---components
        |           Message.jsx
        |           MessageList.jsx
        |           NewMessage.jsx
        |           
        +---liveBackground
        |       backGround.jsx
        |       
        +---MessageByHashTag
        |       MessageByHashTag.jsx
        |       
        \---MessagesByUser
                MessagesByUser.jsx
                
```

### how to Setup ::heavy_check_mark: <br/>
1: ``npm install``<br/>
2: ``npm start``<br/>
3: ``Sign in and enjoy``
