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
define(["require", "exports", "./base-pageview", "cdp/ui"], function (require, exports, base_pageview_1, ui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TAG = "[view.gallery.ListControlPageView] ";
    /**
     * @class ListControlPageView
     * @brief ListControl サンプルの画面クラス
     */
    var ListControlPageView = /** @class */ (function (_super) {
        __extends(ListControlPageView, _super);
        /**
         * constructor
         */
        function ListControlPageView() {
            return _super.call(this, "/templates/gallery/listctrl.html", "gallery-listctrl", {
                route: "gallery-listctrl"
            }) || this;
        }
        return ListControlPageView;
    }(base_pageview_1.BasePageView));
    ui_1.registerPage(ListControlPageView);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jb250cm9sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vYXBwL3NjcmlwdHMvdmlldy9nYWxsZXJ5L2xpc3QtY29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR0EsSUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUM7SUFFbEQ7OztPQUdHO0lBQ0g7UUFBa0MsdUNBQVk7UUFFMUM7O1dBRUc7UUFDSDttQkFDSSxrQkFBTSxrQ0FBa0MsRUFBRSxrQkFBa0IsRUFBRTtnQkFDMUQsS0FBSyxFQUFFLGtCQUFrQjthQUM1QixDQUFDO1FBQ04sQ0FBQztRQUNMLDBCQUFDO0lBQUQsQ0FBQyxBQVZELENBQWtDLDRCQUFZLEdBVTdDO0lBRUQsaUJBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVBhZ2VWaWV3IH0gZnJvbSBcIi4vYmFzZS1wYWdldmlld1wiO1xyXG5pbXBvcnQgeyByZWdpc3RlclBhZ2UgfSBmcm9tIFwiY2RwL3VpXCI7XHJcblxyXG5jb25zdCBUQUcgPSBcIlt2aWV3LmdhbGxlcnkuTGlzdENvbnRyb2xQYWdlVmlld10gXCI7XHJcblxyXG4vKipcclxuICogQGNsYXNzIExpc3RDb250cm9sUGFnZVZpZXdcclxuICogQGJyaWVmIExpc3RDb250cm9sIOOCteODs+ODl+ODq+OBrueUu+mdouOCr+ODqeOCuVxyXG4gKi9cclxuY2xhc3MgTGlzdENvbnRyb2xQYWdlVmlldyBleHRlbmRzIEJhc2VQYWdlVmlldyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjb25zdHJ1Y3RvclxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihcIi90ZW1wbGF0ZXMvZ2FsbGVyeS9saXN0Y3RybC5odG1sXCIsIFwiZ2FsbGVyeS1saXN0Y3RybFwiLCB7XHJcbiAgICAgICAgICAgIHJvdXRlOiBcImdhbGxlcnktbGlzdGN0cmxcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5yZWdpc3RlclBhZ2UoTGlzdENvbnRyb2xQYWdlVmlldyk7XHJcbiJdfQ==