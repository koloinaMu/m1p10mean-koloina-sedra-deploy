"use strict";
(self["webpackChunknow_ui_dashboard_angular"] = self["webpackChunknow_ui_dashboard_angular"] || []).push([[288],{

/***/ 77528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": function() { return /* binding */ DashboardComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ 75507);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 13707);





var DashboardComponent = /*#__PURE__*/(function () {
  var DashboardComponent = /*#__PURE__*/function () {
    function DashboardComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardComponent);
    } // events


    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardComponent, [{
      key: "chartClicked",
      value: function chartClicked(e) {
        console.log(e);
      }
    }, {
      key: "chartHovered",
      value: function chartHovered(e) {
        console.log(e);
      }
    }, {
      key: "hexToRGB",
      value: function hexToRGB(hex, alpha) {
        var r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
          return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
          return "rgb(" + r + ", " + g + ", " + b + ")";
        }
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this.chartColor = "#FFFFFF";
        this.canvas = document.getElementById("bigDashboardChart");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");
        this.lineBigDashboardChartData = [{
          label: "Data",
          pointBorderWidth: 1,
          pointHoverRadius: 7,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
          fill: true,
          borderWidth: 2,
          data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
        }];
        this.lineBigDashboardChartColors = [{
          backgroundColor: this.gradientFill,
          borderColor: this.chartColor,
          pointBorderColor: this.chartColor,
          pointBackgroundColor: "#2c2c2c",
          pointHoverBackgroundColor: "#2c2c2c",
          pointHoverBorderColor: this.chartColor
        }];
        this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        this.lineBigDashboardChartOptions = {
          layout: {
            padding: {
              left: 20,
              right: 20,
              top: 0,
              bottom: 0
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: '#fff',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: "nearest",
            intersect: 0,
            position: "nearest"
          },
          legend: {
            position: "bottom",
            fillStyle: "#FFF",
            display: false
          },
          scales: {
            yAxes: [{
              ticks: {
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 10
              },
              gridLines: {
                drawTicks: true,
                drawBorder: false,
                display: true,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              }
            }],
            xAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                display: false
              },
              ticks: {
                padding: 10,
                fontColor: "rgba(255,255,255,0.4)",
                fontStyle: "bold"
              }
            }]
          }
        };
        this.lineBigDashboardChartType = 'line';
        this.gradientChartOptionsConfiguration = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
          },
          responsive: 1,
          scales: {
            yAxes: [{
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }],
            xAxes: [{
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }]
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 15,
              bottom: 15
            }
          }
        };
        this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
          },
          responsive: true,
          scales: {
            yAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              },
              ticks: {
                stepSize: 500
              }
            }],
            xAxes: [{
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }]
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 15,
              bottom: 15
            }
          }
        };
        this.canvas = document.getElementById("lineChartExample");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#80b6f4');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
        this.lineChartData = [{
          label: "Active Users",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }];
        this.lineChartColors = [{
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          backgroundColor: this.gradientFill
        }];
        this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.lineChartOptions = this.gradientChartOptionsConfiguration;
        this.lineChartType = 'line';
        this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
        this.ctx = this.canvas.getContext("2d");
        this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
        this.gradientStroke.addColorStop(0, '#18ce0f');
        this.gradientStroke.addColorStop(1, this.chartColor);
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));
        this.lineChartWithNumbersAndGridData = [{
          label: "Email Stats",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 2,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
        }];
        this.lineChartWithNumbersAndGridColors = [{
          borderColor: "#18ce0f",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#18ce0f",
          backgroundColor: this.gradientFill
        }];
        this.lineChartWithNumbersAndGridLabels = ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"];
        this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;
        this.lineChartWithNumbersAndGridType = 'line';
        this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
        this.ctx = this.canvas.getContext("2d");
        this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
        this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));
        this.lineChartGradientsNumbersData = [{
          label: "Active Countries",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          borderWidth: 1,
          data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
        }];
        this.lineChartGradientsNumbersColors = [{
          backgroundColor: this.gradientFill,
          borderColor: "#2CA8FF",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#2CA8FF"
        }];
        this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.lineChartGradientsNumbersOptions = {
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          tooltips: {
            bodySpacing: 4,
            mode: "nearest",
            intersect: 0,
            position: "nearest",
            xPadding: 10,
            yPadding: 10,
            caretPadding: 10
          },
          responsive: 1,
          scales: {
            yAxes: [{
              gridLines: {
                zeroLineColor: "transparent",
                drawBorder: false
              },
              ticks: {
                stepSize: 20
              }
            }],
            xAxes: [{
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }]
          },
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 15,
              bottom: 15
            }
          }
        };
        this.lineChartGradientsNumbersType = 'bar';
      }
    }]);

    return DashboardComponent;
  }();

  DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)();
  };

  DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    decls: 191,
    vars: 20,
    consts: [[1, "panel-header", "panel-header-lg"], ["baseChart", "", "id", "bigDashboardChart", 3, "datasets", "labels", "colors", "options", "chartType", "chartHover", "chartClick"], [1, "main-content"], [1, "row"], [1, "col-lg-4"], [1, "card", "card-chart"], [1, "card-header"], [1, "card-category"], [1, "card-title"], ["ngbDropdown", ""], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-round", "btn-default", "dropdown-toggle", "btn-simple", "btn-icon", "no-caret"], [1, "now-ui-icons", "loader_gear"], ["ngbDropdownMenu", "", 1, "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", "text-danger"], [1, "card-body"], [1, "chart-area"], ["baseChart", "", "id", "lineChartExample", 3, "datasets", "labels", "colors", "options", "chartType", "chartHover", "chartClick"], [1, "card-footer"], [1, "stats"], [1, "now-ui-icons", "arrows-1_refresh-69"], [1, "col-lg-4", "col-md-6"], ["baseChart", "", "id", "lineChartExampleWithNumbersAndGrid", 3, "datasets", "labels", "colors", "options", "chartType", "chartHover", "chartClick"], ["baseChart", "", "id", "barChartSimpleGradientsNumbers", 3, "datasets", "labels", "colors", "options", "chartType", "chartHover", "chartClick"], [1, "now-ui-icons", "ui-2_time-alarm"], [1, "col-md-6"], [1, "card", "card-tasks"], [1, "table-full-width", "table-responsive"], [1, "table"], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "text-left"], [1, "td-actions", "text-right"], ["type", "button", "rel", "tooltip", "title", "", "data-original-title", "Edit Task", 1, "btn", "btn-info", "btn-round", "btn-icon", "btn-icon-mini", "btn-neutral"], [1, "now-ui-icons", "ui-2_settings-90"], ["type", "button", "rel", "tooltip", "title", "", "data-original-title", "Remove", 1, "btn", "btn-danger", "btn-round", "btn-icon", "btn-icon-mini", "btn-neutral"], [1, "now-ui-icons", "ui-1_simple-remove"], ["type", "checkbox", 1, "form-check-input"], [1, "now-ui-icons", "loader_refresh", "spin"], [1, "card"], [1, "table-responsive"], [1, "text-primary"], [1, "text-right"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function DashboardComponent_Template_canvas_chartHover_1_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function DashboardComponent_Template_canvas_chartClick_1_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Global Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Shipped Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9)(12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Remove Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15)(24, "div", 16)(25, "canvas", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function DashboardComponent_Template_canvas_chartHover_25_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function DashboardComponent_Template_canvas_chartClick_25_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18)(27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Just Updated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21)(31, "div", 5)(32, "div", 6)(33, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "2018 Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "All products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 9)(38, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12)(41, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Remove Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 15)(50, "div", 16)(51, "canvas", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function DashboardComponent_Template_canvas_chartHover_51_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function DashboardComponent_Template_canvas_chartClick_51_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18)(53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Just Updated ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 21)(57, "div", 5)(58, "div", 6)(59, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Email Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "24 Hours Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 15)(64, "div", 16)(65, "canvas", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("chartHover", function DashboardComponent_Template_canvas_chartHover_65_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function DashboardComponent_Template_canvas_chartClick_65_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 18)(67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " Last 7 days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 3)(71, "div", 25)(72, "div", 26)(73, "div", 6)(74, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Backend development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 15)(79, "div", 27)(80, "table", 28)(81, "tbody")(82, "tr")(83, "td")(84, "div", 29)(85, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "input", 31)(87, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Sign contract for \"What are conference organizers afraid of?\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "td", 34)(91, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr")(96, "td")(97, "div", 29)(98, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "input", 39)(100, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Lines From Great Russian Literature? Or E-mails From My Boss?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "td", 34)(104, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "tr")(109, "td")(110, "div", 29)(111, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "input", 31)(113, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "td", 34)(117, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " Updated 3 minutes ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 25)(127, "div", 41)(128, "div", 6)(129, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "All Persons List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, " Employees Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 15)(134, "div", 42)(135, "table", 28)(136, "thead", 43)(137, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "th", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " Salary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "tbody")(146, "tr")(147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " Dakota Rice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, " Niger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, " Oud-Turnhout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](154, " $36,738 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "tr")(156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " Minerva Hooper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, " Cura\xE7ao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, " Sinaai-Waas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " $23,789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "tr")(165, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " Sage Rodriguez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, " Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, " Baileux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, " $56,142 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "tr")(174, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, " Doris Greene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, " Malawi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " Feldkirchen in K\xE4rnten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, " $63,542 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "tr")(183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, " Mason Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, " Chile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, " Gloucester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "td", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, " $78,615 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineBigDashboardChartData)("labels", ctx.lineBigDashboardChartLabels)("colors", ctx.lineBigDashboardChartColors)("options", ctx.lineBigDashboardChartOptions)("chartType", ctx.lineBigDashboardChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("colors", ctx.lineChartColors)("options", ctx.lineChartOptions)("chartType", ctx.lineChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartWithNumbersAndGridData)("labels", ctx.lineChartWithNumbersAndGridLabels)("colors", ctx.lineChartWithNumbersAndGridColors)("options", ctx.lineChartWithNumbersAndGridOptions)("chartType", ctx.lineChartWithNumbersAndGridType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.lineChartGradientsNumbersData)("labels", ctx.lineChartGradientsNumbersLabels)("colors", ctx.lineChartGradientsNumbersColors)("options", ctx.lineChartGradientsNumbersOptions)("chartType", ctx.lineChartGradientsNumbersType);
      }
    },
    directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__.BaseChartDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu],
    styles: [""]
  });
  return DashboardComponent;
})();

