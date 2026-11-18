import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// View engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs")
})
app.get("/home",(req,res)=>{
    res.render("home.ejs")
})
app.get("/skills",(req,res)=>{
    res.render("skills.ejs")
})
app.get("/eduction",(req,res)=>{
    res.render("eduction.ejs")
})
// Server
const port = 3001;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});