import { DataTypes } from 'sequelize';
import db from '../config/db.js';

const Contact = db.define('Contact', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: false }
});

export default Contact;