/***/ }),

/***/ 15119:
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconsComponent": function() { return /* binding */ IconsComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



var IconsComponent = /*#__PURE__*/(function () {
  var IconsComponent = /*#__PURE__*/function () {
    function IconsComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IconsComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(IconsComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return IconsComponent;
  }();

  IconsComponent.ɵfac = function IconsComponent_Factory(t) {
    return new (t || IconsComponent)();
  };

  IconsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: IconsComponent,
    selectors: [["app-icons"]],
    decls: 514,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "title"], [1, "category"], ["href", "https://nucleoapp.com/?ref=1712"], [1, "card-body", "all-icons"], [1, "font-icon-list", "col-lg-2", "col-md-3", "col-sm-4", "col-xs-6", "col-xs-6"], [1, "font-icon-detail"], [1, "now-ui-icons", "arrows-1_cloud-download-93"], [1, "now-ui-icons", "arrows-1_cloud-upload-94"], [1, "now-ui-icons", "arrows-1_minimal-down"], [1, "now-ui-icons", "arrows-1_minimal-left"], [1, "now-ui-icons", "arrows-1_minimal-right"], [1, "now-ui-icons", "arrows-1_minimal-up"], [1, "now-ui-icons", "arrows-1_refresh-69"], [1, "now-ui-icons", "arrows-1_share-66"], [1, "now-ui-icons", "business_badge"], [1, "now-ui-icons", "business_bank"], [1, "now-ui-icons", "business_briefcase-24"], [1, "now-ui-icons", "business_bulb-63"], [1, "now-ui-icons", "business_chart-bar-32"], [1, "now-ui-icons", "business_chart-pie-36"], [1, "now-ui-icons", "business_globe"], [1, "now-ui-icons", "business_money-coins"], [1, "now-ui-icons", "clothes_tie-bow"], [1, "now-ui-icons", "design_app"], [1, "now-ui-icons", "design_bullet-list-67"], [1, "now-ui-icons", "design_image"], [1, "now-ui-icons", "design_palette"], [1, "now-ui-icons", "design_scissors"], [1, "now-ui-icons", "design_vector"], [1, "now-ui-icons", "design-2_html5"], [1, "now-ui-icons", "design-2_ruler-pencil"], [1, "now-ui-icons", "emoticons_satisfied"], [1, "now-ui-icons", "files_box"], [1, "now-ui-icons", "files_paper"], [1, "now-ui-icons", "files_single-copy-04"], [1, "now-ui-icons", "health_ambulance"], [1, "now-ui-icons", "loader_gear"], [1, "now-ui-icons", "loader_refresh"], [1, "now-ui-icons", "location_bookmark"], [1, "now-ui-icons", "location_compass-05"], [1, "now-ui-icons", "location_map-big"], [1, "now-ui-icons", "location_pin"], [1, "now-ui-icons", "location_world"], [1, "now-ui-icons", "media-1_album"], [1, "now-ui-icons", "media-1_button-pause"], [1, "now-ui-icons", "media-1_button-play"], [1, "now-ui-icons", "media-1_button-power"], [1, "now-ui-icons", "media-1_camera-compact"], [1, "now-ui-icons", "media-2_note-03"], [1, "now-ui-icons", "media-2_sound-wave"], [1, "now-ui-icons", "objects_diamond"], [1, "now-ui-icons", "objects_globe"], [1, "now-ui-icons", "objects_key-25"], [1, "now-ui-icons", "objects_planet"], [1, "now-ui-icons", "objects_spaceship"], [1, "now-ui-icons", "objects_support-17"], [1, "now-ui-icons", "objects_umbrella-13"], [1, "now-ui-icons", "education_agenda-bookmark"], [1, "now-ui-icons", "education_atom"], [1, "now-ui-icons", "education_glasses"], [1, "now-ui-icons", "education_hat"], [1, "now-ui-icons", "education_paper"], [1, "now-ui-icons", "shopping_bag-16"], [1, "now-ui-icons", "shopping_basket"], [1, "now-ui-icons", "shopping_box"], [1, "now-ui-icons", "shopping_cart-simple"], [1, "now-ui-icons", "shopping_credit-card"], [1, "now-ui-icons", "shopping_delivery-fast"], [1, "now-ui-icons", "shopping_shop"], [1, "now-ui-icons", "shopping_tag-content"], [1, "now-ui-icons", "sport_trophy"], [1, "now-ui-icons", "sport_user-run"], [1, "now-ui-icons", "tech_controller-modern"], [1, "now-ui-icons", "tech_headphones"], [1, "now-ui-icons", "tech_laptop"], [1, "now-ui-icons", "tech_mobile"], [1, "now-ui-icons", "tech_tablet"], [1, "now-ui-icons", "tech_tv"], [1, "now-ui-icons", "tech_watch-time"], [1, "now-ui-icons", "text_align-center"], [1, "now-ui-icons", "text_align-left"], [1, "now-ui-icons", "text_bold"], [1, "now-ui-icons", "text_caps-small"], [1, "now-ui-icons", "gestures_tap-01"], [1, "now-ui-icons", "transportation_air-baloon"], [1, "now-ui-icons", "transportation_bus-front-12"], [1, "now-ui-icons", "travel_info"], [1, "now-ui-icons", "travel_istanbul"], [1, "now-ui-icons", "ui-1_bell-53"], [1, "now-ui-icons", "ui-1_check"], [1, "now-ui-icons", "ui-1_calendar-60"], [1, "now-ui-icons", "ui-1_lock-circle-open"], [1, "now-ui-icons", "ui-1_send"], [1, "now-ui-icons", "ui-1_settings-gear-63"], [1, "now-ui-icons", "ui-1_simple-add"], [1, "now-ui-icons", "ui-1_simple-delete"], [1, "now-ui-icons", "ui-1_simple-remove"], [1, "now-ui-icons", "ui-1_zoom-bold"], [1, "now-ui-icons", "ui-2_chat-round"], [1, "now-ui-icons", "ui-2_favourite-28"], [1, "now-ui-icons", "ui-2_like"], [1, "now-ui-icons", "ui-2_settings-90"], [1, "now-ui-icons", "ui-2_time-alarm"], [1, "now-ui-icons", "ui-1_email-85"], [1, "now-ui-icons", "users_circle-08"], [1, "now-ui-icons", "users_single-02"]],
    template: function IconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "100 Awesome Nucleo Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Handcrafted by our friends from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "NucleoApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 2)(14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "arrows-1_cloud-download-93");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "arrows-1_cloud-upload-94");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 10)(25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "arrows-1_minimal-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 10)(30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "arrows-1_minimal-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 10)(35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "arrows-1_minimal-right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 10)(40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "arrows-1_minimal-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 10)(45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "arrows-1_refresh-69");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 10)(50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "arrows-1_share-66");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 10)(55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "business_badge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 10)(60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "business_bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 10)(65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "business_briefcase-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 10)(70, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "business_bulb-63");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 10)(75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "business_chart-bar-32");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 10)(80, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "business_chart-pie-36");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 10)(85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "business_globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 10)(90, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "business_money-coins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 10)(95, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "clothes_tie-bow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 10)(100, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "design_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 10)(105, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "design_bullet-list-67");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 10)(110, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "design_image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 10)(115, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "design_palette");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 10)(120, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "design_scissors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 10)(125, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "design_vector");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 10)(130, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "design-2_html5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 10)(135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "design-2_ruler-pencil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 10)(140, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "emoticons_satisfied");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 10)(145, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "files_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 10)(150, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "files_paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 10)(155, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "files_single-copy-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 10)(160, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "health_ambulance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 10)(165, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "loader_gear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 10)(170, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "loader_refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 10)(175, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "location_bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "div", 10)(180, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "location_compass-05");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 10)(185, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "location_map-big");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 10)(190, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "location_pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 10)(195, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "location_world");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 10)(200, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "media-1_album");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 10)(205, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "media-1_button-pause");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 10)(210, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "media-1_button-play");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 10)(215, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "media-1_button-power");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 10)(220, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "media-1_camera-compact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 10)(225, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "media-2_note-03");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 10)(230, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "media-2_sound-wave");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 10)(235, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "objects_diamond");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 10)(240, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "objects_globe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 10)(245, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](247, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](248, "objects_key-25");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 10)(250, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](251, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "objects_planet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "div", 10)(255, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "objects_spaceship");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 10)(260, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "objects_support-17");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 10)(265, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](267, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, "objects_umbrella-13");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 10)(270, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "education_agenda-bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 10)(275, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "education_atom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 10)(280, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283, "education_glasses");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 10)(285, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "education_hat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "div", 10)(290, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](291, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "education_paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 10)(295, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](296, "i", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "shopping_bag-16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div", 10)(300, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](301, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "shopping_basket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 10)(305, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](308, "shopping_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "div", 10)(310, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](311, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "shopping_cart-simple");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "div", 10)(315, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](316, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "shopping_credit-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "div", 10)(320, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](321, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](322, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](323, "shopping_delivery-fast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 10)(325, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "shopping_shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "div", 10)(330, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](331, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](333, "shopping_tag-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](334, "div", 10)(335, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](336, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "sport_trophy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 10)(340, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](341, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](343, "sport_user-run");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "div", 10)(345, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](346, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "tech_controller-modern");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "div", 10)(350, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](351, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](352, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "tech_headphones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div", 10)(355, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](356, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "tech_laptop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "div", 10)(360, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](361, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](363, "tech_mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](364, "div", 10)(365, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](366, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "tech_tablet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "div", 10)(370, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "tech_tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "div", 10)(375, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "tech_watch-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "div", 10)(380, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "text_align-center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "div", 10)(385, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](386, "i", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "text_align-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "div", 10)(390, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](391, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "text_bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](394, "div", 10)(395, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](396, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "text_caps-small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "div", 10)(400, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](401, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](403, "gestures_tap-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "div", 10)(405, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](406, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](408, "transportation_air-baloon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "div", 10)(410, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "transportation_bus-front-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 10)(415, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](416, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](417, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, "travel_info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "div", 10)(420, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](421, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "travel_istanbul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "div", 10)(425, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](426, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](428, "ui-1_bell-53");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "div", 10)(430, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](431, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](432, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](433, "ui-1_check");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "div", 10)(435, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](436, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "ui-1_calendar-60");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "div", 10)(440, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](441, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, "ui-1_lock-circle-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 10)(445, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](446, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "ui-1_send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "div", 10)(450, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](451, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](453, "ui-1_settings-gear-63");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "div", 10)(455, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](456, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](458, "ui-1_simple-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "div", 10)(460, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](461, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](462, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](463, "ui-1_simple-delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "div", 10)(465, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](466, "i", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](467, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](468, "ui-1_simple-remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "div", 10)(470, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](471, "i", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](473, "ui-1_zoom-bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "div", 10)(475, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](476, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](477, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](478, "ui-2_chat-round");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](479, "div", 10)(480, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](481, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](483, "ui-2_favourite-28");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "div", 10)(485, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](486, "i", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](488, "ui-2_like");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "div", 10)(490, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](491, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](492, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](493, "ui-2_settings-90");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](494, "div", 10)(495, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](496, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](497, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](498, "ui-2_time-alarm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "div", 10)(500, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](501, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, "ui-1_email-85");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "div", 10)(505, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](506, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](507, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](508, "users_circle-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](509, "div", 10)(510, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](511, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](513, "users_single-02");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: [""]
  });
  return IconsComponent;
})();

