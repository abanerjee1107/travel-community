exports.createEvent = async (req, res) => {
    const { title, description, location, startDate, endDate } = req.body;
    try {
        const newEvent = new Event({
            title,
            description,
            location,
            startDate,
            endDate,
            organizer: req.user._id // Assuming authenticated user is organizing
        });
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('organizer', 'username');
        res.status(200).json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
