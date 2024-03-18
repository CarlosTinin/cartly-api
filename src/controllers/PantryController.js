const Pantry = require('../models').Pantry;
const User = require('../models').User;

module.exports = {
  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;
    
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ data: [], message: "Usuário não encontrado."});
    }

    const pantry = await Pantry.create({ name, user_id });

    return res.status(201).json({ data: pantry, message: "Despensa criada com sucesso."});
  },

  async userPantry(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'pantry' }
    });

    if (!user) {
      return res.status(404).json({ data: [], message: "Usuário não encontrado."});
    }
    
    return res.status(200).json({data: user, message: "Usuário recuperado com sucesso!"})
  }
}