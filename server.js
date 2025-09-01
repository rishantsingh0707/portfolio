import express from "express";
import bodyParser from "body-parser";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static("views"));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/images', express.static(path.join(__dirname, 'views/images')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Contact form handler
app.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Save to file (you can replace this with email sending logic)
        const contactData = {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        };

        // Create contacts directory if it doesn't exist
        if (!fs.existsSync('./contacts')) {
            fs.mkdirSync('./contacts');
        }

        // Save contact to file
        const filename = `contact_${Date.now()}.json`;
        fs.writeFileSync(`./contacts/${filename}`, JSON.stringify(contactData, null, 2));

        console.log('New contact submission:', contactData);

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ success: false, message: 'Failed to send message. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});