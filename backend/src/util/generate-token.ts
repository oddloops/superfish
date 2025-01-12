import Envs from "@common/Envs";
import jwt from "jsonwebtoken"

function generate_token(user: any): any {
  const token = jwt.sign({
    email: user.email, 
    isAdmin: user.isAdmin
  }, Envs.JWT_SECRET  , {
    expiresIn: "30d"
  });

  user.token = token;
  return user;
}

export default generate_token;