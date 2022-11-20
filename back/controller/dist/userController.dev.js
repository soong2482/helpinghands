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

            if (!(image === undefined)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.json({
              success: false,
              err: err
            }));

          case 4:
            repair = new Repair({
              Image1: {
                data: req.body.file1
              },
              Image2: {
                data: req.body.file2
              },
              title: {
                data: req.body.title
              },
              text: {
                data: req.body.text
              },
              address: {
                data: req.body.address
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

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
module.exports = user;