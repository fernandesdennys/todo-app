import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default props => (
  <div role='form' className="todoForm">

    <Grid cols='12 9 10'>
      <input id="description" className="form-control" placeholder="Adicione uma tarefa" />
    </Grid>

    <Grid cols='12 9 10'>
      <IconButton style='primary' icon='plus'>
        <i className="fa fa-plus"></i>
      </IconButton>
      
    </Grid>
  </div>
)