/***/ }),

/***/ 87288:
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutModule": function() { return /* binding */ AdminLayoutModule; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 74202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 69808);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 93075);
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-layout.routing */ 99117);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ 77528);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ 87960);
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../table-list/table-list.component */ 75070);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../typography/typography.component */ 8113);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons/icons.component */ 15119);
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../maps/maps.component */ 97652);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../notifications/notifications.component */ 95392);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ 75507);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 13707);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ 64383);
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ 67042);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 5000);




















var AdminLayoutModule = /*#__PURE__*/(function () {
  var AdminLayoutModule = /*#__PURE__*/(0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AdminLayoutModule() {
    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AdminLayoutModule);
  });

  AdminLayoutModule.ɵfac = function AdminLayoutModule_Factory(t) {
    return new (t || AdminLayoutModule)();
  };

  AdminLayoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AdminLayoutModule
  });
  AdminLayoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_2__.AdminLayoutRoutes), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule.forRoot()]]
  });
  return AdminLayoutModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AdminLayoutModule, {
    declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent, _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__.UserProfileComponent, _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_5__.TableListComponent, _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_10__.UpgradeComponent, _typography_typography_component__WEBPACK_IMPORTED_MODULE_6__.TypographyComponent, _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__.IconsComponent, _maps_maps_component__WEBPACK_IMPORTED_MODULE_8__.MapsComponent, _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_9__.NotificationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_17__.ToastrModule]
  });
})();

