// ag-grid-react v6.0.1
var React = require('react');
var ReactDOM = require('react-dom');
var AgReactComponent = (function () {
    function AgReactComponent(reactComponent, parentComponent) {
        this.reactComponent = reactComponent;
        this.parentComponent = parentComponent;
    }
    AgReactComponent.prototype.getFrameworkComponentInstance = function () {
        return this.componentRef;
    };
    AgReactComponent.prototype.init = function (params) {
        this.eParentElement = document.createElement('div');
        var ReactComponent = React.createElement(this.reactComponent, params);
        if (!this.parentComponent) {
            this.componentRef = ReactDOM.render(ReactComponent, this.eParentElement);
        }
        else {
            this.componentRef = ReactDOM.unstable_renderSubtreeIntoContainer(this.parentComponent, ReactComponent, this.eParentElement);
        }
    };
    AgReactComponent.prototype.getGui = function () {
        return this.eParentElement;
    };
    AgReactComponent.prototype.destroy = function () {
        ReactDOM.unmountComponentAtNode(this.eParentElement);
    };
    return AgReactComponent;
})();
exports.AgReactComponent = AgReactComponent;
