import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, search } from './todoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    // chama a busca do pai (mantemos a conexão com Redux, mas o pai controla o estado)
    if (this.props.handleSearch) this.props.handleSearch();
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === 'Escape') {
      // usar this.props (corrige referência indefinida)
      if (this.props.handleClear) this.props.handleClear();
    }
  }

  render() {
    return (
      <div role="form" className="todoForm">
        <Grid cols="12 9 10">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            // o pai (componente Todo) controla o estado local; usar handleChange passado pelo pai
            onChange={this.props.handleChange}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
          <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
          <IconButton style="default" icon="close" onClick={this.props.handleClear} />
        </Grid>
      </div>
    );
  }
}

// Mantemos a ligação com o Redux, mas não sobrescreveremos a prop `description`
// que vem do componente pai. Mapearemos o estado Redux para `reduxDescription`.
const mapStateToProps = (state) => ({ reduxDescription: state.todo.description });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDescription, search }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