/***/ }),

/***/ 99117:
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutRoutes": function() { return /* binding */ AdminLayoutRoutes; }
/* harmony export */ });
/* harmony import */ var _utilisateurs_utilisateurs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilisateurs/utilisateurs.component */ 69830);
/* harmony import */ var _depot_voiture_depot_voiture_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../depot-voiture/depot-voiture.component */ 35771);
/* harmony import */ var _reparations_courantes_reparations_courantes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reparations-courantes/reparations-courantes.component */ 29241);
/* harmony import */ var _recherche_recherche_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../recherche/recherche.component */ 36831);
/* harmony import */ var _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../statistique/statistique.component */ 35491);
/* harmony import */ var _mes_factures_mes_factures_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mes-factures/mes-factures.component */ 72774);
/* harmony import */ var _paiement_non_valide_paiement_non_valide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../paiement-non-valide/paiement-non-valide.component */ 46941);
/* harmony import */ var _depense_depense_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../depense/depense.component */ 13540);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ 77528);
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ 87960);
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../table-list/table-list.component */ 75070);
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../typography/typography.component */ 8113);
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../icons/icons.component */ 15119);
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../maps/maps.component */ 97652);
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../notifications/notifications.component */ 95392);
/* harmony import */ var _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../upgrade/upgrade.component */ 67042);
/* harmony import */ var _liste_facture_liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../liste-facture/liste-facture/liste-facture.component */ 61402);
/* harmony import */ var _reception_vehicule_reception_reception_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../reception-vehicule/reception/reception.component */ 80156);
/* harmony import */ var _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../atelier/atelier.component */ 98288);
/* harmony import */ var _historique_historique_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../historique/historique.component */ 6321);
/* harmony import */ var _drag_drop_piece_drag_drop_piece_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../drag-drop-piece/drag-drop-piece.component */ 63380);





















