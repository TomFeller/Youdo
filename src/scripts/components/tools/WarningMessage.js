import classNames from 'classnames';

class WarningMessage extends React.Component {
  render() {
    const {direction} = this.props;
    return (
      <div className={classNames('warning', 'warning-' + this.props.tag)}
           style={{
             ...warningWrapper,
             ...direction == 'top' ? buttonIsTop : buttonIsBottom
           }}>
        <div className='warning-textBox'
             style={textBox}>
          <p>{this.props.content}</p>
        </div>
        <div className='warning-button'>
          <button>הבנתי</button>
        </div>
      </div>

    )
  }
}

const textBox = {
  backgroundColor: 'blue',
  border: '4px solid yellow',
  borderRadius: '10px',
  color: 'yellow',
  padding: '5px'
};

const warningWrapper = {
  display: 'flex',
  alignItems: 'center'
}

const buttonIsTop = {
  flexDirection: 'column-reverse'
};
const buttonIsBottom = {
  flexDirection: 'column'
};

export default WarningMessage;