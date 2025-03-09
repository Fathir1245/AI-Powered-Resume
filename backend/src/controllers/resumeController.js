const db = require('../Database/db');
exports.createResume = (req, res) => {
    const { content } = req.body;
    db.query('INSERT INTO resumes (user_id, content) VALUES (?, ?)', 
        [req.user.id, content], 
        (err, result) => {
            if (err) return res.status(400).json({ message: 'Error creating resume', error: err });
            res.json({ message: 'Resume created successfully' });
        }
    );
};

exports.getResume = (req, res) => {
    db.query('SELECT * FROM resumes WHERE user_id = ?', [req.user.id], (err, results) => {
        if (err || results.length === 0) return res.status(404).json({ message: 'No resumes found' });
        res.json(results);
    });
};

exports.updateResume = (req, res) => {
    const { content } = req.body;
    db.query('UPDATE resumes SET content = ? WHERE id = ? AND user_id = ?', 
        [content, req.params.id, req.user.id], 
        (err, result) => {
            if (err) return res.status(400).json({ message: 'Error updating resume', error: err });
            res.json({ message: 'Resume updated successfully' });
        }
    );
};

exports.deleteResume = (req, res) => {
    db.query('DELETE FROM resumes WHERE id = ? AND user_id = ?', 
        [req.params.id, req.user.id], 
        (err, result) => {
            if (err) return res.status(400).json({ message: 'Error deleting resume', error: err });
            res.json({ message: 'Resume deleted successfully' });
        }
    );
};
