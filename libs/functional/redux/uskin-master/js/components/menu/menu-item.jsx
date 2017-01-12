import React from 'react';

const ITEM_HEIGHT = 40;

class MenuItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      toggle: props.toggle && !!props.item.fold
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  onClick(key, submenu, e) {
    this.props.selectMenu && this.props.selectMenu.apply(this, [e, key, submenu.key]);
    submenu.onClick && submenu.onClick.apply(this, [e, submenu]);
  }

  isSelected(menu) {
    var selected = this.props.selected;
    if ((this.props.item.key.localeCompare(selected.key) === 0)
      && (menu.key.localeCompare(selected.subkey) === 0)) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    let enableToggle = props.toggle;
    let item = props.item;
    let toggle = state.toggle;

    return (
      <div>
        {
          item.title ? (
            <h6 onClick={enableToggle ? this.toggle : null} className={enableToggle ? 'menu-title-toggle' : null}>
              {item.title}
              {
                enableToggle ?
                  <i className={'icon-arrow-up glyphicon' + (toggle ? ' rotate' : '')}></i>
                : null
              }
            </h6>
          ) : null
        }
        <ul style={{height: toggle ? 0 : ITEM_HEIGHT * item.submenu.length}} className={enableToggle ? 'menu-item-toggle' : null}>
          {item.submenu.map((ele, i) =>
            <li key={i}
              className={this.isSelected(ele) ? 'menu-item-selected' : null}
              onClick={this.isSelected(ele) ? null : this.onClick.bind(this, item.key, ele)}>
              {
                ele.iconClass ?
                  <i className={ele.iconClass} />
                : null
              }
              {ele.subtitle}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default MenuItem;
