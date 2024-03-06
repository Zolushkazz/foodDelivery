import bcrypt from "bcrypt";

export const passwordHash = (password: string) => {
  const salt = bcrypt.genSaltSync(15);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

export const compareHash = async (password: string, hashedPassword: string) => {
  const isPasswordRight = bcrypt.compareSync(password, hashedPassword);

  return isPasswordRight;
};
