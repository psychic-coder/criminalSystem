 export default class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode;
    }
  }

  export const TryCatch=(passedFunc)=>async (req,res,next)=>{
    try {
      await passedFunc(req,res,next);
    } catch (error) {
      next(error);
    }
  }