var AdminLayoutRoutes = [{
  path: 'utilisateurs',
  component: _utilisateurs_utilisateurs_component__WEBPACK_IMPORTED_MODULE_0__.UtilisateursComponent
}, {
  path: 'facture',
  component: _liste_facture_liste_facture_liste_facture_component__WEBPACK_IMPORTED_MODULE_16__.ListeFactureComponent
}, {
  path: 'depot-voiture',
  component: _depot_voiture_depot_voiture_component__WEBPACK_IMPORTED_MODULE_1__.DepotVoitureComponent
}, {
  path: 'reparations-courantes',
  component: _reparations_courantes_reparations_courantes_component__WEBPACK_IMPORTED_MODULE_2__.ReparationsCourantesComponent
}, {
  path: 'recherche',
  component: _recherche_recherche_component__WEBPACK_IMPORTED_MODULE_3__.RechercheComponent
}, {
  path: 'statistique',
  component: _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_4__.StatistiqueComponent
}, {
  path: 'mes-factures',
  component: _mes_factures_mes_factures_component__WEBPACK_IMPORTED_MODULE_5__.MesFacturesComponent
}, {
  path: 'paiement-non-valide',
  component: _paiement_non_valide_paiement_non_valide_component__WEBPACK_IMPORTED_MODULE_6__.PaiementNonValideComponent
}, {
  path: 'depense',
  component: _depense_depense_component__WEBPACK_IMPORTED_MODULE_7__.DepenseComponent
}, {
  path: 'dashboard',
  component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__.DashboardComponent
}, {
  path: 'user-profile',
  component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__.UserProfileComponent
}, {
  path: 'table-list',
  component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_10__.TableListComponent
}, {
  path: 'typography',
  component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_11__.TypographyComponent
}, {
  path: 'icons',
  component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_12__.IconsComponent
}, {
  path: 'maps',
  component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_13__.MapsComponent
}, {
  path: 'notifications',
  component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_14__.NotificationsComponent
}, {
  path: 'upgrade',
  component: _upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_15__.UpgradeComponent
}, {
  path: 'reception',
  component: _reception_vehicule_reception_reception_component__WEBPACK_IMPORTED_MODULE_17__.ReceptionComponent
}, {
  path: 'dans-atelier',
  component: _atelier_atelier_component__WEBPACK_IMPORTED_MODULE_18__.AtelierComponent
}, {
  path: 'historique',
  component: _historique_historique_component__WEBPACK_IMPORTED_MODULE_19__.HistoriqueComponent
}, {
  path: 'piece',
  component: _drag_drop_piece_drag_drop_piece_component__WEBPACK_IMPORTED_MODULE_20__.DragDropPieceComponent
}];

