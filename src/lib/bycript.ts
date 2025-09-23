import bcrypt from 'bcryptjs';

export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    const normalized = hashedPassword.startsWith('$2y$') ? ('$2a$' + hashedPassword.substring(4)) : hashedPassword;
    return await bcrypt.compare(password, normalized);
};