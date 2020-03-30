const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");
    /**
    função do insert é async pq pode demorar, então quando o node chegar aqui ele vai aguardar (await)
    para depois retornar lá embaixo
    */
    //espera
    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });
    //retorna
    return response.json({ id });
  }
};
