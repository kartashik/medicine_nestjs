module.exports = class ClientError extends Error {
    status;
    errors;

    constructor(status, message, errors = []){
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError(message){
        return new ClientError(401,message)
    }
    static BadRequest(message,errors=[]){
        return new ClientError(400,message,errors)
    }
}