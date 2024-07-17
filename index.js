const express = require("express");

const app = express();

app.listen(4000, () => {
  console.log(`Listening at port ${4000}`);
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JSON Placeholder</title>
  </head>
  <body>
    <nav>
      <div class="w-full px-10 mt-5 flex justify-between items-center">
        <span class="text-4xl"> JSON {Placeholder} </span>
        <a href="#endpoints">Endpoints</a>
      </div>
    </nav>
    <div class="px-10">
      <div class="mt-24 text-xl">
        What is JSON {Placeholder}?
        <p>
          It provides various JSON Data for testing purpose
        </p>
      </div>

      <div class="mt-20">
        <p class="text-2xl">Try Json Placeholder</p>
        <div class="bg-[#253e52] mt-5 h-24 rounded-xl text-lg flex items-center px-10 text-white">
          <span>
            fetch("").then((response)=>response.json()).catch((e)=>{})
          </span>
        </div>
      </div>

      <div class="mt-20" id="#endpoints">
        <p class="text-2xl">Resources</p>
        <p>JSON Placeholder Endpoints</p>
        <div>
          <div class="flex justify-between w-[10rem]">
            <div>
              GET
            </div>
            <div>
              /posts
            </div>
          </div>

          <div class="flex justify-between w-[10rem]">
            <div>
              GET
            </div>
            <div>
              /posts/1
            </div>
          </div>
          
          <div class="flex justify-between w-[10rem]">
            <div>
              GET
            </div>
            <div>
              /comments
            </div>
          </div>

          <div class="flex justify-between w-[10rem]">
            <div>
              GET
            </div>
            <div>
              /comments/1
            </div>
          </div>
          

          
        </div>
      </div>
    </div>
  </body>
  <script src="https://cdn.tailwindcss.com"></script>
</html>
`);
});
const post = require("./data/post");
const post1 = require("./data/post1");
const comments = require("./data/comments");
const comment1 = require("./data/comment1");

app.get("/posts", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(post));
});

app.get("/post/1", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(post1));
});

app.get("/comments", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(comments));
});

app.get("/comment/1", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(comment1));
});