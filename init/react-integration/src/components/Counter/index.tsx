import React, { Component} from 'react';
import ButtonCounter from './Button';
import HeaderCounter from './Header';
import logRender from '../../decorators/logRender';


interface ICounterProps {
  initialValue?: number;
}

interface ICounterState {
  value: number;
}

@logRender
export default class Counter extends Component<ICounterProps, ICounterState> {
  public state = { value: this.props.initialValue || 0};

  private setValue = (delta: number ) => {
    this.setState({ value: this.state.value + delta});
  }

  render() {
    return (
      <div>
        <HeaderCounter count={this.state.value} />
        <ButtonCounter
          text="Adicionar" 
          onClick={() => this.setValue(1)}
        />
        <ButtonCounter text="Subtrair"
                  onClick={() => this.setValue(-1)}
                   />
      </div>
    )
  }
}