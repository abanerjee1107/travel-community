const Member = require('../models/Member');

// Upload photo for member
const uploadPhoto = async (req, res) => {
    const memberId = req.params.memberId;
    const photoUrl = req.body.photoUrl;
    try {
        const member = await Member.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        member.photos.push(photoUrl);
        await member.save();
        res.status(201).json({ message: 'Photo uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Upload video for member
const uploadVideo = async (req, res) => {
    const memberId = req.params.memberId;
    const videoUrl = req.body.videoUrl;
    try {
        const member = await Member.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        member.videos.push(videoUrl);
        await member.save();
        res.status(201).json({ message: 'Video uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Award badge to member
const awardBadge = async (req, res) => {
    const memberId = req.params.memberId;
    const { badgeName } = req.body;
    try {
        const member = await Member.findById(memberId);
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }
        member.badges.push(badgeName);
        await member.save();
        res.status(201).json({ message: 'Badge awarded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    uploadPhoto,
    uploadVideo,
    awardBadge,
};
