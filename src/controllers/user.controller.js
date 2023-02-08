import { registerService  ,loginService} from "../service/userService.js";

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
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throw new Error("Missing credentials");
    }
    const user = await loginService(email, password);
    res.status(200).json(user);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}