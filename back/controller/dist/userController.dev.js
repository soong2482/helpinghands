"use strict";

var _require = require("../models/Repair"),
    Repair = _require.Repair;

var user = {
  uploadProfile: function uploadProfile(req, res) {
    var image;
    return regeneratorRuntime.async(function uploadProfile$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            image = req.file.path;

            if (!(image === undefined)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.json({
              success: false,
              err: err
            }));

          case 3:
            res.status(200).json({
              success: true
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  uploadImages: function uploadImages(req, res) {
    var image, path, repair;
    return regeneratorRuntime.async(function uploadImages$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            image = req.files;
            path = image.map(function (img) {
              return img.path;
            });
            path[0] = path.substring(8);
            path[1] = path.substring(8);
            console.log(path[0], path[1]);

            if (!(image === undefined)) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.json({
              success: false,
              err: err
            }));

          case 9:
            repair = new Repair({
              Img1: {
                data: req.Img1.value,
                type: String
              },
              title: {
                data: req.title.value,
                type: String
              },
              text: {
                data: req.text.value
              },
              address: {
                data: req.address.value,
                type: String
              },
              path: {
                data: req.file[0].originalname = Buffer.from(file.originalname, 'latin1').toString('utf8'),
                type: String
              },
              path1: {
                data: req.file[1].originalname = Buffer.from(file.originalname, 'latin1').toString('utf8'),
                type: String
              }
            });
            repair.save(function (err, repairInfo) {
              if (err) return res.json({
                success: false,
                err: err
              });
              return res.status(200).json({
                success: true
              });
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
module.exports = user;