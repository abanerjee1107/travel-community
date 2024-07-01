const Message = require('../models/Message');
const User = require('../models/User'); // Assuming you have a User model

// Example function to send a message
exports.sendMessage = async (req, res) => {
    const { senderId, receiverId, content } = req.body;

    try {
        // Check if sender and receiver exist
        const sender = await User.findById(senderId);
        const receiver = await User.findById(receiverId);

        if (!sender || !receiver) {
            return res.status(404).json({ error: 'Sender or receiver not found' });
        }

        // Create new message
        const message = new Message({
            sender: senderId,
            receiver: receiverId,
            content: content,
            timestamp: Date.now(),
        });

        // Save message to database
        await message.save();

        // Optionally, you can emit a real-time notification using socket.io or similar here

        res.status(201).json({ message: 'Message sent successfully', data: message });
    } catch (err) {
        console.error('Error sending message:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Example function to get messages between two users
exports.getMessages = async (req, res) => {
    const { senderId, receiverId } = req.params;

    try {
        // Retrieve messages from database
        const messages = await Message.find({
            $or: [
                { sender: senderId, receiver: receiverId },
                { sender: receiverId, receiver: senderId },
            ],
        }).sort({ timestamp: 1 }); // Sort by timestamp ascending

        res.status(200).json({ data: messages });
    } catch (err) {
        console.error('Error fetching messages:', err);
        res.status(500).json({ error: 'Server error' });
    }
};

// Example function to delete a message
exports.deleteMessage = async (req, res) => {
    const messageId = req.params.messageId;

    try {
        // Find message by ID and delete
        const deletedMessage = await Message.findByIdAndDelete(messageId);

        if (!deletedMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (err) {
        console.error('Error deleting message:', err);
        res.status(500).json({ error: 'Server error' });
    }
};
