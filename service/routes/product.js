var express = require('express');
var router = express.Router();

var db = require("../config/db");

/**
 * 查询列表页
 */
router.get("/", function (req, res, next) {
    db.query("select * from product", function (err, rows) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send(rows);
        }
    });
});

/**
 * 添加产品
 */
router.post("/add", function (req, res, next) {
    var model = req.body.model;
    var type = req.body.type;
    var size = req.body.size;
    var pitch = req.body.pitch;
    var version = req.body.version;
    var description = req.body.description;
    var document = req.body.document;
    var images = req.body.images;
    db.query("INSERT INTO product (model, TYPE, size, pitch , VERSION, description,document, images) VALUES('" + model + "','" + type + "','" + size + "','" + pitch + "','" + version + "','" + description + "','" + document + "','" + images + "')", function (err, rows) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

/**
 * 删除用户
 */
router.get("/del", function (req, res) {
    db.query("delete from product where model = '" + req.query.model + "'", function (err, rows) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});

/**
 * 修改
 */
router.post("/update", function (req, res, next) {
    var model = req.body.model;
    var type = req.body.type;
    var size = req.body.size;
    var pitch = req.body.pitch;
    var version = req.body.version;
    var description = req.body.description;
    var document = req.body.document;
    var images = req.body.images;
    var sql = "update product set type = '" + type + "',size = '" + size + "',pitch = '" + pitch + "',version = '" + version + "',description = '" + 
                description + "',document = '" + document + "',images = '" + images + "' where model = '" + model + "'";
    console.log(sql);
    db.query(sql, function (err, rows) {
        if (err) {
            res.send({ success: false });
        } else {
            res.send({ success: true });
        }
    });
});


/**
 * 查询
 */
router.get("/search", function (req, res, next) {
    var sql = "select * from product";
    if (req.query.type && req.query.type !== "") {
        sql += " where type = '" + req.query.type + "'";
    }
    db.query(sql, function (err, rows) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (err) {
            res.send({ success: false });
        } else {
            res.send(JSON.stringify(rows));
        }
    });
})

module.exports = router;