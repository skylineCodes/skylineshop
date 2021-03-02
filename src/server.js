import express from 'express';
import path from 'path';

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join('build', 'index.html'));
  });
}

app.listen(process.env.PORT || 8080);
