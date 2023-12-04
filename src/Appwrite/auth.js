import { Client, Databases, Account, ID } from 'appwrite';
import conf from '../conf/conf';

class Auth {
  client = new Client();
  account = new Account(this.client);

  constructor() {
    this.client
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject(conf.appwriteProjectId);
  }

  // signUp = (email, password) => {  //
  //   console.log(email);
  //   const promise =this.account.create(ID.unique(), email, password);
  //   promise.then(
  //     (response) => {
  //       console.log(response); // Success
  //       return response;
  //     },
  //     (error) => {
  //       console.log('Appwrite signup error:', error); // Failure
  //     }
  //   );
  // };
  signUp = async (email, password) => {   // returned promise if resolved  is equal to data??
    console.log(email);
    try {
        const response = await this.account.create(ID.unique(), email, password);
        console.log(response); // Success
        return response; // Return the response for further handling if needed
    } catch (error) {
        console.log('Appwrite signup error:', error); // Failure
        throw error; // Re-throw the error for the calling code to handle if needed
    }
};





  // login = (email,password) => {

  //   console.log(email);
  //   const promise = this.account.createEmailSession(email, password);

  //   promise.then(
  //     (response) => {
  //       console.log(response); // Success
  //     },
  //     (error) => {
  //       console.log('Appwrite login error:', error); // Failure
  //     }
  //   );
  // };

  login=async(email,password)=>{
    try{
      const response=await this.account.createEmailSession(email,password);
      console.log(response);
      return response;
    }
    catch (error){
        console.log("Appwrite login error:",error);
    }
  }

  setUserData = (username) => {
    const databases = new Databases(this.client);
    const promise = databases.createDocument(
      conf.appwriteDatabaseId,
      conf.appwriteCollectionId,
      ID.unique(),
      { username }
    );
    promise.then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error at setUserData:', error);
      }
    );
  };
}

const auth = new Auth();
export default auth;