/***/ }),

/***/ 97652:
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapsComponent": function() { return /* binding */ MapsComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



var MapsComponent = /*#__PURE__*/(function () {
  var MapsComponent = /*#__PURE__*/function () {
    function MapsComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MapsComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapsComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
          zoom: 13,
          center: myLatlng,
          scrollwheel: false,
          styles: [{
            "featureType": "water",
            "stylers": [{
              "saturation": 43
            }, {
              "lightness": -11
            }, {
              "hue": "#0088ff"
            }]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
              "hue": "#ff0000"
            }, {
              "saturation": -100
            }, {
              "lightness": 99
            }]
          }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
              "color": "#808080"
            }, {
              "lightness": 54
            }]
          }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ece2d9"
            }]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
              "color": "#ccdca1"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
              "color": "#767676"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
              "color": "#ffffff"
            }]
          }, {
            "featureType": "poi",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [{
              "visibility": "on"
            }, {
              "color": "#b8cb93"
            }]
          }, {
            "featureType": "poi.park",
            "stylers": [{
              "visibility": "on"
            }]
          }, {
            "featureType": "poi.sports_complex",
            "stylers": [{
              "visibility": "on"
            }]
          }, {
            "featureType": "poi.medical",
            "stylers": [{
              "visibility": "on"
            }]
          }, {
            "featureType": "poi.business",
            "stylers": [{
              "visibility": "simplified"
            }]
          }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
          position: myLatlng,
          title: "Hello World!"
        }); // To add the marker to the map, call setMap();

        marker.setMap(map);
      }
    }]);

    return MapsComponent;
  }();

  MapsComponent.ɵfac = function MapsComponent_Factory(t) {
    return new (t || MapsComponent)();
  };

  MapsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MapsComponent,
    selectors: [["app-maps"]],
    decls: 9,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "map", 1, "map"]],
    template: function MapsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Google Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: [""]
  });
  return MapsComponent;
})();

/***/ }),

/***/ 95392:
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": function() { return /* binding */ NotificationsComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 64383);





var NotificationsComponent = /*#__PURE__*/(function () {
  var NotificationsComponent = /*#__PURE__*/function () {
    function NotificationsComponent(toastr) {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NotificationsComponent);

      this.toastr = toastr;
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(NotificationsComponent, [{
      key: "showNotification",
      value: function showNotification(from, align) {
        var color = Math.floor(Math.random() * 5 + 1);

        switch (color) {
          case 1:
            this.toastr.info('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-info alert-with-icon",
              positionClass: 'toast-' + from + '-' + align
            });
            break;

          case 2:
            this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-success alert-with-icon",
              positionClass: 'toast-' + from + '-' + align
            });
            break;

          case 3:
            this.toastr.warning('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-warning alert-with-icon",
              positionClass: 'toast-' + from + '-' + align
            });
            break;

          case 4:
            this.toastr.error('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
              timeOut: 8000,
              enableHtml: true,
              closeButton: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: 'toast-' + from + '-' + align
            });
            break;

          case 5:
            this.toastr.show('<span class="now-ui-icons ui-1_bell-53"></span> Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer.', '', {
              timeOut: 8000,
              closeButton: true,
              enableHtml: true,
              toastClass: "alert alert-primary alert-with-icon",
              positionClass: 'toast-' + from + '-' + align
            });
            break;

          default:
            break;
        }
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return NotificationsComponent;
  }();

  NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) {
    return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };

  NotificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NotificationsComponent,
    selectors: [["app-notifications"]],
    decls: 111,
    vars: 0,
    consts: [[1, "panel-header"], [1, "header", "text-center"], [1, "title"], [1, "category"], ["href", "https://scttcper.github.io/ngx-toastr/", "target", "_blank"], [1, "main-content"], [1, "row"], [1, "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "alert", "alert-info"], ["type", "button", "aria-hidden", "true", 1, "close"], [1, "now-ui-icons", "ui-1_simple-remove"], ["data-notify", "container", 1, "alert", "alert-info", "alert-with-icon"], ["data-notify", "icon", 1, "now-ui-icons", "ui-1_bell-53"], ["data-notify", "message"], [1, "alert", "alert-primary"], [1, "alert", "alert-success"], [1, "alert", "alert-warning"], [1, "alert", "alert-danger"], [1, "col-md-12"], [1, "places-buttons"], [1, "col-md-6", "ml-auto", "mr-auto", "text-center"], [1, "col-lg-8", "ml-auto", "mr-auto"], [1, "col-md-4"], [1, "btn", "btn-primary", "btn-block", 3, "click"]],
    template: function NotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Please checkout the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "full documentation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Notifications Style");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "This is a plain notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "This is a notification with close button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 15)(25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "This is a notification with close button and icon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15)(31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 7)(37, "div", 8)(38, "div", 9)(39, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Notification states");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 11)(42, "div", 18)(43, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span")(46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " Primary - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " This is a regular notification made with \".alert-primary\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 12)(50, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span")(53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Info - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " This is a regular notification made with \".alert-info\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 19)(57, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "span")(60, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Success - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " This is a regular notification made with \".alert-success\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 20)(64, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "span")(67, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Warning - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " This is a regular notification made with \".alert-warning\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 21)(71, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "span")(74, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Danger - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " This is a regular notification made with \".alert-danger\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 22)(78, "div", 8)(79, "div", 11)(80, "div", 23)(81, "div", 6)(82, "div", 24)(83, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Notifications Places ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Click to view notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 6)(88, "div", 25)(89, "div", 6)(90, "div", 26)(91, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_91_listener() {
          return ctx.showNotification("top", "left");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "Top Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 26)(94, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_94_listener() {
          return ctx.showNotification("top", "center");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Top Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 26)(97, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_97_listener() {
          return ctx.showNotification("top", "right");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Top Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 6)(100, "div", 25)(101, "div", 6)(102, "div", 26)(103, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_103_listener() {
          return ctx.showNotification("bottom", "left");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Bottom Left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 26)(106, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_106_listener() {
          return ctx.showNotification("bottom", "center");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "Bottom Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 26)(109, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NotificationsComponent_Template_button_click_109_listener() {
          return ctx.showNotification("bottom", "right");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Bottom Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      }
    },
    styles: [""]
  });
  return NotificationsComponent;
})();

