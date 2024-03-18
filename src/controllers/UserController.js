const User = require('../models').User;

module.exports = {
  async store(req, res) {
    try {
      const { name, email, password } = req.body;
      
      const user = await User.create({ name, email, password });
      
      return res.status(201).json({ data: user, message: "Usuário criado com sucesso."});
    } catch(error) {
      if (error.name === "SequelizeUniqueConstraintError")
        return res.status(400).json({ data: [], message: "Já exite um usuário criado com esse email."});
      else
        return res.status(500).json({ data: [], message: "Ocorreu um erro." });
    }
  },

  async update() {

  },

  async delete() {

  },

  async index(req, res) {
    const users = await User.findAll();
    
    return res.status(200).json({ data: users, message: "Listagem dos usuários."});
  },

  async findById(req, res) {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ data: [], message: "Usuário não encontrado."});
    }
    
    return res.status(200).json({data: user, message: "Usuário recuperado com sucesso!"})
  },

  async findByName() {

  }
}