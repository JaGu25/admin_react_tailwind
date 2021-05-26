
export const logInService = (email: string, password: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                email,
                password
            })
        }, 1500);
    })
}