"use client";
"use strict";
exports.__esModule = true;
exports.LandingPage = void 0;
var core_1 = require("@mantine/core");
var react_1 = require("react");
require("./main.css");
var replicate_prediction_2f2teczbzcbu3ntitkrie23hjdy_png_1 = require("../../assets/replicate-prediction-2f2teczbzcbu3ntitkrie23hjdy.png");
var Untitled_3_bg_png_1 = require("../../assets/Untitled-3-bg.png");
var text_png_1 = require("../../assets/text.png");
var image_1 = require("next/image");
var main_module_css_1 = require("./main.module.css");
exports.LandingPage = function () {
    var classes = useStyles().classes;
    return (react_1["default"].createElement("div", { className: "main", style: { overflow: 'hidden' } },
        react_1["default"].createElement(core_1.Container, { size: "xl", display: "flex", styles: { justifyContent: "space-between" } },
            react_1["default"].createElement(core_1.Grid, null,
                react_1["default"].createElement(core_1.Grid.Col, { span: 5, style: {
                        display: "flex",
                        alignItems: "center"
                    } },
                    " ",
                    react_1["default"].createElement(core_1.Text, { variant: "gradient", gradient: { from: "blue", to: "cyan", deg: 128 }, sx: { fontSize: "60px", textAlign: "start", fontWeight: "bold" } },
                        "Design, ",
                        react_1["default"].createElement("br", null),
                        "Develop and ",
                        react_1["default"].createElement("br", null),
                        "Build for ",
                        react_1["default"].createElement("br", null),
                        "Amazing People")),
                react_1["default"].createElement(core_1.Grid.Col, { span: 7 },
                    react_1["default"].createElement(image_1["default"], { src: replicate_prediction_2f2teczbzcbu3ntitkrie23hjdy_png_1["default"], layout: "responsive", alt: "Hero Picture" })))),
        react_1["default"].createElement("div", { style: { position: 'relative' } },
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(image_1["default"], { src: Untitled_3_bg_png_1["default"], alt: "lower 3", layout: "responsive" })),
            react_1["default"].createElement("div", { style: { position: "absolute", top: 20 } },
                react_1["default"].createElement("div", { style: { display: 'flex' } },
                    react_1["default"].createElement(image_1["default"], { src: text_png_1["default"], alt: "lower 3", layout: "responsive", className: main_module_css_1["default"].move }))),
            "  ")));
};
var useStyles = core_1.createStyles(function () { return ({
    inner: {
        display: "flex",
        justifyContent: "space-between",
        width: "80rem",
        alignItems: "center",
        borderRadius: "20px"
    },
    mainImage: {
        position: "relative",
        top: "-20rem"
    }
}); });
