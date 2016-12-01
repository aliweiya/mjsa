// http://reactjs.cn/react/docs/thinking-in-react.html
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var ProductCategoryRow = React.createClass({
    render: function () {
        return (<tr>
            <th colSpan="2">{this.props.category}</th>
        </tr>);
    }
});

var ProductRow = React.createClass({
    render: function () {
        var name = this.props.product.stocked ? this.props.product.name :
            <span style={{color: 'red'}}>{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
});

var ProductTable = React.createClass({
    render: function () {
        var rows = [];
        var ft = this.props.filterText;
        var inStockOnly = this.props.inStockOnly;
        var col = _.groupBy(this.props.products, function (p) {
            return p.category;
        });
        
        _.each(col, function (v, category) {
            rows.push(<ProductCategoryRow category={category} key={category}/>);
            _.each(v, function (product, k) {
                if (product.name.indexOf(ft) === -1 || (!product.stocked && inStockOnly )) {
                    return;
                }
                rows.push(<ProductRow product={product} key={product.name}/>);
            });
        });
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});

var SearchBar = React.createClass({
    handleChange: function () {
        this.props.onUserInput(
            this.refs.filterTextInput.value,
            this.refs.inStockOnlyInput.checked
        );
    },
    render: function () {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
});

var FilterableProductTable = React.createClass({
    getInitialState: function () {
        return {
            filterText: '',
            inStockOnly: false
        };
    },

    handleUserInput: function (filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function () {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
});


var PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics11', price: '$199.99', stocked: true, name: 'Nexus 4'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
    {category: 'Electronics11', price: '$199.99', stocked: true, name: 'Nexus 5'},
];

ReactDOM.render(
    <FilterableProductTable products={PRODUCTS}/>,
    document.getElementById('container')
);



