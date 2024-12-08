const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const countryRoutes = require("./routes/countryRoutes")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/countries', countryRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
