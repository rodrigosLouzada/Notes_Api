class UserCreateService {
    constructor(userRepository) {
        this.userRepository = userRepository;

    }

    async execute({name, email, password }) {

        const checkUserExists =  await this.userRepository.findByEmail(email);

        if(checkUserExists) {
            throw new AppError("este e-mail já está em uso")
        }

        const hashedPassword =  await hash(password, 8);

        await userRepository.create({ name, email, password: hashedPassword})

    }

}

module.exports= UserCreateService