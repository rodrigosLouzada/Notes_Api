const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError"); 


describe("UserCreateService" , () => {
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach( () => {
        const userRepositoryInMemory = new UserRepositoryInMemory();
        const userCreateService = new UserCreateService(userRepositoryInMemory);
    })


    it("user should be create", async () => {
        const user = {
            name : "user test" ,
            email : "user@test.com" ,
            password : "123"
        };
    

        const userCreated =  await userCreateService.execute(user);
        expect(userCreated).toHaveProperty("id");
        
    });

    it("user not should be create with exists email" , async () => {
        const user1 = {
            name: "user test 1" ,
            email : "usertest@email" ,
            password : "12345"
        }

        const user2 = {
            name: "user test 2" ,
            email : "usertest@email" ,
            password : "4567"
        }

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("este e-mail já está em uso"))
    })
})

