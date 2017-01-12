import React from 'react';
import styles from '../../mixins/styles';

class Panel extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var props = this.props;

    var style = styles.getWidth(props.width);
    return (
      <div className="panel" style={style}>
        <div className="panel-hd">
          {props.title}
        </div>
        <div className="panel-bd">
          {props.content}
        </div>
      </div>
    );
  }
}

export default Panel;