/***/ }),

/***/ 75070:
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TableListComponent": function() { return /* binding */ TableListComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



var TableListComponent = /*#__PURE__*/(function () {
  var TableListComponent = /*#__PURE__*/function () {
    function TableListComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TableListComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TableListComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return TableListComponent;
  }();

  TableListComponent.ɵfac = function TableListComponent_Factory(t) {
    return new (t || TableListComponent)();
  };

  TableListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TableListComponent,
    selectors: [["app-table-list"]],
    decls: 167,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], [1, "table"], [1, "text-primary"], [1, "text-right"], [1, "card", "card-plain"], [1, "category"]],
    template: function TableListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Simple Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "table", 9)(11, "thead", 10)(12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Salary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tbody")(21, "tr")(22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Dakota Rice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Niger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Oud-Turnhout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " $36,738 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr")(31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Minerva Hooper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Cura\xE7ao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Sinaai-Waas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " $23,789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "tr")(40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Sage Rodriguez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " Baileux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " $56,142 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr")(49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, " Philip Chaney ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Korea, South ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " Overland Park ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " $38,735 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "tr")(58, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Doris Greene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, " Malawi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Feldkirchen in K\xE4rnten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " $63,542 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr")(67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Mason Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " Chile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Gloucester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " $78,615 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "tr")(76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " Jon Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Portugal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Gloucester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " $98,615 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 3)(85, "div", 12)(86, "div", 5)(87, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " Table on Plain Background");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Here is a subtitle for this table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 7)(92, "div", 8)(93, "table", 9)(94, "thead", 10)(95, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, " Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, " City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Salary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "tbody")(104, "tr")(105, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " Dakota Rice ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " Niger ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " Oud-Turnhout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " $36,738 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "tr")(114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " Minerva Hooper ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " Cura\xE7ao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, " Sinaai-Waas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, " $23,789 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "tr")(123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, " Sage Rodriguez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, " Netherlands ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, " Baileux ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, " $56,142 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "tr")(132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Philip Chaney ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " Korea, South ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, " Overland Park ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, " $38,735 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "tr")(141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, " Doris Greene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, " Malawi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, " Feldkirchen in K\xE4rnten ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, " $63,542 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "tr")(150, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, " Mason Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " Chile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " Gloucester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, " $78,615 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "tr")(159, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, " Jon Porter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, " Portugal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " Gloucester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, " $98,615 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
    },
    styles: [""]
  });
  return TableListComponent;
})();

/***/ }),

/***/ 8113:
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyComponent": function() { return /* binding */ TypographyComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



var TypographyComponent = /*#__PURE__*/(function () {
  var TypographyComponent = /*#__PURE__*/function () {
    function TypographyComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TypographyComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TypographyComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return TypographyComponent;
  }();

  TypographyComponent.ɵfac = function TypographyComponent_Factory(t) {
    return new (t || TypographyComponent)();
  };

  TypographyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TypographyComponent,
    selectors: [["app-typography"]],
    decls: 94,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "title"], [1, "category"], [1, "card-body"], [1, "typography-line"], [1, "blockquote", "blockquote-primary"], [1, "text-muted"], [1, "text-primary"], [1, "text-info"], [1, "text-success"], [1, "text-warning"], [1, "text-danger"]],
    template: function TypographyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Now Ui Table Heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Created using Montserrat Font Family");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "h1")(13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Header 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9)(17, "h2")(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Header 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 9)(22, "h3")(23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Header 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 9)(27, "h4")(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Header 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9)(32, "h5")(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Header 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 9)(37, "h6")(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Header 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "The Life of Now Ui Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 9)(42, "p")(43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 9)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "blockquote")(50, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "br")(53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " - Noaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 9)(57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Muted Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 9)(62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Primary Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 9)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Info Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 9)(72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Success Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 9)(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "Warning Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 9)(82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "Danger Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 9)(87, "h2")(88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Small Tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " Header with small subtitle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Use \"small\" tag for the headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    styles: [""]
  });
  return TypographyComponent;
})();

/***/ }),

