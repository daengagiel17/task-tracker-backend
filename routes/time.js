const express = require('express');
const router = express.Router();
const model = require('../models/index');

// GET times listing.
router.get('/', async function (req, res, next) {
    try {
        const times = await model.times.findAll({});
        if (times.length !== 0) {
            res.json({
                'status': 200,
                'messages': 'Succes',
                'data': times
            })
        } else {
            res.json({
                'status': 204,
                'messages': 'Empty data',
                'data': {}
            })
        }
    } catch (err) {
        res.json({
            'status': 500,
            'messages': err.message,
            'data': {}
        })
    }
});

// POST times
router.post('/', async function(req, res, next) {
    try {
        // konvert selisih menjadi time 
        // startTime disimpan ke date
        // totalSeconds ditambahkan ke task
        const date = new Date(req.body.startTime);
        const taskId = req.body.taskId;

        // menghitung selisih waktu
        const startTime = new Date(req.body.startTime);
        const endTime = new Date(req.body.endTime);
        const diff = endTime.getTime() - startTime.getTime();
        var totalSeconds = Math.floor((diff) / (1000));

        // update total second
        const task = await model.tasks.findByPk(taskId);
        task.totalSeconds += totalSeconds;        
        var totalSecondsTask = task.totalSeconds;
        var hours = Math.floor(totalSecondsTask / 3600);
        totalSecondsTask %= 3600;
        var minutes = Math.floor(totalSecondsTask / 60);
        var seconds = totalSecondsTask % 60;
        task.time = (hours < 10 ? "0" + hours : hours) + 
                    ":" + (minutes < 10 ? "0" + minutes : minutes) +
                    ":" + (seconds < 10 ? "0" + seconds : seconds);
        await task.save();

        // ambil jam, menit, detik
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;
        var time = (hours < 10 ? "0" + hours : hours) + 
                    ":" + (minutes < 10 ? "0" + minutes : minutes) +
                    ":" + (seconds < 10 ? "0" + seconds : seconds);

        // simpan data baru
        const times = await model.times.create({
            date,
            time,
            taskId,
        });        

        if (times) {
            res.status(201).json({
            'status': 201,
            'messages': 'Time berhasil ditambahkan',
            'data': times,
            })
        }
    } catch (err) {
        res.status(400).json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {},
        })
    }
});

// UPDATE times
router.patch('/:id', function(req, res, next) {});

// DELETE times
router.delete('/:id', function(req, res, next) {});

module.exports = router;