const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const morgan = require('morgan');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const keys = require('./config/keys');
const app = express();
const path = require('path');

mongoose
    .connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));
mongoose.set('useFindAndModify', false);

app.use(express.json());

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use('/api/auth', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admin/category', categoryRoutes);
app.use('/api/admin/order', orderRoutes);
app.use('/api/admin/position', positionRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist/client'));
    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'client', 'dist', 'client', 'index.html')
        );
    });
}

module.exports = app;