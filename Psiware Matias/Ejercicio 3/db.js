const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:m41635553@localhost:5432/cars",
  { logging: false }
);

const Car = sequelize.define(
  "Cars",
  {
    marca: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    patente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    modelo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    seguro: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
Car.sync();

// insert into Cars values ("Chevrolet","xfv234","2012","1020,00","true")
// insert into Cars values ("Fiat","tfv234","2011","1120,00","true")
// insert into Cars values ("Chevrolet","xfv894","2019","1920,00","true")
// insert into Cars values ("BMW","sfr234","2018","3020,00","true")
// insert into Cars values ("Fiat","hfv234","2012","920,00","true")

// d SELECT * FROM "Cars" WHERE seguro=true;
// e SELECT * FROM "Cars" WHERE precio >1000;
// c SELECT * FROM "Cars" WHERE patente LIKE 'x%';
// a SELECT * FROM "Cars" ORDER BY modelo DESC LIMIT 1;
// a SELECT * FROM "Cars" ORDER BY precio ASC LIMIT 1;
