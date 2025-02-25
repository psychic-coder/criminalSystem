const mongoose = require('mongoose');

const suspectSchema = new mongoose.Schema({
  ARREST_KEY: { type: Number, required: true, unique: true },
  ARREST_DATE: { type: Date, required: true },
  PD_CD: { type: Number },
  PD_DESC: { type: String },
  KY_CD: { type: Number },
  OFNS_DESC: { type: String },
  LAW_CODE: { type: String },
  LAW_CAT_CD: { type: String },
  ARREST_BORO: { type: String },
  ARREST_PRECINCT: { type: Number },
  JURISDICTION_CODE: { type: Number },
  AGE_GROUP: { type: String },
  PERP_SEX: { type: String },
  PERP_RACE: { type: String },
  X_COORD_CD: { type: Number },
  Y_COORD_CD: { type: Number },
  Latitude: { type: Number },
  Longitude: { type: Number },
  New_Georeferenced_Column: { type: String }
}, { timestamps: true });

const Suspect = mongoose.model('Suspect', suspectSchema);

module.exports = Suspect;
