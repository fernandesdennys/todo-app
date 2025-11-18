const INITIAL_STATE = {
  description: 'Ler livro',
  list: [{
    _id: 1,
    description: 'Pagar fatura do cartão de crédito',
    done: true
  }, {
    _id: 2,
    description: 'Reunião com a equipe às 10h',
    done: false
  }, {
    _id: 3,
    description: 'Consultar médicos na terça-feira depois do almoço',
    done: false
  }]
};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
  case 'DESCRIPTION_CHANGED':
    return { ...state, description: action.payload };
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data };
  default:
    return state;
  }
}
