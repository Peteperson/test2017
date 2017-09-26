"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var HelloWorldWebPart_module_scss_1 = require("./HelloWorldWebPart.module.scss");
var strings = require("HelloWorldWebPartStrings");
var MockHttpClient_1 = require("./MockHttpClient");
var sp_http_1 = require("@microsoft/sp-http");
var HelloWorldWebPartWebPart = (function (_super) {
    __extends(HelloWorldWebPartWebPart, _super);
    function HelloWorldWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldWebPartWebPart.prototype.render = function () {
        this.domElement.innerHTML = "\n      <div class=\"" + HelloWorldWebPart_module_scss_1.default.helloWorld + "\">\n        <div class=\"" + HelloWorldWebPart_module_scss_1.default.container + "\">\n          <div class=\"ms-Grid-row ms-bgColor-themeDark ms-fontColor-white " + HelloWorldWebPart_module_scss_1.default.row + "\">\n            <div class=\"ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1\">\n              <span class=\"ms-font-xl ms-fontColor-white\">Welcome to SharePoint!</span>\n              <p class=\"ms-font-l ms-fontColor-white\">Customize SharePoint experiences using Web Parts.</p>\n              <p class=\"ms-font-l ms-fontColor-white\">" + sp_lodash_subset_1.escape(this.properties.description) + "</p>\n              <p class=\"ms-font-l ms-fontColor-white\">" + sp_lodash_subset_1.escape(this.properties.test2) + "</p>\n              <p class=\"ms-font-l ms-fontColor-white\">Loading from " + sp_lodash_subset_1.escape(this.context.pageContext.web.title) + "</p>\n              <a href=\"https://aka.ms/spfx\" class=\"" + HelloWorldWebPart_module_scss_1.default.button + "\">\n                <span class=\"" + HelloWorldWebPart_module_scss_1.default.label + "\">Learn more</span>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>";
    };
    Object.defineProperty(HelloWorldWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("test", {
                                    label: "Multi-line Text Field",
                                    multiline: true
                                }),
                                sp_webpart_base_1.PropertyPaneCheckbox("test1", {
                                    text: "Checkbox"
                                }),
                                sp_webpart_base_1.PropertyPaneDropdown("test2", {
                                    label: "Dropdown",
                                    options: [
                                        { key: "1", text: "One" },
                                        { key: "2", text: "Two" },
                                        { key: "3", text: "Three" },
                                        { key: "4", text: "Four" }
                                    ]
                                }),
                                sp_webpart_base_1.PropertyPaneToggle("test3", {
                                    label: "Toggle",
                                    onText: "On",
                                    offText: "Off"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    HelloWorldWebPartWebPart.prototype._getListData = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists?$filter=Hidden eq false", sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    HelloWorldWebPartWebPart.prototype._getMockListData = function () {
        return MockHttpClient_1.default.get()
            .then(function (data) {
            var listData = { value: data };
            return listData;
        });
    };
    return HelloWorldWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = HelloWorldWebPartWebPart;

//# sourceMappingURL=HelloWorldWebPart.js.map
