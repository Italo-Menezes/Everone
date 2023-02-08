import { registerService  ,loginService, generateToken} from "../service/userService.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {

    if (!name || !email || !password) {
      throw new Error("Missing credentials");
    }
    const user = await registerService(name, email, password);
    res.status(200).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

 export const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await loginService(email);


    
    if (!user) {
      return res.status(404).send({
        message: "user or password is invalid"
      });
    }

    const isPasswordIsValid = await bcrypt.compare(password, user.password)

    if (!isPasswordIsValid ) {
      return res.status(401).send({
        message: "user or password is invalid"
      });
    }
    const token = generateToken(user.id)
    res.status(200).json(token) 
  }
  catch (err) {
    console.log(err)
  }

}