/***/ 67042:
/*!**********************************************!*\
  !*** ./src/app/upgrade/upgrade.component.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradeComponent": function() { return /* binding */ UpgradeComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);



var UpgradeComponent = /*#__PURE__*/(function () {
  var UpgradeComponent = /*#__PURE__*/function () {
    function UpgradeComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UpgradeComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UpgradeComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return UpgradeComponent;
  }();

  UpgradeComponent.ɵfac = function UpgradeComponent_Factory(t) {
    return new (t || UpgradeComponent)();
  };

  UpgradeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UpgradeComponent,
    selectors: [["app-upgrade"]],
    decls: 90,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col"], [1, "card", "card-upgrade"], [1, "card-header"], [1, "card-title"], [1, "category"], [1, "card-body"], [1, "table-responsive", "table-upgrade"], [1, "table"], [1, "text-center"], [1, "now-ui-icons", "ui-1_check", "text-success"], [1, "now-ui-icons", "ui-1_simple-remove", "text-danger"], ["href", "#", 1, "btn", "btn-round", "btn-default", "disabled"], ["target", "_blank", "href", "https://www.creative-tim.com/product/now-ui-dashboard-pro-angular?ref=nud-angular-upgrade-live", 1, "btn", "btn-round", "btn-primary"]],
    template: function UpgradeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Now UI Dashboard PRO Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Are you looking for more components? Please check our Premium Version of Now UI Dashboard PRO Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "table", 10)(13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "PRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tbody")(20, "tr")(21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "16");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "160");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr")(28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Plugins");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tr")(35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Example Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "27");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "tr")(42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tr")(49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "SASS Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "tr")(56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Mini Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "tr")(63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Premium Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tr")(70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Login, Register, Pricing, Lock Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Just $59");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "td", 11)(85, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Current Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "td", 11)(88, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Upgrade to PRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
      }
    },
    styles: [""]
  });
  return UpgradeComponent;
})();

/***/ }),

/***/ 87960:
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserProfileComponent": function() { return /* binding */ UserProfileComponent; }
/* harmony export */ });
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 15671);
/* harmony import */ var E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 43144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5000);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 93075);




var UserProfileComponent = /*#__PURE__*/(function () {
  var UserProfileComponent = /*#__PURE__*/function () {
    function UserProfileComponent() {
      (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfileComponent);
    }

    (0,E_PROJET_M1_web_avance_mr_Rojo_m1p10mean_koloina_sedra_angular_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfileComponent, [{
      key: "ngOnInit",
      value: function ngOnInit() {}
    }]);

    return UserProfileComponent;
  }();

  UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) {
    return new (t || UserProfileComponent)();
  };

  UserProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: UserProfileComponent,
    selectors: [["app-user-profile"]],
    decls: 92,
    vars: 0,
    consts: [[1, "panel-header", "panel-header-sm"], [1, "main-content"], [1, "row"], [1, "col-md-8"], [1, "card"], [1, "card-header"], [1, "title"], [1, "card-body"], [1, "col-md-5", "pr-1"], [1, "form-group"], ["type", "text", "disabled", "", "placeholder", "Company", "value", "Creative Code Inc.", 1, "form-control"], [1, "col-md-3", "px-1"], ["type", "text", "placeholder", "Username", "value", "michael23", 1, "form-control"], [1, "col-md-4", "pl-1"], ["for", "email"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "col-md-6", "pr-1"], ["type", "text", "placeholder", "Company", "value", "Mike", 1, "form-control"], [1, "col-md-6", "pl-1"], ["type", "text", "placeholder", "Last Name", "value", "Andrew", 1, "form-control"], [1, "col-md-12"], ["type", "text", "placeholder", "Home Address", "value", "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09", 1, "form-control"], [1, "col-md-4", "pr-1"], ["type", "text", "placeholder", "City", "value", "Mike", 1, "form-control"], [1, "col-md-4", "px-1"], ["type", "text", "placeholder", "Country", "value", "Andrew", 1, "form-control"], ["type", "number", "placeholder", "ZIP Code", 1, "form-control"], ["rows", "4", "cols", "80", "placeholder", "Here can be your description", "value", "Mike", 1, "form-control"], [1, "col-md-4"], [1, "card", "card-user"], [1, "image"], ["src", "../assets/img/bg5.jpg", "alt", "..."], [1, "author"], ["href", "#"], ["src", "../assets/img/mike.jpg", "alt", "...", 1, "avatar", "border-gray"], [1, "description"], [1, "description", "text-center"], [1, "button-container"], ["href", "#", 1, "btn", "btn-neutral", "btn-icon", "btn-round", "btn-lg"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google-plus-g"]],
    template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Edit Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "form")(10, "div", 2)(11, "div", 8)(12, "div", 9)(13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Company (disabled)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11)(17, "div", 9)(18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "div", 9)(23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2)(27, "div", 16)(28, "div", 9)(29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 18)(33, "div", 9)(34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 2)(38, "div", 20)(39, "div", 9)(40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 2)(44, "div", 22)(45, "div", 9)(46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 24)(50, "div", 9)(51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 13)(55, "div", 9)(56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 2)(60, "div", 20)(61, "div", 9)(62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 28)(67, "div", 29)(68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 7)(71, "div", 32)(72, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Mike Andrew");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " michael24 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " \"Lamborghini Mercy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " Your chick she so thirsty ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " I'm in that two seat Lambo\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 37)(86, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
    },
    directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: [""]
  });
  return UserProfileComponent;
})();

/***/ })

}]);