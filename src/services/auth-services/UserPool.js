import { CognitoUserPool } from "amazon-cognito-identity-js";

const UserPoolId = process.env.POOL_ID;
const ClientId = process.env.CLIENT_ID;


const poolData ={
    UserPoolId: "ap-south-1_zhIncJ0E3",
    ClientId: "4ar7uuvg6bg533bqakhavmm83c"
}

export default new CognitoUserPool(poolData);