module.exports = (app) => {
  return {
    findAll: (params, callback) => {
      return callback([{ title: 'Ler um livro' }, { title: 'Estudar ' }]);
    },
  };
};
