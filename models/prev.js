const mongoose = require('mongoose');

const prevSchema = new mongoose.Schema({
    appointmentDate: { type: Date, required: true },
    appointmentHour: { type: String, required: true },
    appointmentDescription: { type: String, required: true },
    verified: { type: Boolean, default: false }
});

prevSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.appointmentDescription; // Cambiado de 'appointment' a 'appointmentDescription'
    }
});

const Prev = mongoose.model('Prev', prevSchema);

module.exports = Prev;