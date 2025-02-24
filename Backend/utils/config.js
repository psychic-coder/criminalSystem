const corsOption= {
    origin: ["http://localhost:5174","http://localhost:4173","http://localhost:3000",process.env.CLIENT_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials: true,
  }

  export {corsOption}